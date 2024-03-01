import { InfoIcon } from "lucide-react";
import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import AppContent from "../layouts/AppContent";
import StakeLayout from "../layouts/StakeLayout";
import Statitics from "./Statitics";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";

export default function Mint() {
  return (
    <div>
      <Section className="px-5 pb-32 lg:pb-16">
        <StakeTitleWrapper>
          <div className="w-full">
            <Title
              name="Mint"
              subtitle={
                <p className="flex items-start justify-start gap-4">
                  <span>
                    <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                  </span>
                  <span>
                    Mint veMETIS to participate in liquid staking.
                    <br /> veMETIS is a liquid staking derivative of METIS.
                  </span>
                </p>
              }
            />
          </div>
          <div className="w-full">
            <Title
              name="Velix statistics"
              subtitle="View your  veMETIS statistics."
            />
          </div>
        </StakeTitleWrapper>
        <AppContent>
          <div className="w-full h-fit">
            <div className="w-full block lg:hidden mt-32">
              <Title
                name="Mint"
                subtitle={
                  <p className="flex items-start justify-start gap-4">
                    <span>
                      <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                    </span>
                    <span>
                      Mint veMETIS to participate in liquid staking.
                      <br /> veMETIS is a liquid staking derivative of METIS.
                    </span>
                  </p>
                }
              />
            </div>
            <StakeLayout showSwapIcon={false} isStaking={false}>
              <div className="mt-9 flex flex-col gap-7">
                <StakingDetails
                  title="Exchange Rate"
                  value="1 METIS = 1 veMETIS"
                />
                <StakingDetails
                  title="Average return"
                  value={
                    <span className="text-xs lg:text-base">
                      =3.13 <span className="font-bold">APR</span>
                    </span>
                  }
                />
              </div>
              <StakingFormButtom role="mint" />
            </StakeLayout>
          </div>
          <div className="w-full">
            <div className="w-full block lg:hidden mt-10">
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
            </div>
            <Statitics />
          </div>
        </AppContent>
      </Section>
    </div>
  );
}
