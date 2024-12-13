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
import Countdown from "react-countdown";
import ReadyIcon from "../icons/ReadyIcon";
import { FaClock } from "react-icons/fa";
import classNames from "classnames";

const RedeemCard = ({
  redeemTicket,
  refetchRedeemNfts
}: {
  redeemTicket: RedeemTicket;
  refetchRedeemNfts: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isCountdownFinished, setIsCountdownFinished] = useState(false); 
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

  const onCountdownComplete = () => {
    setIsCountdownFinished(true);
  };

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
      <div className="rounded-lg px-8 py-1 xl:mt-0 sm:mt-2 xl:max-w-auto lg:w-full md:max-w-auto w-full">
        <div   className={classNames(
        "flex bg-velix-claim dark:bg-velix-claim-gray2 p-6 rounded-lg flex-col sm:flex-row", 
        {
          "border border-velix-claim-green p-6 gap-4": isCountdownFinished, 
        }
      )}>
          <div className="flex-1 sm:flex-none lg:flex-none xl:flex-none">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              Redeem:{" "}
              <span className="font-bold text-black font-space-grotesk dark:text-velix-claim mr-1">
                {redeemTicket.amount}
              </span>{" "}
              METIS
            </p>
            <div className="flex flex-col md:flex-row sm:flex-row lg:flex-col xl:flex-row items-start xl:items-center gap-4 lg:-mt-4 xl:mt-2 -mt-2">
              <div className="flex md:flex-row items-center text-velix-claim-gray text-sm lg:text-base font-space-grotesk  dark:text-white">
                <TicketLogo className="dark:fill-white fill-velix-blue mr-1 mt-4 w-5 h-5" />
                <p className="mt-4 text-sm">Ticket ID</p>
                <span className="text-velix-blue dark:text-white font-bold mt-4 ml-1 font-space-grotesk">
                  #{redeemTicket.nftId}
                </span>
              </div>
              <div
                className={classNames(
                  "flex items-center text-gray-600 text-sm xl:mt-4 lg:mt-1 md:mt-3 sm:mt-3 dark:text-white", 
                  {
                    "bg-velix-claim-green rounded-md p-1 text-sm": isCountdownFinished, 
                    "lg:text-base font-medium": !isCountdownFinished, 
                  }
                )}
              >
                {isCountdownFinished ? (
                  <ReadyIcon className="mr-1 w-4 h-4 fill-velix-claim " />
                ) : (
                  <FaClock className="mr-1 text-velix-blue dark:text-white" />
                )}
                {isCountdownFinished ? (
                  <span className="text-white">Ready to redeem</span>
                ) : (
                  <Countdown date={redeemTicket.maturity * 1000} onComplete={onCountdownComplete} />
                )}
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row items-center justify-between lg:-mb-16 xl:-mb-0 sm:mt-0 w-full">
            <Button
              onClick={() => {
                setShowModal(true);
                redeemRedemptionTicketNft(
                  Number(redeemTicket.nftId),
                  address as `0x${string}`
                );
              }}
              disabled={
                dayjs(redeemTicket.maturity * 1000).diff(dayjs(), "seconds") >=
                  0 || !address
              }
              className={classNames(
                "xl:mt-9 lg:-mt-2 sm:mt-3 xl:w-auto lg:w-auto disabled:cursor-not-allowed disabled:opacity-50 text-white font-medium rounded-md w-full md:w-auto sm:w-auto ml-auto",
                {
                  "bg-velix-claim-green hover:velix-claim-green": isCountdownFinished, 
                  "bg-velix-blue hover:bg-velix-blue-dark": !isCountdownFinished, 
                }
              )}
            >
              {isCountdownFinished ? "Redeem Now" : "Redeem"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RedeemCard;