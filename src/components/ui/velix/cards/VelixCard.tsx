import StepLink from "@/components/landingPage/HowItWorks/partials/StepLink";
import { ReactElement } from "react";

type VelixCardProps = {
  icon: ReactElement;
  title: string;
  description: string;
  hasStepsLink?: boolean;
};

export default function VelixCard({
  icon,
  title,
  description,
  hasStepsLink = false
}: VelixCardProps) {
  return (
    <div className="relative w-full h-full overflow-hidden dark:border dark:border-white/10 dark:rounded-[0.9375rem]">
      {hasStepsLink && <StepLink />}
      <div className="from-velix-slate-blue via-velix-slate-blue to-velix-slate-blue bg-gradient-to-l dark:from-velix-slate-blue dark:via-transparent dark:to-transparent font-space-grotesk w-full h-full p-9 flex gap-9 rounded-[0.9375rem]">
        <span className="w-fit h-fit">{icon}</span>
        <div className="flex flex-col justify-start">
          <h3 className="font-bold lg:text-2xl text-[1.25rem]">{title}</h3>
          <p className="text-velix-gray text-base mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
