import { ReactNode } from "react";

function DescTitle({
  title,
  description
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div>
      <h3 className="font-space-grotesk font-bold text-black lg:text-2xl mb-3 dark:text-white">{title}</h3>
      <p className="font-space-grotesk text-velix-text-gray font-normal lg:text-base md:text-xs md: dark:text-white">
        {description}
      </p>
    </div>
  );
}

export default DescTitle;
