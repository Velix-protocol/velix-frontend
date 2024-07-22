const STEPS = [
  {
    title: "1. Mint veMETIS Tokens",
    description:
      "Mint veMETIS by depositing METIS tokens. veMETIS represents a liquid staking derivative of METIS."
  },
  {
    title: "2. Stake veMETIS for sveMETIS Rewards",
    description:
      "Stake veMetis to receive sveMETIS, accumulating staking rewards denominated in veMETIS."
  },
  {
    title: "3. Earn Rewards with veMETIS",
    description:
      "Earn yield, liquidity pool rewards and protocol fees by deploying your veMetis while your original METIS earns rewards."
  },
  {
    title: "4. Use veMETIS in DeFi Protocols",
    description:
      "Use veMETIS across various DeFi protocols in the Metis ecosystem to maximize your rewards."
  }
];


export default function Steps() {
  return (
    <div className="grid z-20 grid-cols-1 md:grid-cols-2 md:grid-rows-2 justify-center items-center gap-5 mt-5 md:mt-16">
      {STEPS.map((step, index) => {
        return (
          <div
            key={`stpes-${index}`}
            className="relative w-full h-full bg-[#D9D9D9]/10 p-10 rounded-md"
          >
            {/* {steps.length - 1 !== index && <StepLink />} */}
            <div className="font-space-grotesk w-full h-full rounded-[0.9375rem]">
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
