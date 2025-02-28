import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import AppContent from "@/components/layouts/AppContent";
import MetisCard from "@/components/ui/velix/cards/MetisCard";
import StarknetCard from "@/components/ui/velix/cards/StarknetCard";
import InputWalletAddress from "./InputWalletAddress";
import { useState } from "react";
import { SupportedChains } from "@/types"; 

export default function ClaimOnCrosschain() {
  const [walletSubmitted] = useState<boolean>(false);
  const currentEcosystem: SupportedChains = walletSubmitted ? "starknet" : "metis"; 
  const targetEcosystem: SupportedChains = walletSubmitted ? "metis" : "starknet"; 

  return (
    <Section className="pb-32 lg:pb-16">
      <AppContent>
        <div className="w-full h-fit">
          <div className="w-full block lg:mt-20 mt-8">
            {!walletSubmitted ? (
              <Title
                name="Paste your wallet address"
                subtitle="Paste your ethereum wallet address."
              />
            ) : (
              <Title
                name="Claim crosschain rewards"
                subtitle="Claim METIS rewards 24hrs after submitting wallet."
              />
            )}
          </div>
          {!walletSubmitted ? <InputWalletAddress /> : (
            <MetisCard currentEcosystem={currentEcosystem} 
            targetEcosystem={targetEcosystem}/>)}
        </div>
        <div className="w-full">
          <div className="w-full block lg:mt-20 mt-8">
            {!walletSubmitted && (
              <Title
                name="Claim crosschain rewards"
                subtitle="Claim METIS rewards 24hrs after submitting wallet"
              />
            )}
          </div>
          {!walletSubmitted && (
            <MetisCard currentEcosystem={currentEcosystem} 
            targetEcosystem={targetEcosystem}/>)}
          <StarknetCard className={walletSubmitted ? "mt-52" : ""} 
            currentEcosystem={currentEcosystem} 
            targetEcosystem={targetEcosystem} />
        </div>
      </AppContent>
    </Section>
  );
}
