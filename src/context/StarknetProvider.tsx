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
import {
  BraavosMobileConnector,
  isInBraavosMobileAppBrowser
} from "starknetkit/braavosMobile";

export default function StarknetProviderContext({
  children
}: {
  children: React.ReactNode;
}) {
  const connectors = () => {
    if (isInBraavosMobileAppBrowser()) {
      return [braavos()];
    }
    if (isInArgentMobileAppBrowser()) {
      return [
        ArgentMobileConnector.init({
          options: {
            url: window.location.hostname,
            dappName: "Velix"
          }
        })
      ];
    }

    return [
      argent(),
      braavos(),
      BraavosMobileConnector.init({
        inAppBrowserOptions: {
          name: "Velix"
        }
      })
    ];
  };

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={jsonRpcProvider({
        rpc: (chain) => ({ ...chain, nodeUrl: "SN_SEPOLIA" })
      })}
      connectors={connectors()}
      autoConnect={true}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
