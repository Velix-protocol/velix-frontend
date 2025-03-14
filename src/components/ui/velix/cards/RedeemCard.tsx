import TicketLogo from "../icons/TicketLogo";
import { Button } from "../../button";
import { RedeemTicket } from "@/types";
import {
  useCancelRedeemNftTicket,
  useRedeemRedemptionTicketNft
} from "@/hooks/use-redemption";
import ModalLayout from "../modal/ModalLayout";
import Loader from "../icons/Loader";
import { useCallback, useState } from "react";
import SuccessModal from "../modal/SuccessModal";
import Countdown from "react-countdown";
import ReadyIcon from "../icons/ReadyIcon";
import CountDownIcon from "../icons/CountDownIcon";
import classNames from "classnames";
import useChainAccount from "@/hooks/useChainAccount.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import { supportedChains } from "@/utils/config.ts";

const RedeemCard = ({
  redeemTicket,
  refetchRedeemNfts,
  getBalances
}: {
  redeemTicket: RedeemTicket;
  refetchRedeemNfts: () => void;
  getBalances: () => void;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);
  const { address } = useChainAccount();
  const {
    redeemRedemptionTicketNft,
    isPending,
    error,
    isSuccess,
    data: txHash,
    reset
  } = useRedeemRedemptionTicketNft();
  const chain = useSupportedChain();

  const {
    isPending: cancelRedeemNftPending,
    isSuccess: cancelRedeemNftSuccess,
    reset: resetCancelRedeemNftStates,
    error: cancelRedeemNftError
  } = useCancelRedeemNftTicket();

  const onViewTransaction = useCallback(() => {
    window.open(
      `${supportedChains?.[chain].explorerUrls.testnet.txUrl}${txHash}`
    );
  }, [chain, txHash]);

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
        <div
          className={classNames(
            "flex bg-velix-claim dark:bg-velix-claim-gray2 p-6 rounded-lg flex-col sm:flex-row",
            {
              "border border-velix-claim-green p-6 gap-4": isCountdownFinished
            }
          )}
        >
          <div className="flex-1 sm:flex-none lg:flex-none xl:flex-none">
            <p className="text-velix-claim-grey dark:text-velix-claim text-sm lg:text-base font-space-grotesk">
              Redeem:{" "}
              <span className="font-bold text-black font-space-grotesk dark:text-velix-claim mr-1">
                {redeemTicket.amount}
              </span>{" "}
              {chain === "starknet" ? "STRK" : "METIS"}
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
                    "bg-velix-claim-green rounded-md p-1 text-sm":
                      isCountdownFinished,
                    "lg:text-base font-medium": !isCountdownFinished
                  }
                )}
              >
                {isCountdownFinished ? (
                  <ReadyIcon className="mr-1 w-4 h-4 fill-velix-claim " />
                ) : (
                  <CountDownIcon className="mr-1 text-velix-blue dark:text-white sm:mb-3 lg:mb-0 w-5 h-5" />
                )}
                {isCountdownFinished ? (
                  <span className="text-white text-xs">Ready to redeem</span>
                ) : (
                  <Countdown
                    className="sm:mb-3 lg:mb-0"
                    date={redeemTicket.maturity * 1000}
                    onComplete={onCountdownComplete}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row items-center justify-between lg:-mb-16 xl:-mb-0 sm:mt-0 w-full">
            <Button
              onClick={async () => {
                setShowModal(true);
                await redeemRedemptionTicketNft(
                  Number(redeemTicket.nftId),
                  address as `0x${string}`
                );
                await refetchRedeemNfts();
                await getBalances();
              }}
              disabled={!isCountdownFinished || !address}
              className={classNames(
                "xl:mt-9 lg:-mt-2 sm:mt-3 xl:w-auto lg:w-auto disabled:cursor-not-allowed disabled:opacity-50 text-white text-xs dark:text-velix-claim-gray font-medium rounded-md w-full md:w-auto sm:w-auto ml-auto",
                {
                  "bg-velix-claim-green hover:velix-claim-green dark:text-white":
                    isCountdownFinished,
                  "bg-velix-blue hover:bg-velix-blue-dark dark:bg-velix-claim mt-3":
                    !isCountdownFinished
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
