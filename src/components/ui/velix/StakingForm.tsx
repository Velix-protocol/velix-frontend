import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "../input";
import MetisIcon from "./icons/MetisIcon";
import SwapIcon from "./icons/SwapIcon";
import VelixBlueLogo from "./icons/VelixBlueLogo";
import { ChangeEvent } from "react";
import SveMETIS from "./icons/SveMETIS";
import classNames from "classnames";

export default function StakingForm({
  showSwapIcon = true,
  onChange,
  role,
  value,
  error
}: {
  showSwapIcon?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: "mint" | "stake" | "unstake";
  error: string;
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

  const icons = {
    sveMETIS: <SveMETIS className="w-8 h-8" />,
    veMETIS: <VelixBlueLogo className="w-6 h-6" />,
    METIS: <MetisIcon className="w-5 h-5  fill-[#00ceff]" />
  };

  const inputClassName = classNames(
    "flex items-center justify-between gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg",
    {
      "border-velix-red border text-velix-red": !!error
    }
  );

  return (
    <div className="flex flex-col relative gap-3">
      <div className={inputClassName}>
        <Input
          value={value}
          onChange={onChange}
          type="number"
          min={0}
          placeholder={`0.00 ${renderFromTitles()}`}
          className="bg-transparent text-base h-5 lg:h-max border-none focus-visible:ring-transparent focus-visible:ring-offset-0 focus-visible:ring-velix-slate-blue focus-visible:rin"
        />
        <p className="shrink-0 flex items-center gap-2 bg-velix-primary/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
          <span>{icons?.[renderFromTitles() as never]}</span>
          <span className="text-[0.625rem] lg:text-base">
            {renderFromTitles()} Amount
          </span>
        </p>
      </div>
      {error && (
        <div className="bg-velix-red -mt-1 text-white font-space-grotesk text-sm w-fit px-2 py-1 rounded-md">
          {error}
        </div>
      )}
      {showSwapIcon && !error && (
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
          <span>{icons?.[renderToTitles() as never]}</span>
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
