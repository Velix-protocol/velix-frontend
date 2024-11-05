import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS";
import { VELIX_NFT_CONTRACT_ABI } from "@/abi/velixNft";
import { CONFIG_CONTRACT_ABI } from "@/abi/config";
import { REWARD_DISPATCHER_CONTRACT_ABI } from "@/abi/RewardDispatcher";
import { FAUCET_CONTRACT_ABI } from "@/abi/faucet";
import { REDEMPTION_QUEUE_ABI } from "@/abi/redemptionQueue";

export const INFURA_API_KEY = import.meta.env.VITE_INFURA_API_KEY;
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const VELIX_API_URL = import.meta.env.VITE_VELIX_API_URL;
export const VITE_VELIX_SUPER_NFT_HASH = import.meta.env
  .VITE_VELIX_SUPER_NFT_HASH;
export const VITE_VELIX_SUPER_NFT_NAME = import.meta.env
  .VITE_VELIX_SUPER_NFT_NAME;
export const VELIX_SUPER_NFT_URL = import.meta.env.VITE_VELIX_SUPER_NFT_URL;

export const METIS_TOKEN_CONTRACT_ADDRESS =
  "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000" as const;
export const VEMETIS_MINTER_CONTRACT_ADDRESS =
  "0xD3a435c39D7C985b920491817bdca003303CEe33" as const;
export const VEMETIS_CONTRACT_ADDRESS =
  "0xfB74f0f75F10E31cDB84dE1CAcA1ef08635F2587" as const;
export const SVEMETIS_CONTRACT_ADDRESS =
  "0x19093D6006D79A7915d54Dff787BAD21C3b852CD" as const;
export const REWARD_DISPATCHER_CONTRACT_ADDRESS =
  "0x77Be5d0814164596D5558c6f4D3EF68A9Af16366" as const;
export const CONFIG_CONTRACT_ADDRESS =
  "0xFB45f031943759FFa793aC19d0e47aE9723EbF9a" as const;
export const DEALER_CONTRACT_ADDRESS =
  "0x972C84B2d8a4678e4ee08DE19a027279847C6451" as const;
export const PROTOCOL_TREASURE_CONTRACT_ADDRESS =
  "0xf42DBA76dCCff37777B98F4d42a99EAD20b57bDe" as const;
export const REDEMPTION_QUEUE_CONTRACT_ADDRESS =
  "0x96C35AAe0730c625816bC3eb5cf28f68A309ef7b" as const;

// These two contract are not relevant anymore
export const FAUCET_CONTRACT_ADDRESS =
  "0xCAfBeA96C9A96f59d2FB26175ef9Ec2Ec4F1f449" as const;
export const VELIX_NFT_CONTRACT_ADDRESS =
  "0xfe2bbF579004E10926c925001068CA3E6FCE90DC" as const;

export const velixContracts = {
  METIS_TOKEN: {
    address: METIS_TOKEN_CONTRACT_ADDRESS,
    abi: METIS_TOKEN_CONTRACT_ABI
  },
  VEMETIS_MINTER: {
    address: VEMETIS_MINTER_CONTRACT_ADDRESS,
    abi: VEMETIS_MINTER_CONTRACT_ABI
  },
  REDEMPTION_QUEUE: {
    address: REDEMPTION_QUEUE_CONTRACT_ADDRESS,
    abi: REDEMPTION_QUEUE_ABI
  },
  VEMETIS: {
    address: VEMETIS_CONTRACT_ADDRESS,
    abi: VEMETIS_CONTRACT_ABI
  },
  SVEMETIS: {
    address: SVEMETIS_CONTRACT_ADDRESS,
    abi: SVMETIS_CONTRACT_ABI
  },
  REWARD_DISPATCHER: {
    address: REWARD_DISPATCHER_CONTRACT_ADDRESS,
    abi: REWARD_DISPATCHER_CONTRACT_ABI
  },
  CONFIG: {
    address: CONFIG_CONTRACT_ADDRESS,
    abi: CONFIG_CONTRACT_ABI
  },
  DEALER: { address: DEALER_CONTRACT_ADDRESS, abi: null },
  PROTOCOL_TREASURE: {
    address: PROTOCOL_TREASURE_CONTRACT_ADDRESS,
    abi: null
  },
  FAUCET: {
    address: FAUCET_CONTRACT_ADDRESS,
    abi: FAUCET_CONTRACT_ABI
  },
  VELIX_NFT: {
    address: VELIX_NFT_CONTRACT_ADDRESS,
    abi: VELIX_NFT_CONTRACT_ABI
  }
} as const;

export const EXPLORER_TX_URL = "https://sepolia-explorer.metisdevops.link/tx/";
export const EXPLORER_ADDRESS_URL =
  "https://sepolia-explorer.metisdevops.link/address/";
export const MAX_INPUT_LENGTH = 10;

export const APP_MODE = __APP_MODE__;
export const VELIX_APP_ENVIRONMENT = import.meta.env
  .VITE_VELIX_APP_ENVIRONMENT as
  | "production"
  | "staging"
  | "development"
  | "local";
