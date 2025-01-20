import {
  Connector,
  useConnect,
  useDisconnect as useDisconnectStarknetWallet
} from "@starknet-react/core";
import Modal from "./modal/ModalLayout";
import { useStarknetConnectorStore } from "@/store/starknetConnectorStore";
import { Button } from "../button";
import useChainAccount from "@/hooks/useChainAccount";
import { truncateString } from "@/utils/utils";
import { useTheme } from "@/context/theme-provider.tsx";

export default function StarknetConnectorModal() {
  const { connect, connectors } = useConnect();
  const { isStarknetConnectorOpened, close } = useStarknetConnectorStore();
  const {
    address,
    isConnected,
    connector: connectedWallet
  } = useChainAccount();
  const { theme } = useTheme();
  const { disconnect } = useDisconnectStarknetWallet();

  const extractConnectorIconUrl = (
    icon: string | { dark: string; light: string }
  ) => {
    if (typeof icon === "string") return icon;
    return icon?.[theme === "system" ? "dark" : theme];
  };

  const getConnectorSrc = (connector: Connector) => {
    if (connector.name.toLowerCase().includes("argent")) {
      const argentXConnector = connectors.find(
        (connector) => connector.name.toLowerCase() === "argent x"
      );
      return extractConnectorIconUrl(argentXConnector?.icon || connector.icon);
    }
    if (connector.name.toLowerCase().includes("braavos")) {
      const braavosConnector = connectors.find(
        (connector) => connector.name.toLowerCase() === "braavos"
      );
      return extractConnectorIconUrl(braavosConnector?.icon || connector.icon);
      2;
    }
    return extractConnectorIconUrl(connector.icon);
  };

  if (!isStarknetConnectorOpened) return <></>;
  return (
    <Modal onClose={close}>
      <ul className="w-full flex flex-col gap-5">
        <h2 className="text-center pb-5 font-bold border-b">Connect Wallet</h2>
        {isConnected && (
          <h3 className="text-center mb-5">{truncateString(address, 5, 5)}</h3>
        )}
        {connectors.map((connector) => (
          <li
            data-connected={
              connectedWallet?.name?.toLowerCase() ===
              connector.name.toLowerCase()
            }
            className="group flex justify-between rounded-lg bg-velix-slate-blue dark:bg-velix-form-input-dark dark:text-velix-gray-200 hover:cursor-pointer items-center gap-2 cursor-pointer lg:px-2 lg:py-2 font-bold font-space-grotesk text-sm w-full"
            key={connector.id}
          >
            <Button
              className="w-full dark:text-velix-gray-200 text-velix-blue hover:cursor-pointer flex items-center justify-start gap-2 cursor-pointer bg-transparent"
              onClick={() => {
                connect({ connector });
                close();
              }}
            >
              <img className="size-6" src={getConnectorSrc(connector)} />

              {connector.name}
              <small className="group-data-[connected=true]:block hidden border border-green-500 px-2 rounded-md">
                Connected
              </small>
            </Button>
            <Button
              onClick={() => disconnect()}
              className="group-data-[connected=true]:block hidden dark:bg-velix-gray-100"
            >
              Disconnect
            </Button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
