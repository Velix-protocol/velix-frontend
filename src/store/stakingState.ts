import { create } from "zustand";

type StakingStore = {
  isStaking: boolean;
  toggleStaking: () => void;
};

export const useStakingStore = create<StakingStore>((set) => ({
  isStaking: true,
  toggleStaking: () => set((state) => ({ isStaking: !state.isStaking }))
}));
