import Section from "../layouts/Section";
import { useMetisBalance } from "@/hooks/use-contract";
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
import { Action, retreiveActionsActivity } from "@/utils/supabase";
import { useAccount } from "wagmi";
import dayjs from "dayjs";
import { EXPLORER_TX_URL } from "@/utils/constant";
import { Skeleton } from "../ui/skeleton";

type UnstakeActivity = {
  id: string;
  wallet_address: string;
  tx_hash: string;
  amount: string;
  created_at: string;
};

export default function Dashboard() {
  useMetisBalance();
  const { sveMETISBalance, veMETISBalance, METISBalance } = useBalanceStore();
  const { address } = useAccount();
  const [unstakeActivity, setUnstakeActivity] = useState<UnstakeActivity[]>([]);
  const [loading, setLoading] = useState(false);
  const [actionToRetreive, setActionToRetreive] = useState<Action | "reward">(
    "mint"
  );

  useEffect(() => {
    async function getUnstakeActivity() {
      if (!address) return;
      if (actionToRetreive === "reward") return;
      setLoading(true);
      const { data } = await retreiveActionsActivity(actionToRetreive, address);
      setUnstakeActivity(data as unknown as UnstakeActivity[]);
      setLoading(false);
    }

    void getUnstakeActivity();
  }, [actionToRetreive, address]);

  const velixBalances = [
    {
      name: "METIS",
      value: METISBalance
    },
    {
      name: "veMETIS",
      value: veMETISBalance
    },
    {
      name: "sveMETIS",
      value: sveMETISBalance
    },
    {
      name: "APR",
      value: "--"
    }
  ];

  return (
    <Section className="mt-36 md:mt-48 px-5 pb-28 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white dark:bg-velix-form-input-dark p-5 lg:p-12 rounded-lg">
        {velixBalances.map((balance, index) => (
          <Card
            key={index}
            className="bg-velix-slate-blue dark:bg-velix-light-dark"
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
      </div>
      <Menubar className="mt-10 w-full overflow-x-auto overflow-y-hidden py-10 px-5 md:p-10 border-none rounded-lg bg-white dark:bg-velix-form-input-dark text-velix-primary font-space-grotesk font-bold text-base">
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => setActionToRetreive("mint")}
            className={`py-3 px-7 cursor-pointer dark:text-velix-dark-white ${
              actionToRetreive === "mint" &&
              "bg-velix-slate-blue dark:bg-velix-light-dark"
            }`}
          >
            Mint
          </MenubarTrigger>
          <MenubarTrigger
            onClick={() => {
              setActionToRetreive("stake");
            }}
            className={`py-3 px-7 cursor-pointer dark:text-velix-dark-white ${
              actionToRetreive === "stake" &&
              "bg-velix-slate-blue dark:bg-velix-light-dark"
            }`}
          >
            Stake
          </MenubarTrigger>
          <MenubarTrigger
            onClick={() => setActionToRetreive("unstake")}
            className={`py-3 px-7 cursor-pointer dark:text-velix-dark-white ${
              actionToRetreive === "unstake" &&
              "bg-velix-slate-blue dark:bg-velix-light-dark"
            }`}
          >
            Unstake
          </MenubarTrigger>
          <MenubarTrigger
            onClick={() => setActionToRetreive("reward")}
            className={`py-3 px-7 w-fit items-center justify-center flex cursor-pointer dark:text-velix-dark-white ${
              actionToRetreive === "reward" &&
              "bg-velix-slate-blue dark:bg-velix-light-dark"
            }`}
          >
            Reward{" "}
            <small className="rounded-full shrink-0 ml-2 border border-green-500 px-2">
              Coming soon
            </small>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Table className="p-10 font-space-grotesk mt-10">
        {actionToRetreive === "reward" && (
          <div className="flex text-velix-blue dark:text-velix-dark-white max-lg:flex-col rounded-t-lg flex-row lg:items-center -mb-2.5 bg-white dark:bg-velix-form-dark-background gap-3 px-8 py-8">
            <p className="bg-velix-slate-blue dark:bg-velix-light-dark p-4 rounded-lg">
              Est Rewards 2023 : <b>0.000000 VeMetis</b>
            </p>
            <p className="bg-velix-slate-blue dark:bg-velix-light-dark p-4 rounded-lg">
              Est Monthly 2023 : <b>0.000000 VeMetis</b>
            </p>
          </div>
        )}
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
            unstakeActivity.map((data) => {
              return (
                <tr
                  onClick={() =>
                    window.open(`${EXPLORER_TX_URL}${data.tx_hash}`)
                  }
                  key={data.amount}
                  className="grid grid-cols-3 w-full justify-between cursor-pointer hover:bg-velix-slate-blue dark:hover:bg-velix-form-input-dark text-velix-primary dark:text-velix-dark-white rounded-xl"
                >
                  <TableCell>
                    {dayjs(data.created_at.split("T")[0]).format(
                      "MMMM D, YYYY"
                    )}
                  </TableCell>
                  <TableCell>{data.amount}</TableCell>
                  <TableCell className="truncate underline cursor-pointer">
                    {data.tx_hash}
                  </TableCell>
                </tr>
              );
            })}
        </TableBody>
        {!loading && unstakeActivity.length === 0 && (
          <TableCaption>No transaction recorded</TableCaption>
        )}
      </Table>
    </Section>
  );
}
