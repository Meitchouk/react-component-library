import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LineChart from "@/components/charts/lineChart";

const meta: Meta = {
  title: "Charts/LineChart",
  component: LineChart,
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
          label: "Visitors",
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
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
