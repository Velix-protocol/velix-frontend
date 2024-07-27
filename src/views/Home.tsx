import AuditsDoc from "@/components/landingPage/AuditsDoc";
import Community from "@/components/landingPage/Community";
import FAQ from "@/components/landingPage/FAQ";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import HowItWorks from "@/components/landingPage/HowItWorks";
import HowToGetVelixPoints from "@/components/landingPage/HowToGetPoints";
// import SequencerStaking from "@/components/section/SequencerStaking";
import VelixProperties from "@/components/landingPage/VelixProperties";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HowItWorks />
        <VelixProperties />
        {/* <SequencerStaking /> */}
        <FAQ />
        <AuditsDoc />
        <HowToGetVelixPoints />
        <Community />
        <Footer />
      </div>
    </>
  );
}
