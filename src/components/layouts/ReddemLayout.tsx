import { useAccount } from "wagmi";
import Balance from "../app/Balance";

import { ChangeEvent, ReactNode } from "react";
import { Role } from "@/types";
import VelixBlueLogo from "../ui/velix/icons/VelixBlueLogo";
import VeInput from "../ui/velix/VeInput";
import useChainTokens from "@/hooks/useChainTokens";

type RedeemLayoutProps = {
  children: ReactNode;
  showSwapIcon?: boolean;
  onFromValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: Role;
  error: string;
  onSetMaxValue: () => void;
  withConvertion?: boolean;
};
const RedeemLayout = ({
  children,
  onFromValueChange,
  value,
  role,
  error,
  onSetMaxValue
}: RedeemLayoutProps) => {
  const { isConnected } = useAccount();
  const chainToken = useChainTokens()
  const renderToTitles = () => {
    switch (role) {
      case "redeem":
        return chainToken.stakedToken;
      default:
        return "";
    }
  };
  return (
    <div
      className={`mt-10 w-full lg:mt-20 lg:sticky lg:top-36 rounded-2xl ${
        isConnected && "bg-velix-primary"
      }`}
    >
      <Balance isConnected={isConnected} role={role} />
      <div className="bg-white dark:-mt-5  dark:bg-velix-form-dark-background p-5 lg:p-11 rounded-xl h-full">
        <div className="flex flex-col relative gap-3">
          <VeInput
            withMaxButton
            onMaxButtonClicked={onSetMaxValue}
            value={value}
            onChange={onFromValueChange}
            icon={
              <VelixBlueLogo className="w-5 h-5 fill-velix-blue dark:fill-white" />
            }
            tokenName={`${renderToTitles()} Amount`}
            placeholder={`0.00 ${renderToTitles()}`}
            error={error}
          />
          {error && (
            <div className="bg-velix-red -mt-1 text-white font-space-grotesk text-sm w-fit px-2 py-1 rounded-md">
              {error}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default RedeemLayout;
