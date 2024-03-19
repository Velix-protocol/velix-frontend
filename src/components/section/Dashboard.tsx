import Section from "../layouts/Section";
import { useMetisBalance } from "@/hooks/use-contract";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader
} from "@/components/ui/table";
import { useBalanceStore } from "@/store/balanceState";
import { Card, CardContent } from "../ui/DashboardCard";

export default function Dashboard() {
  useMetisBalance();
  const { sveMETISBalance, veMETISBalance, METISBalance } = useBalanceStore();

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

  const velixData = [
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
    },
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
    },
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
    },
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
    },
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
    },
    {
      date: "Feb 15 17:04:09",
      amount: "577,858,885",
      transationHash:
        "57yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer88557yw457854455fghhh64hgdj8ywer885"
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
          {velixData.map((data) => {
            return (
              <div
                key={data.amount}
                className="grid grid-cols-3 w-full justify-between cursor-pointer hover:bg-velix-primary px-8 hover:text-white rounded-xl"
              >
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.amount}</TableCell>
                <TableCell className="truncate underline cursor-pointer">
                  {data.transationHash}
                </TableCell>
              </div>
            );
          })}
        </TableBody>
      </Table>
    </Section>
  );
}
