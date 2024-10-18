import { Card, CardContent } from "@/components/ui/DashboardCard.tsx";
import VeInput from "@/components/ui/velix/VeInput.tsx";
import ArrowRightCircleFill from "@/components/ui/velix/icons/ArrowRightCircleFill.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { useStakersStore } from "@/store/stakers.ts";
import { useClaimReferralPoints } from "@/hooks/useHttp.ts";
import { ChangeEvent, Fragment, useState } from "react";
import { throttle, viewTransactionOnExplorer } from "@/utils/utils.ts";
import { velixApi } from "@/services/http.ts";
import Modal from "@/components/ui/velix/Modal.tsx";
import Loader from "@/components/ui/velix/icons/Loader.tsx";
import SuccessModal from "@/components/app/SuccessModal.tsx";

export default function ClaimReferralPoints() {
  const { staker, getStaker } = useStakersStore();
  const { isPending, isSuccess, redeemReferralPoints, cleanup, error, txHash } =
    useClaimReferralPoints();
  const { address } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const [referralPointsToRedeem, setReferralPointsToRedeem] = useState("");
  const [pointToToken, setPointToToken] = useState(0);

  useQuery({
    queryKey: ["getStaker", address],
    queryFn: () => getStaker(address as string),
    refetchOnWindowFocus: false
  });

  const onClaimReferralPointsChange = async (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setReferralPointsToRedeem(e.target.value);
    const res = await velixApi.getAmountToRedeemFromPoints(
      Number(e.target.value)
    );
    setPointToToken(res.data.amountToRedeem);
  };

  const throttledClaimReferralPointChange = throttle(
    onClaimReferralPointsChange,
    2000
  );

  const onSetMaxValue = () => {
    if (!staker?.referralPoints) return;
    setReferralPointsToRedeem(`${staker?.referralPoints ?? 0}`);
  };

  const onClose = () => {
    if (isPending) return;
    setShowModal(false);
    setReferralPointsToRedeem("0");
    setPointToToken(0);
    cleanup();
  };

  const onClaimReferralPoints = async () => {
    if (Number(referralPointsToRedeem) === 0 || !address) return;
    setShowModal(true);
    await redeemReferralPoints(Number(referralPointsToRedeem));
  };

  return (
    <>
      {showModal && (
        <Modal className="z-[999]" onClose={onClose}>
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
                onClose={onClose}
              />
            )}
          </div>
        </Modal>
      )}

      <div className="bg-white dark:bg-velix-form-dark-background p-11 max-lg:p-5 rounded-2xl space-y-10">
        <div className="flex items-center gap-8">
          <img
            src="/velix-referral-icon.png"
            alt="velix-icon"
            className="max-lg:w-10 max-lg:h-10 border bg-velix-claim-icon dark:border-bg-velix-dark-white border-velix-claim-icon-bg dark:bg-velix-light-dark lg:py-3 lg:px-5 p-3 rounded-[10px]"
            style={{ borderStyle: 'dashed' }}
          />
          <div className="font-space-grotesk">
            <h4 className="text-3xl font-bold max-lg:text-xl">
              Referral points/VELIX Token
            </h4>
            <p className="text-base text-velix-gray max-lg:text-sm">
              Claim referral points
            </p>
          </div>
        </div>

        <div className="flex gap-10 max-lg:flex-col max-lg:gap-5">
          <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
            <CardContent className="p-7 space-y-2">
              <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                APR
              </div>
              <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                19.77%
              </div>
            </CardContent>
          </Card>
          <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
            <CardContent className="p-7 space-y-2">
              <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                TVL
              </div>
              <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                $2.45 B
              </div>
            </CardContent>
          </Card>
          <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
            <CardContent className="p-7 space-y-2">
              <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                Referral point
              </div>
              <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                {staker?.referralPoints}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center gap-5 max-lg:gap-2 max-lg:flex-col">
          <VeInput
            className="w-full max-lg:-mb-3"
            value={referralPointsToRedeem}
            defaultValue={referralPointsToRedeem}
            onChange={throttledClaimReferralPointChange}
            onMaxButtonClicked={onSetMaxValue}
            withMaxButton
            error={
              Number(referralPointsToRedeem) >
              Number(staker?.referralPoints ?? 0)
                ? "error"
                : ""
            }
            placeholder="Referral points to claim"
            icon={
              <img src="/velix-icon.png" alt="velix-icon" className="w-5 h-5" />
            }
            tokenName="VePoints"
          />
          <ArrowRightCircleFill className="fill-velix-blue dark:fill-white w-16 h-16 max-lg:w-5 max-lg:h-5 max-lg:rotate-90" />
          <VeInput
            disabled
            value={pointToToken}
            inputFieldClassName="text-right disabled:opacity-100"
            className="w-full flex-row-reverse max-lg:-mt-3"
            placeholder="0.00"
            icon={
              <img
                src="/velix-token.png"
                alt="velix-icon"
                className="w-5 h-5"
              />
            }
            tokenName="VELIX Token"
          />
          <Button
            onClick={onClaimReferralPoints}
            disabled={isPending || !address}
            className="py-8 w-fit dark:bg-velix-dark-white px-24 max-lg:py-5 max-lg:w-full max-lg:mt-3 font-space-grotesk disabled:opacity-60"
          >
            Claim
          </Button>
        </div>
      </div>
    </>
  );
}
