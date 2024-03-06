import { useAccount } from "wagmi";
import Balance from "../section/Balance";
import StakingForm from "../ui/velix/StakingForm";
import { ChangeEvent, ReactNode } from "react";

const StakeLayout = ({
  children,
  showSwapIcon = true,
  onFromValueChange,
  value,
  role
}: {
  children: ReactNode;
  showSwapIcon?: boolean;
  onFromValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  role: "mint" | "stake" | "unstake";
}) => {
  const { isConnected } = useAccount();

  return (
    <div
      className={`mt-10 lg:mt-20 ${
        isConnected && "bg-velix-primary"
      } rounded-2xl`}
    >
      <Balance role={role} isConnected={isConnected} />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <StakingForm
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
