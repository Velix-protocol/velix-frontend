import { useConnect } from "@starknet-react/core";
import Modal from "./Modal";
import { useStarknetConnectorStore } from "@/store/starknetConnectorStore";
import { Button } from "../button";
import useChainAccount from "@/hooks/useChainAccount";
import { truncateString } from "@/utils/utils";

export default function StarknetConnectorModal() {
  const { connect, connectors } = useConnect();
  const { isStarknetConnectorOpened, close } = useStarknetConnectorStore();
  const { address, isConnected } = useChainAccount();

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
              className="bg-velix-primary dark:bg-velix-dark-white hover:cursor-pointer justify-start lg:px-8 lg:py-5 hover:bg-velix-primary font-bold font-space-grotesk text-sm w-full"
              onClick={() => {
                connect({ connector });
                close();
              }}
            >
              {connector.name}
            </Button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
