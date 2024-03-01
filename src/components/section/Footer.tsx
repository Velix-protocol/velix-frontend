import VelixBlackLogo from "@/components/svg/VelixPrimaryLogoBlack";
import Section from "../layouts/Section";
import VelixBlueLogo from "../ui/velix/icons/VelixBlueLogo";
import XIcon from "../ui/velix/icons/XIcon";
import Discord from "../ui/velix/icons/Discord";
import Telegram from "../ui/velix/icons/Telegram";

export default function Footer() {
  return (
    <div>
      <Section className="bg-velix-slate-blue relative mt-28">
        <VelixBlueLogo className="w-32 h-32 bg-white p-5 rounded-full absolute left-0 right-0 mx-auto -mt-16" />

        <div className="grid md:grid-cols-2 md:justify-center px-5 gap-10 xl:grid-cols-3 py-24">
          <div>
            <VelixBlackLogo />
            <p className="text-velix-primary font-space-grotesk text-[1rem] mt-5">
              Simplified{" "}
              <b className="font-bold">
                staking
                <br /> on METIS
              </b>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-[1rem]">
              Liquid staking
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-[1rem]">
              <li className="cursor-pointer">What’s liquid staking</li>
              <li className="cursor-pointer">What can i earn</li>
              <li className="cursor-pointer">What are the risks</li>
            </ul>
          </div>

          {/*<div className="flex flex-col gap-6">*/}
          {/*  <h2 className="font-bold font-space-grotesk text-[1rem]">*/}
          {/*    Sequencer staking*/}
          {/*  </h2>*/}
          {/*  <ul className="font-space-grotesk text-velix-gray text-[1rem]">*/}
          {/*    <li className="cursor-pointer">What’s sequencer staking</li>*/}
          {/*    <li className="cursor-pointer">What can i earn</li>*/}
          {/*    <li className="cursor-pointer">What are the costs</li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-[1rem]">
              Protocol
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-[1rem]">
              <li className="cursor-pointer">About the protocol</li>
              <li className="cursor-pointer">Why Velix?</li>
              <li className="cursor-pointer">Security</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-velix-primary mb-2">
        <div className="px-5 w-full flex justify-between items-center py-5">
          <span className="text-white font-space-grotesk">
            © 2023 - 2024 Velix
          </span>
          <ul className="flex items-center gap-3">
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <a href="https://twitter.com/velixprotocol" target="_blank">
                <XIcon className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <a href="https://discord.gg/4BZV7W5P">
                <Discord className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <a href="https://t.me/velixprotocol">
                <Telegram className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
