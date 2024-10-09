'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LapTimeChartProps = {
  data: {
    lapNumber: number;
    lapTime: number;
  }[];
};

const LapTimeChart = ({ data }: LapTimeChartProps) => {
  const chartData = {
    labels: data.map((lap) => lap.lapNumber),
    datasets: [
      {
        label: 'Lap Times',
        data: data.map((lap) => lap.lapTime),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Lap Times',
        data: data.map((lap) => lap.lapTime),
        borderColor: '#fff',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Lap Number',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Lap Time (seconds)',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LapTimeChart;
