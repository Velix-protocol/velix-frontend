import { useState } from "react";
import AppContent from "@/components/layouts/AppContent";
import Section from "@/components/layouts/Section";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import Title from "@/components/ui/velix/Title";
import { Button } from "@/components/ui/button";
import RedeemLayout from "@/components/layouts/ReddemLayout";
import RedeemCard from "@/components/ui/velix/cards/RedeemCard";
import {
  useApproveRedeem,
  useEnterRedemptionQueue
} from "@/hooks/use-redemption";
import TransactionModal from "@/components/ui/velix/modal";
import { useQuery } from "@tanstack/react-query";
import { velixApi } from "@/services/http";
import { useBalanceStore } from "@/store/balanceState.ts";
import { useMetisBalances, useStarknetBalances } from "@/hooks/use-contract.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import StandardModal from "@/components/ui/velix/modal/StandartModal.tsx";
import useChainAccount from "@/hooks/useChainAccount.ts";

export default function Redeem() {
  const { veMETISBalance, veStrkBalance } = useBalanceStore();
  const {
    isPending: approvePending,
    isSuccess: approveSuccess,
    reset: resetApproveStates,
    error: approveError,
    approveRedemption
  } = useApproveRedeem();
  const {
    isPending: enterRedemptionQueuePending,
    isSuccess: enterRedemptionQueueSuccess,
    reset: setEnterRedemptionQueueStates,
    error: redemptionQueueError,
    data: txHash,
    enterRedemptionQueue
  } = useEnterRedemptionQueue();
  const [amountToRedeem, setAmountToRedeem] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const { getBalances } = useMetisBalances();
  const { getBalances: getStarknetBalances } = useStarknetBalances();
  const { address, isConnected: isWalletConnected } = useChainAccount();
  const chain = useSupportedChain();

  const { data: redeemTickets, refetch: refetchRedeemTickets } = useQuery({
    queryKey: ["redeem-ticket"],
    queryFn: () =>
      velixApi.getRedeemTicketsOwnedByWalletAddress(address as string),
    enabled: isWalletConnected,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  const onEnterRedemptionQueue = async () => {
    if (!address) return;
    if (Number(amountToRedeem) === 0) return;
    await enterRedemptionQueue(address, Number(amountToRedeem));
    await refetchRedeemTickets();
    if (chain === "metis") {
      await getBalances();
    } else {
      await getStarknetBalances();
    }
  };

  const onClose = () => {
    if (approvePending) return;
    setShowModal(false);
    setAmountToRedeem("0");
    resetApproveStates();
    setEnterRedemptionQueueStates();
  };

  const renderRedemptionQueueModalTitle = () => {
    if (enterRedemptionQueuePending) return "Entering redemption queue...";
    if (enterRedemptionQueueSuccess) return "Entered";
    return "Enter redemption queue";
  };

  const onSetMaxValue = () => {
    setAmountToRedeem(chain === "metis" ? veMETISBalance : veStrkBalance);
  };

  return (
    <>
      {showModal && chain === "starknet" && (
        <StandardModal
          onClose={onClose}
          error={redemptionQueueError}
          isSuccess={enterRedemptionQueueSuccess}
          isLoading={enterRedemptionQueuePending}
          title={enterRedemptionQueuePending ? "Processing..." : ""}
          txHash={txHash}
        />
      )}

      {showModal && chain !== "starknet" && (
        <TransactionModal
          onClose={onClose}
          step2Description="Enter redemption queue"
          flowname="redeem"
          onStep1Click={() => approveRedemption(Number(amountToRedeem))}
          onStep2Click={onEnterRedemptionQueue}
          renderButtonTitle={renderRedemptionQueueModalTitle}
          step1Error={approveError}
          step2Error={redemptionQueueError}
          step1Pending={approvePending}
          step2Pending={enterRedemptionQueuePending}
          step1Success={approveSuccess}
          step2Sucesss={enterRedemptionQueueSuccess}
          txHash={txHash}
        />
      )}

      <Section className="px-5 pb-32 lg:pb-16">
        <StakeTitleWrapper>
          <div className="w-full">
            <Title
              name="Redeem"
              subtitle="Only redeem with a counter of 3 to 5 days."
            />
          </div>
          <div className="w-full">
            <Title name="Reedem ticket" subtitle="You can now redeem." />
          </div>
        </StakeTitleWrapper>
        <AppContent>
          <div className="w-full lg:hidden pt-32">
            <Title
              name="Redeem"
              subtitle="Only redeem with a counter of 3 to 5 days."
            />
          </div>

          <div className="w-full hidden">
            <Title name="Reedem ticket" subtitle="You can now redeem." />
          </div>
          <RedeemLayout
            onSetMaxValue={onSetMaxValue}
            error=""
            value={amountToRedeem}
            role="redeem"
            onFromValueChange={(e) => setAmountToRedeem(e.target.value)}
            showSwapIcon={false}
          >
            <div className="flex flex-row justify-between gap-5 mt-5">
              <Button
                disabled={!Number(amountToRedeem) || !isWalletConnected}
                className="w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
                onClick={() => {
                  if (chain === "starknet") {
                    setShowModal(true);
                    onEnterRedemptionQueue();
                    return;
                  }
                  setShowModal(true);
                }}
              >
                Start Redeem Process
              </Button>
            </div>
          </RedeemLayout>
          <div className="w-full lg:hidden">
            <Title name="Reedem ticket" subtitle="You can now redeem." />
          </div>

          <div
            className={`flex flex-col gap-2 dark:bg-velix-claim-gray w-full py-6 mt-[5rem] rounded-xl bg-white justify-center items-center ${
              isWalletConnected ? "" : "h-auto"
            }`}
          >
            {redeemTickets?.data.length ? (
              redeemTickets?.data
                .map((redeemTicket) => (
                  <RedeemCard
                    key={redeemTicket.id}
                    redeemTicket={redeemTicket}
                    refetchRedeemNfts={refetchRedeemTickets}
                    getBalances={
                      chain === "starknet" ? getStarknetBalances : getBalances
                    }
                  />
                ))
                .reverse()
            ) : (
              <>
                <img
                  src="/svg/redeem-ticket.svg"
                  alt="redeem ticket"
                  className="dark:hidden"
                />
                <img
                  src="/svg/redeem-ticket-dark.svg"
                  alt="redeem ticket dark"
                  className="hidden dark:block"
                />
                <p className="font-space-grotesk font-normal mt-5">
                  You have no ticket to redeem
                </p>
              </>
            )}
          </div>
        </AppContent>
      </Section>
    </>
  );
}
