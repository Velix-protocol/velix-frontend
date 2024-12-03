import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import { VELIX_NFT_CONTRACT_ABI } from "@/abi/velixNft";
import { CONFIG_CONTRACT_ABI } from "@/abi/config";
import { REWARD_DISPATCHER_CONTRACT_ABI } from "@/abi/RewardDispatcher";
import { FAUCET_CONTRACT_ABI } from "@/abi/faucet";
import { REDEMPTION_QUEUE_ABI } from "@/abi/redemptionQueue";
import { VELIX_METIS_VAULT_ABI } from "@/abi/velixMetisVault.ts";

export const INFURA_API_KEY = import.meta.env.VITE_INFURA_API_KEY;
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const VELIX_API_URL = import.meta.env.VITE_VELIX_API_URL;

export const METIS_TOKEN_CONTRACT_ADDRESS =
  "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000" as const;
export const REWARD_DISPATCHER_CONTRACT_ADDRESS =
  "0x8D0629EE59E8a1DD984990975737511039399a15" as const;
export const CONFIG_CONTRACT_ADDRESS =
  "0x4F84E5882E6ef2bA953f1A2C6594855EB38F4c91" as const;
export const DEALER_CONTRACT_ADDRESS =
  "0x972C84B2d8a4678e4ee08DE19a027279847C6451" as const;
export const REDEMPTION_QUEUE_CONTRACT_ADDRESS =
  "0x5F38472BC3ad03eaadB93dC168b49A5871B0E128" as const;
export const VELIX_METIS_VAULT_CONTRACT_ADDRESS =
  "0xE8D82024A98D4A62780F5f52f74E02bCc3bEb5bc" as const;

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
  VELIX_VAULT: {
    address: VELIX_METIS_VAULT_CONTRACT_ADDRESS,
    abi: VELIX_METIS_VAULT_ABI
  },
  REDEMPTION_QUEUE: {
    address: REDEMPTION_QUEUE_CONTRACT_ADDRESS,
    abi: REDEMPTION_QUEUE_ABI
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
