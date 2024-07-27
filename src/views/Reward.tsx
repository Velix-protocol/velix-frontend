import StakingDetails from "@/components/app/StakingDetails";
import StakingFormButtom from "@/components/app/StakingFormButtom";
import AppContent from "@/components/layouts/AppContent";
import Section from "@/components/layouts/Section";
import StakeLayout from "@/components/layouts/StakeLayout";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import Title from "@/components/ui/velix/Title";

export default function Reward() {
  return (
    <Section className="px-5 pb-32 lg:pb-16">
      <StakeTitleWrapper>
        <div className="w-full">
          <Title
            name="Your Rewards"
            subtitle="You can withdraw or stake earned rewards"
          />
        </div>
      </StakeTitleWrapper>
      <AppContent>
        <div className="w-full lg:hidden pt-32">
          <Title
            name="Your Rewards"
            subtitle="You can withdraw or stake earned rewards"
          />
        </div>
        <StakeLayout
          onSetMaxValue={() => null}
          withConvertion={false}
          error={""}
          value={"0.00"}
          role="mint"
          onFromValueChange={() => null}
          showSwapIcon={false}
        >
          <div className="mt-9 flex flex-col gap-7">
            <StakingDetails title="Exchange Rate" value="1 METIS = 1 veMETIS" />
          </div>
          <StakingFormButtom
            isLoading={false}
            disabled={false}
            onMint={() => null}
            role="reward"
          />
        </StakeLayout>

        <StakeLayout
          onSetMaxValue={() => null}
          error={""}
          value={"0.00"}
          role="mint"
          onFromValueChange={() => null}
          showSwapIcon={false}
        >
          <StakingFormButtom
            isLoading={false}
            disabled={false}
            onMint={() => null}
            role="restakeReward"
          />
        </StakeLayout>
      </AppContent>
    </Section>
  );
}
