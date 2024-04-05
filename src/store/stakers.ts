import { create } from "zustand";

type BalanceStore = {
  stakers: number;
  setStakers: (stakers: number) => void;
};

export const useStakersStore = create<BalanceStore>((set) => ({
  stakers: 0,
  setStakers: (stakers: number) => set(() => ({ stakers }))
}));
