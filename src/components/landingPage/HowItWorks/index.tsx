import Section from "../../layouts/Section";
import VelixEclips from "@/components/ui/velix/icons/VelixEclips";
import GradientBorder from "@/components/ui/velix/GradientBorder";
import StepsSpan from "@/components/ui/StepsSpan";
import DescTitle from "@/components/ui/DescTitle";
import HowItWorksCard from "./partials/HowItWorksCard";
import MeduimArrow from "@/components/ui/velix/icons/MeduimArrow";
import SmallArrow from "@/components/ui/velix/icons/SmallArrow";

export default function HowItWorks() {
  return (
    <Section className="py-28 px-5 max-md:pb-0 max-md:pt-10">
      <div className="relative">
        <VelixEclips className="absolute -top-24 dark:max-lg:-top-16 dark:max-lg:h-56 rotate-90 -z-[3] left-1/2 -translate-x-1/2 max-lg:w-20 max-lg:h-32" />
        <div className="items-center text-white rounded-lg relative overflow-hidden">
          <GradientBorder />
          <div className="bg-[#F5F7FF] dark:bg-[#1A1A1A] m-0.25 p-5 lg:p-16 rounded-lg relative overflow-hidden">
            <h2 className="font-space-grotesk text-black dark:text-white font-bold text-2xl lg:text-4xl text-center mt-5 md:mt-0 ">
              How Velix Works
            </h2>
            <div className="lg:flex md:flex sm:flex-row gap-4 items-start">
              <div className="flex lg:flex-col md:flex-col sm:flex-row justify-start md:mr-7 xl:mr-0 lg:-mr-0 mt-20 lg:w-1/3 gap-4">
                <div className="bg-velix-icon-bg dark:bg-velix-claim-gray2 p-2 rounded-lg w-fit h-fit flex items-start">
                  <StepsSpan
                    number={1}
                    className="lg:ml-12 ml-[-1rem] mt-[-1rem] lg:mt-[-1.4rem] font-normal"
                  />
                  <HowItWorksCard className="flex-shrink-0">
                    <img src="/svg/mintorstake.svg" alt="Mint/Stake" />
                  </HowItWorksCard>
                </div>
                <DescTitle
                  title="Mint/Stake"
                  description={
                    <>
                      Mint/stake tokens on <br />
                      your preferred chain
                    </>
                  }
                />
              </div>

              <img
                src="/svg/ArrowSteps1.svg"
                alt="Receive arrow"
                className="mt-[7.5rem] -ml-[20.5rem] xl:block hidden lg:hidden dark:hidden"
              />
              <img
                src="/svg/BigArrow-yellow.svg"
                alt="Receive arrow"
                className="mt-[7.5rem] w-auto h-auto -ml-[20.4rem] hidden dark:lg:hidden dark:md:hidden dark:sm:hidden dark:hidden dark:xl:block"
              />

              <SmallArrow className="ml-8 sm:block lg:hidden md:hidden fill-velix-blue dark:fill-velix-yellow" />
              <MeduimArrow className="-ml-[6rem] lg:-ml-[15rem] lg:mr-[0.2rem] mt-[7rem] w-[8rem]  md:block lg:block xl:hidden h-[auto] fill-velix-blue hidden dark:fill-velix-yellow" />

              <div className="flex lg:flex-col md:flex-col md:mr-2 lg:mr-0 sm:flex-row lg:mt-[rem] xl:mt-[15rem] md:mt-20 mb-5 gap-4">
                <div className="bg-velix-icon-bg dark:bg-velix-claim-gray2 lg:-ml-4 md:-ml-4 p-2 rounded-lg w-fit h-fit flex items-start">
                  <StepsSpan
                    number={2}
                    className="lg:ml-12 -ml-4 mr-16 -mt-4 lg:mt-[-1.3rem]"
                  />
                  <HowItWorksCard className="flex-shrink-0 px">
                    <img src="/svg/recieve.svg" alt="Receive" />
                  </HowItWorksCard>
                </div>
                <div className="md:-ml-4 -ml-0">
                  <DescTitle
                    title="Receive"
                    description={
                      <>
                        Receive veToken and <br />
                        get rewards and points
                      </>
                    }
                  />
                </div>
              </div>
              <img
                src="/svg/receive-arrow.svg"
                alt="Receive arrow"
                className="mt-[7.5rem] w-auto h-auto -ml-[7.8rem] xl:block hidden lg:hidden dark:hidden"
              />
              <img
                src="/svg/BigArrow-receive.svg"
                alt="Receive arrow"
                className="mt-[7.5rem] w-auto h-auto -ml-[7.7rem] hidden dark:lg:hidden dark:md:hidden dark:hidden dark:xl:block"
              />

              <SmallArrow className="ml-8 sm:block lg:hidden -mt-[1.2rem] md:hidden fill-velix-blue dark:fill-velix-yellow" />
              <MeduimArrow className="ml-[-5.4rem] lg:-ml-[7.6rem] mt-[7rem]  md:block xl:hidden lg:block w-[8rem] hidden fill-velix-blue dark:fill-velix-yellow" />

              <div className="flex lg:flex-col md:flex-col sm:flex-row items-center lg:mt-20 md:mt-20 md:-ml-4 lg:-ml-[1.3rem]">
                <StepsSpan
                  number={3}
                  className="lg:ml-[16.8rem] -ml-[0.3rem] md:-ml-[18rem] md:-mt-[0.6rem] lg:-mt-[0.8rem] mb-[17rem]"
                />
                <div className="flex sm:flex-col flex-col md:flex-row gap-3 lg:ml-1 md:-ml-[1rem] bg-velix-icon-bg dark:bg-velix-claim-gray2 p-2 rounded-lg">
                  <HowItWorksCard>
                    <img src="/svg/shoebillIcon.svg" alt="Shoebill Icon" />
                  </HowItWorksCard>
                  <HowItWorksCard>
                    <img
                      src="/svg/herculeProtocol.svg"
                      alt="Hercule Protocol"
                    />
                  </HowItWorksCard>
                  <HowItWorksCard>
                    <img src="/svg/ceresLogo.svg" alt="Ceres Logo" />
                  </HowItWorksCard>
                  <HowItWorksCard>
                    <img src="/svg/defipartener.svg" alt="DeFi Partner" />
                  </HowItWorksCard>
                </div>
                <div className="lg:mt-4 md:mt-4 -mt-[4rem] mb-[8rem] lg:px-4 lg:mr-0 md:mr-[9rem] md:ml-0 lg:-ml-[4.2rem] ml-4">
                  <DescTitle
                    title="Use veToken"
                    description={
                      <>
                        Do more with your LST on
                        <br /> DEFI platforms
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}