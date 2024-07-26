import { cn } from "@/utils/utils";
import { ReactNode } from "react";

export default function Title({
  name,
  subtitle,
  containerClassName = "",
  titleClassName = "",
  subTitleClassName = ""
}: {
  name: string;
  subtitle: string | ReactNode;
  containerClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col font-space-grotesk gap-4",
        containerClassName
      )}
    >
      <h2 className={cn("font-bold text-2xl lg:text-4xl", titleClassName)}>
        {name}
      </h2>
      <div
        className={cn(
          "text-velix-gray font-normal text-xs lg:text-base",
          subTitleClassName
        )}
      >
        {subtitle}
      </div>
    </div>
  );
}
