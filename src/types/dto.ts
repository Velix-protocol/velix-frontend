import { SupportedChains } from "@/types/index.ts";

export type saveActionDto = {
  walletAddress: string;
  amount: number;
  txHash: string;
  chain?: SupportedChains;
};

export type saveStakerDto = {
  walletAddress: string;
  amount: number;
  referralCode?: string;
  chain?: SupportedChains;
};

export type RedeemPointDto = {
  walletAddress: string;
  points: number;
};

export type SaveRedeemTicketDto = {
  walletAddress: string;
  txHash: string;
};

export type GetAmountToRedeemFromPointDto = {
  amountToRedeem: number;
};
