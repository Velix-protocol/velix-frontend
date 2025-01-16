import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  voyager,
  jsonRpcProvider,
  braavos,
  argent
} from "@starknet-react/core";
import {
  ArgentMobileConnector,
  isInArgentMobileAppBrowser
} from "starknetkit/argentMobile";

export default function StarknetProviderContext({
  children
}: {
  children: React.ReactNode;
}) {
  const connectors = isInArgentMobileAppBrowser()
    ? [
        ArgentMobileConnector.init({
          options: {
            url: window.location.hostname,
            dappName: "Velix"
          }
        })
      ]
    : [
        braavos(),
        argent(),
        ArgentMobileConnector.init({
          options: {
            url: window.location.hostname,
            dappName: "Velix"
          }
        })
      ];

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
