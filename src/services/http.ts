import {
  Action,
  RedeemTicket,
  SaveStarknetRedeemTicket,
  Stake,
  Staker,
  SupportedChains
} from "@/types";
import { VELIX_API_URL } from "@/utils/constant";
import {
  GetAmountToRedeemFromPointDto,
  RedeemPointDto,
  saveActionDto,
  saveStakerDto
} from "@/utils/dto";
import axios, { AxiosInstance } from "axios";
import { ethers } from "ethers";

const velixApiInstance = axios.create({
  baseURL: VELIX_API_URL
});

// ATTENTION: this function is not used and working anymore, should be remove whenever possible
export async function claimFaucetToken(walletAddress: string) {
  return await velixApiInstance.post("/faucet", { receiver: walletAddress });
}

class VelixApi {
  api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }

  private actionEndpoint(action: Action, chain: SupportedChains) {
    switch (action) {
      case "stake":
        return `/stake/${chain}`;
      case "redeem":
        return "/redeem/nft-tickets";
      default:
        return "";
    }
  }

  async saveAction(action: Action, data: saveActionDto) {
    return await this.api.put(
      this.actionEndpoint(action, data?.chain || "metis"),
      data
    );
  }

  async retreiveActionsActivity(
    action: Action,
    walletAddress: string,
    chain: SupportedChains
  ) {
    return await this.api.get(
      `${this.actionEndpoint(action, chain || "metis")}/${walletAddress}`
    );
  }

  async saveStaker(data: saveStakerDto) {
    return await this.api.put(`/stake/stakers/${data.chain}`, data);
  }

  async retreiveStakersNumber(network: SupportedChains) {
    return await this.api.get(`/stake/stakers/count/${network}`);
  }

  async getStaker(walletAddress: string) {
    if (!walletAddress) return;
    return await this.api.get<Staker>(`/stake/stakers/${walletAddress}`);
  }

  async redeemPoints(redeemData: RedeemPointDto) {
    if (!redeemData.walletAddress) return;
    return await this.api.post<ethers.TransactionResponse>(
      "/redeem/points/stakes",
      redeemData
    );
  }

  async getAmountToRedeemFromPoints(points: number) {
    return await this.api.get<GetAmountToRedeemFromPointDto>(
      `/redeem/convert/${points}`
    );
  }

  async getRedeemableStakeTransactions(walletAddress: string) {
    if (!walletAddress) return;
    return await this.api.get<Stake[]>(`/stake/redeemable/${walletAddress}`);
  }

  async getRedeemTicketsOwnedByWalletAddress(walletAddress: string) {
    if (!walletAddress) return;
    return await this.api.get<RedeemTicket[]>(
      `/redeem/nft-tickets/${walletAddress}`
    );
  }

  async saveRedeemTicketTransactionHash({
    walletAddress,
    txHash
  }: {
    walletAddress: string;
    txHash: string;
  }) {
    if (!walletAddress) return;
    if (!txHash) return;
    return await this.api.patch("/redeem/nft-tickets", {
      walletAddress,
      txHash
    });
  }

  async completeRedeemTicket({
    nftId,
    walletAddress,
    chain
  }: {
    nftId: string;
    walletAddress: string;
    chain: SupportedChains;
  }) {
    if (!nftId || !walletAddress) return;
    return await this.api.patch(`/redeem/nft-tickets/${chain}/complete`, {
      nftId,
      walletAddress
    });
  }

  async saveStarknetRedeemTicket({
    walletAddress,
    txHash,
    amount,
    nftId,
    maturity
  }: SaveStarknetRedeemTicket) {
    if (!walletAddress) return;
    if (!txHash) return;

    return await this.api.post("/redeem/nft-tickets/starknet", {
      walletAddress,
      txHash,
      amount,
      nftId,
      maturity
    });
  }
}

export const velixApi = new VelixApi(velixApiInstance);
