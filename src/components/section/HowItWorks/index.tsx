import Section from "../../layouts/Section";
import Steps from "./partials/Steps";
import DefiIntegration from "./partials/DefiIntegration";
import VelixEclips from "@/components/ui/velix/icons/VelixEclips";
import GradientBorder from "@/components/ui/velix/GradientBorder";

export default function HowItWorks() {
  return (
    <Section className="py-28 px-5 max-md:pb-0 max-md:pt-10">
      <div className="relative">
        <VelixEclips className="absolute -top-24 dark:max-lg:-top-16 dark:max-lg:w-80 dark:max-lg:h-56 rotate-90 -z-[3] left-1/2 -translate-x-1/2 max-lg:w-20 max-lg:h-32" />
        <div className="items-center text-white rounded-lg relative overflow-hidden">
          <GradientBorder />
          <div className="bg-[#1E1E1E] dark:bg-velix-black m-0.25 p-5 lg:p-16 rounded-lg relative overflow-hidden">
            <h2 className="font-space-grotesk font-bold text-2xl lg:text-4xl text-center mt-5 md:mt-0 lg:text-start">
              How Velix works
            </h2>
            <Steps />
            <VelixEclips className="absolute -top-64 -right-44 dark:w-full dark:h-full dark:scale-[2.5] dark:rotate-12 dark:opacity-35 dark:-right-[30rem] dark:-top-32" />
          </div>
        </div>
      </div>
      <div className="relative lg:mt-28 dark:max-lg:mt-28 p-0.25 rounded-lg">
        <VelixEclips className="absolute -top-24 dark:max-lg:-top-16 dark:max-lg:w-80 dark:max-lg:h-56 rotate-90 -z-[3] left-1/2 -translate-x-1/2 max-lg:w-20 max-lg:h-32" />
        <GradientBorder className="rounded-lg" />
        <DefiIntegration />
      </div>
    </Section>
  );
}
