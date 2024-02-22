import Section from "../layouts/Section";
import { Button } from "../ui/button";

export default function Community() {
  return (
    <Section className="mt-20 px-5">
      <div className="relative">
        <div className="font-space-grotesk hidden lg:block">
          <h2 className="text-4xl font-bold text-center">Join our community</h2>
          <p className="text-velix-gray mt-5 text-center max-w-[28.5625rem] mx-auto">
            Learn more about Velix, chat with us and have your say in the future
            of the Velix ecosystem
          </p>
        </div>
        <div className="bg-velix-slate-blue flex justify-between items-center lg:py-10 lg:px-14 p-10 rounded-[15px] mt-16">
          <div>
            <p className="text-velix-primary font-bold font-space-grotesk text-4xl flex items-center gap-3">
              Velix community
            </p>
            <p className="text-velix-gray font-space-grotesk mt-5 font-light">
              Join our community and participate in discussions
            </p>
            <div className="flex gap-3 lg:gap-5 mt-5 max-lg:flex-col">
              <Button className="font-space-grotesk  px-10 py-6 bg-velix-primary hover:bg-velix-primary">
                Join the discord
              </Button>
              <Button
                variant="outline"
                className="font-space-grotesk  px-10 bg-transparent border-velix-primary text-velix-primary hover:text-velix-primary hover:bg-transparent py-6"
              >
                Join Telegram
              </Button>
            </div>
          </div>
          <div className="items-center hidden lg:flex">
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
    </Section>
  );
}
