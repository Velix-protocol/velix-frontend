import { cn } from "@/utils/utils";
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
      <div
        className={cn(
          "flex text-velix-gray items-center justify-between font-space-grotesk",
          className
        )}
      >
        <div className="text-xs lg:text-base">{title}</div>
        <div className="text-xs lg:text-base">{value}</div>
      </div>
    </div>
  );
}
