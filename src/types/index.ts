export type Role =
  | "mint"
  | "stake"
  | "unstake"
  | "redeem"
  | "swap"
  | "reward"
  | "restakeReward";

export type Staker = {
  id: string;
  createdAt: Date;
  walletAddress: string;
  stakingpoints: number;
  referralPoints: number;
  referralCode: string;
  referralCodeCreationDate: Date;
  referrerCode: string;
  amount: number;
};
