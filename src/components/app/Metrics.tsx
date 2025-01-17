import PlusMinusTable from "@/components/ui/velix/icons/PlusMinusTable";
import ChatIcon from "@/components/ui/velix/icons/ChatIcon";
import Copy from "@/components/ui/velix/icons/Copy";
import MetricsCard from "../ui/velix/cards/MetricsCard";
import { useEffect } from "react";
import { useStakersStore } from "@/store/stakers";
import { useGetTVL, useVaultReward } from "@/hooks/use-contract";
import { velixApi } from "@/services/http";
import useChainAccount from "@/hooks/useChainAccount";
import useChainTokens from "@/hooks/useChainTokens.ts";
import VelixReferralIcon1 from "../ui/velix/icons/VelixReferralIcon1";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";

export default function Metrics() {
  const { isConnected, address } = useChainAccount();
  const { setStakers, stakers, staker, getStaker } = useStakersStore();
  const { data: totalValueLocked } = useGetTVL();
  const { data: vaultReward } = useVaultReward();
  const chainToken = useChainTokens();
  const chain = useSupportedChain();

  useEffect(() => {
    getStaker(address as string);
  }, [address, getStaker]);

  useEffect(() => {
    (async () => {
      const { data: stakersNumber } =
        await velixApi.retreiveStakersNumber(chain);
      setStakers(stakersNumber ?? 0);
    })();
  }, [chain, setStakers]);

  return (
    <div
      className={`bg-white dark:bg-velix-form-dark-background rounded-xl flex flex-col gap-3 mt-10 p-5 lg:p-11 ${
        isConnected ? "lg:mt-20" : "lg:mt-[3.75rem]"
      }`}
    >
      <MetricsCard
        icon={
          <PlusMinusTable
            className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6"
            aria-label="PlusMinusTable Icon"
          />
        }
        description="Annual percentage rate"
        value="20%"
      />
      <MetricsCard
        icon={
          <ChatIcon
            className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6"
            aria-label="ChatIcon Icon"
          />
        }
        description={`${chainToken.stakedToken} market cap`}
        value="--"
      />
      <MetricsCard
        icon={
          <ChatIcon
            className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6"
            aria-label="ChatIcon Icon"
          />
        }
        description={`${chainToken.stakedToken} TVL`}
        value={totalValueLocked || "--"}
      />
      <MetricsCard
        icon={
          <Copy
            className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6"
            aria-label="Copy Icon"
          />
        }
        description={stakers <= 1 ? "Staker" : "Stakers"}
        value={stakers.toLocaleString()}
      />
      <MetricsCard
        icon={
          <VelixReferralIcon1 className="fill-velix-primary dark:fill-velix-icon-dark h-6 w-6" />
        }
        description="My Referral points"
        value={`${staker?.referralPoints?.toFixed(3) ?? "--"}`}
      />
      {chain === "starknet" && (
        <MetricsCard
          icon={<></>}
          description="Rewards"
          value={`${vaultReward ?? "--"}`}
        />
      )}
    </div>
  );
}
