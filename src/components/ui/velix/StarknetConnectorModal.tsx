import { useConnect } from "@starknet-react/core";
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

  if (!isStarknetConnectorOpened) return <></>;
  return (
    <Modal onClose={close}>
      <ul className="w-full flex flex-col gap-5">
        <h2 className="text-center border-b pb-5 font-bold">Connect Wallet</h2>
        {isConnected && (
          <h3 className="text-center mb-5">{truncateString(address, 5, 5)}</h3>
        )}
        {connectors.map((connector) => (
          <li key={connector.id}>
            <Button
              data-connected={
                connectedWallet?.name?.toLowerCase() ===
                connector.name.toLowerCase()
              }
              className="group bg-velix-primary dark:bg-velix-dark-hover dark:text-velix-gray-200 hover:cursor-pointer flex items-center gap-2 cursor-pointer justify-start lg:px-4 lg:py-8 hover:bg-velix-primary font-bold font-space-grotesk text-sm w-full"
              onClick={() => {
                connect({ connector });
                close();
              }}
            >
              <img
                className="size-6"
                src={
                  typeof connector.icon === "string"
                    ? connector.icon
                    : connector.icon?.[theme === "system" ? "dark" : theme]
                }
              />
              {connector.name}
              <small className="group-data-[connected=true]:block hidden border border-green-500 px-2 rounded-md">
                Connected
              </small>
            </Button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
