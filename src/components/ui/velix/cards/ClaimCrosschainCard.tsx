import { Button } from "../../button";
import { cn } from "@/utils/utils";
import { useState } from "react";
import SwitchEcosystemDialog from "../SwitchEcosystem";
import { SupportedChains } from "@/types";

interface ClaimCrosschainCard {
  className?: string;
  currentEcosystem: SupportedChains;
  targetEcosystem: SupportedChains;
  claimFor: SupportedChains;
}

export default function ClaimCrosschainCard({
  className = "",
  currentEcosystem,
  targetEcosystem,
  claimFor
}: ClaimCrosschainCard) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleSwitchEcosystemDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  // TODO: This  function should be called for claiming the reward
  const onClaimReward = () => null;

  return (
    <>
      <SwitchEcosystemDialog
        isOpen={isDialogOpen}
        onClose={toggleSwitchEcosystemDialog}
        currentEcosystem={currentEcosystem}
        targetEcosystem={targetEcosystem}
      />
      <div
        className={cn(
          "rounded-lg bg-white p-8 mt-12 w-full dark:bg-velix-claim-gray",
          className
        )}
      >
        <div className="flex bg-velix-claim dark:bg-velix-claim-gray2 px-5 py-3 rounded-lg flex-col">
          <div className="flex-1 ">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              {claimFor === "metis" ? "veMETIS" : "veSTRK"} balance
            </p>
            <div className="items-start xl:items-center mt-1">
              <div className="flex md:flex-row items-center text-velix-claim-gray text-sm lg:text-base font-space-grotesk  dark:text-white">
                <span className="text-velix-blue dark:text-white font-bold font-space-grotesk">
                  00.0 {claimFor === "metis" ? "veMETIS" : "veSTRK"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button
            onClick={
              claimFor === currentEcosystem
                ? onClaimReward
                : toggleSwitchEcosystemDialog
            }
            className="lg:w-full w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
          >
            Claim
          </Button>
        </div>
      </div>
    </>
  );
}
