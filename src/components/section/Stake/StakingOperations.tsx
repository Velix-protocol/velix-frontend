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
import { Button } from "@/components/ui/button";
import { useBalanceStore } from "@/store/balanceState";
import { EXPLORER_TX_URL } from "@/lib/constant";
import { toast } from "sonner";

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
      toast("Stake completed", {
        duration: 5000,
        position: "top-right",
        action: {
          label: "View transaction",
          onClick: () => window.open(`${EXPLORER_TX_URL}${txhash}`)
        }
      });
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

  // const isAllChecked = useMemo(
  //   () => stakebridge && vestment,
  //   [stakebridge, vestment]
  // );

  const onCloseModal = useCallback(() => {
    if (isPending || stakePending) return;
    setShowModal(false);
    setStakeBrigde(false);
    // setVestment(false);
    resetApproveState();
    resetStakeState();
  }, [isPending, resetApproveState, resetStakeState, stakePending]);

  useEffect(() => {
    if (isStaked) setTimeout(onCloseModal, 5000);
  }, [isStaked, onCloseModal]);

  const disabled = useMemo(() => {
    return (
      isPending ||
      stakePending ||
      !amountToStake ||
      !Number(amountToStake) ||
      Number(amountToStake) > Number(veMETISBalance)
    );
  }, [amountToStake, isPending, stakePending, veMETISBalance]);

  const renderApproveStakeButtonTitle = () => {
    if (isPending) return "Approving...";
    if (isSuccess) return "Approved";
    return "Approve";
  };

  const renderStakeButtonTitle = () => {
    if (stakePending) return "Staking...";
    if (isStaked) return "Staked";
    return "Stake";
  };

  return (
    <>
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
                  {/* <div className="flex gap-6 text-velix-gray justify-start items-start ">
                    <Checkbox
                      onClick={() => setVestment(!vestment)}
                      className="w-5 h-5 checked:accent-velix-primary"
                    />
                    <p className="-mt-1">
                      I understand that 70% of the veMETIS rewards earned from
                      veMETIS staking will be converted upon redeeming veMETIS.
                      the remaining 30% of the rewards will be vested and can be
                      released by staking Velix within 365 days
                    </p>
                  </div> */}
                </div>
              </>
            )}

            {(error || stakeError) && (
              <p className="text-red-600 text-center text-base">
                {renderErrorMessage()}
              </p>
            )}

            {!isStaked && (
              <div className="flex items-center w-full gap-5">
                <Button
                  onClick={onApproveStaking}
                  disabled={
                    isPending ||
                    stakePending ||
                    currentStep === 2 ||
                    !stakebridge
                  }
                  className="lg:py-7 disabled:cursor-not-allowed disabled:bg-velix-primary/60 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
                >
                  {renderApproveStakeButtonTitle()}
                </Button>
                <Button
                  onClick={onStake}
                  disabled={
                    isPending ||
                    stakePending ||
                    currentStep !== 2 ||
                    !stakebridge
                  }
                  variant="outline"
                  className="lg:py-7 disabled:cursor-not-allowed disabled:bg-velix-primary/20 w-full mt-10 text-xs lg:text-base font-bold border-velix-primary text-velix-primary hover:text-velix-primary font-space-grotesk hover:bg-white"
                >
                  {renderStakeButtonTitle()}
                </Button>
              </div>
            )}
          </div>
        </Modal>
      )}
      <StakeLayout
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
