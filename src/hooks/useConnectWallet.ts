import { useStarknetConnectorStore } from "@/store/starknetConnectorStore";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import useGetChain from "./useGetChain";
// import { connect, disconnect } from "starknetkit"

const useConnectWallet = () => {
  const starknetConnectState = useStarknetConnectorStore();
  const evmConnectorState = useWeb3Modal();
  const chain = useGetChain();

  if (chain === "starknet") return starknetConnectState;
  return evmConnectorState;
};

export default useConnectWallet;
