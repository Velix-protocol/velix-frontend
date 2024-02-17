import WalletIcon from "./icons/WalletIcon";
import UnstakeIcon from "./icons/UnstakeIcon";
import TwigLightIcon from "./icons/TwigLightIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";

export default function BottomBar() {
  return (
    <div className="flex justify-evenly lg:justify-normal items-center space-x-10 text-base">
      <p className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk">
        <span>
          <WalletIcon className="fill-velix-primary w-5 h-5" />
        </span>
        <span className="text-velix-gray lg:font-bold text-[0.625rem] lg:text-base">
          Stake
        </span>
      </p>
      <p className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk">
        <span>
          <UnstakeIcon className="fill-velix-gray w-5 h-5" />
        </span>
        <span className="text-velix-gray lg:font-bold text-[0.625rem] lg:text-base">
          Unstake
        </span>
      </p>
      <p className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk">
        <span>
          <TwigLightIcon className="fill-velix-gray w-5 h-5" />
        </span>
        <span className="text-velix-gray lg:font-bold text-[0.625rem] lg:text-base">
          Mint
        </span>
      </p>
      <p className="flex lg:flex-row relative flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk">
        <span>
          <AnalyticsIcon className="fill-velix-gray w-5 h-5" />
        </span>
        <span className="text-velix-gray flex flex-col items-center lg:font-bold text-[0.625rem] lg:text-base">
          Dashboard
        </span>
      </p>
    </div>
  );
}
