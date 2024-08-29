import { useBalance as useStarknetBalance } from "@starknet-react/core";
import { useBalance as useEvmBalance } from "wagmi";
import useGetChain from "./useGetChain";

const useChainBalance = ({ address }: { address: string }) => {
  const chain = useGetChain();
  const starknetBalance = useStarknetBalance({
    address
  });

  const evmBalance = useEvmBalance({
    address: address as `0x${string}`
  });

  if (chain === "starknet") return starknetBalance;
  return evmBalance;
};

export default useChainBalance;
