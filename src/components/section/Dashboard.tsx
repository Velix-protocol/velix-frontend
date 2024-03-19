import Section from "../layouts/Section";
import { useMetisBalance } from "@/hooks/use-contract";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader
} from "@/components/ui/table";

export default function Dashboard() {
  useMetisBalance();
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
    <Section className="mt-28 px-5 pb-28 min-h-screen">
      <Table className="p-10 font-space-grotesk mt-16">
        <TableHeader className="bg-velix-primary pb-14 pt-10 rounded-t-xl grid grid-cols-3 justify-between w-full text-white px-8">
          <TableHead className="w-[100px] text-white font-bold h-fit">
            Date
          </TableHead>
          <TableHead className="text-white font-bold h-fit">Amount</TableHead>
          <TableHead className="text-white font-bold h-fit">
            Transaction hash
          </TableHead>
        </TableHeader>
        <TableBody className="bg-white py-10">
          {velixData.map((data) => {
            return (
              <div
                key={data.amount}
                className="grid grid-cols-3 w-full justify-between px-8"
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
