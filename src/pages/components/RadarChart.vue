<template>
  <div class="radar-chart-container">
    <Radar
      :data="chartData"
      :options="chartOptions"
      :width="300"
      :height="300"
    />
  </div>
</template>

<script setup>
import { Radar } from "vue-chartjs";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const chartData = {
  labels: ["SPD", "SHO", "PAS", "DRI", "DEF", "PHY"],
  datasets: [
    {
      label: "Player Stats",
      data: [85, 78, 92, 88, 65, 82],
      backgroundColor: "rgba(76, 175, 80, 0.3)",
      borderColor: "rgba(76, 175, 80, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(76, 175, 80, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(76, 175, 80, 1)",
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "rgba(76, 175, 80, 1)",
      borderWidth: 1,
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      min: 0,
      ticks: {
        stepSize: 20,
        display: false,
      },
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
        lineWidth: 1,
      },
      angleLines: {
        color: "rgba(0, 0, 0, 0.1)",
        lineWidth: 1,
      },
      pointLabels: {
        font: {
          size: 12,
          weight: "bold",
        },
        color: "#666",
      },
    },
  },
  elements: {
    line: {
      tension: 0.1,
    },
  },
};
</script>

<style scoped>
.radar-chart-container {
  width: 300px;
  height: 300px;
  margin: 0 auto;
  padding: 20px;
}
</style>
