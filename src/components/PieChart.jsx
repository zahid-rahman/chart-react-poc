import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './chart.css';
import SparklineCharts from "./SparklineCharts";


export default function PieChart() {
  const [chartState, setChartState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <>
      <ReactApexChart
        options={chartState.options}
        series={chartState.series}
        type="pie"
        width={380}
        className="chart"
      />

    </>
  );
}
