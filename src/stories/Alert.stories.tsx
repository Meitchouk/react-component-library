import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["default", "destructive"] },
    },
  },
};

export default meta;

const Template: StoryObj<typeof Alert> = {
  render: (args) => (
    <Alert {...args}>
      <InfoCircledIcon />
      <AlertTitle>Title of the Alert</AlertTitle>
      <AlertDescription>
        This is an alert description. It might be longer to include more
        details.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default",
  },
};

export const Default = Template;

export const Destructive = {
  ...Template,
  args: {
    ...Template.args,
    variant: "destructive",
    children: (
      <>
        <ExclamationTriangleIcon />
        <AlertTitle>Warning!</AlertTitle>
        <AlertDescription>
          This is a warning alert, indicating a potentially destructive action.
        </AlertDescription>
      </>
    ),
  },
};
