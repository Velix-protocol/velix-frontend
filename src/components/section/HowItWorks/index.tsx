import Section from "../../layouts/Section";
import Steps from "./partials/Steps";
import DefiIntegration from "./partials/DefiIntegration";

export default function HowItWorks() {
  return (
    <Section className="py-16 px-5">
      <div className="flex flex-col-reverse  lg:grid lg:grid-cols-2 bg-[#1E1E1E] items-center text-white p-5 lg:p-16 rounded-lg">
        <div>
          <h2 className="font-space-grotesk font-bold text-2xl lg:text-4xl text-start">
            How Velix works
          </h2>
          <Steps />
        </div>
        <img
          src="/svg/how-it-works.svg"
          alt="hero image"
          className="scale-75 xl:scale-100 lg:ml-auto transition-transform"
        />
      </div>
      <DefiIntegration />
    </Section>
  );
}
