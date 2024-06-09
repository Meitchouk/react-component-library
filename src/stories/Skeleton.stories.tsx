import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../components/ui/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof Skeleton> = {
  render: (args) => <Skeleton {...args} />,
  args: {
    style: { width: "200px", height: "200px" },
  },
};

export const Default = Template;

export const Thin = {
  ...Template,
  args: {
    ...Template.args,
    style: { width: "100px", height: "20px" },
  },
};

export const Wide = {
  ...Template,
  args: {
    ...Template.args,
    style: { width: "100px", height: "50px" },
  },
};

export const SmallSquare = {
  ...Template,
  args: {
    ...Template.args,
    style: { width: "50px", height: "50px" },
  },
};

export const LargeSquare = {
  ...Template,
  args: {
    ...Template.args,
    style: { width: "100px", height: "100px" },
  },
};
