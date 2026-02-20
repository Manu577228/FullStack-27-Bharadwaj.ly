import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Legend
);

const Graph = ({ graphData = [] }) => {
  const hasData = graphData.length > 0;

  const labels = graphData.map((item) =>
    new Date(item.clickDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  );

  const clicks = graphData.map((item) => item.count);

  const data = {
    labels: hasData ? labels : ["", "", "", "", "", "", ""],

    datasets: [
      {
        label: "Total Clicks",
        data: hasData ? clicks : [0, 0, 0, 0, 0, 0, 0],

        /* 🔥 Premium Gradient */
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "#4f46e5";

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );

          gradient.addColorStop(0, "#1e1b4b"); // deep navy
          gradient.addColorStop(1, "#6366f1"); // soft indigo

          return gradient;
        },

        hoverBackgroundColor: "#4338ca",

        borderRadius: 12,
        borderSkipped: false,
        barThickness: 30,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,

    animation: {
      duration: 900,
      easing: "easeOutCubic",
    },

    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#111827",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },

      tooltip: {
        enabled: hasData,
        backgroundColor: "#111827",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function (context) {
            return ` ${context.parsed.y} Clicks`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0,0,0,0.06)",
        },
        ticks: {
          color: "#374151",
        },
        title: {
          display: true,
          text: "Clicks",
          color: "#111827",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },

      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#374151",
        },
        title: {
          display: true,
          text: "Date",
          color: "#111827",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-[420px] p-6 rounded-2xl bg-white shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Graph;