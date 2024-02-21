import Section from "../../layouts/Section";
import Steps from "./partials/Steps";
import DefiIntegration from "./partials/DefiIntegration";

export default function HowItWorks() {
  return (
    <Section className="py-16 px-5">
      <div className="bg-[#1E1E1E] items-center text-white p-5 lg:p-16 rounded-lg">
        <div>
          <h2 className="font-space-grotesk font-bold text-2xl lg:text-4xl text-center mt-5 md:mt-0 lg:text-start">
            How Velix works
          </h2>
          <Steps />
        </div>
      </div>
      <DefiIntegration />
    </Section>
  );
}
