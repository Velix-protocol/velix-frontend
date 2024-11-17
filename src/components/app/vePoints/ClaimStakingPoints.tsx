import { Card, CardContent } from "@/components/ui/DashboardCard.tsx";
// import { Button } from "@/components/ui/button.tsx";
import { useStakersStore } from "@/store/stakers.ts";
import { useAccount } from "wagmi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ClaimDialog from "@/components/ui/velix/ClaimDialog.tsx";
import { velixApi } from "@/services/http.ts";
import VelixStakingIcon from "@/components/ui/velix/icons/VelixStakingIcon";

export default function ClaimStakingPoints() {
  const { getStaker } = useStakersStore();
  const { address } = useAccount();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: redeemableStakeTransactions } = useQuery({
    queryKey: ["redeemableStakes", address],
    queryFn: () => velixApi.getRedeemableStakeTransactions(address as string),
    enabled: !!address
  });

  console.log({ redeemableStakeTransactions });

  useQuery({
    queryKey: ["getStaker", address],
    queryFn: () => getStaker(address as string),
    refetchOnWindowFocus: false
  });

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  // const onClaimDialog = () => {
  //   setIsDialogOpen(true);
  // };

  const totalPointToClaim = redeemableStakeTransactions?.data.reduce(
    (acc, stake) => acc + stake.redeemablePoints,
    0
  );

  const totalPointEarned = redeemableStakeTransactions?.data.reduce(
    (acc, stake) => acc + stake.stakingPoints,
    0
  );

  const totalAmountStaked = redeemableStakeTransactions?.data.reduce(
    (acc, stake) => acc + stake.amount,
    0
  );

  return (
    <>
      {isDialogOpen &&
        redeemableStakeTransactions &&
        redeemableStakeTransactions.data?.length > 0 && (
          <ClaimDialog
            redeemableStakeTransactions={redeemableStakeTransactions.data}
            onClose={handleDialogClose}
          />
        )}

      <div className="flex flex-col gap-10">
        {/*<div className="flex justify-between max-lg:flex-col items-center bg-velix-primary dark:bg-[#171616] mt-20 p-24 max-lg:p-5 max-lg:py-10 rounded-2xl">*/}
        {/*  <h2 className="text-5xl max-lg:text-2xl max-lg:text-center max-w-[650px] text-white font-space-grotesk font-bold">*/}
        {/*    Stake and Maximize Rewards with Velix Points, Earn & Refer*/}
        {/*  </h2>*/}
        {/*  <div className="w-fit mr-24 max-lg:mr-0 max-lg:w-32 max-lg:h-32 max-lg:my-10">*/}
        {/*    <img src="/vepoint-illustration.png" alt="vepoints" />*/}
        {/*  </div>*/}
        {/*</div>*/}

        <div className="bg-white dark:bg-velix-form-dark-background p-11 max-lg:p-5 rounded-2xl space-y-10">
          <div className="flex items-center gap-8">
            <div className="bg-velix-blue dark:bg-velix-claim-gray2 rounded-lg mb-7 lg:p-4 sm:-mb-3 xl:mb-0 lg:mb-0 p-4 sm:p-3 flex items-center justify-center">
              <VelixStakingIcon className="w-6 h-6" />
            </div>
            <div className="font-space-grotesk">
              <h4 className="text-3xl font-bold max-lg:text-xl">
                Staking points
              </h4>
              <p className="text-base text-velix-gray max-lg:text-sm">
                Claim Staking vePoints, redeem for VELIX Token rewards after 90
                days
              </p>
            </div>
          </div>
          <div className="flex gap-10 max-lg:flex-col max-lg:gap-5">
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-lg:text-sm text-base text-velix-gray font-normal">
                  Amount staked
                </div>
                <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  {totalAmountStaked}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-lg:text-sm text-base text-velix-gray font-normal">
                  Total points earned
                </div>
                <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  {totalPointEarned}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
              <CardContent className="p-7 space-y-2">
                <div className="max-lg:text-sm text-base text-velix-gray font-normal">
                  Total points to claim
                </div>
                <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl">
                  {totalPointToClaim}
                </div>
                <div className="max-lg:text-lg font-semibold text-velix-primary dark:text-velix-dark-white text-2xl"></div>
              </CardContent>
            </Card>
          </div>
          {/* <div className="flex items-center gap-5 max-lg:gap-2 max-lg:flex-col ">
            <Button
              onClick={onClaimDialog}
              disabled={!address || !totalPointToClaim}
              className="py-8 w-full dark:bg-velix-dark-white px-24 max-lg:py-5 max-lg:w-full max-lg:mt-3 font-space-grotesk disabled:opacity-60"
            >
              Claim
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
}
