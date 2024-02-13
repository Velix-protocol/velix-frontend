import Section from "@/components/layouts/Section";
import { Button } from "../button";

export default function AppHeader() {
  return (
    <Section className="py-5 px-5 fixed top-0 left-0 right-0 bg-velix-slate-blue z-50">
      <div className="flex items-center justify-between">
        {/* <div className="flex items-center space-x-10 text-base">
          <VelixBlackLogo />
          <p className="flex items-center font-space-grotesk">
            <span>
              <WalletIcon className="fill-velix-primary w-11 h-11" />
            </span>
            <span className="text-velix-gray font-bold text-base">Stake</span>
          </p>
          <p className="flex items-center gap-3 font-space-grotesk">
            <span>
              <UnstakeIcon className="fill-velix-gray w-7 h-7" />
            </span>
            <span className="text-velix-gray font-bold text-base">Unstake</span>
          </p>
          <p className="flex items-center gap-3 font-space-grotesk">
            <span>
              <TwigLightIcon className="fill-velix-gray w-7 h-7" />
            </span>
            <span className="text-velix-gray font-bold text-base">Mint</span>
          </p>
          <p className="flex items-center gap-3 font-space-grotesk">
            <span>
              <DownloadIcon className="fill-velix-gray w-7 h-7" />
            </span>
            <span className="text-velix-gray font-bold text-base">Mint</span>
            <span className="bg-velix-slate-green/10 text-velix-slate-green text-[10px] font-space-grotesk px-2 rounded-md">
              Coming soon
            </span>
          </p>
        </div> */}
        <AppHeader />
        <Button className="bg-velix-primary hover:bg-velix-yellow hover:text-black px-10 py-7 font-bold font-space-grotesk text-sm">
          Connect Wallet
        </Button>
      </div>
    </Section>
  );
}
