import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "./ui/button";

export default function StakingFormButtom({
  role,
  onMint,
  onStake,
  onUnstake,
  disabled,
  isLoading
}: {
  role: "stake" | "mint" | "unstake";
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
    if (role === "stake") return "Stake now";
    if (role === "unstake") return "Unstake now";
    if (role === "mint") return "Mint now";
  };

  const renderStakeOperationButtonProgressTitle = () => {
    switch (role) {
      case "stake":
        return "Staking...";
      case "unstake":
        return "Unstaking...";
      case "mint":
        return "Minting...";
    }
  };

  return (
    <Button
      disabled={disabled}
      onClick={onStakeOperationClick}
      className="lg:py-7 dark:bg-white dark:text-velix-primary disabled:bg-velix-primary/60 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
    >
      {isLoading
        ? renderStakeOperationButtonProgressTitle()
        : renderStakeOperationButtonTitle()}
    </Button>
  );
}
