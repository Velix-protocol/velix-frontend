import { SupportedChains } from "@/types";
import { useParams } from "react-router-dom";

const useGetChain = (): SupportedChains | undefined => {
  const params = useParams<{ ecosystem: SupportedChains }>();
  return params.ecosystem;
};

export default useGetChain;
