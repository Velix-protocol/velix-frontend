import Community from "@/components/section/Community";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import HowItWorks from "@/components/section/HowItWorks";
import VelixProperties from "@/components/section/VelixProperties";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HowItWorks />
        <VelixProperties />
        {/*<SequencerStaking />*/}
        <Community />
        <Footer />
      </div>
    </>
  );
}
