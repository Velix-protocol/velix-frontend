import Section from "../layouts/Section";
import { Button } from "../ui/button";
import GradientBorder from "../ui/velix/GradientBorder";
import VelixEclips from "../ui/velix/icons/VelixEclips";

export default function Community() {
  return (
    <Section className="mt-6 px-5">
      <div className="relative">
        <div className="font-space-grotesk hidden lg:block">
          <h2 className="text-4xl font-bold text-center">Join our community</h2>
          <p className="text-velix-gray mt-5 text-center max-w-[28.5625rem] mx-auto">
            Explore Velix, engage with us, and shape our ecosystem's future.
          </p>
        </div>
        <div className="relative p-0.25 lg:mt-20">
          <GradientBorder className="rounded-[0.9375rem]" />
          <div className="bg-velix-black relative overflow-hidden flex justify-between items-center lg:py-10 lg:px-14 p-10 rounded-[15px]">
            <VelixEclips className="absolute -top-56 -right-20 dark:scale-[3] dark:opacity-50" />
            <div className="z-20">
              <p className="text-white font-bold font-space-grotesk text-4xl flex items-center gap-3">
                Velix community
              </p>
              <p className="text-white font-space-grotesk mt-5 font-light">
                Join our community and participate in discussions
              </p>
              <div className="flex gap-3 lg:gap-5 mt-5 max-lg:flex-col">
                <Button className="font-space-grotesk text-velix-black  px-10 py-6 bg-white hover:bg-white">
                  <a
                    href="https://discord.gg/v594pjBw5u"
                    target="_blank"
                    aria-label="Join the Discord community"
                  >
                    Join the discord
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="font-space-grotesk  px-10 bg-transparent border-white text-white hover:text-white hover:bg-transparent py-6"
                >
                  <a
                    href="https://t.me/velixprotocol"
                    target="_blank"
                    aria-label="Join Telegram"
                  >
                    Join Telegram
                  </a>
                </Button>
              </div>
            </div>
            <div className="items-center hidden lg:flex relative overflow-hidden">
              <img
                src="/svg/discord-image.svg"
                alt="discord image"
                className="lg:block hidden w-60 h-60"
              />
              <img
                src="/svg/telegram-community.svg"
                alt="discord image"
                className="lg:block hidden w-60 h-60 -ml-20"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
