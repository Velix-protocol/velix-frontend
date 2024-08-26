import { INFURA_API_KEY } from "@/utils/constant";
import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  infuraProvider,
  voyager
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

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={infuraProvider({ apiKey: INFURA_API_KEY })}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
