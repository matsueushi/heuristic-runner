import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TestCase } from "./TestCase";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProp {
  testCases: TestCase[];
}

export function Graph({ testCases }: GraphProp) {
  const seeds = testCases.map((x) => x.seed);
  const scores = testCases.map((x) => x.score);
  const baseScores = testCases.map((x) => x.baseScore);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const data = {
    labels: seeds,
    datasets: [
      {
        label: "Score",
        data: scores,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "BaseScore",
        data: baseScores,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line width={600} height={200} options={options} data={data} />;
}

export default Graph;
