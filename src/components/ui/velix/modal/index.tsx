/* eslint-disable @typescript-eslint/no-explicit-any */
import ModalLayout from "./ModalLayout";
import Loader from "../icons/Loader";
import ModalButtons from "./ModalButtons";
import Steps from "../../Steps";
import SuccessModal from "./SuccessModal";
import { useCallback, useEffect, useState } from "react";
import { EXPLORER_TX_URL } from "@/utils/constant";

type ModalProps = {
  onClose: () => void;
  step1Error: any;
  step1Success: boolean;
  step2Sucesss: boolean;
  step2Error: any;
  step1Pending: boolean;
  step2Pending: boolean;
  onStep1Click: () => void;
  onStep2Click: () => void;
  renderButtonTitle: () => string;
  txHash: string;
  flowname: "stake" | "mint" | "unstake" | "redeem";
  step1Description?: string;
  step2Description?: string;
};

export default function TransactionModal({
  onClose,
  step1Error,
  step1Success,
  step2Sucesss,
  step2Error,
  onStep2Click,
  step1Pending,
  step2Pending,
  onStep1Click,
  flowname,
  renderButtonTitle,
  txHash,
  step1Description = "Confirm this transaction on your wallet.",
  step2Description = "unstake sveMETIS"
}: ModalProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);

  useEffect(() => {
    if (step1Success) {
      setCurrentStep(2);
    }
  }, [step1Success]);

  const renderModalTitle = () => {
    if (currentStep === 1 && !step1Error) return "Waiting for Approval.";
    if (currentStep === 1 && step1Error) return "Approval failed.";
    if (currentStep === 2 && !step1Error && !step2Sucesss)
      return `Approved, you can now ${flowname}.`;
    if (currentStep === 2 && step2Error) return `Failed to ${flowname}.`;
    if (currentStep === 2 && step2Pending) return "Waiting for confirmation.";
  };

  const onViewTransaction = useCallback(() => {
    window.open(`${EXPLORER_TX_URL}${txHash}`);
  }, [txHash]);

  const renderErrorMessage = useCallback(() => {
    if (step1Error) return step1Error.message.split(".")[0] as string;
    if (step2Error) return step2Error.message.split(".")[0] as string;
    return "";
  }, [step1Error, step2Error]);

  return (
    <ModalLayout
      onClose={() => {
        onClose();
        setCurrentStep(1);
      }}
    >
      <div className="flex flex-col gap-3 items-center">
        {(step1Pending || step2Pending) && (
          <Loader className="w-20 h-20 mb-6 animate-spin" />
        )}
        <p className="font-bold text-center text-2xl lg:text-4xl">
          {renderModalTitle()}
        </p>
        {!step1Error && !step2Error && !step2Sucesss && (
          <p className="text-velix-gray text-center text-base">
            {currentStep === 1 ? step1Description : step2Description}
          </p>
        )}
        {(step1Error || step2Error) && (
          <p className="text-red-600 text-center text-base">
            {renderErrorMessage()}
          </p>
        )}

        {step2Sucesss && currentStep === 2 && (
          <SuccessModal onViewOnExploer={onViewTransaction} onClose={onClose} />
        )}
        {!step2Sucesss && (
          <ModalButtons
            isApprovalPending={step1Pending}
            isApprovalSuccess={step1Success}
            isLastStepDisabled={step2Pending || currentStep !== 2}
            isApproveButtonDisabled={step1Pending || step1Success}
            title={renderButtonTitle()}
            onLastStepClick={onStep2Click}
            onClickApproveButton={onStep1Click}
          />
        )}
        <Steps
          currentStep={currentStep}
          step1Error={step1Error}
          step1Success={step1Success}
          step2Sucesss={step2Sucesss}
          step2Error={step2Error}
        />
      </div>
    </ModalLayout>
  );
}
