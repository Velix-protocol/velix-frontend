import classNames from "classnames";
import { Button } from "../button";

interface IModalButtons {
  isApprovalPending: boolean;
  isApproveButtonDisabled: boolean;
  isApprovalSuccess: boolean;
  onClickApproveButton: () => void;
  onLastStepClick: () => void;
  isLastStepDisabled: boolean;
  title: string;
}

export default function ModalButtons({
  isApproveButtonDisabled,
  isApprovalPending,
  onLastStepClick,
  isApprovalSuccess,
  isLastStepDisabled,
  onClickApproveButton,
  title
}: IModalButtons) {
  const renderApproveStakeButtonTitle = () => {
    if (isApprovalPending) return "Approving...";
    if (isApprovalSuccess) return "Approved";
    return "Approve";
  };

  const approveButtonClass = classNames(
    "lg:py-6 disabled:cursor-not-allowed disabled:opacity/60 w-full mt-10 text-xs lg:text-base font-bold font-space-grotesk",
    {
      "hover:bg-velix-primary bg-velix-primary dark:bg-velix-dark-white":
        !isApprovalSuccess,
      "hover:bg-velix-green bg-velix-green dark:text-white": isApprovalSuccess
    }
  );

  return (
    <div className="flex items-center w-full gap-5">
      <Button
        onClick={onClickApproveButton}
        disabled={isApproveButtonDisabled}
        className={approveButtonClass}
      >
        {renderApproveStakeButtonTitle()}{" "}
      </Button>
      <Button
        onClick={onLastStepClick}
        disabled={isLastStepDisabled}
        variant="outline"
        className="lg:py-6 dark:border dark:border-velix-dark-white dark:bg-velix-primary dark:text-white dark:disabled:bg-velix-primary disabled:cursor-not-allowed disabled:bg-velix-blue/20 w-full mt-10 text-xs lg:text-base font-bold border-velix-primary text-velix-primary hover:text-velix-primary font-space-grotesk hover:bg-white"
      >
        {title}
      </Button>
    </div>
  );
}
