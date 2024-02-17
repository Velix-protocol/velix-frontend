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

export default function StakingOperations() {
  const { isStaking } = useStakingStore();
  const { isConnected } = useAccount();

  return (
    <div className="mt-10 lg:mt-20 bg-velix-primary rounded-2xl">
      <Balance isConnected={isConnected} />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <StakingForm isStaking={isStaking} />
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
        <StakingFormButtom isStaking={isStaking} />
      </div>
    </div>
  );
}
