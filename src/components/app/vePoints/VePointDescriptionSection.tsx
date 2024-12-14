import { ReactNode } from "react";

export default function VePointDescriptionSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="font-space-grotesk">
      <h4 className="bg-velix-primary dark:bg-velix-light-dark py-10 px-11 max-sm:px-5 max-lg:text-xl max-lg:py-5 text-3xl rounded-t-2xl text-white font-bold">
        {title}
      </h4>
      <div className="px-11 max-lg:px-5 max-lg:py-5 text-velix-gray space-y-4 py-10 rounded-2xl -mt-3 z-10 w-full bg-white dark:bg-velix-form-dark-background">
        {children}
      </div>
    </div>
  );
}
