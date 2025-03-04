import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import AppContent from "@/components/layouts/AppContent";
import ClaimCrosschainCard from "@/components/ui/velix/cards/ClaimCrosschainCard";
import InputWalletAddress from "./InputWalletAddress";
import { SupportedChains } from "@/types";
import { useSupportedChain } from "@/context/SupportedChainsProvider";

export default function ClaimOnCrosschain() {
  const currentEcosystem: SupportedChains = useSupportedChain();
  const targetEcosystem: SupportedChains =
    currentEcosystem === "metis" ? "starknet" : "metis";

  return (
    <Section className="pb-32 lg:pb-16">
      <AppContent>
        <div className="w-full h-fit">
          <div className="w-full block lg:mt-20 mt-8">
            <Title
              name="Paste your wallet address"
              subtitle="Paste your ethereum wallet address."
            />
          </div>
          <InputWalletAddress />
        </div>
        <div className="w-full">
          <div className="w-full block lg:mt-20 mt-8">
            <Title
              name="Claim crosschain rewards"
              subtitle="Claim METIS rewards 24hrs after submitting wallet"
            />
          </div>

          <ClaimCrosschainCard
            claimFor="metis"
            currentEcosystem={currentEcosystem}
            targetEcosystem={targetEcosystem}
          />

          <ClaimCrosschainCard
            claimFor="starknet"
            currentEcosystem={currentEcosystem}
            targetEcosystem={targetEcosystem}
          />
        </div>
      </AppContent>
    </Section>
  );
}
