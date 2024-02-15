import React from "react";
import WalletIcon from "./icons/WalletIcon";
import UnstakeIcon from "./icons/UnstakeIcon";
import TwigLightIcon from "./icons/TwigLightIcon";
import DownloadIcon from "./icons/DownloadIcon";

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
          <DownloadIcon className="fill-velix-gray w-5 h-5" />
        </span>
        <span className="text-velix-gray flex flex-col items-center lg:font-bold text-[0.625rem] lg:text-base">
          Mint
        </span>
        <span className="bg-velix-slate-green/10 hidden lg:block text-velix-slate-green text-[10px] font-space-grotesk px-2 rounded-md">
          Coming soon
        </span>
      </p>
    </div>
  );
}
