import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import AppContent from "../layouts/AppContent";
import Section from "../layouts/Section";
import StakeLayout from "../layouts/StakeLayout";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import StakingDetails from "./StakingDetails";
import StakingFormButtom from "./StakingFormButtom";
import Title from "../ui/velix/Title";
import Statitics from "./Statitics";
import {
  useApproveUnstaking,
  useMetisBalance,
  useUnstake
} from "@/hooks/use-contract";
import { useAccount } from "wagmi";
import { useBalanceStore } from "@/store/balanceState";
import { MAX_INPUT_LENGTH } from "@/utils/constant";
import { recordStaker } from "@/utils/supabase";
import { useStakersStore } from "@/store/stakers";
import TransactionModal from "../ui/velix/modal";

export default function Unstake() {
  const [amountToUnstake, setAmountToUnstake] = useState("");
  const [showModal, setShowModal] = useState(false);
  const {
    approveUnstaking,
    isPending,
    isSuccess,
    error,
    reset: resetApproveState
  } = useApproveUnstaking();
  const {
    unstake,
    isPending: unstakePending,
    isSuccess: isunStaked,
    error: unstakeError,
    reset: resetUnstakeState,
    txhash
  } = useUnstake();
  const { address: walletAddress, isConnected } = useAccount();
  const { getBalances } = useMetisBalance();
  const { sveMETISBalance } = useBalanceStore();
  const { setStakers } = useStakersStore();

  useEffect(() => {
    if (isunStaked) {
      setAmountToUnstake("");
      getBalances();
    }
  }, [getBalances, isSuccess, isunStaked, txhash]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [showModal]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToUnstake(
      e.target.value.length > MAX_INPUT_LENGTH
        ? e.target.value.slice(0, MAX_INPUT_LENGTH)
        : e.target.value
    );
  };

  const onStartUnstaking = async () => {
    if (!amountToUnstake || !amountToUnstake.trim()) return;
    setShowModal(true);
  };

  const onApproveUnstaking = async () => {
    resetApproveState();
    await approveUnstaking(amountToUnstake);
  };

  const onUnstake = async () => {
    if (!amountToUnstake || !amountToUnstake.trim() || !walletAddress) return;
    resetUnstakeState();
    await unstake(amountToUnstake);
    const stakers = await recordStaker(
      walletAddress,
      Number(sveMETISBalance) - Number(amountToUnstake)
    );
    setStakers(stakers ?? 0);
  };

  const onClose = useCallback(() => {
    if (isPending || unstakePending) return;
    setShowModal(false);
    resetApproveState();
    resetUnstakeState();
  }, [isPending, resetApproveState, resetUnstakeState, unstakePending]);

  useEffect(() => {
    if (isunStaked) setTimeout(onClose, 5000);
  }, [isunStaked, onClose]);

  const disabled = useMemo(() => {
    return (
      isPending ||
      unstakePending ||
      !amountToUnstake ||
      !Number(amountToUnstake) ||
      Number(amountToUnstake) > Number(sveMETISBalance)
    );
  }, [amountToUnstake, isPending, sveMETISBalance, unstakePending]);

  const renderUnstakeButtonTitle = () => {
    if (unstakePending) return "Unstaking...";
    if (isunStaked) return "Unstaked";
    return "Unstake";
  };

  return (
    <>
      {showModal && (
        <TransactionModal
          onClose={onClose}
          onStep1Click={onApproveUnstaking}
          onStep2Click={onUnstake}
          renderButtonTitle={renderUnstakeButtonTitle}
          step1Error={error}
          step2Error={unstakeError}
          step1Pending={isPending}
          step2Pending={unstakePending}
          step1Success={isSuccess}
          step2Sucesss={isunStaked}
          txHash={txhash}
          flowname="unstake"
        />
      )}
      <div>
        <Section className="px-5 pb-32 lg:pb-16">
          <StakeTitleWrapper>
            <div className="w-full">
              <Title name="Unstake METIS" subtitle="Request your veMETIS" />
            </div>
            <div className="w-full">
              <Title
                name="Velix statistics"
                subtitle="View your  veMETIS statistics."
              />
            </div>
          </StakeTitleWrapper>
          <AppContent>
            <div className="w-full h-fit">
              <div className="w-full block lg:hidden mt-32">
                <Title name="Unstake METIS" subtitle="Request your veMETIS" />
              </div>
              <StakeLayout
                onSetMaxValue={() => setAmountToUnstake(sveMETISBalance)}
                error={
                  Number(amountToUnstake) > Number(sveMETISBalance)
                    ? "Entered amount exceeds your staked balance"
                    : ""
                }
                value={amountToUnstake}
                role="unstake"
                onFromValueChange={onChange}
              >
                <div className="mt-9 flex flex-col gap-7">
                  <StakingDetails
                    title="Max unlock cost"
                    value={
                      <p className="bg-velix-slate-green/20 text-velix-slate-green p-2 rounded-lg text-xs uppercase">
                        Free
                      </p>
                    }
                  />
                  {/* <StakingDetails title="Max transaction cost" value="$82.47" /> */}
                  <StakingDetails title="Allowance" value="0.0 veMETIS" />
                  <StakingDetails
                    title="Exchange rate"
                    value="1 sveMETIS = 1 veMETIS"
                  />
                  <StakingFormButtom
                    isLoading={isPending || unstakePending}
                    disabled={disabled && isConnected}
                    onUnstake={onStartUnstaking}
                    role="unstake"
                  />
                </div>
              </StakeLayout>
            </div>
            <div className="w-full">
              <div className="w-full block lg:hidden mt-10">
                <Title
                  name="Velix statistics"
                  subtitle="View your  veMETIS statistics."
                />
              </div>
              <Statitics />
            </div>
          </AppContent>
        </Section>
      </div>
    </>
  );
}
