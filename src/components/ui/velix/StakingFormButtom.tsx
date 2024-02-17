import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "../button";

export default function StakingFormButtom({
  isStaking
}: {
  isStaking: boolean;
}) {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const onStakeOperationClick = async () => {
    if (isStaking && isConnected) {
      // TODO: Should be replaced by the staking function
      return () => null;
    }
    if (!isConnected && !isStaking) {
      return await open();
    }

    if (isConnected && !isStaking) {
      // TODO: Should be replaced by the unstaking function
      return () => null;
    }
  };
  const renderStakeOperationButtonTitle = () => {
    if (!isConnected) return "Connect wallet";
    if (isStaking && isConnected) return "Stake now";
    if (isConnected && !isStaking) return "Unstake now";
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
