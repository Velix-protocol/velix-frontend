/* eslint-disable react/no-array-index-key */
import React from "react";
import Wallet from "@/components/svg/wallet-icon.svg";
import VelixFilledLogo from "@/components/svg/velix.svg";
import World from "@/components/svg/world-icon.svg";
import VelixCard from "@/components/ui/velix/cards/VelixCard";

const STEPS = [
  {
    title: "Stake",
    description:
      "Stake any amount of your tokens to access daily staking rewards",
    icon: <Wallet />
  },
  {
    title: "Receive veMETIS",
    description:
      "Receive liquid veMETIS and start to receive rewards in Real-time",
    icon: <VelixFilledLogo />
  },
  {
    title: "Use Defi",
    description:
      "Use your veMETIS across DeFi to compound more to your daily staked rewards",
    icon: <World />
  }
];

export default function Steps() {
  return (
    <div className="grid lg:grid-cols-3 justify-center items-stretch gap-3 mt-16">
      {STEPS.map((step, index, steps) => {
        return (
          <VelixCard
            key={`steps-${index}`}
            title={step.title}
            icon={step.icon}
            description={step.description}
            hasStepsLink={steps.length - 1 !== index}
          />
        );
      })}
    </div>
  );
}
