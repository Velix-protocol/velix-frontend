// import StakingDetails from "@/components/app/StakingDetails";
// import StakingFormButtom from "@/components/app/StakingFormButtom";
import AppContent from "@/components/layouts/AppContent";
import Section from "@/components/layouts/Section";
// import StakeLayout from "@/components/layouts/StakeLayout";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import Title from "@/components/ui/velix/Title";
import { Button } from "@/components/ui/button";
import RedeemLayout from "@/components/layouts/ReddemLayout";

export default function Redeem() {
  return (
    <Section className="px-5 pb-32 lg:pb-16">
      <StakeTitleWrapper>
        <div className="w-full">
          <Title
            name="Redeem"
            subtitle="Only redeem with a counter of 21 day."
          />
        </div>
        <div className="w-full">
          <Title
            name="Reedem ticket"
            subtitle="You can now redeem."
          />
        </div>
      </StakeTitleWrapper>
      <AppContent>
        <div className="w-full lg:hidden pt-32">
          <Title
            name="Redeem"
            subtitle="Only redeem with a counter of 21 day."
          />
        </div>
        {/* <StakeLayout
          onSetMaxValue={() => null}
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
            role="redeem"
          />
        </StakeLayout> */}

        <div className="w-full lg:hidden">
          <Title
            name="Reedem ticket"
            subtitle="You can now redeem."
          />
        </div>
          <RedeemLayout
          onSetMaxValue={() => null}
          error={""}
          value={"0.00"}
          role="mint"
          onFromValueChange={() => null}
          showSwapIcon={false}
        >
          
          <div className="flex flex-row justify-between gap-5 mt-5">
            <Button className="w-1/2 font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10">
              Approve
            </Button>
            
            <Button className="w-1/2 font-space-grotesk border border-velix-blue dark:border-velix-gray text-velix-blue dark:text-white bg-transparent px-10">
              Enter queue
            </Button>
          </div>
        </RedeemLayout> 
        <div className="w-full lg:hidden">
          <Title
            name="Reedem ticket"
            subtitle="You can now redeem."
          />
        </div>
        <div className="dark:bg-velix-form-dark-background w-full h-[25rem] dark:mt-[4rem] mt-[5rem] rounded-xl bg-white flex justify-center items-center">
          <img
            src="/svg/redeem-ticket.svg"
            alt="redeem ticket"
          />
        </div>

      </AppContent>
    </Section>
  );
}
