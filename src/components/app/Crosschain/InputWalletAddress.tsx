import { Button } from "@/components/ui/button";
import { useSupportedChain } from "@/context/SupportedChainsProvider";
import { velixApi } from "@/services/http";
import { ApiError } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState, ChangeEvent } from "react";

export default function InputWalletAddress() {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const chain = useSupportedChain();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setWalletAddress(event.target.value);
  };

  const { mutateAsync, isPending, error } = useMutation({
    mutationKey: ["saveCrossChainWalletAddress"],
    mutationFn: async (data: { chain: string; walletAddress: string }) =>
      velixApi.saveCrossChainWalletAddress(data),
    onSuccess: () => {
      setWalletAddress("");
    },
    onError: (error: AxiosError<ApiError>) => {
      setWalletAddress("");
      console.error(error);
    }
  });

  return (
    <div className="flex flex-col rounded-lg bg-white p-8 mt-12 w-full dark:bg-velix-claim-gray">
      <div className="flex bg-white dark:bg-velix-claim-gray2 rounded-lg flex-col sm:flex-row">
        <div className="flex-1">
          <div className="items-start xl:items-center mt-1">
            <input
              type="text"
              className="w-full h-11 p-2 bg-velix-claim dark:bg-velix-claim-gray2 rounded-md text-sm text-black focus:outline-none dark:text-velix-claim"
              placeholder="Paste your wallet address"
              value={walletAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {error && (
        <div className="mt-4 text-sm text-center text-red-600">
          {error?.response?.data.message}
        </div>
      )}
      <div className="mt-4 w-full">
        <Button
          onClick={() => mutateAsync({ chain, walletAddress })}
          className="lg:w-full w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
          disabled={!walletAddress}
        >
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
}
