import WalletIcon from "./ui/velix/icons/WalletIcon";
import UnstakeIcon from "./ui/velix/icons/UnstakeIcon";
import TwigLightIcon from "./ui/velix/icons/TwigLightIcon";
import AnalyticsIcon from "./ui/velix/icons/AnalyticsIcon";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import FaucetIcon from "./ui/velix/icons/FaucetIcon";
import ImageIcon from "./ui/velix/icons/ImageIcon";
import { cn } from "@/utils/utils";

function NavigationMenuCard({
  isNotFound,
  path,
  label,
  className
}: {
  isNotFound: boolean;
  label: string;
  path: string;
  className?: string;
}) {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname.split("/").at(-1));

  useEffect(() => {
    setActivePath(pathname.split("/").at(-1));
  }, [pathname]);

  const applyActiveStyles = (path: string, option?: { className?: string }) => {
    if (isNotFound)
      return (
        option?.className +
        " " +
        "text-velix-gray fill-velix-gray dark:fill-velix-icon-dark dark:text-velix-icon-dark"
      );
    if (activePath === path)
      return (
        option?.className +
        " " +
        "fill-velix-primary text-velix-primary dark:fill-velix-dark-white dark:text-velix-dark-white"
      );
    return (
      option?.className +
      " " +
      "text-velix-gray fill-velix-gray dark:fill-velix-icon-dark dark:text-velix-icon-dark"
    );
  };

  const menuIcons = {
    mint: (
      <TwigLightIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
    stake: (
      <WalletIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
    unstake: (
      <UnstakeIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
    redeem: (
      <FaucetIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
    reward: (
      <ImageIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
    dashboard: (
      <AnalyticsIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    )
  } as const;

  return (
    <NavLink
      relative="path"
      to={isNotFound ? `/app/${path}` : path}
      className={cn(
        "flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk",
        className
      )}
    >
      <span>{menuIcons?.[path as never]}</span>
      <span
        className={applyActiveStyles(path, {
          className: "lg:font-bold text-[0.625rem] lg:text-base"
        })}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default function BottomBar({
  isNotFound = false
}: {
  isNotFound?: boolean;
}) {
  return (
    <div className="flex justify-evenly lg:justify-normal items-center space-x-10 text-base">
      <NavigationMenuCard path="mint" label="Mint" isNotFound={isNotFound} />
      <NavigationMenuCard path="stake" label="Stake" isNotFound={isNotFound} />
      <NavigationMenuCard
        path="unstake"
        label="Unstake"
        isNotFound={isNotFound}
      />
      {/* <NavigationMenuCard
        path="redeem"
        label="Redeem"
        isNotFound={isNotFound}
        className=""
      />
      <NavigationMenuCard
        className="max-lg:hidden"
        path="reward"
        label="Reward"
        isNotFound={isNotFound}
      /> */}
      <NavigationMenuCard
        path="dashboard"
        label="Dashboard"
        isNotFound={isNotFound}
      />
    </div>
  );
}
