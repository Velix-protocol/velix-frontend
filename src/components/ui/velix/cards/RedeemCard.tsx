import { useAccount } from "wagmi";
import { useGetTotalVeMetisAssets } from "@/hooks/use-contract";
import TicketCard from "./TicketCard";
import TicketLogo from "../icons/TicketLogo";
import ClockIcon from "../icons/ClockIcon";


export default function RedeemCard() {
  const { isConnected } = useAccount();
  useGetTotalVeMetisAssets();
  return (
    <div
      className={`bg-white dark:bg-velix-form-dark-background rounded-xl w-full flex flex-col gap-3 mt-10 p-5 lg:p-11 ${
        isConnected ? "lg:mt-20" : "lg:mt-[3.75rem]"
      }`}
    >
      <TicketCard
      description="Redeem"
      value="#458"
      description2="VeMetis"
        icon1={
          <ClockIcon
            className="fill-velix-primary dark:fill-velix-icon-dark h-5 w-5 sm:h-4 sm:w-4"
            aria-label="PlusMinusTable Icon"
          />
        }
        description3="Ticket ID"
        value1="#9856"
        icon={
          <TicketLogo
            className="fill-velix-primary dark:fill-velix-icon-dark h-5 w-5 sm:h-4 sm:w-4"
            aria-label="PlusMinusTable Icon"
          />
        }
        date="2days, 10 :20 :54"
        button="Redeem"
      />
    </div>
  );
}
