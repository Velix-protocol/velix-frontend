import React from "react";
import VelixLogo from "@/components/svg/velix-logo-group.svg";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useInView } from "react-intersection-observer";
import { Button } from "../button";

export default function Header() {
  const { ref, inView } = useInView();

  return (
    <div>
      <header ref={ref} className="flex justify-between items-center py-14">
        <VelixLogo />
        <Button className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow">
          Launch
        </Button>
      </header>

      <header
        className={`px-5 justify-between -top-full -translate-y-full fixed left-0 right-0 z-20 items-center py-5 transition-all duration-200 bg-velix-primary ${
          !inView ? "!top-0 !translate-y-0" : ""
        }`}
      >
        <div className="flex justify-between w-full max-w-5xl xl:max-w-7xl mx-auto relative">
          <VelixLogo />
          <Button className="font-space-grotesk bg-velix-yellow px-10 hover:bg-velix-yellow">
            Launch
          </Button>
        </div>
      </header>
    </div>
  );
}
