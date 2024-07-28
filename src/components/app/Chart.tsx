import { ComponentProps } from "react";
import { ResponsiveBoxPlot } from "@nivo/boxplot";
import { chartData } from "@/mocks/chartdata";

export default function Chart(props: ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveBoxPlot
        data={chartData}
        margin={{ top: 60, right: 140, bottom: 60, left: 60 }}
        minValue={0}
        maxValue={10}
        subGroupBy="subgroup"
        quantiles={[0.1, 0.25, 0.5, 0.75, 0.9]}
        padding={0.12}
        enableGridY={false}
        axisTop={null}
        axisRight={{
          tickSize: 7,
          tickPadding: 10,
          tickRotation: 0,
          legend: "",
          legendOffset: 0,
          truncateTickAt: 0
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "group",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "value",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0
        }}
        colors={{ scheme: "set1" }}
        borderColor={{ theme: "background" }}
        medianWidth={0}
        medianColor={{
          from: "color",
          modifiers: [["darker", 0]]
        }}
        whiskerWidth={1}
        whiskerEndSize={0.25}
        whiskerColor={{
          from: "color",
          modifiers: [["darker", 0.6]]
        }}
        motionConfig="stiff"
        legends={[
          {
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 158,
            itemWidth: 63,
            itemHeight: 21,
            itemsSpacing: 3,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            symbolSize: 20,
            symbolShape: "square",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000"
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
}
