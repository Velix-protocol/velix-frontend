import { useStakingStore } from "@/store/stakingState";
import StakingFormButtom from "@/components/ui/velix/StakingFormButtom";
import StakingDetails from "@/components/ui/velix/StakingDetails";
import ArrowDropDownIcon from "@/components/ui/velix/icons/ArrowDropDownIcon";
import { ChangeEvent, useEffect, useState } from "react";
import StakeLayout from "@/components/layouts/StakeLayout";
import { useApproveStaking, useStaking } from "@/hooks/use-contract";
import { useAccount } from "wagmi";
import classnames from "classnames";
import Modal from "@/components/ui/velix/Modal";
import ClockIcon from "@/components/ui/velix/icons/ClockIcon";
import SuccessIcon from "@/components/ui/velix/icons/SuccessIcon";

export default function StakingOperations() {
  const { isStaking } = useStakingStore();
  const [isProtocolDisclaimerOpened, setIsProtocolDisclaimerOpened] =
    useState(false);

  const [amountToStake, setAmountToStake] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const { approveStaking, isPending, isSuccess, error } = useApproveStaking();
  const {
    stake,
    isPending: stakePending,
    isSuccess: isStaked,
    error: stakeError
  } = useStaking();
  const { address: walletAddress } = useAccount();

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(2);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToStake(e.target.value);
    console.log(e.target.value);
  };

  const onOpenProtocolDisclaimer = () =>
    setIsProtocolDisclaimerOpened((prev) => !prev);

  const onStartStaking = async () => {
    if (!amountToStake || !amountToStake.trim()) return;
    setShowModal(true);
    await approveStaking(amountToStake);
  };

  const onStake = async () => {
    if (!amountToStake || !amountToStake.trim() || !walletAddress) return;
    await stake(walletAddress, amountToStake);
  };

  const renderModalTitle = () => {
    if (currentStep === 1 && !error) return "Waiting for Approval.";
    if (currentStep === 1 && error) return "Approval failed.";
    if (currentStep === 2 && !stakeError && !isStaked)
      return "Approved, you can now stake.";
    if (currentStep === 2 && stakeError) return "Failed to stake.";
    if (currentStep === 2 && isStaked) return "Successfully staked.";
  };

  const renderErrorMessage = () => {
    if (error) return error.message.split(".")[0];
    if (stakeError) return stakeError.message.split(".")[0];
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
    "from-velix-primary to-red-600": currentStep === 2 && stakeError,
    "from-velix-primary to-velix-primary": currentStep === 2 && !stakeError
  });

  const step2Classnames = classnames(
    "h-8 w-8 flex justify-center items-center p-2 rounded-full",
    {
      "bg-red-600 text-white": currentStep === 2 && stakeError,
      "text-white bg-velix-primary": currentStep === 2 && !stakeError,
      "bg-velix-gray/20 text-velix-primary": currentStep === 1 && !stakeError
    }
  );

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && currentStep === 1 && (
              <ClockIcon className="w-10 h-10 mb-6" />
            )}
            {isStaked && <SuccessIcon className="w-10 h-10 mb-6" />}
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {!error && !stakeError && !isStaked && (
              <p className="text-velix-gray text-center text-base">
                {currentStep === 1
                  ? "Confirm this transaction in your wallet."
                  : "Stake veMETIS"}
              </p>
            )}
            {(error || stakeError) && (
              <p className="text-red-600 text-center text-base">
                {renderErrorMessage()}
              </p>
            )}

            {currentStep === 2 && !isStaked && (
              <StakingFormButtom
                disabled={stakePending}
                role="stake"
                onStake={onStake}
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
      <StakeLayout
        role="stake"
        onFromValueChange={onChange}
        isStaking={isStaking}
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
          <StakingDetails title="Exchange Rate" value="1 METIS = 1 veMETIS" />
          <StakingDetails
            title="Average return"
            value={
              <span className="text-xs lg:text-base">
                =3.13 <span className="font-bold">APR</span>
              </span>
            }
          />
        </div>
        <StakingFormButtom onStake={onStartStaking} role="stake" />
      </StakeLayout>
    </>
  );
}
