import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import StakingOperations from "./StakingOperations";
import AppContent from "@/components/layouts/AppContent";
import Statitics from "../Statitics";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import AddWalletCard from "@/components/ui/velix/cards/AddWalletCard";
import useChainTokens from "@/hooks/useChainTokens.ts";

export default function Stake() {
  const chainToken = useChainTokens();
  return (
    <div>
      <Section className="px-5 pb-32 lg:pb-16 mt-5">
        <AddWalletCard/>
        <StakeTitleWrapper className="lg:pt-20">
          <div className="w-full">
            <Title
              name={`Stake ${chainToken.nativeToken}`}
              subtitle={`Stake ${chainToken.nativeToken} and receive ${chainToken.stakedToken}`}
            />
          </div>
          <div className="w-full">
            <Title
              name="Velix statistics"
              subtitle={`View your ${chainToken.stakedToken} statistics.`}
            />
          </div>
        </StakeTitleWrapper>
        <AppContent>
          <div className="w-full h-fit">
            <div className="w-full block lg:hidden mt-10">
              <Title
                name={`Stake ${chainToken.nativeToken}`}
                subtitle={`Stake ${chainToken.nativeToken} and receive ${chainToken.stakedToken}`}
              />
            </div>
            <StakingOperations />
          </div>
          <div className="w-full">
            <div className="w-full block lg:hidden mt-10">
              <Title
                name="Velix statistics"
                subtitle={`View your ${chainToken.stakedToken} statistics.`}
              />
            </div>
            <Statitics />
          </div>
        </AppContent>
      </Section>
    </div>
  );
}
