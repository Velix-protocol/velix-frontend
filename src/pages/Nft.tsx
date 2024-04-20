import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import SuperNft from "@/components/svg/superNft.svg?react";
import { Check } from "lucide-react";
import { cn } from "@/utils/utils";

function Requirement({
  title,
  isFullfilled
}: {
  title: string;
  isFullfilled: boolean;
}) {
  return (
    <p className="flex items-center gap-2">
      <span className="bg-white dark:bg-velix-dark-white dark:text-velix-primary rounded-full p-0.5">
        <Check className={cn("w-4 h-4", isFullfilled ? "" : "")} />
      </span>
      <p className="text-white">{title}</p>
    </p>
  );
}

export default function Nft() {
  return (
    <Section className="h-[82dvh]">
      <div className="my-40 bg-velix-blue dark:bg-velix-black flex justify-between items-center p-24 rounded-xl">
        <div className="font-space-grotesk">
          <h2 className="font-bold text-4xl text-white dark:text-velix-dark-white">
            Velix superstar NFT claim
          </h2>
          <p className="text-white dark:text-velix-dark-white mt-4">
            Complete the steps below
          </p>
          <div className="mt-10 flex flex-col gap-5">
            <Requirement title="Submit Metis to mint VeMetis" isFullfilled />
            <Requirement title="Stake VeMetis to get sveMetis" isFullfilled />
            <Requirement title="Unstake sveMetis to get VeMetis" isFullfilled />
            <Requirement title="Claim your reward" isFullfilled />
          </div>
          <Button className="bg-velix-yellow hover:bg-velix-yellow mt-10 px-20">
            Claim now
          </Button>
        </div>
        <SuperNft />
      </div>
    </Section>
  );
}
