import { ReactNode } from "react";

export default function StakingDetails({
  title,
  value
}: {
  title: string;
  value: string | ReactNode;
}) {
  return (
    <div>
      <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
        <span className="text-xs lg:text-base">{title}</span>
        <span className="text-xs lg:text-base">{value}</span>
      </p>
    </div>
  );
}
