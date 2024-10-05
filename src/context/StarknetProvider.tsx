import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  infuraProvider
} from "@starknet-react/core";
import { INFURA_API_KEY } from "@/utils/constant.ts";

export default function StarknetProviderContext({
  children
}: {
  children: React.ReactNode;
}) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random"
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={infuraProvider({ apiKey: INFURA_API_KEY })}
      connectors={connectors}
      autoConnect={true}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
