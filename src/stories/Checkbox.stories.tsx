import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../components/ui/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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

const Template: StoryObj<typeof Checkbox> = {
  render: (args) => <Checkbox {...args} />,
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
