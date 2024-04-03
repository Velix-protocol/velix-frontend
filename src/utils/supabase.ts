import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./constant";

export const UNSTAKES_TABLE = "unstakes";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function savedUnstakedAmount(
  amount: string,
  wallet_address: `0x${string}`,
  tx_hash: string
) {
  return await supabase.from(UNSTAKES_TABLE).insert({
    amount,
    wallet_address,
    tx_hash
  });
}

export async function retreivedUnstakedTraffic(wallet_address: string) {
  const { data, error } = await supabase
    .from(UNSTAKES_TABLE)
    .select("*")
    .eq("wallet_address", wallet_address);
  return { data, error };
}
