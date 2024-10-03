import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  publicProvider
} from "@starknet-react/core";

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
      provider={publicProvider()}
      connectors={connectors}
      autoConnect={true}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
