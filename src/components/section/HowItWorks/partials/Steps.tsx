import Wallet from "@/components/svg/WalletIcon";
import VelixFilledLogo from "@/components/svg/Velix";
import World from "@/components/svg/WorldIcon";
import StepLink from "./StepLink";
import TwigLightIcon from "@/components/ui/velix/icons/TwigLightIcon";

const STEPS = [
  {
    title: "Mint",
    description:
      "Mint VeMETIS with METIS to participate in liquid staking VeMETIS is a liquid staking derivative of METIS.",
    icon: (
      <TwigLightIcon className="w-8 h-8 fill-black bg-white p-2 rounded-full" />
    )
  },
  {
    title: "Do More with veMetis",
    description:
      "Stake any amount of your tokens to access daily staking rewards",
    icon: <World className="w-8 h-8 fill-black bg-white p-1 rounded-full" />
  },
  {
    title: "Receive veMETIS",
    description:
      "Receive liquid veMETIS and start to receive rewards in Real-time",
    icon: <VelixFilledLogo className="fill-white" />
  },
  {
    title: "Stake",
    description:
      "Stake any amount of your tokens to access daily staking rewards",
    icon: <Wallet className="fill-black" />
  }
];

export default function Steps() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-16">
      {STEPS.map((step, index, steps) => {
        return (
          <div key={`stpes-${index}`} className="relative w-full h-full">
            {steps.length - 1 !== index && <StepLink />}
            <div className="font-space-grotesk w-full h-full flex gap-7 lg:gap-9 rounded-[0.9375rem]">
              <span className="w-fit h-fit">{step.icon}</span>
              <div className="flex flex-col justify-start max-w-[26.8125rem]">
                <h3 className="font-bold text-[1.25rem] lg:text-2xl">
                  {step.title}
                </h3>
                <p className="text-white text-base mt-2">{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
