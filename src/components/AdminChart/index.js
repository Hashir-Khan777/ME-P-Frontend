import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function AdminChart() {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: null,
        data: [14, 17, 6, 16, 12, 17, 22],
        backgroundColor: "#FFBA3F",
        barThickness: 13,
      },
    ],
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            padding: 10,
          },
        },
      },
    },
  };
  return (
    <div style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}>
      <Bar
        //   style={{ padding: "4%" }}
        data={data}
        options={data.options}
      ></Bar>
    </div>
  );
}
