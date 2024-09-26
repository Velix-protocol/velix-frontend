import Section from "@/components/layouts/Section";
import ClaimStakingPoints from "@/components/app/vePoints/ClaimStakingPoints.tsx";
import ClaimReferralPoints from "@/components/app/vePoints/ClaimReferralPoints.tsx";

export default function VePoints() {
  return (
    <Section className="max-lg:mx-5 py-32">
      <ClaimStakingPoints />
      <div className="mt-10">
        <ClaimReferralPoints />
      </div>
    </Section>
  );
}
