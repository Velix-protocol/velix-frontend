import AppContent from "../layouts/AppContent";
import Section from "../layouts/Section";
import StakeLayout from "../layouts/StakeLayout";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import Statitics from "./Statitics";

export default function Unstake() {
  return (
    <div>
      <Section className="px-5 pb-32 lg:pb-16">
        <StakeTitleWrapper>
          <div className="w-full">
            <Title name="Unstake METIS" subtitle="Request your veMETIS" />
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
              <Title name="Unstake METIS" subtitle="Request your veMETIS" />
            </div>
            <StakeLayout isStaking={false}>
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
                <StakingFormButtom role="unstake" />
              </div>
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
