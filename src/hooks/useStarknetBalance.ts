import { useAccount, useBalance } from "@starknet-react/core";
import { supportedChains } from "@/utils/config.ts";

export const useStarknetBalance = () => {
  const { address } = useAccount();

  return useBalance({
    enabled: !!address,
    address,
    token: supportedChains.starknet.contracts.testnet.STRK_TOKEN
      .address as `0x${string}`
  });
};
