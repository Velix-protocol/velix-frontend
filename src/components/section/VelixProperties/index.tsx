import Section from "@/components/layouts/Section";
import Cancel from "@/components/ui/velix/icons/Cancel";
import VelixCard from "@/components/ui/velix/cards/VelixCard";
import OfflineBolt from "@/components/svg/OfflineBolt";
import OutBond from "@/components/svg/Outbond";
import World from "@/components/svg/WorldIcon";
import VelixEclips from "@/components/ui/velix/icons/VelixEclips";

const PROPERTIES = [
  {
    icon: <Cancel />,
    title: "Any amount",
    description: "Earn yield on any amount of veMetis staked"
  },
  {
    icon: <OfflineBolt />,
    title: "Earn rewards",
    description:
      "Watch your veMETIS grow in value over time as it earns rewards"
  },
  {
    icon: <OutBond className="rotate-[222deg]" />,
    title: "Easily unstake",
    description: "Unstake at any time with no minimum lock up periods"
  },
  {
    icon: <World className="fill-white bg-velix-primary p-1 rounded-full" />,
    title: "Use in Defi",
    description:
      "Trade your veMETIS on Defi platforms and boost your liquidity rewards"
  },
  {
    icon: <OutBond className="rotate-45" />,
    title: "Restaking veMETIS",
    description: "COMING SOON"
  }
];

export default function VelixProperties() {
  return (
    <Section className="mt-16 px-5">
      <div className="font-space-grotesk flex flex-col justify-center items-center">
        <h2 className="text-[1.25rem] lg:text-4xl font-bold">Velix LSD</h2>
        <p className="text-velix-gray mt-5 text-center">
          Stake Metis ,earn rewards in VeMetis while contributing to METIS
          decentralization
        </p>
      </div>
      <div className="grid grid-cols-1 relative sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-16">
        {/* <p className="absolute -top-5 lg:top-[unset] text-xs lg:-bottom-5 text-velix-slate-green font-medium bg-velix-slate-green/20 z-50 right-0 left-0 font-space-grotesk px-10 rounded-[5px] mx-auto py-2 w-fit">
          Coming Soon
        </p> */}
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
        <div className="bg-velix-primary relative overflow-hidden text-white font-space-grotesk flex flex-col justify-center rounded-[15px] p-9">
          <VelixEclips className="absolute -top-72 -right-56" />
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
