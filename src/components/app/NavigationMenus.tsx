import WalletIcon from "../ui/velix/icons/WalletIcon";
import TwigLightIcon from "../ui/velix/icons/TwigLightIcon";
import AnalyticsIcon from "../ui/velix/icons/AnalyticsIcon";
import { NavLink, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import FaucetIcon from "../ui/velix/icons/FaucetIcon";
import ImageIcon from "../ui/velix/icons/ImageIcon";
import { cn, isApp } from "@/utils/utils";
import StartIcon from "../ui/velix/icons/StartIcon";
import useGetChain from "@/hooks/useGetChain.ts";

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
  className
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

  const defaultIconClassName = "w-5 h-5 xl:w-5 xl:h-5 lg:w-4 lg:h-4";

  const menuIcons = {
    mint: (
      <TwigLightIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
      />
    ),
    stake: (
      <WalletIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
      />
    ),
    redeem: (
      <FaucetIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
      />
    ),
    reward: (
      <ImageIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
      />
    ),
    dashboard: (
      <AnalyticsIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
      />
    ),
    vepoints: (
      <StartIcon
        className={applyActiveStyles(path, { className: defaultIconClassName })}
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
        "flex lg:flex-row flex-col justify-center items-center gap-1 lg:gap-1 xl:gap-3 font-space-grotesk",
        className
      )}
    >
      <span>{menuIcons?.[path as keyof typeof menuIcons]}</span>
      <span
        className={applyActiveStyles(path, {
          className: "lg:font-bold text-[0.625rem] xl:text-base lg:text-sm",
        })}
      >
        {label}
      </span>
    </NavLink>
  );
}

export default function NavigationMenus({
  isNotFound = false
}: {
  isNotFound?: boolean;
}) {
  const chain = useGetChain();

  return (
    <div className="flex justify-evenly lg:justify-normal items-center xl:space-x-10 lg:space-x-6 text-base">
        <>
          <NavigationMenuCard
            path="stake"
            label="Stake"
            isNotFound={isNotFound}
          />
          <NavigationMenuCard
            path="redeem"
            label="Redeem"
            isNotFound={isNotFound}
            className="lg:flex md:flex"
          />
          <NavigationMenuCard
            path="vepoints"
            label="VePoints"
            isNotFound={isNotFound}
          />
          <NavigationMenuCard
            path="dashboard"
            label="Dashboard"
            isNotFound={isNotFound}
            className="lg:flex md:flex"
          />
        </>

    </div>
  );
}
