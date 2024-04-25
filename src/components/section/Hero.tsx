import Section from "../layouts/Section";
import Header from "../Header";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <Section className="bg-velix-primary px-5">
      <Header />
      <div className="flex flex-col items-center lg:grid lg:-mt-28 h-fit lg:grid-cols-2 justify-between lg:py-28 max-lg:mt-8">
        <div className="font-space-grotesk lg:mt-20 flex flex-col max-lg:items-center max-lg:px-5">
          <h2 className="font-bold max-sm:text-3xl max-lg:text-center text-[4rem] lg:leading-[5rem] text-white">
            Stake your METIS earn rewards.
          </h2>
          <p className="text-white max-lg:text-xs max-lg:text-center mt-2">
            Simplifying liquid staking on Metis
          </p>
          <Button
            onClick={() => navigate("/app/stake")}
            className="bg-velix-yellow hover:bg-velix-yellow px-10 w-fit mt-4 lg:mt-16"
          >
            Stake now
          </Button>
        </div>
        <img
          src="/svg/hero-image.svg"
          alt="hero image"
          className="max-md:w-96 max-md:h-96 xl:scale-100 lg:ml-auto transition-transform"
        />
      </div>
    </Section>
  );
}
