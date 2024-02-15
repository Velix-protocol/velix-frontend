import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { mainnet, sepolia, metis } from "wagmi/chains";
import { cookieStorage, createStorage } from "wagmi";
import { PROJECT_ID } from "./ constant";

// Get projectId at https://cloud.walletconnect.com
export const projectId = PROJECT_ID;

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia, metis],
  projectId,
  metadata,
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true
});
