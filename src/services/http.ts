import { VELIX_API_URL } from "@/utils/constant";
import { saveActionDto, saveStakerDto } from "@/utils/dto";
import axios, { AxiosInstance } from "axios";

export type Action = "mint" | "stake" | "unstake";

const api = axios.create({
  baseURL: VELIX_API_URL
});

// ATTENTION: this function is not used and working anymore, should be remove whenever possible
export async function claimFaucetToken(walletAddress: string) {
  return await api.post("/faucet", { receiver: walletAddress });
}

class VelixApi {
  api: AxiosInstance;
  constructor(api: AxiosInstance) {
    this.api = api;
  }

  private actionEndpoint(action: Action) {
    switch (action) {
      case "mint":
        return "/mints";
      case "stake":
        return "/stake";
      case "unstake":
        return "/unstakes";
    }
  }

  async saveAction(action: Action, data: saveActionDto) {
    return await this.api.put(this.actionEndpoint(action), data);
  }

  async retreiveActionsActivity(action: Action, walletAddress: string) {
    return await this.api.get(
      `${this.actionEndpoint(action)}/${walletAddress}`
    );
  }

  async saveStaker(data: saveStakerDto) {
    return await this.api.put("/stake/stakers", data);
  }

  async retreiveStakersNumber() {
    return await this.api.get("/stake/stakers/count");
  }
}

export const velixApi = new VelixApi(api);
