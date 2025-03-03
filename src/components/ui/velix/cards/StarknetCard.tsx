import { cn } from "@/utils/utils";
import { Button } from "../../button";
import { useState } from "react";
import SwitchEcosystemDialog from "../SwitchEcosystem";
import { SupportedChains } from "@/types";

interface StarknetCardProps {
  className?: string;
  currentEcosystem: SupportedChains;
  targetEcosystem: SupportedChains;
}

export default function StarknetCard({
  className = "", 
  currentEcosystem, 
  targetEcosystem
}: StarknetCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const openEcosystemDialog = () => {
    if (currentEcosystem !== "starknet")  
    setIsDialogOpen(true);
  };

  return (
    <>
      <SwitchEcosystemDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        currentEcosystem={currentEcosystem} 
        targetEcosystem={targetEcosystem} 
      />
      <div
        className={cn(
          "rounded-lg bg-white p-8 mt-12 w-full dark:bg-velix-claim-gray",
          className
        )}
      >
        <div className="flex bg-velix-claim dark:bg-velix-claim-gray2 px-5 py-3 rounded-lg flex-col ">
          <div className="flex-1 ">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              veSTRK balance
            </p>
            <div className="items-start xl:items-center mt-1">
              <div className="flex md:flex-row items-center text-velix-claim-gray text-sm lg:text-base font-space-grotesk dark:text-white">
                <span className="text-velix-blue dark:text-white font-bold font-space-grotesk">
                  00.0 veSTRK
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full">
          <Button
            onClick={openEcosystemDialog}
            type="button"
            className="lg:w-full w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10"
          >
            Claim
          </Button>
        </div>
      </div>
    </>
  );
}
