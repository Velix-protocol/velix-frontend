import { create } from "zustand";

type MetricsStore = {
  totalValueLocked: string;
  setTotalValueLocked: (value: string) => void;
};

export const useMetricsStore = create<MetricsStore>((set) => ({
  totalValueLocked: "0.0",
  setTotalValueLocked: (value) => {
    set((state) => ({ ...state, totalValueLocked: value }));
  }
}));
