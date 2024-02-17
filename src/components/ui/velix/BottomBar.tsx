import WalletIcon from "./icons/WalletIcon";
import UnstakeIcon from "./icons/UnstakeIcon";
import TwigLightIcon from "./icons/TwigLightIcon";
import AnalyticsIcon from "./icons/AnalyticsIcon";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BottomBar() {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname.split("/").at(-1));

  useEffect(() => {
    setActivePath(pathname.split("/").at(-1));
  }, [pathname]);

  const applyActiveStyles = (path: string, option?: { className?: string }) => {
    if (activePath === path)
      return option?.className + " " + "fill-velix-primary text-velix-primary";
    return option?.className + " " + "text-velix-gray fill-velix-gray";
  };

  return (
    <div className="flex justify-evenly lg:justify-normal items-center space-x-10 text-base">
      <NavLink
        relative="path"
        to="."
        className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk"
      >
        <span>
          <WalletIcon
            className={applyActiveStyles("app", { className: "w-5 h-5" })}
          />
        </span>
        <span
          className={applyActiveStyles("app", {
            className: "lg:font-bold text-[0.625rem] lg:text-base"
          })}
        >
          Stake
        </span>
      </NavLink>
      <NavLink
        relative="path"
        to="unstake"
        className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk"
      >
        <span>
          <UnstakeIcon
            className={applyActiveStyles("unstake", { className: "w-5 h-5" })}
          />
        </span>
        <span
          className={applyActiveStyles("unstake", {
            className: "lg:font-bold text-[0.625rem] lg:text-base"
          })}
        >
          Unstake
        </span>
      </NavLink>
      <NavLink
        relative="path"
        to="mint"
        className="flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk"
      >
        <span>
          <TwigLightIcon
            className={applyActiveStyles("mint", { className: "w-5 h-5" })}
          />
        </span>
        <span
          className={applyActiveStyles("mint", {
            className: "lg:font-bold text-[0.625rem] lg:text-base"
          })}
        >
          Mint
        </span>
      </NavLink>
      <NavLink
        relative="path"
        to="dashboard"
        className="flex lg:flex-row relative flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk"
      >
        <span>
          <AnalyticsIcon
            className={applyActiveStyles("dashboard", { className: "w-5 h-5" })}
          />
        </span>
        <span
          className={applyActiveStyles("dashboard", {
            className: "lg:font-bold text-[0.625rem] lg:text-base"
          })}
        >
          Dashboard
        </span>
      </NavLink>
    </div>
  );
}
