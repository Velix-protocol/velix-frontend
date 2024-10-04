import { useBalance as useStarknetBalance } from "@starknet-react/core";
import { useBalance as useEvmBalance } from "wagmi";
import useGetChain from "./useGetChain";
import { useMemo } from "react";

const useChainBalance = (address: string) => {
  const chain = useGetChain();

  const starknetBalance = useStarknetBalance({
    address,
    retry: 2
  });

  const evmBalance = useEvmBalance({
    address: address as `0x${string}`
  });

  const balance = useMemo(() => {
    if (chain === "starknet") return starknetBalance;
    return evmBalance;
  }, [chain, starknetBalance, evmBalance]);

  return balance;
};

export default useChainBalance;
