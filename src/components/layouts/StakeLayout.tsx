import Balance from "../app/Balance";
import {
  ChangeEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from "react";
import { Role } from "@/types";
import { useLocation, useNavigate } from "react-router-dom";
import MetisIcon from "../ui/velix/icons/MetisIcon";
import SwapIcon from "../ui/velix/icons/SwapIcon";
import VelixBlueLogo from "../ui/velix/icons/VelixBlueLogo";
import { useGetConvertToShareValue } from "@/hooks/use-contract";
import { formatEther } from "ethers";
import VeInput from "../ui/velix/VeInput";
import useChainAccount from "@/hooks/useChainAccount";
import useChainTokens from "@/hooks/useChainTokens.ts";
import { prettifyBalance } from "@/utils/utils.ts";

type StakeLayoutProps = {
  children: ReactNode;
  showSwapIcon?: boolean;
  onFromValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: Role;
  error: string;
  onSetMaxValue: () => void;
  withConvertion?: boolean;
  setAmountToReceiveAfterStaking?: (state: string) => void;
};

const StakeLayout = ({
  children,
  showSwapIcon = true,
  onFromValueChange,
  value,
  role,
  error,
  onSetMaxValue,
  withConvertion = true,
  setAmountToReceiveAfterStaking
}: StakeLayoutProps) => {
  const { isConnected } = useChainAccount();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [convertedValue, setConvertedValue] = useState<number | string>(0);
  const getConvertToShareValue = useGetConvertToShareValue();
  const chainToken = useChainTokens();

  const renderFromTitles = () => {
    switch (role) {
      case "stake":
        return chainToken.nativeToken;
      default:
        return "";
    }
  };

  const renderToTitles = () => {
    switch (role) {
      case "stake":
        return chainToken.stakedToken;
      default:
        return "";
    }
  };

  const renderConvertedValue: () => Promise<number | string> =
    useCallback(async () => {
      if (!value) return "0.0";
      switch (role) {
        case "stake":
          return Number(formatEther(await getConvertToShareValue(value))) * 1;
        default:
          return 0;
      }
    }, [getConvertToShareValue, role, value]);

  useEffect(() => {
    (async () => {
      const value = await renderConvertedValue();
      setConvertedValue(value);
      setAmountToReceiveAfterStaking?.(prettifyBalance(value as string));
    })();
  }, [renderConvertedValue, setAmountToReceiveAfterStaking]);

  const icons = {
    veMETIS: (
      <VelixBlueLogo className="w-6 h-6 fill-velix-blue dark:fill-velix-dark-white" />
    ),
    METIS: <MetisIcon className="w-5 h-5 fill-[#00ceff]" />
  };

  return (
    <div
      className={`mt-10 w-full lg:mt-20 rounded-2xl ${
        isConnected && "bg-velix-primary"
      }`}
    >
      <Balance isConnected={!!isConnected} role={role} />
      <div className="bg-white dark:-mt-5 dark:bg-velix-form-dark-background p-5 lg:p-11 rounded-xl h-full">
        <div className="flex flex-col relative gap-3">
          <VeInput
            withMaxButton
            onMaxButtonClicked={onSetMaxValue}
            value={value}
            onChange={onFromValueChange}
            icon={icons?.[renderFromTitles() as never]}
            tokenName={`${renderFromTitles()} Amount`}
            placeholder={`0.00 ${renderFromTitles()}`}
            error={error}
          />
          {error && (
            <div className="bg-velix-red -mt-1 text-white font-space-grotesk text-sm w-fit px-2 py-1 rounded-md">
              {error}
            </div>
          )}
          {showSwapIcon && !error && (
            <button
              onClick={() =>
                navigate(
                  pathname.includes("redeem") ? "/app/stake" : "/app/redeem",
                  {
                    relative: "path"
                  }
                )
              }
              className="absolute mx-auto left-0 right-0 top-1/2 -translate-y-1/2"
            >
              <SwapIcon className="fill-velix-primary dark:fill-velix-icon-dark rotate-180 lg:w-8 lg:h-8 w-6 h-6 mx-auto" />
            </button>
          )}
          {withConvertion && (
            <div className="flex justify-between dark:bg-velix-form-input-dark items-center gap-2 bg-velix-slate-blue font-space-grotesk p-2 lg:p-3 rounded-lg">
              <p className="shrink-0 flex items-center dark:bg-velix-light-dark gap-2 bg-velix-blue/5 p-2 lg:p-3 text-sm text-velix-gray rounded-md">
                <span>{icons?.[renderToTitles() as never]}</span>
                <span className="text-[0.625rem] lg:text-base">
                  {renderToTitles()} Amount
                </span>
              </p>
              <div>
                <p className="text-velix-primary dark:text-white font-bold text-base ml-2 mr-3">
                  {prettifyBalance(convertedValue as string)} {renderToTitles()}
                </p>
              </div>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default StakeLayout;
