import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BarChart from "@/components/charts/barChart";

const meta: Meta = {
  title: "Charts/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    options: { control: "object" },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Sales",
          data: [65, 59, 80, 81, 56],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  },
};
