import HeroIcon from "@/components/svg/Hero.svg?react";
import Section from "../layouts/Section";
import Header from "../ui/velix/Header";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <Section className="bg-velix-primary to-[#E8B94E]/90 px-5">
      <Header />
      <div className="lg:grid grid-cols-2 justify-between py-10">
        <div className="font-space-grotesk md:mt-20 flex flex-col">
          <h2 className="font-bold max-sm:text-5xl text-[4rem] sm:leading-[5rem] text-white">
            Stake your METIS, earn rewards.
          </h2>
          <p className="text-white mt-2">Simplified liquid staking on METIS</p>
          <Button className="bg-velix-yellow px-10 w-fit mt-16">
            Stake now
          </Button>
        </div>
        <HeroIcon className="hidden lg:block scale-75 xl:scale-100 ml-auto transition-transform" />
      </div>
    </Section>
  );
}
