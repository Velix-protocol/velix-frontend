import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "../button";

export default function StakingFormButtom({
  role,
  onMint,
  onStake,
  onUnstake
}: {
  role: "stake" | "mint" | "unstake";
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

  return (
    <Button
      onClick={onStakeOperationClick}
      className="lg:py-7 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
    >
      {renderStakeOperationButtonTitle()}
    </Button>
  );
}
