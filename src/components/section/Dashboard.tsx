import { CardContent, Card } from "@/components/ui/DashboardCard";
import { Button } from "@/components/ui/button";
import Chart from "./Chart";
import Section from "../layouts/Section";

export default function Dashboard() {
  return (
    <Section className="mt-28 px-5 pb-28">
      <div className="py-8 flex-col flex gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 bg-white p-5 lg:p-12 rounded-lg">
          {Array.from(Array(4).keys()).map((index) => (
            <Card key={index} className="bg-velix-slate-blue">
              <CardContent className="p-7 space-y-2">
                <div className="text-sm text-velix-gray">veMETIS balance</div>
                <div className="text-lg font-semibold text-velix-primary">
                  0.0 veMETIS
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
            </div>
          </div>
          <Chart className="w-full h-[300px]" />
        </div>
      </div>
    </Section>
  );
}
