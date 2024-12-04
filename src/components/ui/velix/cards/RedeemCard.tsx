import { FaClock } from "react-icons/fa";
import TicketLogo from "../icons/TicketLogo";
import { Button } from "../../button";
import { RedeemTicket } from "@/types";
import dayjs from "dayjs";
import {
  useCancelRedeemNftTicket,
  useRedeemRedemptionTicketNft
} from "@/hooks/use-redemption";
import { useAccount } from "wagmi";
import ModalLayout from "../modal/ModalLayout";
import Loader from "../icons/Loader";
import { useCallback, useEffect, useState } from "react";
import { EXPLORER_TX_URL } from "@/utils/constant";
import SuccessModal from "../modal/SuccessModal";

const RedeemCard = ({
  redeemTicket,
  refetchRedeemNfts
}: {
  redeemTicket: RedeemTicket;
  refetchRedeemNfts: () => void;
}) => {
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

  const {
    // cancelRedeemNftTicket,
    isPending: cancelRedeemNftPending,
    isSuccess: cancelRedeemNftSuccess,
    data: cancelRedeemNftTxHash,
    reset: resetCancelRedeemNftStates,
    error: cancelRedeemNftError
  } = useCancelRedeemNftTicket();

  const onViewTransaction = useCallback(() => {
    window.open(`${EXPLORER_TX_URL}${txHash || cancelRedeemNftTxHash}`);
  }, [txHash, cancelRedeemNftTxHash]);

  const onClose = useCallback(() => {
    if (isPending) return;
    setShowModal(false);
    reset();
    resetCancelRedeemNftStates();
  }, [isPending, reset, resetCancelRedeemNftStates]);

  const renderModalTitle = useCallback(() => {
    if (cancelRedeemNftPending) return "Canceling...";
    if (isPending) return "Redeeming...";
    if (error || cancelRedeemNftError) return "Error";
    return "";
  }, [isPending, error, cancelRedeemNftPending, cancelRedeemNftError]);

  useEffect(() => {
    if (isSuccess || cancelRedeemNftSuccess) {
      refetchRedeemNfts();
    }
  }, [isSuccess, cancelRedeemNftSuccess, refetchRedeemNfts]);

  return (
    <>
      {showModal && (
        <ModalLayout onClose={onClose}>
          <div className="flex flex-col gap-10 items-center">
            <p className="font-bold text-center text-2xl lg:text-4xl">
              {renderModalTitle()}
            </p>
            {(isPending || cancelRedeemNftPending) && (
              <Loader className="w-20 h-20 mb-6 animate-spin" />
            )}
            {(error || cancelRedeemNftError) && (
              <p className="text-red-600 text-center text-base">
                {error?.message || cancelRedeemNftError?.message}
              </p>
            )}
            {(isSuccess || cancelRedeemNftSuccess) && (
              <SuccessModal
                onViewOnExploer={onViewTransaction}
                onClose={onClose}
              />
            )}
          </div>
        </ModalLayout>
      )}
      <div className="rounded-lg p-4 px-[2rem] xl:mt-0 sm:mt-2 lg:w-auto xl:max-w-auto lg:max-w-auto md:max-w-auto w-full">
        <div className="flex bg-velix-claim dark:bg-velix-claim-gray2 p-6 rounded-lg flex-col sm:flex-row gap-4">
          <div className="flex-1 sm:flex-none lg:flex-none xl:flex-none lg:mr-24 md:mr-[20rem] sm:mr-[5rem]">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              Redeem:{" "}
              <span className="font-bold text-black font-space-grotesk dark:text-velix-claim mr-1">
                {redeemTicket.amount}
              </span>{" "}
              METIS
            </p>
            <div className="flex flex-col md:flex-row sm:flex-row lg:flex-col xl:flex-row items-start xl:items-center gap-4 mt-4 sm:mt-2">
              <div className="flex md:flex-row items-center text-velix-blue text-sm lg:text-base font-space-grotesk font-bold dark:text-white">
                <TicketLogo className="dark:fill-white fill-velix-blue mr-1 w-5 h-5" />
                Ticket ID
                <span className="text-velix-blue dark:text-white font-bold ml-1 font-space-grotesk">
                  #{redeemTicket.nftId}
                </span>
              </div>
              <div className="flex items-center text-gray-600 text-sm lg:text-base font-medium dark:text-white">
                <FaClock className="mr-1 text-velix-blue dark:text-white w-4 h-4" />
                {dayjs(redeemTicket.maturity * 1000).format("YYYY-MMM-DD HH:mm:ss")}
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row items-center justify-between w-full mt-2 lg:-mb-12 xl:-mb-0 sm:mt-0 sm:items-center">
            <Button
              onClick={() => {
                setShowModal(true);
                redeemRedemptionTicketNft(
                  Number(redeemTicket.nftId),
                  address as `0x${string}`
                );
              }}
              disabled={
                dayjs(redeemTicket.maturity * 1000).diff(dayjs(), "seconds") >= 0 || !address
              }
              className="bg-velix-blue w-full sm:w-auto disabled:cursor-not-allowed dark:bg-velix-gray disabled:opacity-50 dark:text-black hover:bg-velix-blue text-white font-medium py-2 rounded-md ml-auto sm:ml-none position:fixed"
            >
              Redeem
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemCard;