import React from "react";
import LandingIcon from "@/components/svg/landing.svg";
import Section from "../layouts/Section";
import Header from "../ui/velix/Header";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-velix-primary overflow-hidden via-velix-primary/40 to-[#E8B94E]/20 px-5">
      <Header />
      <div className="lg:grid grid-cols-2 py-20">
        <div className="font-space-grotesk flex flex-col">
          <h2 className="font-bold max-sm:text-5xl text-[64px] sm:leading-[80px] text-white">
            Simplified liquid staking on METIS
          </h2>
          <Button className="bg-velix-yellow px-10 w-fit mt-9">
            Stake now
          </Button>
        </div>
        <LandingIcon className="hidden lg:block scale-75 xl:scale-100 transition-transform" />
      </div>
    </Section>
  );
}
