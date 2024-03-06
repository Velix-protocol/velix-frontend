import { InfoIcon } from "lucide-react";
import Section from "../layouts/Section";
import StakingDetails from "../ui/velix/StakingDetails";
import StakingFormButtom from "../ui/velix/StakingFormButtom";
import Title from "../ui/velix/Title";
import AppContent from "../layouts/AppContent";
import StakeLayout from "../layouts/StakeLayout";
import Statitics from "./Statitics";
import StakeTitleWrapper from "../layouts/StakeTitleWrapper";
import { ChangeEvent, useEffect, useState } from "react";
import Modal from "../ui/velix/Modal";
import ClockIcon from "../ui/velix/icons/ClockIcon";
import { useApproveMinting, useMint } from "@/hooks/use-contract";
import { useAccount } from "wagmi";
import classnames from "classnames";
import SuccessIcon from "../ui/velix/icons/SuccessIcon";

export default function Mint() {
  const [amountToMint, setAmountToMint] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const { approveMinting, isPending, isSuccess, error } = useApproveMinting();
  const {
    mint,
    isPending: mintPending,
    isSuccess: isMinted,
    error: mintError
  } = useMint();
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
    setAmountToMint(e.target.value);
    console.log(e.target.value);
  };

  const onStartMinting = async () => {
    if (!amountToMint || !amountToMint.trim()) return;
    setShowModal(true);
    await approveMinting(amountToMint);
    console.log("mint");
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
    if (currentStep === 2 && isMinted) return "Successfully Minted.";
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

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && currentStep === 1 && (
              <ClockIcon className="w-10 h-10 mb-6" />
            )}
            {isMinted && <SuccessIcon className="w-10 h-10 mb-6" />}
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

            {currentStep === 2 && !isMinted && (
              <StakingFormButtom
                disabled={mintPending}
                role="mint"
                onMint={onMint}
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
                role="mint"
                onFromValueChange={onChange}
                showSwapIcon={false}
              >
                <div className="mt-9 flex flex-col gap-7">
                  <StakingDetails
                    title="Exchange Rate"
                    value="1 METIS = 1 veMETIS"
                  />
                  <StakingDetails
                    title="Average return"
                    value={
                      <span className="text-xs lg:text-base">
                        =3.13 <span className="font-bold">APR</span>
                      </span>
                    }
                  />
                </div>
                <StakingFormButtom
                  disabled={isPending || mintPending}
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
