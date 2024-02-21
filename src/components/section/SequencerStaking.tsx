import Section from "../layouts/Section";

export default function SequencerStaking() {
  return (
    <Section className="mt-24 px-5">
      <div className="mt-24 flex flex-col items-center lg:grid lg:grid-cols-2">
        <div className="">
          <img
            src="/svg/wallet-image.svg"
            alt="hap"
            className="lg:scale-100 scale-75"
          />
        </div>
        <div className="flex flex-col justify-center max-lg:items-center lg:ml-20">
          <h2 className="font-space-grotesk font-bold text-[1.25rem] lg:text-4xl flex flex-col max-lg:items-center">
            Sequencer staking
            <span className="text-velix-gray text-base font-normal max-lg:text-center mt-8 max-w-[24.9375rem]">
              Find the veMETIS & VL token on the most reputable and respected
              names in decentralised finance.
            </span>
          </h2>
          <div className="mt-10 font-space-grotesk">
            <p className="flex max-lg:justify-center items-end gap-4">
              <span className="font-bold text-5xl text-velix-primary">N/A</span>
              <span className="font-medium text-velix-gray">APR</span>
            </p>
            <p className="font-bold text-base pt-2 flex lg:flex-col mt-10">
              Based on 7 days average
              <span className="font-light">+ VL rewards</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
