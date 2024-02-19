import { InfoIcon } from "lucide-react";
import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingForm from "../ui/velix/StakingForm";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import Chains from "./Stake/Chains";
import Metrics from "./Stake/Metrics";

export default function Mint() {
  return (
    <div>
      <Section className="px-5 pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-start pt-28 lg:pt-40 pb-20 h-fit">
          <div className="lg:row-span-2 h-fit">
            <Title
              name="Mint METIS"
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
            <div className="bg-white p-5 lg:p-11 rounded-xl h-full mt-16">
              <StakingForm isStaking showSwapIcon={false} />
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
            </div>
          </div>
          <div className="mt-16 lg:mt-0 flex flex-col gap-5">
            <div>
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
              <div className="pt-2">
                <Metrics />
              </div>
            </div>
            <Chains />
          </div>
        </div>
      </Section>
    </div>
  );
}
