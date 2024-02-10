import Community from "@/components/section/Community";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import HowItWorks from "@/components/section/HowItWorks";
import SequencerStaking from "@/components/section/SequencerStaking";
import VelixProperties from "@/components/section/VelixProperties";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Velix Protocol</title>
        <meta name="description" content="Liquidity staking protocol" />
        <meta name="og:image" content="./velix-primary-logo.svg" />
        <meta name="twitter:image" content="./velix-primary-logo.svg" />
        <meta property="twitter:title" content="Velix Protocol" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Liquidity staking protocol" />
        <meta
          name="keywords"
          content="LSD, liquidity, staking, platform, Africa, blockchain, METIS, Velix, lix, val, veMETIS"
        />
      </Head>

      <div>
        <Hero />
        <HowItWorks />
        <VelixProperties />
        <SequencerStaking />
        <Community />
        <Footer />
      </div>
    </>
  );
}
