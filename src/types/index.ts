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

export type RedeemTicket = {
  id: string;
  amount: number;
  maturity: number;
  hasBeenRedeemed: boolean;
  redemptionFeeAmount: number;
  canceled: boolean;
  owner: string;
  nftId: string;
};

export type SaveStarknetRedeemTicket = {
  amount: string;
  txHash: string;
  nftId: string;
  walletAddress: string;
  maturity: number;
};

export type AppMode = "landingPage" | "app";
export type Action = "stake" | "redeem";
export type SupportedChains = "metis" | "starknet";

export type ApiError = {
  error: string;
  message: string;
  statusCode: number;
};
