import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import FaucetImage from "@/components/ui/velix/icons/FaucetImage";
import { useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

export default function Faucet() {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isMobile) return;
    window.location.pathname = "/app/mint";
  }, [isMobile, navigate]);

  return (
    <Section className="h-[82dvh]">
      <div className="my-40 bg-velix-blue dark:bg-velix-black flex justify-between items-center p-24 rounded-xl">
        <div className="font-space-grotesk">
          <h2 className="font-bold text-6xl text-white dark:text-velix-dark-white">
            Claim your faucet
          </h2>
          <p className="text-white dark:text-velix-dark-white mt-4">
            You can only claim <b>0.5 METIS</b> every 24 hours
          </p>
          <Button className="bg-velix-yellow hover:bg-velix-yellow mt-10">
            Claim now
          </Button>
        </div>
        <FaucetImage />
      </div>
    </Section>
  );
}
