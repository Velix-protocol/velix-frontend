import React from "react";
import VelixBlackLogo from "@/components/svg/Velix-primary-logo-black.svg";
import WalletIcon from "./icons/WalletIcon";
import UnstakeIcon from "./icons/UnstakeIcon";
import TwigLightIcon from "./icons/TwigLightIcon";
import DownloadIcon from "./icons/DownloadIcon";

export default function BottomBar() {
  return (
    <div className="flex items-center space-x-10 text-base">
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
    </div>
  );
}
