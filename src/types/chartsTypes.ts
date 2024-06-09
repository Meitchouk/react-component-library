import { ChartData, ChartOptions } from "chart.js";

export interface BarChartData extends ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string | string[];
    borderColor: string | string[];
    borderWidth: number;
  }>;
}

export interface BarChartOptions extends ChartOptions {
  scales?: {
    y: {
      beginAtZero: boolean;
    };
  };
  plugins?: {
    legend: {
      display: boolean;
    };
  };
}
