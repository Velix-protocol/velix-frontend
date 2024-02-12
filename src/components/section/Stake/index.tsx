import React from "react";
import Section from "@/components/layouts/Section";
import Title from "../../ui/velix/Title";
import StakingOperations from "./StakingOperations";
import Metrics from "./Metrics";

export default function Stake() {
  return (
    <div>
      <Section>
        <div className="grid grid-cols-2 gap-5 justify-between pt-56 pb-20">
          <div>
            <Title
              name="Stake METIS"
              subtitle="Stake METIS and receive VeMETIS"
            />
            <StakingOperations />
          </div>
          <div>
            <Title
              name="Velix statistics"
              subtitle="View your  VeMETIS statistics."
            />
            <Metrics />
          </div>
        </div>
      </Section>
    </div>
  );
}
