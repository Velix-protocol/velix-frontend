import { useAccount, useBalance } from "@starknet-react/core";
import { supportedChains } from "@/utils/config.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";

export const useStarknetBalance = () => {
  const { address } = useAccount();
  const chain = useSupportedChain();

  return useBalance({
    enabled: !!address || chain === "starknet",
    address,
    token: supportedChains.starknet.contracts.testnet.STRK_TOKEN
      .address as `0x${string}`
  });
};
