import { create } from "zustand";

type StarknetConnectorStore = {
  isStarknetConnectorOpened: boolean;
  open: () => void;
  close: () => void;
};

export const useStarknetConnectorStore = create<StarknetConnectorStore>(
  (set) => ({
    isStarknetConnectorOpened: false,
    open: () => {
      set(() => ({ isStarknetConnectorOpened: true }));
    },
    close: () => {
      set(() => ({ isStarknetConnectorOpened: false }));
    }
  })
);
