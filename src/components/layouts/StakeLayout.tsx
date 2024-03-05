import { useAccount } from "wagmi";
import Balance from "../section/Balance";
import StakingForm from "../ui/velix/StakingForm";
import { ChangeEvent, ReactNode } from "react";

const StakeLayout = ({
  isStaking,
  children,
  showSwapIcon = true,
  onFromValueChange
}: {
  isStaking: boolean;
  children: ReactNode;
  showSwapIcon?: boolean;
  onFromValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { isConnected } = useAccount();

  return (
    <div
      className={`mt-10 lg:mt-20 ${
        isConnected && "bg-velix-primary"
      } rounded-2xl`}
    >
      <Balance isConnected={isConnected} />
      <div className="bg-white p-5 lg:p-11 rounded-xl h-full">
        <StakingForm
          onChange={onFromValueChange}
          isStaking={isStaking}
          showSwapIcon={showSwapIcon}
        />
        {children}
      </div>
    </div>
  );
};

export default StakeLayout;
