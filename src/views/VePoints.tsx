import Section from "@/components/layouts/Section";
import ClaimStakingPoints from "@/components/app/vePoints/ClaimStakingPoints.tsx";
import ClaimReferralPoints from "@/components/app/vePoints/ClaimReferralPoints.tsx";
import AddWalletCard from "@/components/ui/velix/cards/AddWalletCard";

export default function VePoints() {
  return (
    <Section className="max-lg:mx-5 mt-5">
      <div className=" mb-20">      
        <AddWalletCard />
      </div>
      <ClaimStakingPoints />
      <div className="mt-10">
        <ClaimReferralPoints />
      </div>
    </Section>
  );
}
