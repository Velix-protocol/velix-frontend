import Section from "@/components/layouts/Section";
import ClaimStakingPoints from "@/components/app/vePoints/ClaimStakingPoints.tsx";
import ClaimReferralPoints from "@/components/app/vePoints/ClaimReferralPoints.tsx";

export default function VePoints() {
  return (
    <Section className="max-lg:mx-5 mt-5 pt-36  mb-20">
      {/* TODO: Commented because of we don't need it for testing */}
      {/* <div className=" mb-20">      
        <AddWalletCard />
      </div> */}
      <ClaimStakingPoints />
      <div className="mt-10">
        <ClaimReferralPoints />
      </div>
    </Section>
  );
}
