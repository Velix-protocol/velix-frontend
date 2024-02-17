import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../input";
import MetisIcon from "./icons/MetisIcon";
import SwapIcon from "./icons/SwapIcon";
import VelixBlueLogo from "./icons/VelixBlueLogo";

export default function StakingForm({ isStaking }: { isStaking: boolean }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={`flex flex-col relative gap-3 ${
        isStaking ? "flex-col" : "flex-col-reverse"
      }`}
    >
      <div className="flex items-center justify-between gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
        {isStaking ? (
          <Input
            type="number"
            placeholder="0.00 METIS"
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
        onClick={() =>
          navigate(pathname.includes("unstake") ? ".." : "unstake")
        }
        className="absolute mx-auto left-0 right-0 top-1/2 -translate-y-1/2"
      >
        <SwapIcon className="fill-velix-primary rotate-180 lg:w-8 lg:h-8 w-6 h-6 mx-auto" />
      </button>
      <div className="flex justify-between items-center gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
        <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
          <span>
            <VelixBlueLogo className="lg:w-6 lg:h-6 h-4 w-4 fill-velix-primary" />
          </span>
          <span className="text-[0.625rem] lg:text-base">veMETIS Amount</span>
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
  );
}
