import { Button } from "../ui/button";
import { Role } from "@/types";
import useChainAccount from "@/hooks/useChainAccount";
import useConnectWallet from "@/hooks/useConnectWallet";

export default function StakingFormButtom({
  role,
  onMint,
  onStake,
  onUnstake,
  disabled,
  isLoading
}: {
  role: Role;
  isLoading: boolean;
  disabled?: boolean;
  onMint?: () => void;
  onStake?: () => void;
  onUnstake?: () => void;
}) {
  const { open } = useConnectWallet();
  const { isConnected } = useChainAccount();

  const onStakeOperationClick = async () => {
    if (!isConnected) {
      return await open();
    }

    if (role === "stake") {
      return onStake?.();
    }

    if (role === "unstake") {
      return onUnstake?.();
    }

    if (role === "mint") {
      return onMint?.();
    }
  };

  const renderStakeOperationButtonTitle = () => {
    if (!isConnected) return "Connect wallet";
    switch (role) {
      case "stake":
        return "Stake now";
      case "unstake":
        return "Unstake now";
      case "mint":
        return "Mint now";
      case "redeem":
        return "Redeem";
      case "swap":
        return "Swap";
      case "reward":
        return "Withdraw rewards";
      case "restakeReward":
        return "Stake rewards";
    }
  };

  const renderStakeOperationButtonProgressTitle = () => {
    switch (role) {
      case "stake":
        return "Staking...";
      case "unstake":
        return "Unstaking...";
      case "mint":
        return "Minting...";
      case "redeem":
        return "Redeeming...";
      case "swap":
        return "Swaping...";
      case "reward":
        return "Withdrawing...";
      case "restakeReward":
        return "Staking reward...";
    }
  };

  return (
    <Button
      disabled={disabled}
      onClick={onStakeOperationClick}
      className="lg:py-7 dark:bg-velix-dark-white dark:text-velix-primary disabled:bg-velix-primary/60 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
    >
      {isLoading
        ? renderStakeOperationButtonProgressTitle()
        : renderStakeOperationButtonTitle()}
    </Button>
  );
}
