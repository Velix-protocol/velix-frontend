import { supportedChains } from "@/utils/config";
import { createContext, ReactNode, useContext, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SupportedChainsContext = createContext("");

export const useSupportedChain = () => useContext(SupportedChainsContext);

export default function SupportedChainsProvider({
  children
}: {
  children: ReactNode;
}) {
  const params = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!Object.keys(supportedChains).includes(params.ecosystem ?? "")) {
      navigate("/unsupported-chain", { relative: "route", replace: true });
    }
  }, [navigate, params.ecosystem]);

  return (
    <SupportedChainsContext.Provider value={params.ecosystem ?? ""}>
      {children}
    </SupportedChainsContext.Provider>
  );
}
