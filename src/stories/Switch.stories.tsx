import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/ui/switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;

const Template: StoryObj<typeof Switch> = {
  render: (args) => <Switch {...args} />,
  args: {
    checked: false,
    disabled: false,
  },
};

export const Default = Template;

export const Checked = {
  ...Template,
  args: {
    ...Template.args,
    checked: true,
  },
};

export const Disabled = {
  ...Template,
  args: {
    ...Template.args,
    disabled: true,
  },
};

export const CheckedAndDisabled = {
  ...Template,
  args: {
    ...Template.args,
    checked: true,
    disabled: true,
  },
};
