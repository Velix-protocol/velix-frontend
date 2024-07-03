const STEPS = [
  {
    title: "1. Mint",
    description:
      "Mint veMETIS with  METIS . veMETIS gives you acess to Velix protocol and opportunity to participate in sequencer node staking."
  },
  {
    title: "2. Do More with veMETIS",
    description:
      "Stake veMetis to receive sveMETIS, accumulating staking rewards denominated in veMETIS."
  },
  {
    title: "3. Receive veMETIS",
    description:
      "Receive veMETIS Earn yield, liquidity pool rewards and protocol fees by deploying your veMetis to decentralized exchanges."
  },
  {
    title: "4. Stake",
    description:
      "Lend and Borrow Redeploy your sveMETIS across various lending protocols in the Metis ecosystem to maximize  your earnings"
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
