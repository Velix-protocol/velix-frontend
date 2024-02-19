import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import Balance from "./Balance";
import { useAccount } from "wagmi";
import { useStakingStore } from "@/store/stakingState";
import StakingForm from "@/components/ui/velix/StakingForm";
import StakingFormButtom from "@/components/ui/velix/StakingFormButtom";
import StakingDetails from "@/components/ui/velix/StakingDetails";
import ArrowDropDownIcon from "@/components/ui/velix/icons/ArrowDropDownIcon";
import { useState } from "react";

export default function StakingOperations() {
  const { isStaking } = useStakingStore();
  const { isConnected } = useAccount();
  const [isProtocolDisclaimerOpened, setIsProtocolDisclaimerOpened] =
    useState(false);

  const onOpenProtocolDisclaimer = () =>
    setIsProtocolDisclaimerOpened((prev) => !prev);

  return (
    <div className="mt-10 lg:mt-20 bg-velix-primary rounded-2xl">
      <Balance isConnected={isConnected} />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <StakingForm isStaking={isStaking} />
        <div className="flex flex-col space-y-5 mt-10">
          <div>
            <p
              role="button"
              onClick={onOpenProtocolDisclaimer}
              className="flex items-center text-velix-gray justify-between font-space-grotesk"
            >
              <span className="text-xs lg:text-base">Routing</span>
              <span className="flex items-center bg-velix-slate-blue px-5 py-1 rounded-lg cursor-pointer">
                Protocol
                <ArrowDropDownIcon
                  className={`fill-velix-gray w-5 h-5 transition-all duration-150 ease-in-out ${
                    isProtocolDisclaimerOpened && "rotate-180"
                  }`}
                />
              </span>
            </p>
          </div>
          {isProtocolDisclaimerOpened && (
            <StakingDetails
              className="bg-velix-slate-blue p-6 rounded-lg"
              title=""
              value="Be aware of both minting   and deposit  fee that will be deducted when the transaction is done."
            />
          )}
          <StakingDetails title="Exchange Rate" value="1 METIS = 1 veMETIS" />
          <StakingDetails
            title="Average return"
            value={
              <span className="text-xs lg:text-base">
                =3.13 <span className="font-bold">APR</span>
              </span>
            }
          />
          <StakingDetails
            title="Transaction cost"
            value={
              <span className="text-xs lg:text-base">
                0.03650 METIS (≈$91.94USD)
              </span>
            }
          />
        </div>
        <StakingFormButtom role="stake" />
      </div>
    </div>
  );
}
