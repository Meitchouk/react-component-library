import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastViewport,
} from "../components/ui/toast";
import { Button } from "../components/ui/button"; // Ensure this is the correct path
import { Cross2Icon } from "@radix-ui/react-icons";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ToastProvider>
        <ToastViewport>
          <Story />
        </ToastViewport>
      </ToastProvider>
    ),
  ],
};

export default meta;

const Template: StoryObj<typeof Toast> = {
  render: () => (
    <Toast>
      <ToastTitle>Title of the Toast</ToastTitle>
      <ToastDescription>Description of the event or action.</ToastDescription>
      <ToastAction asChild altText={"Alternative text"}>
        <Button>Undo</Button>
      </ToastAction>
      <ToastClose asChild>
        <Button aria-label="Close">
          <Cross2Icon />
        </Button>
      </ToastClose>
    </Toast>
  ),
};

export const Default = Template;

export const Destructive = {
  ...Template,
  render: () => (
    <Toast variant="destructive">
      <ToastTitle>Error Occurred</ToastTitle>
      <ToastDescription>This action could not be completed.</ToastDescription>
      <ToastClose asChild>
        <Button aria-label="Close">
          <Cross2Icon />
        </Button>
      </ToastClose>
    </Toast>
  ),
};

export const WithCustomAction = {
  ...Template,
  render: () => (
    <Toast>
      <ToastTitle>Settings Saved</ToastTitle>
      <ToastDescription>
        Your new configuration has been saved successfully.
      </ToastDescription>
      <ToastAction asChild altText={"Alternative Text"}>
        <Button>View Settings</Button>
      </ToastAction>
      <ToastClose asChild>
        <Button aria-label="Close">
          <Cross2Icon />
        </Button>
      </ToastClose>
    </Toast>
  ),
};
