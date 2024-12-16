import Section from "../layouts/Section";
import { useMetisBalances } from "@/hooks/use-contract";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader
} from "@/components/ui/table";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useBalanceStore } from "@/store/balanceState";
import { Card, CardContent } from "../ui/DashboardCard";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Skeleton } from "../ui/skeleton";
import { velixApi } from "@/services/http";
import { useStakersStore } from "@/store/stakers";
import { Action } from "@/types/index.ts";
import { useQuery } from "@tanstack/react-query";
import { supportedChains } from "@/utils/config";
import useChainTokens from "@/hooks/useChainTokens.ts";
import { useSupportedChain } from "@/context/SupportedChainsProvider.tsx";
import useChainAccount from "@/hooks/useChainAccount.ts";

type DashboardData = {
  id: string;
  walletAddress: string;
  txHash: string;
  amount: string;
  createdAt: string;
};

export default function Dashboard() {
  useMetisBalances();
  const { veMETISBalance, METISBalance, strkBalance, veStrkBalance } =
    useBalanceStore();
  const { address } = useChainAccount();
  const [actionToRetreive, setActionToRetreive] = useState<Action>("stake");
  const chainToken = useChainTokens();
  const chain = useSupportedChain();
  const { staker, getStaker } = useStakersStore();

  useEffect(() => {
    getStaker(address as string);
  }, [address, getStaker]);

  const { isLoading: loading, data: dashboardData } = useQuery({
    queryKey: ["dashboardActivity", actionToRetreive, address],
    queryFn: async () => {
      const { data } = await velixApi.retreiveActionsActivity(
        actionToRetreive,
        address as string,
        chain
      );
      return data as DashboardData[];
    },
    enabled: !!address
  });

  const velixBalances = [
    {
      name: chainToken.nativeToken,
      value: chain === "starknet" ? strkBalance : METISBalance
    },
    {
      name: chainToken.stakedToken,
      value: chain === "starknet" ? veStrkBalance : veMETISBalance
    },
    {
      name: "APR",
      value: "20%"
    }
  ];

  return (
    <>
      <Section className="mt-36 md:mt-48 px-5 pb-28">
        <div className="flex flex-col lg:flex-row gap-4 bg-white dark:bg-velix-form-input-dark p-5 lg:p-12 rounded-lg">
          {velixBalances.map((balance, index) => (
            <Card
              key={index}
              className="bg-velix-slate-blue dark:bg-velix-light-dark w-full"
            >
              <CardContent className="p-7 space-y-2">
                <div className="text-sm text-velix-gray">
                  {balance.name} balance
                </div>
                <div className="text-lg font-semibold text-velix-primary dark:text-velix-dark-white">
                  {balance.value} {balance.name}
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="bg-velix-slate-blue dark:bg-velix-light-dark w-full">
            <CardContent className="p-7 space-y-2">
              <div className="text-sm text-velix-gray">Referral points</div>
              <div className="text-lg font-semibold text-velix-primary dark:text-velix-dark-white">
                {`${staker?.referralPoints ?? "--"}`}
              </div>
            </CardContent>
          </Card>
        </div>
        <Menubar className="mt-10 w-full overflow-x-auto overflow-y-hidden py-10 px-5 md:p-10 border-none rounded-lg bg-white dark:bg-velix-form-input-dark text-velix-primary font-space-grotesk font-bold text-base">
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => {
                setActionToRetreive("stake");
              }}
              className={`py-3 px-4 cursor-pointer dark:text-velix-dark-white ${
                actionToRetreive === "stake" &&
                "bg-velix-slate-blue dark:bg-velix-light-dark"
              }`}
            >
              Stake
            </MenubarTrigger>
            <MenubarTrigger
              onClick={() => {
                setActionToRetreive("redeem");
              }}
              className={`py-3 px-4 cursor-pointer dark:text-velix-dark-white ${
                actionToRetreive === "redeem" &&
                "bg-velix-slate-blue dark:bg-velix-light-dark"
              }`}
            >
              Redeem
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <Table className="p-10 font-space-grotesk mt-10">
          <TableHeader className="bg-velix-primary dark:bg-velix-form-input-dark pb-14 pt-10 rounded-t-xl grid grid-cols-3 justify-between w-full text-white px-8">
            <TableHead className="w-[100px] text-white font-bold h-fit">
              Date
            </TableHead>
            <TableHead className="text-white font-bold h-fit">Amount</TableHead>
            <TableHead className="text-white font-bold h-fit">
              Transaction hash
            </TableHead>
          </TableHeader>
          <TableBody className="bg-white dark:bg-velix-form-dark-background py-10 space-y-2">
            {loading &&
              Array.from({ length: 8 }).map((_, index) => {
                return (
                  <tr
                    key={`skeletons-${index}`}
                    className="grid grid-cols-3 w-full justify-between rounded-xl"
                  >
                    <TableCell>
                      <Skeleton className="w-20 h-2 dark:bg-velix-form-input-dark" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="w-20 h-2 dark:bg-velix-form-input-dark" />
                    </TableCell>
                    <TableCell className="truncate underline cursor-pointer">
                      <Skeleton className="w-40 md:w-56 lg:w-96 h-2 dark:bg-velix-form-input-dark" />
                    </TableCell>
                  </tr>
                );
              })}
            {!loading &&
              dashboardData
                ?.map((data, index) => {
                  if (!data.txHash) return;
                  return (
                    <tr
                      onClick={() =>
                        window.open(
                          `${supportedChains?.[chain].explorerUrls.testnet.txUrl}${data.txHash}`
                        )
                      }
                      key={`row-${index}`}
                      className="grid grid-cols-3 w-full justify-between cursor-pointer hover:bg-velix-slate-blue dark:hover:bg-velix-form-input-dark text-velix-primary dark:text-velix-dark-white rounded-xl"
                    >
                      <TableCell>
                        {dayjs(data.createdAt.split("T")[0]).format(
                          "MMMM D, YYYY"
                        )}
                      </TableCell>
                      <TableCell>{data.amount}</TableCell>
                      <TableCell className="truncate underline cursor-pointer">
                        {data.txHash}
                      </TableCell>
                    </tr>
                  );
                })
                .reverse()}
          </TableBody>
          {!loading && dashboardData?.length === 0 && (
            <TableCaption>No transaction recorded</TableCaption>
          )}
        </Table>
      </Section>
    </>
  );
}
