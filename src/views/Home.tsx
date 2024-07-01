import AuditsDoc from "@/components/section/AuditsDoc";
import Community from "@/components/section/Community";
import FAQ from "@/components/section/FAQ";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import HowItWorks from "@/components/section/HowItWorks";
// import SequencerStaking from "@/components/section/SequencerStaking";
import VelixProperties from "@/components/section/VelixProperties";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HowItWorks />
        <VelixProperties />
        {/* <SequencerStaking /> */}
        <FAQ />
        <AuditsDoc/>
        <Community />
        <Footer />
      </div>
    </>
  );
}
