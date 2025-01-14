import { cn } from "@/utils/utils";
import { ReactNode } from "react";

export default function HowItWorksCard({
  children,
  className,
  imageContainerClassName
}: {
  children: ReactNode;
  className?: string;
  imageContainerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center w-92 h-81 justify-center p-2 rounded-lg overflow-hidden relative dark:bg-velix-claim-gray3",
        className
      )}
    >
      <span
        className={cn(
          "h-10 w-10 mx-auto flex justify-center items-center",
          imageContainerClassName
        )}
      >
        {children}
      </span>
    </div>
  );
}
