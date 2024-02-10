import StepLink from "@/components/section/HowItWorks/partials/StepLink";
import React, { ReactElement } from "react";

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
    <div className="relative w-full h-full">
      {hasStepsLink && <StepLink />}
      <div className="bg-velix-slate-blue font-space-grotesk w-full h-full p-9 flex gap-9 rounded-[0.9375rem]">
        <span className="w-fit h-fit">{icon}</span>
        <div className="flex flex-col justify-start">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-velix-gray text-base mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
