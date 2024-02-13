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
import Balance from "./Balance";

export default function StakingOperations() {
  return (
    <div className="mt-10 lg:mt-20 bg-velix-primary rounded-2xl">
      <Balance isConnected />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 -mb-5 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
            <Input
              placeholder="0"
              className="bg-transparent h-5 lg:h-max border-none placeholder:text-sm outline-none"
            />
            <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
              <span>
                <MetisIcon className="lg:w-6 lg:h-6 w-4 h-4 fill-black" />
              </span>
              <span className="text-[0.625rem] lg:text-base">METIS Amount</span>
            </p>
          </div>
          <Outbond className="fill-velix-primary rotate-[45deg] w-8 h-8 mx-auto" />
          <div className="flex justify-between items-center gap-2 -mt-5 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
            <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
              <span>
                <MetisIcon className="lg:w-6 lg:h-6 h-4 w-4 fill-velix-primary" />
              </span>
              <span className="text-[0.625rem] lg:text-base">
                VeMETIS Amount
              </span>
            </p>
            <div>
              <p className="text-velix-primary font-bold text-[0.625rem] lg:text-sm mr-3">
                0.0 METIS
              </p>
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
        <Button className="py-7 w-full mt-10 text-xs lg:text-base font-bold bg-velix-primary font-space-grotesk hover:bg-velix-primary">
          Connect Wallet
        </Button>
      </div>
    </div>
  );
}
