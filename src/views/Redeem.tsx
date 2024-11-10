import { useState } from "react";
import AppContent from "@/components/layouts/AppContent";
import Section from "@/components/layouts/Section";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import Title from "@/components/ui/velix/Title";
import { Button } from "@/components/ui/button";
import RedeemLayout from "@/components/layouts/ReddemLayout";
import RedeemCard from "@/components/ui/velix/RedeemCard";

export default function Redeem() {
  const [approved, setApproved] = useState(false);

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
          <Title name="Reedem ticket" subtitle="You can now redeem." />
        </div>
      </StakeTitleWrapper>
      <AppContent>
        <div className="w-full lg:hidden pt-32">
          <Title
            name="Redeem"
            subtitle="Only redeem with a counter of 21 day."
          />
        </div>

        <div className="w-full lg:hidden">
          <Title name="Reedem ticket" subtitle="You can now redeem." />
        </div>
        <RedeemLayout
          onSetMaxValue={() => null}
          error=""
          value="0.00"
          role="mint"
          onFromValueChange={() => null}
          showSwapIcon={false}
        >
          <div className="flex flex-row justify-between gap-5 mt-5">
            <Button
              className="w-1/2 font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
              onClick={() => setApproved(true)}
            >
              Approve
            </Button>

            <Button className="w-1/2 font-space-grotesk border border-velix-blue dark:border-velix-gray text-velix-blue dark:text-white bg-transparent px-10">
              Enter queue
            </Button>
          </div>
        </RedeemLayout>
        <div className="w-full lg:hidden">
          <Title name="Reedem ticket" subtitle="You can now redeem." />
        </div>

        <div className="flex flex-col dark:bg-velix-claim-gray w-full h-56 mt-[5rem] rounded-xl dark:mt-[3.7rem] bg-white justify-center items-center ">
          {approved ? (
            <>
              <RedeemCard />
            </>
          ) : (
            <>
              <img
                src="/svg/redeem-ticket.svg"
                alt="redeem ticket"
                className="dark:hidden"
              />
              <img
                src="/svg/redeem-ticket-dark.svg"
                alt="redeem ticket dark"
                className="hidden dark:block"
              />
              <p className="font-space-grotesk font-normal mt-5">
                You have no ticket to redeem
              </p>
            </>
          )}
        </div>
      </AppContent>
    </Section>
  );
}
