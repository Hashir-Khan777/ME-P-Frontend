import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: ["Completed Orders", "New Orders", "Canceled Orders"],
        datasets: [
          {
            data: [28, 10, 8],
            backgroundColor: ["#198754", "#FFBA3F", "#D12525"],
            radius: "75%",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
        },
        cutout: 75,
      },
    });
    // chartRef.current.width = 100;
    // chartRef.current.height = 200;
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div>
      <canvas
        ref={chartRef}
        // width="40px"
        // height="50px"
        // style={{ backgroundColor: "red" }}
      />
    </div>
  );
}
