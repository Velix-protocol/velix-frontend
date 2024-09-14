import SuccessModal from "@/components/app/SuccessModal";
import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/DashboardCard";
import ArrowRightCircleFill from "@/components/ui/velix/icons/ArrowRightCircleFill";
import Loader from "@/components/ui/velix/icons/Loader";
import Modal from "@/components/ui/velix/Modal";
import VeInput from "@/components/ui/velix/VeInput";
import { useRedeemPoints } from "@/hooks/useHttp";
import { velixApi } from "@/services/http";
import { useStakersStore } from "@/store/stakers";
import { viewTransactionOnExplorer, throttle } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, Fragment, ReactNode, useState } from "react";
import { useAccount } from "wagmi";
import ClaimDialog from "@/components/ui/velix/ClaimDialog";

function VePointDescriptionSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="font-space-grotesk">
      <h4 className="bg-velix-primary dark:bg-velix-light-dark py-10 px-11 max-sm:px-5 max-lg:text-xl max-lg:py-5 text-3xl rounded-t-2xl text-white font-bold">
        {title}
      </h4>
      <div className="px-11 max-lg:px-5 max-lg:py-5 text-velix-gray space-y-4 py-10 rounded-2xl -mt-3 z-10 w-full bg-white dark:bg-velix-form-dark-background">
        {children}
      </div>
    </div>
  );
}

