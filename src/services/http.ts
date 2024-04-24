import { VELIX_API_URL } from "@/utils/constant";
import axios from "axios";

const api = axios.create({
  baseURL: VELIX_API_URL
});

export async function claimFaucetToken(walletAddress: string) {
  return await api.post("/faucet", { receiver: walletAddress });
}
