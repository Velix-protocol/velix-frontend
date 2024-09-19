import ClaimButton from "./ClaimButton";
import Modal from "@/components/ui/velix/Modal.tsx";
import { truncateString, viewTransactionOnExplorer } from "@/utils/utils.ts";
import { useClaimStakingPoints } from "@/hooks/useHttp.ts";
import { Fragment, useEffect, useState } from "react";
import Loader from "@/components/ui/velix/icons/Loader.tsx";
import SuccessModal from "@/components/app/SuccessModal.tsx";
import { Stake } from "@/types/index.ts";

type ClaimDialogProps = {
  onClose: () => void;
  redeemableStakeTransactions: Stake[];
};

const stakingColorAccordingToRedeemablePercentage: { [key: number]: string } = {
  20: "red-500",
  30: "orange-500",
  100: "green-500"
};

export default function ClaimDialog({
  onClose,
  redeemableStakeTransactions
}: ClaimDialogProps) {
  const [showModal, setShowModal] = useState(false);

  const { claimStakingPoints, isPending, isSuccess, error, txHash, cleanup } =
    useClaimStakingPoints();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        cleanup();
        setShowModal(false);
      }, 3000);
    }
  }, [cleanup, isSuccess]);

  const onCloseClaimModal = () => {
    setShowModal(false);
    cleanup();
  };

  return (
    <>
      {showModal && (
        <Modal className="z-[999]" onClose={onCloseClaimModal}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && !isSuccess && (
              <Fragment>
                <Loader className="w-20 h-20 mb-6 animate-spin" />
                <p className="font-bold text-center text-2xl lg:text-4xl">
                  Claiming...
                </p>
              </Fragment>
            )}
            {!!error && (
              <p className="text-red-600 text-center text-base">{`${error}`}</p>
            )}
            {isSuccess && (
              <SuccessModal
                onViewOnExploer={() => viewTransactionOnExplorer(txHash)}
                onClose={onCloseClaimModal}
              />
            )}
          </div>
        </Modal>
      )}

      <Modal onClose={onClose}>
        <div className="w-full max-h-[30rem] overflow-y-auto">
          <p className="mb-6 sm:mb-10 font-space-grotesk text-sm sm:text-md text-velix-text-gray dark:text-gray-300">
            Be aware that you cannot claim the total points for each transaction
            before 90 days vetting period.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {redeemableStakeTransactions?.map((stake) => {
              return (
                <label className="w-full flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition dark:bg-velix-claim-gray2 dark:hover:bg-velix-claim-gray3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <small
                      className={`flex items-center justify-center text-${stakingColorAccordingToRedeemablePercentage?.[stake.percentage]} border-${stakingColorAccordingToRedeemablePercentage?.[stake.percentage]} dark:text-white  px-2 py-1 font-space-grotesk text-xs sm:text-sm`}
                    >
                      {stake.redeemablePoints} over {stake.stakingPoints}{" "}
                      {"points earned"}
                    </small>
                  </div>
                  <h1 className="font-space-grotesk text-sm sm:text-md text-text-velix-text-gray dark:text-white">
                    {truncateString(stake.walletAddress, 5, 5)}
                  </h1>
                  <ClaimButton
                    onClick={() => {
                      setShowModal(true);
                      void claimStakingPoints(
                        stake.redeemablePoints,
                        stake.txHash
                      );
                    }}
                    label="Claim"
                  />
                </label>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}
