import WalletIcon from "../ui/velix/icons/WalletIcon";
import UnstakeIcon from "../ui/velix/icons/UnstakeIcon";
import TwigLightIcon from "../ui/velix/icons/TwigLightIcon";
import AnalyticsIcon from "../ui/velix/icons/AnalyticsIcon";
import { NavLink, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import FaucetIcon from "../ui/velix/icons/FaucetIcon";
import ImageIcon from "../ui/velix/icons/ImageIcon";
import { cn, isApp } from "@/utils/utils";
import StartIcon from "../ui/velix/icons/StartIcon";
import MoreIcon from "../ui/velix/icons/MoreIcon";
import CloseIcon from "../ui/velix/icons/CloseIcon"; 

interface NavigationMenuCardProps {
  isNotFound: boolean;
  label: string;
  path: string;
  className?: string;
}

function NavigationMenuCard({
  isNotFound,
  path,
  label,
  className,
}: NavigationMenuCardProps) {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname.split("/").at(-1));

  useEffect(() => {
    setActivePath(pathname === "/" ? pathname : pathname.split("/").at(-1));
  }, [pathname]);

  const applyActiveStyles = useCallback(
    (path: string, option?: { className?: string }) => {
      if (isNotFound) {
        return (
          option?.className +
          " " +
          "text-velix-gray fill-velix-gray dark:fill-velix-icon-dark dark:text-velix-icon-dark"
        );
      }

      if (activePath === "/" && path === "mint" && isApp()) {
        return (
          option?.className +
          " " +
          "fill-velix-primary text-velix-primary dark:fill-velix-dark-white dark:text-velix-dark-white"
        );
      }

      if (activePath === path) {
        return (
          option?.className +
          " " +
          "fill-velix-primary text-velix-primary dark:fill-velix-dark-white dark:text-velix-dark-white"
        );
      }

      return (
        option?.className +
        " " +
        "text-velix-gray fill-velix-gray dark:fill-velix-icon-dark dark:text-velix-icon-dark"
      );
    },
    [activePath, isNotFound]
  );

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
        className={applyActiveStyles(path, { className: "w-[1.35rem] h-[1.35rem]" })}
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
    ),
    vepoints: (
      <StartIcon
        className={applyActiveStyles(path, { className: "w-5 h-5" })}
      />
    ),
  } as const;

  const getTo = (path: string) => {
    if (isApp()) {
      return path === "mint" ? "/" : path;
    }
    return isNotFound ? `/app/${path}` : path;
  };

  return (
    <NavLink
      relative="path"
      to={getTo(path)}
      className={cn(
        "flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk",
        className
      )}
    >
      <span>{menuIcons?.[path as keyof typeof menuIcons]}</span>
      <span
        className={applyActiveStyles(path, {
          className: "lg:font-bold text-[0.625rem] lg:text-base",
        })}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default function NavigationMenus({
  isNotFound = false,
}: {
  isNotFound?: boolean;
}) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMore = () => {
    setIsMoreOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-evenly lg:justify-normal items-center space-x-10 text-base">
      {isMoreOpen ? (
        <>
          <NavigationMenuCard path="redeem" label="Redeem" isNotFound={isNotFound} />
          <NavigationMenuCard path="dashboard" label="Dashboard" isNotFound={isNotFound} />
        </>
      ) : (
        <>
          <NavigationMenuCard path="mint" label="Mint" isNotFound={isNotFound} />
          <NavigationMenuCard path="stake" label="Stake" isNotFound={isNotFound} />
          <NavigationMenuCard path="unstake" label="Unstake" isNotFound={isNotFound} />
          <NavigationMenuCard path="redeem" label="Redeem" isNotFound={isNotFound} className="hidden lg:flex md:flex" />
          <NavigationMenuCard path="vepoints" label="VePoints" isNotFound={isNotFound} />
          <NavigationMenuCard path="dashboard" label="Dashboard" isNotFound={isNotFound} className="hidden lg:flex md:flex"/>

        </>
      )}

      <div className="lg:hidden md:hidden sm:flex flex-col items-center relative">
        <button
          onClick={toggleMore}
          className="flex flex-col justify-center items-center gap-1 lg:gap-3 font-space-grotesk text-velix-gray dark:text-velix-icon-dark"
        >
          {isMoreOpen ? (
            <CloseIcon className="w-5 h-5" />
          ) : (
            <MoreIcon className="w-5 h-5" />
          )}
          <span className="lg:font-bold text-[0.625rem] lg:text-base">
            {isMoreOpen ? "Close" : "More"}
          </span>
        </button>
      </div>
    </div>
  );
}
