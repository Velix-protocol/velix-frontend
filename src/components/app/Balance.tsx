import { useMetisBalance } from "@/hooks/use-contract";
import { useBalanceStore } from "@/store/balanceState";
import { Role } from "@/types";
import useChainTokens from "@/hooks/useChainTokens.ts";

export default function Balance({
  isConnected,
  role
}: {
  isConnected: boolean;
  role: Role;
}) {
  useMetisBalance();
  const { sveMETISBalance, veMETISBalance, METISBalance } = useBalanceStore();
  const chainToken = useChainTokens();

  const renderBalance = () => {
    if (role === "mint") {
      return `${METISBalance} ${chainToken.nativeToken}`;
    }
    if (role === "stake") {
      return `${veMETISBalance} ${chainToken.derivedToken}`;
    }
    if (role === "unstake") {
      return `${sveMETISBalance} ${chainToken.stakedToken}`;
    }
    return "0.0";
  };

  const renderBalanceTitle = () => {
    switch (role) {
      case "mint":
        return `${chainToken.derivedToken}`;
      case "stake":
        return "Staked";
      case "unstake":
        return "Unstaked";
      default:
        "";
    }
  };

  const renderVelixProtocolBalanceUnits = () => {
    switch (role) {
      case "mint":
      case "unstake":
        return `${veMETISBalance} ${chainToken.derivedToken}`;
      case "stake":
        return `${sveMETISBalance} ${chainToken.stakedToken}`;
      default:
        "";
    }
  };

  if (!isConnected) return <>{""}</>;
  return (
    <div className="bg-velix-primary dark:pb-16 dark:bg-[#383838] p-5 lg:p-10 space-y-5 lg:space-y-10 text-white font-space-grotesk rounded-2xl">
      <div className="flex gap-2 md:gap-5 max-md:flex-col lg:gap-10 md:justify-center md:items-center">
        <div className="bg-white/25 dark:bg-[#484848] p-3 gap-4 md:p-5 flex flex-row md:flex-col w-fit items-center md:items-start lg:p-7 rounded-lg h-full md:w-full md:space-y-2">
          <p className="text-xs lg:text-base flex">
            {renderBalance().split(" ")[1]} Balance{" "}
            <span className="block md:hidden">:</span>
          </p>
          <p className="font-bold text-base lg:text-xl">{renderBalance()}</p>
        </div>
        <div className="bg-white/25 dark:bg-[#484848] p-3 gap-4 md:p-5 flex flex-row md:flex-col w-fit items-center md:items-start lg:p-7 rounded-lg h-full md:w-full md:space-y-2">
          <p className="text-xs lg:text-base flex">
            {renderBalanceTitle()} Balance
            <span className="block md:hidden">:</span>
          </p>
          <p className="font-bold text-base lg:text-xl">
            {renderVelixProtocolBalanceUnits()}
          </p>
        </div>
      </div>
    </div>
  );
}
