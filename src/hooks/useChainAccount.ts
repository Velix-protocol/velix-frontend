import { useParams } from "react-router-dom";
import {
  Config,
  UseAccountReturnType,
  useAccount as useEvmAccount
} from "wagmi";
import {
  UseAccountResult,
  useAccount as useStarknetAccount
} from "@starknet-react/core";
import { SupportedChains } from "@/types";

const useChainAccount = (): UseAccountReturnType<Config> | UseAccountResult => {
  const params = useParams<{ ecosystem: SupportedChains }>();
  const evmAccount = useEvmAccount();
  const starknetAccount = useStarknetAccount();

  if (params.ecosystem === "starknet") return starknetAccount;
  return evmAccount;
};

export default useChainAccount;
