import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { randomizeArray } from "../libs";
import { sparklineData } from "../constant";

export default function SparklineCharts() {
  const [state, setState] = useState({
    series: [
      {
        data: randomizeArray(sparklineData),
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Sales",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    },

    seriesSpark2: [
      {
        data: randomizeArray(sparklineData),
      },
    ],

    optionsSpark2: {
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      yaxis: {
        min: 0,
      },
      colors: ["#DCE6EC"],
      title: {
        text: "$235,312",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    },

    seriesSpark3: [
      {
        data: randomizeArray(sparklineData),
      },
    ],
    optionsSpark3: {
      chart: {
        type: "area",
        height: 160,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "straight",
      },
      fill: {
        opacity: 0.3,
      },
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      yaxis: {
        min: 0,
      },
      title: {
        text: "$135,965",
        offsetX: 0,
        style: {
          fontSize: "24px",
        },
      },
      subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
          fontSize: "14px",
        },
      },
    },
  });
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-2">
          <div style={{ border: "1px solid #E0E0E0", borderRadius: '5px' }}>
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="area"
              height={160}
            />
          </div>

          <div style={{ border: "1px solid #E0E0E0", borderRadius: 2 }}>
            <ReactApexChart
              options={state.optionsSpark2}
              series={state.seriesSpark2}
              type="area"
              height={160}
            />
          </div>

          <div style={{ border: "1px solid #E0E0E0", borderRadius: 2 }}>
            <ReactApexChart
              options={state.optionsSpark3}
              series={state.seriesSpark3}
              type="area"
              height={160}
            />
          </div>
        </div>
      </div>
    </>
  );
}
