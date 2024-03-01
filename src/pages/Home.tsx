import Community from "@/components/section/Community";
import FAQ from "@/components/section/FAQ";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import HowItWorks from "@/components/section/HowItWorks";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <HowItWorks />
        {/* <VelixProperties /> */}
        <FAQ />
        {/*<SequencerStaking />*/}
        <Community />
        <Footer />
      </div>
    </>
  );
}
