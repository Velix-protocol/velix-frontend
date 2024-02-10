import VelixBlackLogo from "@/components/svg/Velix-primary-logo-black.svg";
import Section from "../layouts/Section";
import VelixBlueLogo from "../ui/VelixBlueLogo";
import XIcon from "../ui/XIcon";
import Discord from "../ui/Discord";
import Telegram from "../ui/Telegram";

export default function Footer() {
  return (
    <div>
      <Section className="bg-velix-slate-blue relative mt-28">
        <VelixBlueLogo className="w-32 h-32 bg-white p-5 rounded-full absolute left-0 right-0 mx-auto -mt-16" />

        <div className="grid md:grid-cols-2 md:justify-center px-5 gap-10 xl:grid-cols-4 py-24">
          <div>
            <VelixBlackLogo />
            <p className="text-velix-primary font-space-grotesk text-xl mt-5">
              Simplified <b className="font-bold">staking</b>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-xl">
              Help & Support
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-xl">
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">Safety & Security</li>
              <li className="cursor-pointer">Trustiffy Foundation</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-xl">
              Help & Support
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-xl">
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">Safety & Security</li>
              <li className="cursor-pointer">Trustiffy Foundation</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-bold font-space-grotesk text-xl">
              Help & Support
            </h2>
            <ul className="font-space-grotesk text-velix-gray text-xl">
              <li className="cursor-pointer">Help & Support</li>
              <li className="cursor-pointer">Safety & Security</li>
              <li className="cursor-pointer">Trustiffy Foundation</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="bg-velix-primary">
        <div className="px-5 w-full flex justify-between items-center py-5">
          <span className="text-white font-space-grotesk">
            © 2023 - 2024 Velix
          </span>
          <ul className="flex items-center gap-3">
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <XIcon className="w-6 h-6" />
            </li>
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <Discord className="w-6 h-6" />
            </li>
            <li className="bg-white cursor-pointer p-2 rounded-full w-fit">
              <Telegram className="w-6 h-6" />
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
