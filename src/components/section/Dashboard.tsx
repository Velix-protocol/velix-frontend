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
import { useBalanceStore } from "@/store/balanceState";
import { Card, CardContent } from "../ui/DashboardCard";
import { useEffect, useState } from "react";
import { retreivedUnstakedTraffic } from "@/utils/supabase";
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

  useEffect(() => {
    async function getUnstakeActivity() {
      if (!address) return;
      setLoading(true);
      const { data } = await retreivedUnstakedTraffic(address);
      setUnstakeActivity(data as unknown as UnstakeActivity[]);
      setLoading(false);
    }

    void getUnstakeActivity();
  }, [address]);

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
    <Section className="mt-48 px-5 pb-28 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-5 lg:p-12 rounded-lg">
        {velixBalances.map((balance, index) => (
          <Card key={index} className="bg-velix-slate-blue">
            <CardContent className="p-7 space-y-2">
              <div className="text-sm text-velix-gray">
                {balance.name} balance
              </div>
              <div className="text-lg font-semibold text-velix-primary">
                {balance.value} {balance.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Table className="p-10 font-space-grotesk mt-10">
        <TableHeader className="bg-velix-primary pb-14 pt-10 rounded-t-xl grid grid-cols-3 justify-between w-full text-white px-8">
          <TableHead className="w-[100px] text-white font-bold h-fit">
            Date
          </TableHead>
          <TableHead className="text-white font-bold h-fit">Amount</TableHead>
          <TableHead className="text-white font-bold h-fit">
            Transaction hash
          </TableHead>
        </TableHeader>
        <TableBody className="bg-white py-10 space-y-2">
          {loading &&
            Array.from({ length: 8 }).map((_, index) => {
              return (
                <tr
                  key={`skeletons-${index}`}
                  className="grid grid-cols-3 w-full justify-between rounded-xl"
                >
                  <TableCell>
                    <Skeleton className="w-20 h-2" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-2" />
                  </TableCell>
                  <TableCell className="truncate underline cursor-pointer">
                    <Skeleton className="w-40 md:w-56 lg:w-96 h-2" />
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
                  className="grid grid-cols-3 w-full justify-between cursor-pointer hover:bg-velix-primary hover:text-white rounded-xl"
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
