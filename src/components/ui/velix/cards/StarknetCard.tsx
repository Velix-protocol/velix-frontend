import { cn } from "@/utils/utils";
import { Button } from "../../button";

interface StarknetCardProps {
  className?: string;
}

export default function StarknetCard({ className = "" }: StarknetCardProps) {
  return (
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
        <Button className="lg:w-full w-full font-space-grotesk bg-velix-blue dark:bg-velix-gray text-white dark:text-velix-claim-gray px-10">
          Claim
        </Button>
      </div>
    </div>
  );
}
