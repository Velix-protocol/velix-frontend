import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { PROJECT_ID } from "./ constant";
import { defineChain } from "viem";

// Get projectId at https://cloud.walletconnect.com
export const projectId = PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Velix",
  description: "Liquidity staking platform",
  url: "https://velix.io",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

export const METIS_SEPOLIA = defineChain({
  id: 59901,
  name: "METIS sepolia",
  nativeCurrency: {
    name: "Metis",
    symbol: "METIS",
    decimals: 18
  },
  contracts: {
    multicall3: {
      address: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000"
    }
  },
  blockExplorers: {
    default: {
      name: "Metis Sepoliaa Explorer",
      url: "https://sepolia.explorer.metisdevops.link/"
    }
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.rpc.metisdevops.link/"],
      webSocket: ["wss://sepolia-ws.rpc.metisdevops.link"]
    }
  }
});

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [METIS_SEPOLIA],
  projectId,
  metadata,
  storage: createStorage({
    storage: cookieStorage
  }),

  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true
});
