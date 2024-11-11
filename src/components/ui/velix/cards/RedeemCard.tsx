import { FaClock } from "react-icons/fa";
import TicketLogo from "../icons/TicketLogo";
import { Button } from "../../button";
import { RedeemTicket } from "@/types";
import dayjs from "dayjs";
import { useRedeemRedemptionTicketNft } from "@/hooks/use-redemption";
import { useAccount } from "wagmi";
import ModalLayout from "../modal/ModalLayout";
import Loader from "../icons/Loader";
import { useCallback, useEffect, useState } from "react";
import { EXPLORER_TX_URL } from "@/utils/constant";
import SuccessModal from "../modal/SuccessModal";

const RedeemCard = ({ redeemTicket }: { redeemTicket: RedeemTicket }) => {
  const [showModal, setShowModal] = useState(false);
  const { address } = useAccount();
  const {
    redeemRedemptionTicketNft,
    isPending,
    error,
    isSuccess,
    data: txHash,
    reset
  } = useRedeemRedemptionTicketNft();

  const onViewTransaction = useCallback(() => {
    window.open(`${EXPLORER_TX_URL}${txHash}`);
  }, [txHash]);

  const onClose = useCallback(() => {
    if (isPending) return;
    setShowModal(false);
    reset();
  }, []);

  const renderModalTitle = useCallback(() => {
    if (isPending) return "Redeeming...";
    if (error) return "Error";
    return "Redeem";
  }, [isPending, error]);

  return (
    <>
      {showModal && (
        <ModalLayout onClose={onClose}>
          <div className="flex flex-col gap-10 items-center">
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {isPending && <Loader className="w-20 h-20 mb-6 animate-spin" />}
            {error && (
              <p className="text-red-600 text-center text-base">
                {error.message}
              </p>
            )}
            {isSuccess && (
              <SuccessModal
                onViewOnExploer={onViewTransaction}
                onClose={onClose}
              />
            )}
          </div>
        </ModalLayout>
      )}
      <div className="bg-white dark:bg-velix-claim-gray3 border-4 border-velix-claim dark:border-velix-claim-gray2 rounded-lg p-4 px-[2rem] xl:mt-0 sm:mt-2 max-w-md md:max-w-xl lg:max-w-lg xl:max-w-xl ml-4 mr-4 mt-8">
        <div className="flex flex-col sm:flex-row  items-start sm:items-center justify-between gap-4 lg:gap-8 xl:gap-12">
          <div className="flex-1 sm:flex-none lg:flex-none xl:flex-none lg:mr-24 md:mr-[8rem]">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              Redeem:{" "}
              <span className="font-bold text-black font-space-grotesk dark:text-velix-claim mr-1">
                {redeemTicket.amount}
              </span>{" "}
              VeMETIS
            </p>
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 mt-2">
              <div className="flex items-center text-velix-blue text-sm lg:text-base font-space-grotesk font-bold dark:text-white">
                <TicketLogo className="dark:fill-white mr-1 w-5 h-5" />
                Ticket ID
                <span className="text-velix-blue dark:text-white font-bold ml-1 font-space-grotesk">
                  #{redeemTicket.nftId}
                </span>
              </div>
              <div className="flex items-center text-gray-600 text-sm lg:text-base font-medium dark:text-white">
                <FaClock className="mr-1 text-velix-blue dark:text-white" />
                {dayjs(redeemTicket.maturity).format("DD-MMM-YYYY HH:mm:ss")}
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              setShowModal(true);
              redeemRedemptionTicketNft(
                Number(redeemTicket.nftId),
                address as `0x${string}`
              );
            }}
            disabled={
              dayjs().diff(dayjs(redeemTicket.maturity), "seconds") <= 0 ||
              !address
            }
            className="bg-velix-blue disabled:cursor-not-allowed dark:bg-velix-gray disabled:opacity-50 dark:text-black hover:bg-velix-blue h-8 text-white font-medium px-4 py-2 rounded-md font-space-grotesk mt-4 sm:mt-0 sm:ml-8 -mr-0 lg:mt-4 md:mt-3 mr-29 lg:-ml-[3.5rem]"
          >
            Redeem
          </Button>
        </div>
      </div>
    </>
  );
};

export default RedeemCard;
