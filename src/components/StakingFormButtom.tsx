import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";
import { Role } from "@/types";
import { Role } from "@/types";

export default function StakingFormButtom({
  role,
  onMint,
  onStake,
  onUnstake,
  disabled,
  isLoading
}: {
  role: Role;
  role: Role;
  isLoading: boolean;
  disabled?: boolean;
  onMint?: () => void;
  onStake?: () => void;
  onUnstake?: () => void;
}) {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

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
