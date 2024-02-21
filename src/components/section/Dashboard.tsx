import { CardContent, Card } from "@/components/ui/DashboardCard";
import { Button } from "@/components/ui/button";
import Chart from "./Chart";
import Section from "../layouts/Section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import { useState } from "react";

export default function Dashboard() {
  const [chartType, setChartType] = useState<"line" | "bar">("line");
  return (
    <Section className="mt-28 px-5 pb-28">
      <div className="py-8 flex-col flex gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white p-5 lg:p-12 rounded-lg">
          {Array.from(Array(4).keys()).map((index) => (
            <Card key={index} className="bg-velix-slate-blue">
              <CardContent className="p-7 space-y-2">
                <div className="text-sm text-velix-gray">VeMETIS balance</div>
                <div className="text-lg font-semibold text-velix-primary">
                  0.0 VeMETIS
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white p-5 md:p-12 rounded-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full pb-12 font-space-grotesk">
            <h2 className="text-2xl font-bold mb-4">METIS Analytics</h2>
            <div className="flex md:justify-center w-fit lg:space-x-4 mt-4 bg-velix-slate-blue p-2 rounded-lg">
              <Button className="bg-velix-primary hover:bg-velix-primary">
                Day
              </Button>
              <Button className="text-velix-gray bg-transparent hover:bg-transparent">
                Week
              </Button>
              <Button className="text-velix-gray bg-transparent hover:bg-transparent">
                Month
              </Button>
              <Select
                onValueChange={(value) => setChartType(value as "line" | "bar")}
              >
                <SelectTrigger className="lg:w-24 focus:ring-0 focus-visible:ring-0 ring-offset-0 focus:ring-offset-0">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="line">Line</SelectItem>
                  <SelectItem value="bar">Bar</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Chart type={chartType} className="w-full h-[300px]" />
        </div>
      </div>
    </Section>
  );
}
