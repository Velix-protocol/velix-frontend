import React from "react";
import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import StakingOperations from "./StakingOperations";
import Metrics from "./Metrics";
import Chains from "./Chains";

export default function Stake() {
  return (
    <div>
      <Section className="px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 justify-between pt-40 pb-20">
          <div className="lg:row-span-2 h-fit">
            <Title
              name="Stake METIS"
              subtitle="Stake METIS and receive VeMETIS"
            />
            <StakingOperations />
          </div>
          <div className="mt-20 lg:mt-0">
            <Title
              name="Velix statistics"
              subtitle="View your  VeMETIS statistics."
            />
            <Metrics />
          </div>
          <div>
            <Chains />
          </div>
        </div>
      </Section>
    </div>
  );
}
