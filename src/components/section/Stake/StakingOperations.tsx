import StakingFormButtom from "@/components/ui/velix/StakingFormButtom";
import StakingDetails from "@/components/ui/velix/StakingDetails";
import ArrowDropDownIcon from "@/components/ui/velix/icons/ArrowDropDownIcon";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import StakeLayout from "@/components/layouts/StakeLayout";
import {
  useApproveStaking,
  useMetisBalance,
  useStaking
} from "@/hooks/use-contract";
import { useAccount } from "wagmi";
import Modal from "@/components/ui/velix/Modal";
import SuccessIcon from "@/components/ui/velix/icons/SuccessIcon";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import { CheckCircle2, Clock4 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useBalanceStore } from "@/store/balanceState";
import { EXPLORER_TX_URL } from "@/lib/constant";
import ModalButtons from "@/components/ui/velix/ModalButtons";
import WaitingForApprovalModal from "./_partials/WaitingForApprovalModal";
import SuccessModal from "@/components/ui/velix/SuccessModal";

export default function StakingOperations() {
  const [isProtocolDisclaimerOpened, setIsProtocolDisclaimerOpened] =
    useState(false);
  const [stakebridge, setStakeBrigde] = useState(false);
  // const [vestment, setVestment] = useState(false);
  const [amountToStake, setAmountToStake] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const {
    approveStaking,
    isPending,
    isSuccess,
    error,
    reset: resetApproveState
  } = useApproveStaking();
  const {
    stake,
    isPending: stakePending,
    isSuccess: isStaked,
    error: stakeError,
    reset: resetStakeState,
    txhash
  } = useStaking();
  const { address: walletAddress } = useAccount();
  const { getBalances } = useMetisBalance();
  const { veMETISBalance } = useBalanceStore();

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(2);
      resetApproveState();
    }
    if (isStaked) {
      setAmountToStake("");
      getBalances();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStaked, isSuccess]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const onViewTransaction = async () => {
    window.open(`${EXPLORER_TX_URL}${txhash}`);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToStake(e.target.value);
  };

  const onOpenProtocolDisclaimer = () =>
    setIsProtocolDisclaimerOpened((prev) => !prev);

  const onStartStaking = async () => {
    if (!amountToStake || !amountToStake.trim()) return;
    setShowModal(true);
  };

  const onApproveStaking = async () => {
    if (!amountToStake || !amountToStake.trim()) return;
    await approveStaking(amountToStake);
  };

  const onStake = async () => {
    if (!amountToStake || !amountToStake.trim() || !walletAddress) return;
    await stake(walletAddress, amountToStake);
  };

  const renderModalTitle = () => {
    if (currentStep === 2 && stakeError) return "Failed to stake.";
    if (currentStep === 2 && isStaked) return "Successfully staked.";
  };

  const renderErrorMessage = () => {
    if (error) return error.message.split(".")[0];
    if (stakeError) return stakeError.message.split(".")[0];
  };

  const onCloseModal = useCallback(() => {
    if (isPending || stakePending) return;
    setShowModal(false);
    setStakeBrigde(false);
    resetApproveState();
  }, [isPending, resetApproveState, stakePending]);

  const onCloseSuccessModal = useCallback(() => {
    resetStakeState();
  }, [resetStakeState]);

  useEffect(() => {
    if (isStaked) {
      setShowModal(false);
      setTimeout(onCloseSuccessModal, 5000);
    }
  }, [isStaked, onCloseSuccessModal]);

  const disabled = useMemo(() => {
    return (
      isPending ||
      stakePending ||
      !amountToStake ||
      !Number(amountToStake) ||
      Number(amountToStake) > Number(veMETISBalance)
    );
  }, [amountToStake, isPending, stakePending, veMETISBalance]);

  const renderStakeButtonTitle = () => {
    if (stakePending) return "Staking...";
    if (isStaked) return "Staked";
    return "Stake";
  };

  return (
    <>
      {isPending && (
        <WaitingForApprovalModal
          title="Waiting for Approval."
          subTitle="Confirm this transaction in your wallet"
        />
      )}
      {stakePending && (
        <WaitingForApprovalModal
          title="Waiting for confirmation."
          subTitle="Pending confirmation on wallet."
        />
      )}
      {isStaked && (
        <Modal onClose={onCloseSuccessModal}>
          <SuccessModal
            onViewOnExploer={onViewTransaction}
            onClose={onCloseSuccessModal}
          />
        </Modal>
      )}
      {showModal && (
        <Modal onClose={onCloseModal}>
          <div className="flex flex-col gap-3 w-full items-center">
            {isStaked && <SuccessIcon className="w-10 h-10 mb-6" />}
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {!isStaked && (
              <>
                <div className="flex flex-col gap-5 w-full">
                  <div className="bg-velix-slate-blue p-5 text-velix-gray flex gap-2 items-center rounded-lg">
                    <MetisIcon className="w-6 h-6 fill-velix-primary" />
                    Receive {amountToStake} veMETIS
                  </div>
                  <div className="flex max-sm:flex-col gap-5 text-velix-gray">
                    <p className="flex w-full items-center gap-2 bg-velix-slate-blue p-5 rounded-lg">
                      <Clock4 className="fill-velix-primary w-7 h-7 stroke-white" />
                      Wait 7 days
                    </p>
                    <p className="flex w-full items-center gap-2 bg-velix-slate-blue p-5 rounded-lg ">
                      <CheckCircle2 className="fill-velix-primary w-8 h-8 stroke-white" />
                      Wait 7 days
                    </p>
                  </div>
                </div>
                <div className="space-y-10 mt-10">
                  <div className="flex gap-6 text-velix-gray justify-start items-start ">
                    <Checkbox
                      onClick={() => setStakeBrigde(!stakebridge)}
                      className="w-5 h-5 accent-velix-primary"
                    />
                    <p className="-mt-1">
                      I understand that due to the 7-days bridging process from
                      L2 to L1, staking rewards will start after 7 days
                    </p>
                  </div>
                </div>
              </>
            )}

            {(error || stakeError) && (
              <p className="text-red-600 text-center text-base">
                {renderErrorMessage()}
              </p>
            )}

            {!isStaked && (
              <ModalButtons
                isApproveButtonDisabled={
                  isPending || stakePending || currentStep === 2 || !stakebridge
                }
                onClickApproveButton={onApproveStaking}
                onLastStepClick={onStake}
                isApprovePending={isPending}
                isApproveSuccess={isSuccess}
                isLastStepDisabled={
                  isPending || stakePending || currentStep !== 2 || !stakebridge
                }
                title={renderStakeButtonTitle()}
              />
            )}
          </div>
        </Modal>
      )}
      <StakeLayout
        onSetMaxValue={() => setAmountToStake(veMETISBalance)}
        error={
          Number(amountToStake) > Number(veMETISBalance)
            ? "Entered amount exceeds your veMETIS balance"
            : ""
        }
        value={amountToStake}
        role="stake"
        onFromValueChange={onChange}
      >
        <div className="flex flex-col space-y-5 mt-10">
          <div>
            <p
              role="button"
              onClick={onOpenProtocolDisclaimer}
              className="flex items-center text-velix-gray justify-between font-space-grotesk"
            >
              <span className="text-xs lg:text-base">Routing</span>
              <span className="flex items-center bg-velix-slate-blue px-5 py-1 text-xs max-sm:text-[0.625rem] rounded-lg cursor-pointer">
                Protocol
                <ArrowDropDownIcon
                  className={`fill-velix-gray w-5 h-5 transition-all duration-150 ease-in-out ${
                    isProtocolDisclaimerOpened && "rotate-180"
                  }`}
                />
              </span>
            </p>
          </div>
          {isProtocolDisclaimerOpened && (
            <StakingDetails
              className="bg-velix-slate-blue p-6 rounded-lg"
              title=""
              value="Be aware of both minting   and deposit  fee that will be deducted when the transaction is done."
            />
          )}
          <StakingDetails
            title="Exchange Rate"
            value="1 veMETIS = 1 sveMETIS"
          />
          <StakingDetails title="Average return" value={"--"} />
        </div>
        <StakingFormButtom
          isLoading={isPending || stakePending}
          disabled={disabled}
          onStake={onStartStaking}
          role="stake"
        />
      </StakeLayout>
    </>
  );
}
