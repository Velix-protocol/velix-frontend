import { FaCheckCircle } from "react-icons/fa";
import Section from "../layouts/Section";
import GradientBorder from "../ui/velix/GradientBorder";
import Title from "../ui/velix/Title";
import { VerticalBorderComponent } from "../ui/velix/VerticalBorder";
import { cn } from "@/utils/utils";

const steps = [
  "Stake METIS at Velix and earn 1x points everyday",
  "Supply at shoebill and earn additional 1x points everyday",
  "Invite friends too deposit and earn up to 20% more points everyday"
];

const HowToGetVelixPoints = () => {
  return (
    <Section className="mt-28 px-5">
      <div>
        <div className="font-space-grotesk">
          <Title
            containerClassName="items-center"
            name="How to earn points"
            subtitle="Learn how you can easily earn point"
          />
        </div>
        <div className="py-16 justify-center items-center dark:bg-velix-primary bg-transparent dark:rounded-lg">
          <div className="relative p-0.25 w-full">
            <GradientBorder className="rounded-[0.9375rem] z-0 via-white/35" />
            <div className="w-full grid max-md:grid-rows-2 md:grid-cols-2 h-fit py-20 px-10 flex-row items-center font-space-grotesk dark:bg-gradient-to-r to-[#313131] from-[#1D1D1D] rounded-[0.9375rem] overflow-hidden relative bg-velix-slate-blue">
              <div className="flex justify-center items-center h-fit">
                <img
                  src={"./svg/giftbox.svg"}
                  className="w-full lg:w-[25.8125rem] md:h-[28.25rem] -mt-14"
                  alt="git box"
                />
              </div>
              <div className="mt-16">
                {steps.map((step, index) => (
                  <div
                    key={`${step}-${index}`}
                    className="flex items-stretch gap-y-10 space-x-5"
                  >
                    <div className="flex pt-1 gap-x-5 items-start">
                      <div className="flex flex-col justify-start items-center h-32">
                        <FaCheckCircle
                          className={cn(
                            "dark:text-primary w-6 h-6 text-velix-primary",
                            index === steps.length - 1 && "w-5 h-5"
                          )}
                        />
                        {index !== steps.length - 1 && (
                          <VerticalBorderComponent className="h-32 my-2" />
                        )}
                      </div>

                      <p className="text-xl my-0 py-0 -mt-1">{step}</p>
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
