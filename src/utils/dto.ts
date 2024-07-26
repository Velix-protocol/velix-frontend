export type saveActionDto = {
  walletAddress: string;
  amount: number;
  txHash: string;
};

export type saveStakerDto = {
  walletAddress: string;
  amount: number;
  referralCode?: string;
};

export type RedeemPointDto = {
  walletAddress: string;
  points: number;
};
