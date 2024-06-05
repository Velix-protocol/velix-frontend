import PlusMinusTable from "@/components/ui/velix/icons/PlusMinusTable";
import ChatIcon from "@/components/ui/velix/icons/ChatIcon";
import Copy from "@/components/ui/velix/icons/Copy";
import MetricsCard from "./ui/velix/cards/MetricsCard";
import { useEffect } from "react";
import { useStakersStore } from "@/store/stakers";
import { useAccount } from "wagmi";
import { useGetTotalVeMetisAssets } from "@/hooks/use-contract";
import { useMetricsStore } from "@/store/velixMetrics";
import { velixApi } from "@/services/http";

export default function Metrics() {
  const { isConnected } = useAccount();
  const { setStakers, stakers } = useStakersStore();
  const { totalValueLocked } = useMetricsStore();
  useGetTotalVeMetisAssets();

  useEffect(() => {
    (async () => {
      const { data: stakersNumber } = await velixApi.retreiveStakersNumber();
      setStakers(stakersNumber ?? 0);
    })();
  }, [setStakers]);

  return (
    <div
      className={`bg-white dark:bg-velix-form-dark-background rounded-xl flex flex-col gap-3 mt-10 p-5 lg:p-11 ${
        isConnected ? "lg:mt-20" : "lg:mt-[3.75rem]"
      }`}
    >
      <MetricsCard
        icon={
          <PlusMinusTable className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6" />
        }
        description="Annual percentage rate"
        value="20%"
      />
      <MetricsCard
        icon={
          <ChatIcon className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6" />
        }
        description="veMETIS market cap"
        value="--"
      />
      <MetricsCard
        icon={
          <ChatIcon className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6" />
        }
        description="veMetis TVL"
        value={totalValueLocked}
      />
      <MetricsCard
        icon={
          <Copy className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6" />
        }
        description={stakers <= 1 ? "Staker" : "Stakers"}
        value={stakers.toLocaleString()}
      />
    </div>
  );
}
