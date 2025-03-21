import Section from "../layouts/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import GradientBorder from "../ui/velix/GradientBorder";
import VelixEclips from "../ui/velix/icons/VelixEclips";

const FAQs = [
  {
    question: "What is liquid staking?",
    answer:
      "Liquid staking protocols enable users to earn staking rewards without locking assets or managing/maintaining staking infrastructure. Users can deposit tokens and receive tradable liquid tokens in return"
  },
  {
    question: "How to participate in liquid staking and earn staking rewards?",
    answer: (
      <span>
        Stake your native token using the stake tab on the dapp page. Rewards
        are earned during the staking period boosting your staking yield.
      </span>
    )
  },
  {
    question: "What are cross-chain rewards ?",
    answer:
      "Earn rewards from multiple networks when you join Velix Genesis pool."
  }
];

export default function FAQ() {
  return (
    <div>
      <Section className="mt-28 max-lg:px-5">
        <div className="font-space-grotesk flex flex-col justify-center items-center">
          <h2 className="text-[1.25rem] lg:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-velix-gray mt-5 text-center">
            Everything you need to know about velix
          </p>
        </div>
        <div className="relative p-0.25 mt-20">
          <GradientBorder className="rounded-lg" />
          <VelixEclips className="absolute -top-20 -translate-x-1/2 left-1/2 max-lg:w-52 max-lg:h-52 max-lg:rotate-45" />
          <div className="bg-velix-slate-blue dark:bg-velix-black p-5 lg:p-16 rounded-lg grid grid-cols-1 gap-5 justify-start items-startn relative">
            {FAQs.map((faq, index) => {
              return (
                <Accordion
                  key={`velix-faq-${index}`}
                  type="single"
                  className="bg-white dark:bg-velix-slate-blue px-5 lg:px-10 py-3 rounded-lg font-space-grotesk text-[#54616B] dark:"
                  collapsible
                >
                  <AccordionItem value={faq.question}>
                    <AccordionTrigger className="no-underline hover:no-underline text-base font-bold text-start dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base dark:text-[#A4A5A7]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
