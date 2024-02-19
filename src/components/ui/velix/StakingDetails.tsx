import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function StakingDetails({
  title,
  value,
  className = ""
}: {
  title: string;
  value: string | ReactNode;
  className?: string;
}) {
  return (
    <div>
      <p
        className={cn(
          "flex text-velix-gray items-center justify-between font-space-grotesk",
          className
        )}
      >
        <span className="text-xs lg:text-base">{title}</span>
        <span className="text-xs lg:text-base">{value}</span>
      </p>
    </div>
  );
}
