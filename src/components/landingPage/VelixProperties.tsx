import Section from "@/components/layouts/Section";
import Cancel from "@/components/ui/velix/icons/Cancel";
import VelixCard from "@/components/ui/velix/cards/VelixCard";
import OfflineBolt from "@/components/ui/velix/icons/OfflineBolt";
import OutBond from "@/components/svg/Outbond";
import World from "@/components/ui/velix/icons/WorldIcon";
import VelixEclips from "@/components/ui/velix/icons/VelixEclips";

const PROPERTIES = [
  {
    icon: (
      <Cancel
        className="fill-velix-primary dark:fill-primary"
        aria-label="Cancel Icon"
      />
    ),
    title: "Any amount",
    description: "Earn yield on any amount of your native token staked"
  },
  {
    icon: (
      <OfflineBolt
        className="fill-velix-primary dark:fill-primary"
        aria-label="OfflineBolt Icon"
      />
    ),
    title: "Earn rewards",
    description: "Watch your LST grow in value over time while it earns rewards"
  },
  {
    icon: (
      <OutBond
        className="rotate-[222deg] fill-velix-primary dark:fill-primary"
        aria-label="OutBond Icon"
      />
    ),
    title: "Easily unstake",
    description: "Unstake at any time with no minimum lock up periods"
  },
  {
    icon: (
      <World
        className="fill-white dark:fill-velix-primary bg-velix-primary dark:bg-white p-1 rounded-full"
        aria-label="World Icon"
      />
    ),
    title: "Use in Defi",
    description:
      "Trade your favorite liquid staked token on available Defi platform to boost your liquidity rewards"
  },
  {
    icon: (
      <OutBond
        className="rotate-45 fill-velix-primary dark:fill-primary"
        aria-label="OutBond Icon"
      />
    ),
    title: "Restake LST",
    description: "COMING SOON"
  }
];

export default function VelixProperties() {
  return (
    <Section className="mb-6 px-5">
      <div className="font-space-grotesk flex flex-col justify-center items-center">
        <h2 className="text-[1.25rem] lg:text-4xl font-bold">Velix LSD</h2>
        <p className="text-velix-gray mt-5 text-center">
          Stake your tokens, earn rewards, and contribute to the
          decentralization of the network.
        </p>
      </div>
      <div className="grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
        {PROPERTIES.map((property) => {
          return (
            <VelixCard
              key={property.title}
              icon={property.icon}
              description={property.description}
              title={property.title}
            />
          );
        })}
        <div className="bg-velix-primary relative dark:border dark:bg-black/30 dark:border-white/10 overflow-hidden text-white font-space-grotesk flex flex-col justify-center rounded-[0.9375rem] p-9">
          <VelixEclips className="absolute -top-72 -right-56 dark:-right-56 dark:opacity-25" />
          <p className="flex items-end gap-4 z-20">
            <span className="font-bold text-5xl">=20 %</span>
            <span className="font-medium">APR</span>
          </p>
          <p className="font-light text-base pt-2 z-20">
            Based on one year average
          </p>
        </div>
      </div>
    </Section>
  );
}
