import PlusMinusTable from "@/components/ui/velix/icons/PlusMinusTable";
import ChatIcon from "@/components/ui/velix/icons/ChatIcon";
import Copy from "@/components/ui/velix/icons/Copy";
import MetricsCard from "./_partials/MetricsCard";
import { useEffect } from "react";
import { useStakersStore } from "@/store/stakers";
import { retreiveStakersNumber } from "@/utils/supabase";

export default function Metrics() {
  const { setStakers, stakers } = useStakersStore();

  useEffect(() => {
    (async () => {
      const stakersNumber = await retreiveStakersNumber();
      setStakers(stakersNumber ?? 0);
    })();
  }, [setStakers]);

  return (
    <div className="bg-white rounded-xl flex flex-col gap-3 mt-10 lg:mt-20 p-5 lg:p-11">
      <MetricsCard
        icon={<PlusMinusTable className="fill-velix-primary h-6 w-6" />}
        description="Annual percentage rate"
        value="--"
      />
      <MetricsCard
        icon={<ChatIcon className="fill-velix-primary h-6 w-6" />}
        description="veMETIS market cap"
        value="--"
      />
      <MetricsCard
        icon={<Copy className="fill-velix-primary h-6 w-6" />}
        description={stakers <= 1 ? "Staker" : "Stakers"}
        value={stakers.toString()}
      />
    </div>
  );
}
