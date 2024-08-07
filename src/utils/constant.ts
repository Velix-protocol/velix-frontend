import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS";
import { VELIX_NFT_CONTRACT_ABI } from "@/abi/velixNft";
import { CONFIG_CONTRACT_ABI } from "@/abi/config";
import { REWARD_DISPATCHER_CONTRACT_ABI } from "@/abi/RewardDispatcher";
import { FAUCET_CONTRACT_ABI } from "@/abi/faucet";

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
  "0x12e9EEA4F9401bA1b6dE28b779cbE79042E8B847" as const;
export const VEMETIS_CONTRACT_ADDRESS =
  "0x4aff6784f9a8c63CD18aEe48550150835f2345E0" as const;
export const SVEMETIS_CONTRACT_ADDRESS =
  "0x33B7cdB39fE9bFe4fA71A3C1983bDF59B1138a09" as const;
export const REWARD_DISPATCHER_CONTRACT_ADDRESS =
  "0x9d78f67d0eC5914E499097b78d341E7476CD67B0" as const;
export const CONFIG_CONTRACT_ADDRESS =
  "0xF578812d6D648fc007365f780894A9c13DDd5f93" as const;
export const DEALER_CONTRACT_ADDRESS =
  "0xfb23B1AC76c4932F9c28eCE33E26a5cAeaB58a9d" as const;
export const PROTOCOL_TREASURE_CONTRACT_ADDRESS =
  "0xc3BD53e8BB7F5a8f98C565aad28C9b618c84D8Fa" as const;
export const FAUCET_CONTRACT_ADDRESS =
  "0xCAfBeA96C9A96f59d2FB26175ef9Ec2Ec4F1f449" as const;
export const VELIX_NFT_CONTRACT_ADDRESS =
  "0xfe2bbF579004E10926c925001068CA3E6FCE90DC" as const;

export const velixContracts = {
  METIS_TOKEN: {
    address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    abi: METIS_TOKEN_CONTRACT_ABI
  },
  VEMETIS_MINTER: {
    address: "0x12e9EEA4F9401bA1b6dE28b779cbE79042E8B847",
    abi: VEMETIS_MINTER_CONTRACT_ABI
  },
  VEMETIS: {
    address: "0x4aff6784f9a8c63CD18aEe48550150835f2345E0",
    abi: VEMETIS_CONTRACT_ABI
  },
  SVEMETIS: {
    address: "0x33B7cdB39fE9bFe4fA71A3C1983bDF59B1138a09",
    abi: SVMETIS_CONTRACT_ABI
  },
  REWARD_DISPATCHER: {
    address: "0x9d78f67d0eC5914E499097b78d341E7476CD67B0",
    abi: REWARD_DISPATCHER_CONTRACT_ABI
  },
  CONFIG: {
    address: "0xF578812d6D648fc007365f780894A9c13DDd5f93",
    abi: CONFIG_CONTRACT_ABI
  },
  DEALER: { address: "0xfb23B1AC76c4932F9c28eCE33E26a5cAeaB58a9d", abi: null },
  PROTOCOL_TREASURE: {
    address: "0xc3BD53e8BB7F5a8f98C565aad28C9b618c84D8Fa",
    abi: null
  },
  FAUCET: {
    address: "0xCAfBeA96C9A96f59d2FB26175ef9Ec2Ec4F1f449",
    abi: FAUCET_CONTRACT_ABI
  },
  VELIX_NFT: {
    address: "0xfe2bbF579004E10926c925001068CA3E6FCE90DC",
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
