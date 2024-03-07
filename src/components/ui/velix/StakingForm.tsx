import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../input";
import MetisIcon from "./icons/MetisIcon";
import SwapIcon from "./icons/SwapIcon";
import VelixBlueLogo from "./icons/VelixBlueLogo";
import { ChangeEvent } from "react";

export default function StakingForm({
  showSwapIcon = true,
  onChange,
  role,
  value
}: {
  showSwapIcon?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: "mint" | "stake" | "unstake";
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const renderFromTitles = () => {
    switch (role) {
      case "mint":
        return "METIS";
      case "unstake":
        return "sveMETIS";
      case "stake":
        return "veMETIS";
      default:
        return "";
    }
  };

  const renderToTitles = () => {
    switch (role) {
      case "mint":
        return "veMETIS";
      case "unstake":
        return "veMETIS";
      case "stake":
        return "sveMETIS";
      default:
        return "";
    }
  };

  const renderConvertedValue = () => {
    if (!value) return "0.0";
    switch (role) {
      case "mint":
        return Number(value) * 1;
      case "stake":
        return Number(value) * 1;
      case "unstake":
        return Number(value) * 1;
      default:
        return 0;
    }
  };

  return (
    <div className="flex flex-col relative gap-3">
      <div className="flex items-center justify-between gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
        <Input
          value={value}
          onChange={onChange}
          type="number"
          min={0}
          placeholder={`0.00 ${renderFromTitles()}`}
          className="bg-transparent text-base h-5 lg:h-max border-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-velix-slate-blue focus-visible:rin"
        />
        <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
          <span>
            <MetisIcon className="lg:w-6 lg:h-6 w-4 h-4 fill-black" />
          </span>
          <span className="text-[0.625rem] lg:text-base">
            {renderFromTitles()} Amount
          </span>
        </p>
      </div>
      {showSwapIcon && (
        <button
          onClick={() =>
            navigate(
              pathname.includes("unstake") ? "/app/stake" : "/app/unstake",
              {
                relative: "path"
              }
            )
          }
          className="absolute mx-auto left-0 right-0 top-1/2 -translate-y-1/2"
        >
          <SwapIcon className="fill-velix-primary rotate-180 lg:w-8 lg:h-8 w-6 h-6 mx-auto" />
        </button>
      )}
      <div className="flex justify-between items-center gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
        <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
          <span>
            <VelixBlueLogo className="lg:w-6 lg:h-6 h-4 w-4 fill-velix-primary" />
          </span>
          <span className="text-[0.625rem] lg:text-base">
            {renderToTitles()} Amount
          </span>
        </p>
        <div>
          <p className="text-velix-primary font-bold text-base ml-2 mr-3">
            {renderConvertedValue()} {renderToTitles()}
          </p>
        </div>
      </div>
    </div>
  );
}
