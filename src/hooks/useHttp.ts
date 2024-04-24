/* eslint-disable @typescript-eslint/no-explicit-any */
import { claimFaucetToken } from "@/services/http";
import { useCallback, useState } from "react";
import { useAccount } from "wagmi";

export const useFaucet = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const claim = useCallback(async () => {
    if (!address) return;
    try {
      setIsPending(true);
      await claimFaucetToken(address);
      setError(null);
      setIsSuccess(true);
    } catch (e: any) {
      console.log(e);
      setIsSuccess(false);
      setError({ message: e.message ?? e });
    } finally {
      setIsPending(false);
    }
  }, [address]);

  const reset = useCallback(() => {
    setIsSuccess(false);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    isPending,
    isSuccess,
    reset,
    claim,
    error
  };
};
