import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./constant";

export const UNSTAKES_TABLE = "unstakes";
export const STAKES_TABLE = "stakes";
export const MINTS_TABLE = "mints";
export const STAKERS_TABLE = "stakers";
export const CLAIMS_TABLE = "claims";

export type Action = "mint" | "stake" | "unstake";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const getActionTable = (action: Action) => {
  switch (action) {
    case "mint":
      return MINTS_TABLE;
    case "stake":
      return STAKES_TABLE;
    case "unstake":
      return UNSTAKES_TABLE;
  }
};

export async function savedAction(
  action: Action,
  data: {
    amount: string;
    wallet_address: `0x${string}`;
    tx_hash: string;
  }
) {
  return await supabase.from(getActionTable(action)).insert(data);
}

export async function saveClaimNftAction(
  walletAddress: string,
  nftId: string,
  txHash: string
) {
  return await supabase.from(CLAIMS_TABLE).insert({
    wallet_address: walletAddress,
    nft_id: nftId,
    tx_hash: txHash
  });
}

export async function retreiveClaims(walletAddress: string) {
  return await supabase
    .from(CLAIMS_TABLE)
    .select("*")
    .eq("wallet_address", walletAddress);
}

export async function retreiveActionsActivity(
  action: Action,
  wallet_address: string
) {
  return await supabase
    .from(getActionTable(action))
    .select("*")
    .eq("wallet_address", wallet_address);
}

export async function insertStaker(
  wallet_address: `0x${string}`,
  amount: number
) {
  return await supabase
    .from(STAKERS_TABLE)
    .insert({
      wallet_address,
      amount
    })
    .select("*");
}

export async function updateStakerAmount(
  wallet_address: `0x${string}`,
  amount: number
) {
  return await supabase
    .from(STAKERS_TABLE)
    .update({
      amount
    })
    .eq("wallet_address", wallet_address);
}

export async function retreiveStakersNumber() {
  const { data, error } = await supabase
    .from(STAKERS_TABLE)
    .select("*")
    .gt("amount", 0);
  if (error) return;
  return data.length;
}

export async function retreiveStakerByWalletAddress(
  wallet_address: `0x${string}`
) {
  const { data, error } = await supabase
    .from(STAKERS_TABLE)
    .select("*")
    .eq("wallet_address", wallet_address);
  if (error) return;
  return data[0];
}

export async function recordStaker(
  wallet_address: `0x${string}`,
  amount: number
) {
  const staker = await retreiveStakerByWalletAddress(wallet_address);
  if (!staker) {
    await insertStaker(wallet_address, amount);
    return await retreiveStakersNumber();
  }
  await updateStakerAmount(wallet_address, amount);
  return await retreiveStakersNumber();
}
