import { useMetisBalances, useStarknetBalances } from "@/hooks/use-contract";
import { useBalanceStore } from "@/store/balanceState";
import { Role } from "@/types";
import useChainTokens from "@/hooks/useChainTokens.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { prettifyBalance } from "@/utils/utils.ts";

export default function Balance({
  role
}: {
  isConnected: boolean;
  role: Role;
}) {
  useMetisBalances();
  useStarknetBalances();
  const { veMETISBalance, METISBalance, strkBalance, veStrkBalance } =
    useBalanceStore();
  const chainToken = useChainTokens();
  const chain = useSupportedChain();

  const renderBalance = () => {
    if (role === "stake") {
      return `${chain === "starknet" ? prettifyBalance(strkBalance) : METISBalance} ${chainToken.nativeToken}`;
    }
    if (role === "redeem") {
      return `${chain === "starknet" ? veStrkBalance : veMETISBalance} ${chainToken.stakedToken}`;
    }
    return "0.0";
  };

  const renderVelixProtocolBalanceUnits = () => {
    switch (role) {
      case "stake":
        return `${chain === "starknet" ? veStrkBalance : veMETISBalance} ${chainToken.stakedToken}`;
      case "redeem":
        return `${chain === "starknet" ? strkBalance : METISBalance} ${chainToken.nativeToken}`;
      default:
        "";
    }
    return "";
  };

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
            {renderVelixProtocolBalanceUnits().split(" ")[1]} Balance{" "}
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
