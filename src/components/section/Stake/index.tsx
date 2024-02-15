import Section from "@/components/layouts/Section";
import BottomBar from "@/components/ui/velix/BottomBar";
import Title from "../../ui/velix/Title";
import StakingOperations from "./StakingOperations";
import Metrics from "./Metrics";
import Chains from "./Chains";

export default function Stake() {
  return (
    <div>
      <div className="lg:hidden block fixed bottom-0 left-0 right-0 w-full bg-white z-40 py-7 border-t">
        <BottomBar />
      </div>
      <Section className="px-5 pb-16 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 justify-between items-start pt-28 lg:pt-40 pb-20 h-fit">
          <div className="lg:row-span-2 h-fit">
            <Title
              name="Stake METIS"
              subtitle="Stake METIS and receive VeMETIS"
            />
            <StakingOperations />
          </div>
          <div className="mt-16 lg:mt-0">
            <Title
              name="Velix statistics"
              subtitle="View your  VeMETIS statistics."
            />
            <Metrics />
          </div>
          {/* <div> */}
          <Chains />
          {/* </div> */}
        </div>
      </Section>
    </div>
  );
}
