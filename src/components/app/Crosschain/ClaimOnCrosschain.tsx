import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import AppContent from "@/components/layouts/AppContent";
import MetisCard from "@/components/ui/velix/cards/MetisCard";
import StarknetCard from "@/components/ui/velix/cards/StarknetCard";
import InputWalletAddress from "./InputWalletAddress";
import { useState } from "react";
export default function ClaimOnCrosschain(){
  const [walletSubmitted, setWalletSubmitted] = useState<boolean>(false);

  const handleClaim = (): void => {
    setWalletSubmitted(true);
  };

  return (
      <Section className="pb-32 lg:pb-16">
        {/* <StakeTitleWrapper className="pt-20">
          <div className="w-full">
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
          <div className="w-full">
          {!walletSubmitted && (
            <Title
                name="Claim crosschain rewards"
                subtitle="Claim METIS rewards 24hrs after submitting wallet"
            />
            )}
          </div>
        </StakeTitleWrapper> */}
        <AppContent>
          <div className="w-full h-fit">
            <div className="w-full block  lg:mt-20 mt-8">
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
            {!walletSubmitted ? (
              <InputWalletAddress onClaim={handleClaim} />
            ) : (
              <MetisCard />
            )}
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
            {!walletSubmitted && <MetisCard />}
            <StarknetCard className={walletSubmitted ? 'mt-[13rem]' : ''} />
            </div>
        </AppContent>
      </Section>
  );
}

