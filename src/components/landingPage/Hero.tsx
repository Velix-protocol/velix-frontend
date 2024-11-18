import Section from "../layouts/Section";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Hero() {
  return (
    <>
      <Header />
      <Section className="px-5 bg-velix-primary">
        <div className="flex flex-col items-center lg:grid lg:-mt-28 h-fit lg:grid-cols-2 justify-between lg:py-28 pt-5 -mt-2">
          <div className="font-space-grotesk lg:mt-20 flex flex-col max-lg:items-center max-lg:px-5">
            <h2 className="font-bold max-sm:text-3xl max-lg:text-center text-[4rem] lg:leading-[5rem] text-white">
              Stake your native token, Earn rewards.
            </h2>
            <p className="text-white max-lg:text-xs max-lg:text-center mt-2">
              Simplifying your liquid staking experience
            </p>
            <div className="flex items-center gap-2 max-sm:flex-col">
              <Link
                to="/app/stake"
                className="bg-velix-yellow hover:bg-velix-yellow text-velix-blue px-10 py-3 rounded-sm w-fit mt-4 max-sm:mt-10 lg:mt-16 font-semibold dark:bg-velix-dark-yellow dark:hover:bg-velix-dark-yellow dark:text-black"
              >
                Stake now
              </Link>
              <Link
                to="/app/dashboard"
                className="hidden border-2 border-velix-yellow text-white px-10 py-3 rounded-sm w-fit mt-4 max-sm:mt-10 lg:mt-16 font-semibold"
              >
                VePoints
              </Link>
            </div>
          </div>
          <img
            src="/svg/hero-image2.svg"
            alt="hero image"
            className="scale-75 xl:scale-90 transition-transform xl:ml-44 lg:ml-28 lg:mt-5 md:mt-12"
          />
        </div>
      </Section>
    </>
  );
}
