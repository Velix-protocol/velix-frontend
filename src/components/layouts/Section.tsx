import { cn } from "@/utils/utils";
import { ComponentProps, ReactNode } from "react";

type SectionProps = ComponentProps<"section"> & {
  children: ReactNode;
  containerClassName?: string;
};

export default function Section({
  children,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section {...props}>
      <div
        className={cn(
          "max-w-5xl xl:max-w-7xl mx-auto relative",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
