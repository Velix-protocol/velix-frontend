import { Input } from "@/components/ui/input";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Balance from "./Balance";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import SwapIcon from "@/components/ui/velix/icons/SwapIcon";
import { useStakingStore } from "@/store/stakingState";

export default function StakingOperations() {
  const { isStaking, toggleStaking } = useStakingStore();
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();

  const onConnectToWalletClick = async () => {
    await open();
  };

  const onStakeOperationClick = async () => {
    if (isStaking && isConnected) {
      // TODO: Should be replaced by the staking function
      return () => null;
    }
    if (!isConnected && !isStaking) {
      return await onConnectToWalletClick();
    }
    onConnectToWalletClick;
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
    <div className="mt-10 lg:mt-20 bg-velix-primary rounded-2xl">
      <Balance isConnected={isConnected} />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <div
          className={`flex flex-col relative gap-3 ${
            isStaking ? "flex-col" : "flex-col-reverse"
          }`}
        >
          <div className="flex items-center justify-between gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
            {isStaking ? (
              <Input
                type="number"
                placeholder="0"
                className="bg-transparent h-5 lg:h-max border-none placeholder:text-sm focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-velix-slate-blue focus-visible:rin"
              />
            ) : (
              <p className="text-velix-primary font-bold text-[0.625rem] lg:text-sm mr-3">
                0.0 METIS
              </p>
            )}
            <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
              <span>
                <MetisIcon className="lg:w-6 lg:h-6 w-4 h-4 fill-black" />
              </span>
              <span className="text-[0.625rem] lg:text-base">METIS Amount</span>
            </p>
          </div>
          <button
            onClick={toggleStaking}
            className="absolute mx-auto left-0 right-0 top-1/2 -translate-y-1/2"
          >
            <SwapIcon className="fill-velix-primary rotate-180 lg:w-8 lg:h-8 w-6 h-6 mx-auto" />
          </button>
          <div className="flex justify-between items-center gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
            <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
              <span>
                <MetisIcon className="lg:w-6 lg:h-6 h-4 w-4 fill-velix-primary" />
              </span>
              <span className="text-[0.625rem] lg:text-base">
                VeMETIS Amount
              </span>
            </p>
            <div>
              {isStaking ? (
                <p className="text-velix-primary font-bold text-[0.625rem] lg:text-sm mr-3">
                  0.0 METIS
                </p>
              ) : (
                <Input
                  type="number"
                  placeholder="0"
                  className="bg-transparent text-right h-5 lg:h-max border-none placeholder:text-sm focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-velix-slate-blue focus-visible:rin"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 mt-10">
          <div>
            <p className="flex items-center text-velix-gray justify-between font-space-grotesk">
              <span className="text-xs lg:text-base">Routing</span>
              <Select>
                <SelectTrigger className="w-fit px-5 flex gap-2 border-none rounded-sm text-xs py-0 bg-velix-slate-blue">
                  <SelectValue placeholder="Protocol" />
                </SelectTrigger>
                <SelectContent className=" bg-velix-slate-blue z-50 text-xs lg:text-base">
                  <SelectItem value="node">Node</SelectItem>
                  <SelectItem value="protocol">Protocol</SelectItem>
                  <SelectItem value="metis">METIS</SelectItem>
                </SelectContent>
              </Select>
            </p>
          </div>
          <div>
            <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
              <span className="text-xs lg:text-base">Exchange Rate</span>
              <span className="text-xs lg:text-base">1 METIS = 1 VeMETIS</span>
            </p>
          </div>
          <div>
            <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
              <span className="text-xs lg:text-base">Average return</span>
              <span className="text-xs lg:text-base">
                =3.13 <span className="font-bold">APR</span>
              </span>
            </p>
          </div>
          <div>
            <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
              <span className="text-xs lg:text-base">Transaction cost</span>
              <span className="text-xs lg:text-base">
                0.03650 METIS (≈$91.94USD)
              </span>
            </p>
          </div>
        </div>
        <Button
          onClick={onStakeOperationClick}
          className="lg:py-7 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary"
        >
          {renderStakeOperationButtonTitle()}
        </Button>
      </div>
    </div>
  );
}
