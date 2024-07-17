import { velixApi } from "@/services/http";
import { Staker } from "@/types";
import { create } from "zustand";

type BalanceStore = {
  stakers: number;
  staker: Staker | null;
  setStakers: (stakers: number) => void;
  getStaker: (walletAddress: string) => void;
};

export const useStakersStore = create<BalanceStore>((set) => ({
  stakers: 0,
  staker: null,
  setStakers: (stakers: number) => set(() => ({ stakers })),
  getStaker: async (walletAddress: string) => {
    const staker = await velixApi.getStaker(walletAddress);
    set(() => ({ staker: staker?.data }));
  }
}));
