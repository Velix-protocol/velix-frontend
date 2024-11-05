import { ReactNode } from "react";

function DescTitle({
  title,
  description,
}: {
  title: string;
  description: ReactNode;
}) {
  return (
    <div>
      <h3 className="font-space-grotesk font-bold lg:text-2xl mb-3">{title}</h3>
      <p className="font-space-grotesk text-white font-normal lg:text-base md:text-xs md:">
        {description}
      </p>
    </div>
  );
}

export default DescTitle;
