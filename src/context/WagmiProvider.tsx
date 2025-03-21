import { config, projectId } from "@/utils/wagmi.config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

if (!projectId) throw new Error("Project ID is not defined");

createWeb3Modal({
  themeMode: "light",
  wagmiConfig: config,
  projectId
});

function WagmiProviderContext({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiProviderContext;
