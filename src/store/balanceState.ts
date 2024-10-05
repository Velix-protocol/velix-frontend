import { create } from "zustand";

type BalanceStore = {
  strkBalance: string;
  veStrkBalance: string;
  veMETISBalance: string;
  sveMETISBalance: string;
  METISBalance: string;
  setveMETISBalance: (balance: string) => void;
  setsveMETISBalance: (balance: string) => void;
  setMETISBalance: (balance: string) => void;
  setStrkBalance: (balance: string) => void;
  setveStrkBalance: (balance: string) => void;
};

export const useBalanceStore = create<BalanceStore>((set) => ({
  strkBalance: "0.0",
  veStrkBalance: "0.0",
  veMETISBalance: "0.0",
  sveMETISBalance: "0.0",
  METISBalance: "0.0",
  setMETISBalance: (balance: string) =>
    set((state) => ({ ...state, METISBalance: balance.substring(0, 6) })),
  setsveMETISBalance: (balance: string) =>
    set((state) => ({ ...state, sveMETISBalance: balance })),
  setveMETISBalance: (balance: string) =>
    set((state) => ({ ...state, veMETISBalance: balance })),
  setStrkBalance: (balance: string) =>
    set((state) => ({ ...state, strkBalance: balance })),
  setveStrkBalance: (balance: string) =>
    set((state) => ({ ...state, veStrkBalance: balance }))
}));
