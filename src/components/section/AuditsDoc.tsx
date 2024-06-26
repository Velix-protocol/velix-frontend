import Section from "../layouts/Section";
import AuditCard from "../ui/velix/cards/AuditCard";

const AuditsDoc = () => {
  return (
    <Section className="mt-28 px-5">
      <div>
        <div className="font-space-grotesk">
          <h2 className="text-[1.25rem] lg:text-4xl font-bold text-center">
            Audits and Documentation
          </h2>
          <p className="text-velix-gray mt-5 text-center max-w-[28.5625rem] mx-auto">
            We have been audited by one of the best firms
          </p>
        </div>
        <div className="flex flex-col lg:grid grid-cols-2 py-16  justify-center gap-[-2] lg:gap-12 lg:px-1  items-center dark:bg-velix-primary bg-transparent dark:rounded-lg">
          <AuditCard
            title="Audit Report"
            iconSrc="./audit.svg"
            link={
              "https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Velix-v1.0.pdf"
            }
          />
          <AuditCard
            title="Documentation"
            iconSrc="./book.svg"
            link={"https://docs.velix.io/"}
          />
        </div>
      </div>
    </Section>
  );
};

export default AuditsDoc;
