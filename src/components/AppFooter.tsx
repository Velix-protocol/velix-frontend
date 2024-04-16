import Section from "@/components/layouts/Section";
import Discord from "./ui/velix/icons/Discord";
import Telegram from "./ui/velix/icons/Telegram";
import VelixPrimaryBlackLogo from "./ui/velix/icons/VelixPrimaryBlackLogo";
import XIcon from "./ui/velix/icons/XIcon";
import { FaMedium } from "react-icons/fa6";

export default function AppFooter() {
  return (
    <Section className="lg:block hidden">
      <div className="flex justify-between absolute bottom-0 left-0 right-0 w-full items-center border-t-[0.5px] border-neutral-300 dark:border-velix-light-dark py-7">
        <div className="flex gap-5 items-center text-velix-gray font-space-grotesk">
          <VelixPrimaryBlackLogo className="fill-velix-gray dark:fill-velix-dark-white w-[4.25rem] h-4" />
          <p>© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <ul className="flex items-center gap-3">
          <li className="bg-velix-gray cursor-pointer p-2 rounded-full w-fit">
            <a href="https://twitter.com/velixprotocol" target="_blank">
              <XIcon className="w-4 h-4 fill-white" />
            </a>
          </li>
          <li className="bg-velix-gray cursor-pointer p-2 rounded-full w-fit">
            <a href="https://velixonmetis.medium.com" target="_blank">
              <FaMedium className="w-4 h-4 fill-white" />
            </a>
          </li>
          <li className="bg-velix-gray cursor-pointer p-2 rounded-full w-fit">
            <a href="https://discord.gg/v594pjBw5u" target="_blank">
              <Discord className="w-4 h-4 fill-white" />
            </a>
          </li>
          <li className="bg-velix-gray cursor-pointer p-2 rounded-full w-fit">
            <a href="https://t.me/velixprotocol" target="_blank">
              <Telegram className="w-4 h-4 fill-white" />
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
