import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/DashboardCard";
import ArrowRightCircleFill from "@/components/ui/velix/icons/ArrowRightCircleFill";
import VeInput from "@/components/ui/velix/VeInput";
import { ReactNode } from "react";

function VePointDescriptionSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="font-space-grotesk bg-white rounded-2xl">
      <h4 className="bg-velix-primary py-10 px-11 max-sm:px-5 max-md:text-xl max-md:py-5 text-3xl rounded-t-2xl text-white font-bold">
        {title}
      </h4>
      <div className="px-11 max-md:px-5 max-md:py-5 text-velix-gray space-y-4 py-10 rounded-b-2xl max-w-[90%]">
        {children}
      </div>
    </div>
  );
}

export default function VePoints() {
  return (
    <Section className="max-md:mx-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between max-md:flex-col items-center bg-velix-primary mt-20 p-24 max-md:p-5 max-md:py-10 rounded-2xl">
          <h2 className="text-5xl max-md:text-3xl max-md:text-center max-w-[650px] text-white font-space-grotesk font-bold">
            Stake and Maximize Rewards with Velix Points, Earn & Refer
          </h2>
          <div className="w-fit mr-24 max-md:mr-0 max-md:w-32 max-md:h-32 max-md:my-10">
            <img src="/vepoint-illustration.png" alt="vepoints" />
          </div>
        </div>
        <div className="flex max-md:flex-col gap-10">
          <VePointDescriptionSection title="Staking Points">
            <p>
              <b>Base Points:</b> Users earn base points for every 1$ of veMETIS
              token staked
            </p>
            <p>
              <b>Base Points:</b> Users earn base points for every 1$ of veMETIS
              token staked
            </p>
            <p>
              <b>Base Points:</b> Users earn base points for every 1$ of veMETIS
              token staked
            </p>
          </VePointDescriptionSection>
          <VePointDescriptionSection title="Referral points">
            <p>
              <b>Base Referral Points:</b> Points earned for each successful
              referral.
            </p>
            <p>
              <b>Referral Bonus: </b> Additional points if the referred user
              stakes METIS tokens.
            </p>
            <p>
              <b>Formula:</b> Referral Points = User’s Staking Points X Referral
              Percentage
            </p>
          </VePointDescriptionSection>
        </div>
        <div className="bg-white p-11 max-md:p-5 rounded-2xl space-y-10">
          <div className="flex items-center gap-8">
            <img
              src="/velix-icon.png"
              alt="velix-icon"
              className="max-md:w-10 max-md:h-10"
            />
            <div className="font-space-grotesk">
              <h4 className="text-3xl font-bold max-md:text-xl">
                VePoints/VELIX Token
              </h4>
              <p className="text-base text-velix-gray max-md:text-sm">
                Claim VePoints after 3day
              </p>
            </div>
          </div>

          <div className="flex gap-10 max-md:flex-col max-md:gap-5">
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-md:text-sm text-xl text-velix-gray font-bold">
                  APR
                </div>
                <div className="max-md:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  19.77%
                </div>
              </CardContent>
            </Card>
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-md:text-sm text-xl text-velix-gray font-bold">
                  TVL
                </div>
                <div className="max-md:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  $2.45 B
                </div>
              </CardContent>
            </Card>
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-md:text-sm text-xl text-velix-gray font-bold">
                  POINTS
                </div>
                <div className="max-md:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  4536774
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex items-center gap-5 max-md:gap-2 max-md:flex-col">
            <VeInput
              className="w-full"
              withMaxButton
              placeholder="Points to claim"
              icon={
                <img
                  src="/velix-icon.png"
                  alt="velix-icon"
                  className="w-5 h-5"
                />
              }
              tokenName="VePoints"
            />
            <ArrowRightCircleFill className="fill-velix-blue w-16 h-16 max-md:w-5 max-md:h-5 max-md:rotate-90" />
            <VeInput
              disabled
              inputFieldClassName="text-right disabled:opacity-100"
              className="w-full flex-row-reverse"
              placeholder="0.00"
              icon={
                <img
                  src="/velix-token.png"
                  alt="velix-icon"
                  className="w-5 h-5"
                />
              }
              tokenName="VELIX Token"
            />
            <Button className="py-8 w-fit px-24 max-md:py-5 max-md:w-full max-md:mt-3 font-space-grotesk">
              Claim
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
