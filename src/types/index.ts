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
  referralPoints: number;
  referralCode: string;
  referralCodeCreationDate: Date;
  referrerCode: string;
  amount: number;
  stakingpoints: number;
};

export type Stake = {
  id: string;
  createdAt: Date;
  walletAddress: string;
  amount: number;
  txHash: string;
  stakingPoints: number;
  percentage: number;
  redeemablePoints: number;
};

export type AppMode = "landingPage" | "app";
