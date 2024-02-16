import Section from "../layouts/Section";
import { Button } from "../ui/button";

export default function Community() {
  return (
    <Section className="mt-16 px-5">
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
              Velix on discord
            </p>
            <p className="text-velix-gray font-space-grotesk mt-5 font-light">
              Join the community and ask question
            </p>
            <Button className="font-space-grotesk mt-5 px-10 bg-velix-primary hover:bg-velix-primary">
              Join the discord
            </Button>
          </div>

          <img
            src="/svg/discord-image.svg"
            alt="discord image"
            className="lg:block hidden w-60 h-60"
          />
        </div>
      </div>
    </Section>
  );
}
