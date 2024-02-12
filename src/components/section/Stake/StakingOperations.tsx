import { Input } from "@/components/ui/input";
import MetisIcon from "@/components/ui/velix/icons/MetisIcon";
import Outbond from "@/components/ui/velix/icons/Outbond";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import React from "react";
import { Button } from "@/components/ui/button";

export default function StakingOperations() {
  return (
    <div className="bg-white p-11 mt-20 rounded-xl">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 -mb-5 bg-velix-slate-blue font-space-grotesk p-3 rounded-lg">
          <Input
            placeholder="Metis amount"
            className="bg-transparent h-max border-none placeholder:text-sm outline-none"
          />
          <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-3 text-sm text-velix-gray rounded-md">
            <span>
              <MetisIcon className="w-6 h-6 fill-black" />
            </span>
            <span>METIS Amount</span>
          </p>
        </div>
        <Outbond className="fill-velix-primary rotate-[45deg] w-8 h-8 mx-auto" />
        <div className="flex justify-between items-center gap-2 -mt-5 bg-velix-slate-blue font-space-grotesk p-3 rounded-lg">
          <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-3 text-sm text-velix-gray rounded-md">
            <span>
              <MetisIcon className="w-6 h-6 fill-velix-primary" />
            </span>
            <span>VeMETIS Amount</span>
          </p>
          <div>
            <p className="text-velix-primary font-bold text-sm mr-3">
              0.0 METIS
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 mt-10">
        <div>
          <p className="flex items-center text-velix-gray justify-between font-space-grotesk">
            <span>Routing</span>
            <Select>
              <SelectTrigger className="w-fit px-5 flex gap-2 border-none rounded-sm text-xs py-0 bg-velix-slate-blue">
                <SelectValue placeholder="Protocol" />
              </SelectTrigger>
              <SelectContent className=" bg-velix-slate-blue z-50">
                <SelectItem value="node">Node</SelectItem>
                <SelectItem value="protocol">Protocol</SelectItem>
                <SelectItem value="metis">METIS</SelectItem>
              </SelectContent>
            </Select>
          </p>
        </div>
        <div>
          <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
            <span>Exchange Rate</span>
            <span>1 METIS = 1 VeMETIS</span>
          </p>
        </div>
        <div>
          <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
            <span>Average return</span>
            <span>=3.13 APR</span>
          </p>
        </div>
        <div>
          <p className="flex text-velix-gray items-center justify-between font-space-grotesk">
            <span>Transaction cost</span>
            <span>0.03650 METIS (≈$91.94USD)</span>
          </p>
        </div>
      </div>
      <Button className="py-7 w-full mt-10 font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary">
        Connect Wallet
      </Button>
    </div>
  );
}
