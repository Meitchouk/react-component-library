import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof RadioGroup> = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" id="option1">
        Option 1
      </RadioGroupItem>
      <RadioGroupItem value="option2" id="option2">
        Option 2
      </RadioGroupItem>
      <RadioGroupItem value="option3" id="option3">
        Option 3
      </RadioGroupItem>
    </RadioGroup>
  ),
};

export const Default = Template;

export const Disabled = {
  ...Template,
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" id="option1" disabled>
        Option 1 (Disabled)
      </RadioGroupItem>
      <RadioGroupItem value="option2" id="option2" disabled>
        Option 2
      </RadioGroupItem>
      <RadioGroupItem value="option3" id="option3" disabled>
        Option 3
      </RadioGroupItem>
    </RadioGroup>
  ),
};

export const WithCustomStyling = {
  ...Template,
  render: () => (
    <RadioGroup defaultValue="option1">
      <RadioGroupItem value="option1" id="option1" className="text-red-500">
        Option 1 (Red Text)
      </RadioGroupItem>
      <RadioGroupItem value="option2" id="option2" className="text-green-500">
        Option 2 (Green Text)
      </RadioGroupItem>
      <RadioGroupItem value="option3" id="option3" className="text-blue-500">
        Option 3 (Blue Text)
      </RadioGroupItem>
    </RadioGroup>
  ),
};
