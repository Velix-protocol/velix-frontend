import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { ComponentProps } from "react";

function BarChart(props: ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 }
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.2}
        colors={["#0000FE"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px"
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px"
            }
          },
          grid: {
            line: {
              stroke: "#f3f4f6"
            }
          }
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props: ComponentProps<"div">) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 }
            ]
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 }
            ]
          }
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point"
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto"
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16
        }}
        colors={["#0000FE", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px"
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px"
            }
          },
          grid: {
            line: {
              stroke: "#f3f4f6"
            }
          }
        }}
        role="application"
      />
    </div>
  );
}

export default function Chart(
  props: ComponentProps<"div"> & { type: "bar" | "line" }
) {
  const { type, ...rest } = props;
  return type === "line" ? <LineChart {...rest} /> : <BarChart {...rest} />;
}
