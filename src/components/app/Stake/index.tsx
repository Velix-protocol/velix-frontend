import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import StakingOperations from "./StakingOperations";
import AppContent from "@/components/layouts/AppContent";
import Statitics from "../Statitics";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";

export default function Stake() {
  return (
    <div>
      <Section className="px-5 pb-32 lg:pb-16">
        <StakeTitleWrapper>
          <div className="w-full">
            <Title
              name="Stake METIS"
              subtitle="Stake veMetis and receive sveMetis"
            />
          </div>
          <div className="w-full">
            <Title
              name="Velix statistics"
              subtitle="View your  veMETIS statistics."
            />
          </div>
        </StakeTitleWrapper>
        <AppContent>
          <div className="w-full h-fit">
            <div className="w-full block lg:hidden mt-32">
              <Title
                name="Stake METIS"
                subtitle="Stake METIS and receive veMETIS"
              />
            </div>
            <StakingOperations />
          </div>
          <div className="w-full">
            <div className="w-full block lg:hidden mt-10">
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
            </div>
            <Statitics />
          </div>
        </AppContent>
      </Section>
    </div>
  );
}
