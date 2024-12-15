import { supportedChains } from "@/utils/config";
import { createContext, ReactNode, useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import StarknetProviderContext from "./StarknetProvider";
import WagmiProviderContext from "./WagmiProvider";
import useGetChain from "@/hooks/useGetChain";
import { SupportedChains } from "@/types/index.ts";

const SupportedChainsContext = createContext<SupportedChains>("metis");

export const useSupportedChain = () => useContext(SupportedChainsContext);

export default function SupportedChainsProvider({
  children
}: {
  children: ReactNode;
}) {
  const chain = useGetChain();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!chain) return;
    if (!Object.keys(supportedChains).includes(chain)) {
      navigate("/unsupported-chain", { relative: "route", replace: true });
    }
  }, [navigate, chain]);

  return (
    <SupportedChainsContext.Provider value={chain ?? "metis"}>
      <StarknetProviderContext>
        <WagmiProviderContext>{children}</WagmiProviderContext>
      </StarknetProviderContext>
    </SupportedChainsContext.Provider>
  );
}
