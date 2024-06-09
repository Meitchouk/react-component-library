import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Enter text here...",
    type: "text",
    disabled: false,
  },
};

export const Default = Template;

export const Password = {
  ...Template,
  args: {
    ...Template.args,
    type: "password",
    placeholder: "Enter your password",
  },
};

export const Email = {
  ...Template,
  args: {
    ...Template.args,
    type: "email",
    placeholder: "Enter your email",
  },
};

export const Number = {
  ...Template,
  args: {
    ...Template.args,
    type: "number",
    placeholder: "Enter a number",
  },
};

export const Disabled = {
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
  },
};
