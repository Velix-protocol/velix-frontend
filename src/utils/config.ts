import { METIS_TOKEN_CONTRACT_ABI } from "@/abi/metisToken.ts";
import { VEMETIS_MINTER_CONTRACT_ABI } from "@/abi/veMetisMinter.ts";
import { VEMETIS_CONTRACT_ABI } from "@/abi/veMETIS.ts";
import { SVMETIS_CONTRACT_ABI } from "@/abi/sveMETIS.ts";
import { REWARD_DISPATCHER_CONTRACT_ABI } from "@/abi/RewardDispatcher.ts";
import { CONFIG_CONTRACT_ABI } from "@/abi/config.ts";
import { FAUCET_CONTRACT_ABI } from "@/abi/faucet.ts";
import { VELIX_NFT_CONTRACT_ABI } from "@/abi/velixNft.ts";

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
  starknet: {},
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
        DEALER: {
          address: "0xfb23B1AC76c4932F9c28eCE33E26a5cAeaB58a9d",
          abi: null
        },
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
      }
    }
  }
};
