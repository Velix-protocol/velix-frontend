import { useState, useEffect } from "react";
import { NextPage } from "next";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const AreaChart: NextPage = () => {
  const [chartData, setChartData] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setChartData([100, 200]);
      setChartLabels(["Metis", "Starknet"]);
    }, 1000);
  }, []);

  // Chart data structure
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.9)",
        tension: 0.3
      }
    ]
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true
        },
        grid: {
          display: false
        }
      },
      y: {
        title: {
          display: true
        },
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 items-start mt-10">
        <h2 className="text-3xl font-bold">Pool Size</h2>
        <p className="text-velix-gray text-start mb-5">
          Genesis pool stakes share a 20% protocol revenue for Velix
        </p>
        <div className="flex gap-3 justify-center"></div>
      </div>

      <div className="w-full h-80 bg-white rounded-lg p-4 dark:bg-velix-claim-gray">
        {chartData.length > 0 && chartLabels.length > 0 ? (
          <div className="w-full h-full">
            <Line data={data} options={options} />
          </div>
        ) : (
          <p className="text-center">Loading ...</p>
        )}
      </div>
    </>
  );
};

export default AreaChart;
