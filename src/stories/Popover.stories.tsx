import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "../components/ui/popover";
import { Button } from "../components/ui/button";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof Popover> = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        This is the content of the Popover. It can include text, links, or any
        other HTML elements.
      </PopoverContent>
    </Popover>
  ),
};

export const Default = Template;

export const WithCustomPosition = {
  ...Template,
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={10} align="start">
        Custom position Popover content. Adjusted for specific alignment and
        offset.
      </PopoverContent>
    </Popover>
  ),
};
