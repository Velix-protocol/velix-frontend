import { create } from "zustand";

type BalanceStore = {
  veMETISBalance: string;
  METISBalance: string;
  setveMETISBalance: (balance: string) => void;
  setMETISBalance: (balance: string) => void;
};

export const useBalanceStore = create<BalanceStore>((set) => ({
  veMETISBalance: "0.0",
  METISBalance: "0.0",
  setMETISBalance: (balance: string) =>
    set((state) => ({ ...state, METISBalance: balance.substring(0, 6) })),
  setveMETISBalance: (balance: string) =>
    set((state) => ({ ...state, veMETISBalance: balance }))
}));
