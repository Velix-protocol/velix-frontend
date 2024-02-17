import Section from "../../layouts/Section";
import Steps from "./partials/Steps";
import DefiIntegration from "./partials/DefiIntegration";

export default function HowItWorks() {
  return (
    <Section className="py-16 px-5">
      <h2 className="font-space-grotesk font-bold text-4xl text-center">
        How Velix works
      </h2>
      <Steps />
      <DefiIntegration />
    </Section>
  );
}
