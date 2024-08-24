import { useConnect } from "@starknet-react/core";
import Modal from "./Modal";
import { useStarknetConnectorStore } from "@/store/starknetConnectorStore";
import { Button } from "../button";

export default function StarknetConnectorModal() {
  const { connect, connectors } = useConnect();
  const { isStarknetConnectorOpened, close } = useStarknetConnectorStore();

  if (!isStarknetConnectorOpened) return <></>;
  return (
    <Modal onClose={close}>
      <ul className="w-full flex flex-col gap-10">
        <h2 className="text-center">Connect Wallet</h2>
        {connectors.map((connector) => (
          <li key={connector.id}>
            <Button
              className="bg-velix-primary dark:bg-velix-dark-white hover:cursor-pointer justify-start lg:px-8 lg:py-5 hover:bg-velix-primary font-bold font-space-grotesk text-sm w-full"
              onClick={() => connect({ connector })}
            >
              {connector.name}
            </Button>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
