import { useAccount } from "wagmi";
import Balance from "../Balance";
import StakingForm from "../StakingForm";
import { ChangeEvent, ReactNode } from "react";
import { Role } from "@/types";

const StakeLayout = ({
  children,
  showSwapIcon = true,
  onFromValueChange,
  value,
  role,
  error,
  onSetMaxValue
}: {
  children: ReactNode;
  showSwapIcon?: boolean;
  onFromValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: Role;
  error: string;
  onSetMaxValue: () => void;
}) => {
  const { isConnected } = useAccount();

  return (
    <div
      className={`mt-10 w-full lg:mt-20 ${
        isConnected && "bg-velix-primary"
      } rounded-2xl`}
    >
      <Balance role={role} isConnected={isConnected} />
      <div className="bg-white dark:-mt-5 dark:bg-velix-form-dark-background p-5 lg:p-11 rounded-xl h-full">
        <StakingForm
          onSetMaxValue={onSetMaxValue}
          error={error}
          value={value}
          role={role}
          onChange={onFromValueChange}
          showSwapIcon={showSwapIcon}
        />
        {children}
      </div>
    </div>
  );
};

export default StakeLayout;
