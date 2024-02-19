import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export default function LineChart() {
  const [data, setData] = useState({
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "First Dataset",
          data: [180, 220, 210, 350, 340, 470, 400, 300, 350, 230, 370, 420],
          tension: 0.4,
          borderColor: "#FFAF20",
          fill: true,
          pointStyle: false,
          backgroundColor: "#ffb93f86",
        },
        {
          label: "Second Dataset",
          data: [500, 400, 250, 280, 210, 230, 220, 200, 120, 140, 170, 110],
          tension: 0.5,
          borderColor: "black",
          fill: true,
          pointStyle: false,
          backgroundColor: "#2d37486e",
        },
      ],
    },
    options: {
      scales: {
        y: {
          border: {
            dash: [5, 2],
          },
          ticks: {
            padding: 15,
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            padding: 5,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      //   layout: {
      //     padding: 20,
      //   },
    },
  });

  return (
    <>
      <Line
        style={{ height: "90%", paddingRight: 3 }}
        data={data.data}
        options={data.options}
      ></Line>
    </>
  );
}
