import { Button } from "../button";

interface IModalButtons {
  isApprovePending: boolean;
  isApproveButtonDisabled: boolean;
  isApproveSuccess: boolean;
  onClickApproveButton: () => void;
  onLastStepClick: () => void;
  isLastStepDisabled: boolean;
  title: string;
}

export default function ModalButtons({
  isApproveButtonDisabled,
  isApprovePending,
  onLastStepClick,
  isApproveSuccess,
  isLastStepDisabled,
  onClickApproveButton,
  title
}: IModalButtons) {
  const renderApproveStakeButtonTitle = () => {
    if (isApprovePending) return "Approving...";
    if (isApproveSuccess) return "Approved";
    return "Approve";
  };

  return (
    <div className="flex items-center w-full gap-5">
      <Button
        onClick={onClickApproveButton}
        disabled={isApproveButtonDisabled}
        className="lg:py-6 disabled:cursor-not-allowed disabled:bg-velix-primary/60 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
      >
        {renderApproveStakeButtonTitle()}
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
