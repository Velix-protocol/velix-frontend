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
  "0x82c6D49F563D87F8D95bDd7350174d0314401B18" as const;
export const VEMETIS_CONTRACT_ADDRESS =
  "0xc467683d79CEa75abF3C9181BbEcaA20B6d5aED1" as const;
export const SVEMETIS_CONTRACT_ADDRESS =
  "0xc0bCCbeB4091B525C50Bd75d10C7eB2161affA6a" as const;
export const REWARD_DISPATCHER_CONTRACT_ADDRESS =
  "0xC4708854dB13492C9411C17B97DC41bB9370eCD5" as const;
export const CONFIG_CONTRACT_ADDRESS =
  "0x4F84E5882E6ef2bA953f1A2C6594855EB38F4c91" as const;
export const DEALER_CONTRACT_ADDRESS =
  "0x972C84B2d8a4678e4ee08DE19a027279847C6451" as const;
export const REDEMPTION_QUEUE_CONTRACT_ADDRESS =
  "0x6383b4CC63f2261B2bFB90Ebb2AE3587eC301218" as const;

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
