import Hap from "@/components/svg/wallet-image.svg?react";
import Section from "../layouts/Section";
import { Button } from "../ui/button";

export default function SequencerStaking() {
  return (
    <Section className="mt-24 px-5">
      <div className="mt-24 grid lg:grid-cols-2">
        <div className="hidden lg:block">
          <Hap className="lg:scale-100 scale-75" />
        </div>
        <div className="flex flex-col justify-center lg:ml-20">
          <h2 className="font-space-grotesk font-bold text-4xl flex flex-col">
            Sequencer staking
            <span className="text-velix-gray text-base font-normal mt-8 max-w-[24.9375rem]">
              Find the veMETIS & VL token on the most reputable and respected
              names in decentralised finance.
            </span>
          </h2>
          <div className="mt-10 font-space-grotesk">
            <p className="flex items-end gap-4">
              <span className="font-bold text-5xl text-velix-primary">N/A</span>
              <span className="font-medium text-velix-gray">APR</span>
            </p>
            <p className="font-bold text-base pt-2 flex flex-col mt-10">
              Based on 7 days average
              <span className="font-light">+ VL rewards</span>
            </p>
            <Button
              variant="outline"
              className="border-black !border-[0.5px] mt-10 px-10  font-bold text-base"
            >
              Find more
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
