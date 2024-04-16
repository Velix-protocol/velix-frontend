/* eslint-disable @typescript-eslint/no-explicit-any */
import classnames from "classnames";

export default function Steps({
  currentStep,
  step1Success,
  step2Sucesss,
  step1Error,
  step2Error
}: {
  currentStep: 1 | 2;
  step1Success: boolean;
  step2Sucesss: boolean;
  step1Error: any;
  step2Error: any;
}) {
  const step1Classnames = classnames(
    "text-white h-8 w-8 flex justify-center items-center rounded-full",
    {
      "bg-red-600": step1Error,
      "bg-velix-green !text-white": !step1Error && step1Success,
      "bg-gray-200 dark:bg-white/40 !text-velix-primary dark:!text-white":
        !step1Error && !step1Success
    }
  );

  const stepsLinkClassnames = classnames("h-1 w-32", {
    "bg-gray-200 dark:bg-white/40":
      currentStep === 1 && !step1Error && !step1Success,
    "from-velix-green bg-gradient-to-r to-gray-200 dark:to-white/40":
      currentStep === 2 && step1Success && !step2Error,
    "from-red-600 bg-gradient-to-r to-gray-200 dark:to-white/40":
      currentStep === 1 && step1Error && !step2Sucesss,
    "!from-red-600 bg-gradient-to-l !to-velix-green":
      currentStep === 2 && step2Error,
    "!from-velix-green bg-gradient-to-l !to-velix-green":
      currentStep === 2 && !step2Error && step2Sucesss
  });

  const step2Classnames = classnames(
    "h-8 w-8 flex justify-center items-center p-2 rounded-full",
    {
      "bg-red-600 !text-white": step2Error,
      "bg-velix-green !text-white": !step2Error && step2Sucesss,
      "bg-gray-200 dark:bg-white/40 !text-velix-primary dark:!text-white":
        !step2Error && !step2Sucesss
    }
  );

  return (
    <div className="flex gap-0 items-center w-fit h-fit mt-8">
      <p className={step1Classnames}>1</p>
      <div className={stepsLinkClassnames} />
      <p className={step2Classnames}>2</p>
    </div>
  );
}
