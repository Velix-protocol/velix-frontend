import { create } from "zustand";

type ReferralCodeStore = {
  referralCode: string;
  cleanUpReferralCode: () => void;
  setReferralCode: (code: string) => void;
};

export const useReferralCodeStore = create<ReferralCodeStore>((set) => ({
  referralCode: "",
  cleanUpReferralCode: () => {
    set(() => ({ referralCode: "" }));
  },
  setReferralCode: (code: string) => {
    set(() => ({ referralCode: code }));
  }
}));
