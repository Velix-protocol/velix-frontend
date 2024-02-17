import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Button } from "../button";

export default function StakingFormButtom({
  role
}: {
  role: "stake" | "mint" | "unstake";
}) {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const onStakeOperationClick = async () => {
    if (!isConnected) {
      return await open();
    }

    if (role === "stake") {
      // TODO: Should be replaced by the staking function
      return () => null;
    }

    if (role === "unstake") {
      // TODO: Should be replaced by the unstaking function
      return () => null;
    }

    if (role === "mint") {
      return () => null;
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
