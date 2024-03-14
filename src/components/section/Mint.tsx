import { InfoIcon } from "lucide-react";
import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import AppContent from "../layouts/AppContent";
import StakeLayout from "../layouts/StakeLayout";
import Statitics from "./Statitics";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import Modal from "../ui/velix/Modal";
import {
  useApproveMinting,
  useMetisBalance,
  useMint
} from "@/hooks/use-contract";
import { useAccount } from "wagmi";
import { useBalanceStore } from "@/store/balanceState";
import { EXPLORER_TX_URL, MAX_INPUT_LENGTH } from "@/lib/constant";
import ModalButtons from "../ui/velix/ModalButtons";
import SuccessModal from "../ui/velix/SuccessModal";
import classnames from "classnames";
import Loader from "../ui/velix/icons/Loader";

export default function Mint() {
  const [amountToMint, setAmountToMint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const {
    approveMinting,
    isPending,
    isSuccess,
    error,
    reset: resetApproveState
  } = useApproveMinting();
  const {
    mint,
    isPending: mintPending,
    isSuccess: isMinted,
    error: mintError,
    reset: resetMintState,
    txhash
  } = useMint();
  const { address: walletAddress } = useAccount();
  const { getBalances } = useMetisBalance();
  const { METISBalance } = useBalanceStore();

  useEffect(() => {
    if (isSuccess) {
      setCurrentStep(2);
    }
    if (isMinted) {
      setAmountToMint("");
      getBalances();
    }
  }, [getBalances, isMinted, isSuccess, txhash]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "auto";
  }, [showModal]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountToMint(
      e.target.value.length > MAX_INPUT_LENGTH
        ? e.target.value.slice(0, MAX_INPUT_LENGTH)
        : e.target.value
    );
  };

  const onViewTransaction = () => {
    window.open(`${EXPLORER_TX_URL}${txhash}`);
  };

  const onStartMinting = async () => {
    if (!amountToMint || !amountToMint.trim()) return;
    setShowModal(true);
  };

  const onApproveMinting = async () => {
    await approveMinting(amountToMint);
  };

  const onMint = async () => {
    if (!amountToMint || !amountToMint.trim() || !walletAddress) return;
    await mint(walletAddress, amountToMint);
  };

  const renderModalTitle = () => {
    if (currentStep === 1 && !error) return "Waiting for Approval.";
    if (currentStep === 1 && error) return "Approval failed.";
    if (currentStep === 2 && !mintError && !isMinted)
      return "Approved, you can now mint.";
    if (currentStep === 2 && mintError) return "Failed to mint.";
    if (currentStep === 2 && mintPending) return "Waiting for confirmation.";
  };

  const renderErrorMessage = () => {
    if (error) return error.message.split(".")[0];
    if (mintError) return mintError.message.split(".")[0];
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
    "from-velix-primary to-red-600": currentStep === 2 && mintError,
    "from-velix-primary to-velix-primary": currentStep === 2 && !mintError
  });

  const step2Classnames = classnames(
    "h-8 w-8 flex justify-center items-center p-2 rounded-full",
    {
      "bg-red-600 text-white": currentStep === 2 && mintError,
      "text-white bg-velix-primary": currentStep === 2 && !mintError,
      "bg-velix-gray/20 text-velix-primary": currentStep === 1 && !mintError
    }
  );

  const onClose = useCallback(() => {
    if (isPending || mintPending) return;
    setShowModal(false);
    resetApproveState();
    resetMintState();
  }, [isPending, mintPending, resetApproveState, resetMintState]);

  useEffect(() => {
    if (isMinted) setTimeout(onClose, 5000);
  }, [isMinted, onClose]);

  const disabled = useMemo(() => {
    return (
      isPending ||
      mintPending ||
      !amountToMint ||
      !Number(amountToMint) ||
      Number(amountToMint) > Number(METISBalance)
    );
  }, [METISBalance, amountToMint, isPending, mintPending]);

  const renderMintButtonTitle = () => {
    if (mintPending) return "Minting...";
    if (isMinted) return "Minted";
    return "Mint";
  };

  return (
    <>
      {showModal && (
        <Modal onClose={onClose}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && currentStep === 1 && (
              <Loader className="w-20 h-20 mb-6 animate-spin" />
            )}
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {!error && !mintError && !isMinted && (
              <p className="text-velix-gray text-center text-base">
                {currentStep === 1
                  ? "Confirm this transaction in your wallet."
                  : "Mint METIS"}
              </p>
            )}
            {(error || mintError) && (
              <p className="text-red-600 text-center text-base">
                {renderErrorMessage()}
              </p>
            )}
            {isMinted && currentStep === 2 && (
              <SuccessModal
                onViewOnExploer={onViewTransaction}
                onClose={onClose}
              />
            )}
            {!isMinted && (
              <ModalButtons
                isApprovePending={isPending}
                isApproveSuccess={isSuccess}
                isLastStepDisabled={mintPending || currentStep !== 2}
                isApproveButtonDisabled={isPending}
                title={renderMintButtonTitle()}
                onLastStepClick={onMint}
                onClickApproveButton={onApproveMinting}
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
              <Title
                name="Mint"
                subtitle={
                  <p className="flex items-start justify-start gap-4">
                    <span>
                      <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                    </span>
                    <span>
                      Mint veMETIS to participate in liquid staking.
                      <br /> veMETIS is a liquid staking derivative of METIS.
                    </span>
                  </p>
                }
              />
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
                <Title
                  name="Mint"
                  subtitle={
                    <p className="flex items-start justify-start gap-4">
                      <span>
                        <InfoIcon className="h-6 w-6 text-white fill-velix-primary" />
                      </span>
                      <span>
                        Mint veMETIS to participate in liquid staking.
                        <br /> veMETIS is a liquid staking derivative of METIS.
                      </span>
                    </p>
                  }
                />
              </div>
              <StakeLayout
                onSetMaxValue={() => setAmountToMint(METISBalance)}
                error={
                  Number(amountToMint) > Number(METISBalance)
                    ? "Entered amount exceeds your balance"
                    : ""
                }
                value={amountToMint}
                role="mint"
                onFromValueChange={onChange}
                showSwapIcon={false}
              >
                <div className="mt-9 flex flex-col gap-7">
                  <StakingDetails
                    title="Exchange Rate"
                    value="1 METIS = 1 veMETIS"
                  />
                  <StakingDetails title="Average return" value={"--"} />
                </div>
                <StakingFormButtom
                  isLoading={isPending || mintPending}
                  disabled={disabled}
                  onMint={onStartMinting}
                  role="mint"
                />
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
