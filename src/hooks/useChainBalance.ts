import { useBalance as useStarknetBalance } from "@starknet-react/core";
import { useBalance as useEvmBalance } from "wagmi";
import useGetChain from "./useGetChain";
import { useMemo } from "react";

const useChainBalance = ({ address }: { address: string }) => {
  const chain = useGetChain();
  const starknetBalance = useStarknetBalance({
    address
  });

  const evmBalance = useEvmBalance({
    address: address as `0x${string}`
  });

  const strkBalance = useMemo(() => starknetBalance, [starknetBalance]);
  const ehtBalance = useMemo(() => evmBalance, [evmBalance]);
  if (chain === "starknet") return strkBalance;
  return ehtBalance;
};

export default useChainBalance;
