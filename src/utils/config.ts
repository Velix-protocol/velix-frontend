import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metis/metisToken.ts";
import { REWARD_DISPATCHER_CONTRACT_ABI } from "@/abi/metis/RewardDispatcher.ts";
import { CONFIG_CONTRACT_ABI } from "@/abi/metis/config.ts";
import { FAUCET_CONTRACT_ABI } from "@/abi/metis/faucet.ts";
import { VELIX_NFT_CONTRACT_ABI } from "@/abi/metis/velixNft.ts";
import { VELIX_METIS_VAULT_ABI } from "@/abi/metis/velixMetisVault.ts";
import { REDEMPTION_QUEUE_ABI } from "@/abi/metis/redemptionQueue.ts";
import { VESTRK_TOKEN_ABI } from "@/abi/starknet/veStrkToken.ts";
import { STARKET_TESTNET_VAULT_ABI } from "@/abi/starknet/velixStarknetVault.ts";
import { TESTNET_STARKNET_TOKEN } from "@/abi/starknet/strkToken.ts";

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

export const velixEnvironmentUrls = {
  production: {
    landingPage: "https://velix.io",
    app: "https://app.velix.io"
  },
  staging: {
    landingPage: "https://testnet.velix.io",
    app: "https://apptestnet.velix.io"
  },
  development: {
    landingPage: "https://dev.velix.io",
    app: "https://appdev.velix.io"
  }
};

export const supportedChains = {
  starknet: {
    explorerUrls: {
      testnet: {
        txUrl: "https://sepolia.starkscan.co/tx/",
        addressUrl: "https://sepolia.starkscan.co/address-book/"
      },
      mainnet: {
        txUrl: "#",
        addressUrl: "#"
      }
    },
    contracts: {
      mainnet: {},
      testnet: {
        VESTRK_TOKEN: {
          address:
            "0x102918ff8257835e2dcedf4472c364653e88922a598294441b683644a3e94c0",
          abi: VESTRK_TOKEN_ABI
        },
        VAULT: {
          address:
            "0x1f7ba650eb55855f251c0b9c9f68b9d3ff9584ede8e4c2c46319646b9f3192",
          abi: STARKET_TESTNET_VAULT_ABI
        },
        STRK_TOKEN: {
          address:
            "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
          abi: TESTNET_STARKNET_TOKEN
        },
        VAULT_WITHDRAWAL_MANEGER: {
          address:
            "0x5a85268ee1a0c2f3b018fa1d94a394ae18eaa18405e3919cf62ba4a7688b8fb",
          abi: []
        }
      }
    }
  },
  metis: {
    explorerUrls: {
      testnet: {
        txUrl: "https://sepolia-explorer.metisdevops.link/tx/",
        addressUrl: "https://sepolia-explorer.metisdevops.link/address/"
      },
      mainnet: {
        txUrl: "#",
        addressUrl: "#"
      }
    },
    contracts: {
      mainnet: {},
      testnet: {
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
      }
    }
  }
};

export const tokenNames = {
  metis: {
    nativeToken: "METIS",
    stakedToken: "veMETIS"
  },
  starknet: {
    nativeToken: "STRK",
    stakedToken: "veSTRK"
  }
} as const;
