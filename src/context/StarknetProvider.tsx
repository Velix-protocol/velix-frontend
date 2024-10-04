import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  jsonRpcProvider
} from "@starknet-react/core";
import { STARKNET_RPC_PROVIDER } from "@/services/web3Service.ts";

function rpc() {
  return {
    nodeUrl: STARKNET_RPC_PROVIDER
  };
}

const provider = jsonRpcProvider({ rpc });
export default function StarknetProviderContext({
  children
}: {
  children: React.ReactNode;
}) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random"
  });

  // infuraProvider({ apiKey: INFURA_API_KEY })
  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={provider}
      connectors={connectors}
      autoConnect={true}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
