import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import AppContent from "../layouts/AppContent";
import Section from "../layouts/Section";
import StakeLayout from "../layouts/StakeLayout";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import Statitics from "./Statitics";
import {
  useApproveUnstaking,
  useMetisBalance,
  useUnstake
} from "@/hooks/use-contract";
import classnames from "classnames";
import { useAccount } from "wagmi";
import SuccessIcon from "../ui/velix/icons/SuccessIcon";
import Modal from "../ui/velix/Modal";
import { Loader } from "lucide-react";
import { useBalanceStore } from "@/store/balanceState";
import { EXPLORER_TX_URL } from "@/lib/constant";
import { toast } from "sonner";

export default function Unstake() {
  const [amountToUnstake, setAmountToUnstake] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
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
  const { address: walletAddress } = useAccount();
  const { getBalances } = useMetisBalance();
  const { sveMETISBalance } = useBalanceStore();

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(2);
    }
    if (isunStaked) {
      setAmountToUnstake("");
      getBalances();
      toast("Unstake completed", {
        duration: 5000,
        position: "top-right",
        action: {
          label: "View transaction",
          onClick: () => window.open(`${EXPLORER_TX_URL}${txhash}`)
        }
      });
    }
  }, [getBalances, isSuccess, isunStaked, txhash]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToUnstake(e.target.value);
  };

  const onStartUnstaking = async () => {
    if (!amountToUnstake || !amountToUnstake.trim()) return;
    setShowModal(true);
    await approveUnstaking(amountToUnstake);
  };

  const onUnstake = async () => {
    if (!amountToUnstake || !amountToUnstake.trim() || !walletAddress) return;
    await unstake(amountToUnstake, walletAddress);
  };

  const renderModalTitle = () => {
    if (currentStep === 1 && !error) return "Waiting for Approval.";
    if (currentStep === 1 && error) return "Approval failed.";
    if (currentStep === 2 && !unstakeError && !isunStaked)
      return "Approved, you can now unStake.";
    if (currentStep === 2 && unstakeError) return "Failed to unstake.";
    if (currentStep === 2 && isunStaked) return "Successfully unstaked.";
  };

  const renderErrorMessage = () => {
    if (error) return error.message.split(".")[0];
    if (unstakeError) return unstakeError.message.split(".")[0];
  };

  const step1Classnames = classnames(
    "text-white  h-8 w-8 flex justify-center items-center rounded-full",
    {
      "bg-red-600": error,
      "bg-velix-primary": !error
    }
  );

  const stepsLinkClassnames = classnames("h-1 w-32 bg-gradient-to-r", {
    "from-velix-primary to-velix-gray/20": currentStep === 1 && !error,
    "from-red-600 to-velix-gray/20": currentStep === 1 && error,
    "from-velix-primary to-red-600": currentStep === 2 && unstakeError,
    "from-velix-primary to-velix-primary": currentStep === 2 && !unstakeError
  });

  const step2Classnames = classnames(
    "h-8 w-8 flex justify-center items-center p-2 rounded-full",
    {
      "bg-red-600 text-white": currentStep === 2 && unstakeError,
      "text-white bg-velix-primary": currentStep === 2 && !unstakeError,
      "bg-velix-gray/20 text-velix-primary": currentStep === 1 && !unstakeError
    }
  );

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

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && currentStep === 1 && (
              <Loader className="w-10 h-10 mb-6 animate-spin" />
            )}
            {isunStaked && <SuccessIcon className="w-10 h-10 mb-6" />}
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {!error && !unstakeError && !isunStaked && (
              <p className="text-velix-gray text-center text-base">
                {currentStep === 1
                  ? "Confirm this transaction in your wallet."
                  : "unstake sveMETIS"}
              </p>
            )}
            {(error || unstakeError) && (
              <p className="text-red-600 text-center text-base">
                {renderErrorMessage()}
              </p>
            )}

            {currentStep === 2 && !isunStaked && (
              <StakingFormButtom
                isLoading={unstakePending}
                disabled={unstakePending}
                role="unstake"
                onUnstake={onUnstake}
              />
            )}
            <div className="flex gap-0 items-center w-fit h-fit mt-8">
              <p className={step1Classnames}>1</p>
              <div className={stepsLinkClassnames} />
              <p className={step2Classnames}>2</p>
            </div>
          </div>
        </Modal>
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
                  <StakingDetails title="Max transaction cost" value="$82.47" />
                  <StakingDetails title="Allowance" value="0.0 veMETIS" />
                  <StakingDetails
                    title="Exchange rate"
                    value="1 sveMETIS = 1 veMETIS"
                  />
                  <StakingFormButtom
                    isLoading={isPending || unstakePending}
                    disabled={disabled}
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
