import { useAccount, useBalance } from "wagmi";
import { converGweiToEth, truncateString } from "@/lib/utils";
import { useVeMetisBalance } from "@/hooks/use-contract";

export default function Balance({
  isConnected,
  role
}: {
  isConnected: boolean;
  role: "mint" | "stake" | "unstake";
}) {
  const { address } = useAccount();
  const { data } = useBalance({
    address
  });
  const { data: veMetisBalance } = useVeMetisBalance(address ?? "0x0");

  const renderBalance = () => {
    if (data) {
      return data.symbol.toLowerCase() === "metis"
        ? converGweiToEth(data?.value)
        : "0.0";
    }
    return "0.0";
  };

  const renderBalanceTitle = () => {
    switch (role) {
      case "mint":
        return "Minted";
      case "stake":
        return "Staked";
      case "unstake":
        return "Unstaked";
      default:
        "";
    }
  };

  const renderVelixProtocolBalance = () => {
    switch (role) {
      case "mint":
        return veMetisBalance?.toString().substring(0, 4) ?? 0;
      case "stake":
        return 0;
      case "unstake":
        return 0;
      default:
        "";
    }
  };

  if (!isConnected) return <>{""}</>;
  return (
    <div className="bg-velix-primary p-5 lg:p-10 space-y-5 lg:space-y-10 text-white font-space-grotesk rounded-2xl">
      <div className="bg-white/25 w-fit px-5 py-2 rounded-lg">
        <p className="text-[0.625rem] lg:text-xs">
          {truncateString(address, 4, 10)}
        </p>
      </div>
      <div className="flex gap-2 md:gap-5 max-md:flex-col lg:gap-10 md:justify-center md:items-center">
        <div className="bg-white/25 p-3 gap-4 md:p-5 flex flex-row md:flex-col w-fit items-center md:items-start lg:p-7 rounded-lg h-full md:w-full md:space-y-2">
          <p className="text-xs lg:text-base flex">
            METIS Balance <span className="block md:hidden">:</span>
          </p>
          <p className="font-bold text-base lg:text-xl">
            {renderBalance()} METIS
          </p>
        </div>
        <div className="bg-white/25 p-3 gap-4 md:p-5 flex flex-row md:flex-col w-fit items-center md:items-start lg:p-7 rounded-lg h-full md:w-full md:space-y-2">
          <p className="text-xs lg:text-base flex">
            {renderBalanceTitle()} Balance
            <span className="block md:hidden">:</span>
          </p>
          <p className="font-bold text-base lg:text-xl">
            {renderVelixProtocolBalance()} veMETIS
          </p>
        </div>
      </div>
    </div>
  );
}
