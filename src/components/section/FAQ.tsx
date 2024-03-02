import Section from "../layouts/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQs = [
  {
    question: "What is liquid staking?",
    answer:
      "Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking infrastructure. Users can deposit tokens and receive tradable liquid tokens in return."
  },
  {
    question: "How to participate in liquid staking and earn staking rewards?",
    answer: (
      <span>
        - Mint veMETIS from METIS using the 'Mint' tab. <br />- Stake veMETIS
        using the 'Stake' tab Staking rewards are automatically compounded
        during the staking period and become a part of your stake.
      </span>
    )
  },
  {
    question: "What is the difference between METIS, veMETIS, and sveMETIS?",
    answer: (
      <span>
        - <b>METIS</b> is a token of the Metis Network. <br />- <b>veMETIS</b>{" "}
        is a liquid staking derivative of METIS, which is tradeable on
        decentralized exchanges and can be swapped back into METIS. <br />-
        <b> sveMETIS</b> is a staked veMETIS that accumulates and automatically
        compounds staking rewards in the form of veMETIS.
      </span>
    )
  },
  {
    question: "How to get veMETIS?",
    answer:
      "Mint veMETIS from METIS using the 'Mint' form above. Buy veMETIS on decentralized exchanges."
  }
];

export default function FAQ() {
  return (
    <div>
      <Section className="mt-20 max-lg:px-5">
        <div className="font-space-grotesk flex flex-col justify-center items-center">
          <h2 className="text-[1.25rem] lg:text-4xl font-bold">
            Frequently asked questions.
          </h2>
          <p className="text-velix-gray mt-5 text-center">
            Everything you need to know about velix
          </p>
        </div>
        <div className="bg-velix-slate-blue p-5 lg:p-16 mt-20 rounded-lg grid grid-cols-1 gap-5 justify-start items-start">
          {FAQs.map((faq, index) => {
            return (
              <Accordion
                key={`velix-faq-${index}`}
                type="single"
                className="bg-white px-5 lg:px-10 py-3 rounded-lg font-space-grotesk text-[#54616B]"
                collapsible
              >
                <AccordionItem value={faq.question}>
                  <AccordionTrigger className="no-underline hover:no-underline text-base font-bold text-start">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
