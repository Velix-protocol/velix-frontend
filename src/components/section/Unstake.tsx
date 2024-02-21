import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingForm from "../ui/velix/StakingForm";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import Chains from "./Stake/Chains";
import Metrics from "./Stake/Metrics";

export default function Unstake() {
  return (
    <div>
      <Section className="px-5 pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 justify-between items-start pt-28 lg:pt-40 pb-20 h-fit">
          <div className="lg:row-span-2 h-fit">
            <Title name="Unstake METIS" subtitle="Request your veMETIS" />
            <div className="bg-white p-5 lg:p-11 rounded-xl h-full mt-20">
              <StakingForm isStaking={false} />
              <StakingFormButtom role="unstake" />
              <div className="mt-9 flex flex-col gap-7">
                <StakingDetails
                  title="Max unlock cost"
                  value={
                    <p className="bg-velix-slate-green/20 text-velix-slate-green p-2 rounded-lg text-xs uppercase">
                      Free
                    </p>
                  }
                />
                <StakingDetails title="Max transaction cost" value="$82.47" />
                <StakingDetails title="Allowance" value="0.0 veMETIS" />
                <StakingDetails
                  title="Exchange rate"
                  value="1 veMETIS = 1 METIS"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 flex flex-col gap-5">
            <div>
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
              <Metrics />
            </div>
          </div>
          <Chains />
        </div>
      </Section>
    </div>
  );
}
