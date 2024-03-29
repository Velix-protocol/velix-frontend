import classNames from "classnames";
import { Button } from "../button";
import SuccessIcon from "./icons/SuccessIcon";

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
      "hover:bg-velix-primary bg-velix-primary": !isApprovalSuccess,
      "hover:bg-velix-green bg-velix-green": isApprovalSuccess
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
        {isApprovalSuccess && (
          <SuccessIcon className="h-3 w-3 ml-0.5 fill-white" />
        )}
      </Button>
      <Button
        onClick={onLastStepClick}
        disabled={isLastStepDisabled}
        variant="outline"
        className="lg:py-6 disabled:cursor-not-allowed disabled:bg-velix-primary/20 w-full mt-10 text-xs lg:text-base font-bold border-velix-primary text-velix-primary hover:text-velix-primary font-space-grotesk hover:bg-white"
      >
        {title}
      </Button>
    </div>
  );
}
