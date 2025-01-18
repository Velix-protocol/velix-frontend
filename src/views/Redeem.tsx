import { useState } from "react";
import AppContent from "@/components/layouts/AppContent";
import Section from "@/components/layouts/Section";
import StakeTitleWrapper from "@/components/layouts/StakeTitleWrapper";
import Title from "@/components/ui/velix/Title";
import { Button } from "@/components/ui/button";
import RedeemLayout from "@/components/layouts/ReddemLayout";
import RedeemCard from "@/components/ui/velix/cards/RedeemCard";
import AddWalletCard from "@/components/ui/velix/cards/AddWalletCard";
import {
  useApproveRedeem,
  useEnterRedemptionQueue
} from "@/hooks/use-redemption";
import TransactionModal from "@/components/ui/velix/modal";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { velixApi } from "@/services/http";
import { useBalanceStore } from "@/store/balanceState.ts";
import { useMetisBalance } from "@/hooks/use-contract.ts";

export default function Redeem() {
  const { veMETISBalance } = useBalanceStore();
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
    error: rendemptionQueueError,
    data: txHash,
    enterRedemptionQueue
  } = useEnterRedemptionQueue();
  const [amountToRedeem, setAmountToRedeem] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const { getBalances } = useMetisBalance();
  const { address, isConnected: isWalletConnected } = useAccount();

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
    await getBalances();
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
    setAmountToRedeem(veMETISBalance);
  };

  return (
    <>
      {showModal && (
        <TransactionModal
          onClose={onClose}
          step2Description="Enter redemption queue"
          flowname="redeem"
          onStep1Click={() => approveRedemption(Number(amountToRedeem))}
          onStep2Click={onEnterRedemptionQueue}
          renderButtonTitle={renderRedemptionQueueModalTitle}
          step1Error={approveError}
          step2Error={rendemptionQueueError}
          step1Pending={approvePending}
          step2Pending={enterRedemptionQueuePending}
          step1Success={approveSuccess}
          step2Sucesss={enterRedemptionQueueSuccess}
          txHash={txHash}
        />
      )}

      <Section className="px-5 pb-32 lg:pb-16 mt-5">
        <AddWalletCard />
        <StakeTitleWrapper className="lg:pt-20">
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
          <div className="w-full lg:hidden pt-10 mt-3">
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
                onClick={() => setShowModal(true)}
              >
                Start Redeem Process
              </Button>
            </div>
          </RedeemLayout>
          <div className="w-full lg:hidden mt-3">
            <Title name="Reedem ticket" subtitle="You can now redeem." />
          </div>

          <div
            className={`flex flex-col gap-2 dark:bg-velix-claim-gray w-full py-6 mt-[3rem] lg:mt-[5rem] md:mt-[5rem] rounded-xl bg-white justify-center items-center ${
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
