import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type StorageChartType = {
  storageData: any;
};

const StorageChart = ({ storageData }: StorageChartType) => {
  const data = {
    labels: ["Used", "Free"],
    datasets: [
      {
        data: [200, 125, 75, 50], // Example data
        backgroundColor: ["#FF9F00", "#689FF8", "#4AC29D", "#BCBECA"], // Example colors
        hoverBackgroundColor: ["#FF9F00", "#689FF8", "#4AC29D", "#BCBECA"],
        borderWidth: 0,
        spacing: 5,
        offset: 5,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    cutout: "90%",
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl text-gray">85%</div>
          <div className="text-tertiary-gray">Used</div>
        </div>
      </div>
    </div>
  );
};

export default StorageChart;
