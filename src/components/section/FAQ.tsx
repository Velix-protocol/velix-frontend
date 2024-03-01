import Section from "../layouts/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQs = [
  {
    question: "What’s liquid staking?",
    answer: "Explore Velix, engage with us, and shape our ecosystem's future."
  },
  {
    question: "What’s liquid staking?",
    answer: "Explore Velix, engage with us, and shape our ecosystem's future."
  },
  {
    question: "What’s liquid staking?",
    answer: "Explore Velix, engage with us, and shape our ecosystem's future."
  },
  {
    question: "What’s liquid staking?",
    answer: "Explore Velix, engage with us, and shape our ecosystem's future."
  },
  {
    question: "What’s liquid staking?",
    answer: "Explore Velix, engage with us, and shape our ecosystem's future."
  }
];

export default function FAQ() {
  return (
    <div>
      <Section className="mt-10 max-lg:px-5">
        <div className="font-space-grotesk flex flex-col justify-center items-center">
          <h2 className="text-[1.25rem] lg:text-4xl font-bold">
            Frequently asked questions.
          </h2>
          <p className="text-velix-gray mt-5 text-center">
            Everything you need to know about velix
          </p>
        </div>
        <div className="bg-velix-slate-blue p-5 lg:p-16 mt-20 rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-5">
          {FAQs.map((faq, index) => {
            return (
              <Accordion
                key={`velix-faq-${index}`}
                type="single"
                className="bg-white h-fit px-10 py-3 rounded-lg font-space-grotesk text-[#54616B]"
                collapsible
              >
                <AccordionItem value={faq.answer}>
                  <AccordionTrigger className="no-underline hover:no-underline text-base font-bold">
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
