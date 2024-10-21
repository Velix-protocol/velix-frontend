import { FaCheckCircle } from "react-icons/fa";
import Section from "../layouts/Section";
import GradientBorder from "../ui/velix/GradientBorder";
import Title from "../ui/velix/Title";
import { VerticalBorderComponent } from "../ui/velix/VerticalBorder";
import { cn } from "@/utils/utils";

const steps = [
  "Stake METIS at Velix and earn 1x points <br/> everyday",
  "Supply at shoebill and earn additional 1x points <br/> everyday",
  "Invite friends to deposit and earn up to 20% <br/> more points everyday"
];

const HowToGetVelixPoints = () => {
  return (
    <Section className="mt-28 px-5">
      <div>
        <div className="font-space-grotesk">
          <Title
            containerClassName="items-center text-center"
            subTitleClassName="max-sm:max-w-full max-w-[60%]"
            name="Enjoy Velix Protocol Incentives with vPoints"
            subtitle="Accumulate vPoints redeemable for VELIX tokens by staking, and boost your earnings through first and second generation referrals. Earn additional points by providing liquidity and participating in governance voting."
          />
        </div>
        <div className="py-16 justify-center items-center dark:bg-velix-primary bg-transparent dark:rounded-lg">
          <div className="relative p-0.25 w-full">
            <GradientBorder className="rounded-[0.9375rem] z-0 via-white/35" />
            <div className="w-full grid max-md:grid-rows-2 md:grid-cols-2 h-fit max-md:py-4 py-20 px-10 flex-row items-center font-space-grotesk dark:bg-gradient-to-r to-[#313131] from-[#1D1D1D] rounded-[0.9375rem] overflow-hidden relative bg-velix-slate-blue">
              <div className="flex justify-center items-center h-fit">
                <img
                  src={"./svg/giftbox1.svg"}
                  alt="gift box"
                  className="scale-75 xl:scale-90"
                />
              </div>
              <div className="mt-[-2rem] md:mt-16 max-md:px-5">
                {steps.map((step, index) => (
                  <div
                    key={`${step}-${index}`}
                    className="flex items-stretch gap-y-10 space-x-5"
                  >
                    <div className="flex pt-1 gap-x-5 items-start">
                      <div className="flex flex-col justify-start items-center h-32">
                        <FaCheckCircle
                          className={cn(
                            "dark:text-primary w-6 h-6 text-velix-primary text-sm",
                            index === steps.length - 1 && "w-5 h-5"
                          )}
                        />
                        {index !== steps.length - 1 && (
                          <VerticalBorderComponent className="h-32 my-2" />
                        )}
                      </div>

                      <p
                        className="lg:text-lg text-md sm:text-sm my-0 py-0 -mt-1"
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HowToGetVelixPoints;
