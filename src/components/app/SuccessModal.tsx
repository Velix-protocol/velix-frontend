import SuccessIcon from "../ui/velix/icons/SuccessIcon";
import { Button } from "../ui/button";

export default function SuccessModal({
  onViewOnExploer,
  onClose
}: {
  onViewOnExploer?: () => void;
  onClose: () => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <SuccessIcon className="w-10 h-10 mb-6 fill-velix-green" />
      <p className="font-bold text-center text-2xl lg:text-4xl">
        Transaction submitted
      </p>
      <div className="flex items-center w-full gap-5">
        <Button
          onClick={onViewOnExploer}
          disabled={!onViewOnExploer}
          className="lg:py-6 dark:bg-velix-dark-white disabled:cursor-not-allowed disabled:bg-velix-primary/60 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
        >
          View Transaction
        </Button>
        <Button
          onClick={onClose}
          variant="outline"
          className="lg:py-6 dark:bg-velix-primary dark:border dark:border-velix-dark-white dark:text-velix-dark-white disabled:cursor-not-allowed disabled:bg-velix-primary/20 w-full mt-10 text-xs lg:text-base font-bold border-velix-primary text-velix-primary hover:text-velix-primary font-space-grotesk hover:bg-white"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
