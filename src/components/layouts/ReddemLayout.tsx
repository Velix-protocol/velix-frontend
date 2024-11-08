import { useAccount } from "wagmi";
import Balance from "../app/Balance";

import {
  ChangeEvent,
  ReactNode,

} from "react";
import { Role } from "@/types";
import VelixBlueLogo from "../ui/velix/icons/VelixBlueLogo";
import VeInput from "../ui/velix/VeInput";

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
  onSetMaxValue,
}: RedeemLayoutProps) => {
  const { isConnected } = useAccount();
  const renderFromTitles = () => {
    switch (role) {
      case "mint":
        return "veMETIS";
    }
  };

  const icons = {


    veMETIS: <VelixBlueLogo className="w-5 h-5 fill-velix-blue dark:fill-white" />
  };

  return (
    <div
      className={`mt-10 w-full lg:mt-20 ${
        isConnected && "bg-velix-primary"
      } rounded-2xl`}
    >
      <Balance role={role} isConnected={isConnected} />
      <div className="bg-white dark:-mt-5  dark:bg-velix-form-dark-background p-5 lg:p-11 rounded-xl h-full">
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
        </div>
        {children}
      </div>
    </div>
  );
};

export default RedeemLayout;
