import { ReactElement } from "react";

export default function MetricsCard({
  icon,
  description,
  value
}: {
  icon: ReactElement;
  description: string;
  value: string;
}) {
  return (
    <div className="flex py-5 px-7 rounded-xl font-space-grotesk justify-between items-center bg-velix-slate-blue">
      <div className="flex gap-3">
        {icon}
        <p className="text-velix-gray">{description}</p>
      </div>
      <span className="text-velix-primary font-bold">{value}</span>
    </div>
  );
}
