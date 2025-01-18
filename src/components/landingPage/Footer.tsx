import VelixBlackLogo from "@/components/ui/velix/icons/VelixPrimaryLogoBlack";
import Section from "../layouts/Section";
import VelixBlueLogo from "../ui/velix/icons/VelixBlueLogo";
import XIcon from "../ui/velix/icons/XIcon";
import Discord from "../ui/velix/icons/Discord";
import Telegram from "../ui/velix/icons/Telegram";
import { FaMedium } from "react-icons/fa6";
import VelixLogo from "@/components/ui/velix/icons/VelixLogoGroup";
import { RoundedEclipse } from "../ui/velix/icons/VelixEclips";
import ThemeButton from "../ui/velix/ThemeButton";

export default function Footer() {
  return (
    <div>
      <Section className="bg-velix-slate-blue relative mt-28">
        <div className="w-32 h-32 bg-white dark:bg-velix-primary p-5 rounded-full absolute left-0 right-0 mx-auto -mt-16">
          <VelixBlueLogo className="bg-velix-primary dark:bg-primary dark:fill-velix-primary fill-white rounded-full" />
          <RoundedEclipse className="rounded-full h-56 w-56 absolute -translate-x-1/2 -translate-y-[65%] left-1/2" />
        </div>
        <div className="grid md:grid-cols-2 md:justify-center px-5 gap-10 xl:grid-cols-3 py-24">
          <div>
            <VelixBlackLogo className="dark:hidden" />
            <VelixLogo className="dark:block hidden w-[5.625rem] h-[1.4375rem]" />
            <p className="text-velix-gray dark:text-white font-space-grotesk text-[1rem] mt-5">
              Simplifying Liquid Staking <br /> experience across networks
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-[1rem]">
              Learn
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-[1rem]">
            <li className="cursor-pointer">
              <a href="https://velixprotocol.medium.com/unveiling-velix-a-new-era-of-liquid-staking-on-metis-2afe6537f3c5" target="_blank">
              What is Velix Protocol</a>
            </li>
              <li className="cursor-pointer">
                <a href="https://docs.velix.io/quick-guides/getting-started-on-metis" target="_blank">
                What’s liquid staking</a>
              </li>
              <li className="cursor-pointer">
                <a href="https://velixprotocol.medium.com/" target="_blank">News</a>
                </li>
              <li className="cursor-pointer">
                <a href="https://docs.velix.io/" target="_blank">Docs</a> 
                </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-[1rem]">
              About
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-[1rem]">
              <li className="cursor-pointer">
                <a href=" https://velixprotocol.medium.com/" target="_blank">Blog</a>
              </li>
              <li className="cursor-pointer">
                <a href="https://docs.velix.io/contact-us/socials" target="_blank">Contact</a>               
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-velix-primary dark:bg-[#101010]">
        <div className="px-5 w-full flex justify-between items-center py-5">
          <span className="text-white dark:text-primary font-space-grotesk">
            © 2023 - {new Date().getFullYear()} Velix
          </span>
          <ThemeButton className="hidden lg:block" />
          <ul className="flex items-center gap-3">
            <li className="bg-white dark:bg-primary cursor-pointer p-2 rounded-full w-fit">
              <a href="https://twitter.com/velixprotocol" target="_blank">
                <XIcon className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
            <li className="bg-white cursor-pointer p-2 dark:bg-primary rounded-full w-fit">
              <a href="https://velixonmetis.medium.com" target="_blank">
                <FaMedium className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
            <li className="bg-white cursor-pointer p-2 dark:bg-primary rounded-full w-fit">
              <a href="https://discord.gg/v594pjBw5u" target="_blank">
                <Discord className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
            <li className="bg-white cursor-pointer p-2 rounded-full dark:bg-primary w-fit">
              <a href="https://t.me/velixprotocol" target="_blank">
                <Telegram className="w-4 h-4 fill-velix-primary" />
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