export default function VePoints() {
  const { staker, getStaker } = useStakersStore();
  const { isPending, isSuccess, redeemPoints, cleanup, error, txHash } =
    useRedeemPoints();
  const { address } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const [pointsToRedeem, setPointsToRedeem] = useState("");
  const [pointToToken, setPointToToken] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const openEcosystemDialog = () => {
    setIsDialogOpen(true);
  };

  useQuery({
    queryKey: ["getStaker", address],
    queryFn: () => getStaker(address as string),
    refetchOnWindowFocus: false
  });

  const onRedeemPointsChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setPointsToRedeem(e.target.value);

    throttle(async () => {
      console.log("debounced debounced onRedeemPointsChange");
      const res = await velixApi.getAmountToRedeemFromPoints(
        Number(e.target.value)
      );
      setPointToToken(res.data.amountToRedeem);
    }, 200)();
  };

  const onSetMaxValue = () => {
    if (!staker?.stakingpoints) return;
    setPointsToRedeem(`${staker?.stakingpoints ?? 0}`);
  };

  const onClose = () => {
    if (isPending) return;
    setShowModal(false);
    setPointsToRedeem("0");
    cleanup();
  };

  const onRedeemPoints = async () => {
    if (Number(pointsToRedeem) === 0 || !address) return;
    setShowModal(true);
    await redeemPoints(Number(pointsToRedeem));
  };

  return (
    <>
      <ClaimDialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
      />
      {showModal && (
        <Modal onClose={onClose}>
          <div className="flex flex-col gap-3 items-center">
            {isPending && !isSuccess && (
              <Fragment>
                <Loader className="w-20 h-20 mb-6 animate-spin" />
                <p className="font-bold text-center text-2xl lg:text-4xl">
                  Redeeming ...
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

      <Section className="max-lg:mx-5 py-32">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between max-lg:flex-col items-center bg-velix-primary dark:bg-[#171616] mt-20 p-24 max-lg:p-5 max-lg:py-10 rounded-2xl">
            <h2 className="text-5xl max-lg:text-2xl max-lg:text-center max-w-[650px] text-white font-space-grotesk font-bold">
              Stake and Maximize Rewards with Velix Points, Earn & Refer
            </h2>
            <div className="w-fit mr-24 max-lg:mr-0 max-lg:w-32 max-lg:h-32 max-lg:my-10">
              <img src="/vepoint-illustration.png" alt="vepoints" />
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-10">
            <VePointDescriptionSection title="Staking Points">
              <p>
                <b>Base Points:</b> Users earn base points for every 1$ of
                veMETIS token staked
              </p>
              <p>
                <b>Base Points:</b> Users earn base points for every 1$ of
                veMETIS token staked
              </p>
              <p>
                <b>Base Points:</b> Users earn base points for every 1$ of
                veMETIS token staked
              </p>
            </VePointDescriptionSection>
            <VePointDescriptionSection title="Referral points">
              <p>
                <b>Base Referral Points:</b> Points earned for each <br />{" "}
                successful referral.
              </p>
              <p>
                <b>Referral Bonus: </b> Additional points if the referred user
                stakes METIS tokens.
              </p>
              <p>
                <b>Formula:</b> Referral Points = User’s Staking Points X
                Referral Percentage
              </p>
            </VePointDescriptionSection>
          </div>
          <div className="bg-white dark:bg-velix-form-dark-background p-11 max-lg:p-5 rounded-2xl space-y-10">
            <div className="flex items-center gap-8">
              <img
                src="/velix-icon.png"
                alt="velix-icon"
                className="max-lg:w-10 max-lg:h-10"
              />
              <div className="font-space-grotesk">
                <h4 className="text-3xl font-bold max-lg:text-xl">
                  VePoints/VELIX Token
                </h4>
                <p className="text-base text-velix-gray max-lg:text-sm">
                  Claim VePoints after 3day
                </p>
              </div>
            </div>
            <div className="flex gap-10 max-lg:flex-col max-lg:gap-5">
              <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
                <CardContent className="p-7 space-y-2">
                  <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                  Amount staked
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                    00.91%
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
                <CardContent className="p-7 space-y-2">
                  <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                    Points earned
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                    70
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
                <CardContent className="p-7 space-y-2">
                  <div className="max-lg:text-sm text-xl text-velix-gray font-bold">
                    Points to claim
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                    45 
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                    {staker?.stakingpoints}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center gap-5 max-lg:gap-2 max-lg:flex-col">
              <VeInput
                className="w-full max-lg:-mb-3"
                value={pointsToRedeem}
                defaultValue={pointsToRedeem}
                onChange={onRedeemPointsChange}
                onMaxButtonClicked={onSetMaxValue}
                withMaxButton
                error={
                  Number(pointsToRedeem) > Number(staker?.stakingpoints ?? 0)
                    ? "error"
                    : ""
                }
                placeholder="Points to claim"
                icon={
                  <img
                    src="/velix-icon.png"
                    alt="velix-icon"
                    className="w-5 h-5"
                  />
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
                onClick={openEcosystemDialog}
                disabled={isPending || !address}
                className="py-8 w-fit dark:bg-velix-dark-white px-24 max-lg:py-5 max-lg:w-full max-lg:mt-3 font-space-grotesk disabled:opacity-60"
              >
                Claim
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-velix-form-dark-background p-11 max-lg:p-5 rounded-2xl space-y-10">
            <div className="flex items-center gap-8">
              <img
                src="/velix-icon.png"
                alt="velix-icon"
                className="max-lg:w-10 max-lg:h-10"
              />
              <div className="font-space-grotesk">
                <h4 className="text-3xl font-bold max-lg:text-xl">
                  Refferal points
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
                    Staking point
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  4536774
                  </div>
                  <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                    {staker?.stakingpoints}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center gap-5 max-lg:gap-2 max-lg:flex-col">
              <VeInput
                className="w-full max-lg:-mb-3"
                value={pointsToRedeem}
                defaultValue={pointsToRedeem}
                onChange={onRedeemPointsChange}
                onMaxButtonClicked={onSetMaxValue}
                withMaxButton
                error={
                  Number(pointsToRedeem) > Number(staker?.stakingpoints ?? 0)
                    ? "error"
                    : ""
                }
                placeholder="Points to claim"
                icon={
                  <img
                    src="/velix-icon.png"
                    alt="velix-icon"
                    className="w-5 h-5"
                  />
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
                onClick={onRedeemPoints}
                disabled={isPending || !address}
                className="py-8 w-fit dark:bg-velix-dark-white px-24 max-lg:py-5 max-lg:w-full max-lg:mt-3 font-space-grotesk disabled:opacity-60"
              >
                Claim
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
