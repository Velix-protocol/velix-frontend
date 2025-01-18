import useGetChain from "@/hooks/useGetChain.ts";
import { tokenNames } from "@/utils/config.ts";

const useChainTokens = () => {
  const chain = useGetChain();
  return tokenNames[chain ?? "metis"];
};

export default useChainTokens;
