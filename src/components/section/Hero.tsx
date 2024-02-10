import React from "react";
import HeroIcon from "@/components/svg/Hero.svg";
import Section from "../layouts/Section";
import Header from "../ui/velix/Header";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <Section className="bg-gradient-to-l from-velix-primary overflow-hidden via-velix-primary/70 to-[#E8B94E]/90 px-5">
      <Header />
      <div className="lg:grid grid-cols-2 justify-between py-10">
        <div className="font-space-grotesk md:mt-20 flex flex-col">
          <h2 className="font-bold max-sm:text-5xl text-[4rem] sm:leading-[5rem] text-white">
            Simplified liquid staking on METIS
          </h2>
          <Button className="bg-velix-primary px-10 w-fit mt-9">
            Stake now
          </Button>
        </div>
        <HeroIcon className="hidden lg:block scale-75 xl:scale-100 ml-auto transition-transform" />
      </div>
    </Section>
  );
}
