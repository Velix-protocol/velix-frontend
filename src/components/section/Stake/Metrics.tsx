import React from "react";
import PlusMinusTable from "@/components/ui/velix/icons/PlusMinusTable";
import ChatIcon from "@/components/ui/velix/icons/ChatIcon";
import Copy from "@/components/ui/velix/icons/Copy";
import MetricsCard from "./_partials/MetricsCard";

export default function Metrics() {
  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 mt-10 lg:mt-20 p-5 lg:p-11">
      <MetricsCard
        icon={<PlusMinusTable className="fill-velix-primary h-6 w-6" />}
        description="Annual percentage rate"
        value="5.5%"
      />
      <MetricsCard
        icon={<ChatIcon className="fill-velix-primary h-6 w-6" />}
        description="VeMETIS market cap"
        value="$2,166"
      />
      <MetricsCard
        icon={<Copy className="fill-velix-primary h-6 w-6" />}
        description="Stakers"
        value="6569"
      />
    </div>
  );
}
