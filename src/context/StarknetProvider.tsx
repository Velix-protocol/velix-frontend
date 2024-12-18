import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  jsonRpcProvider
} from "@starknet-react/core";

export default function StarknetProviderContext({
  children
}: {
  children: React.ReactNode;
}) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "always",
    order: "alphabetical"
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={jsonRpcProvider({
        rpc: (chain) => ({ ...chain, nodeUrl: "SN_SEPOLIA" })
      })}
      connectors={connectors}
      autoConnect={true}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
