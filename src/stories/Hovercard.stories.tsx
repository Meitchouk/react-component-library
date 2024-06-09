import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../components/ui/hover-card";
import { Button } from "../components/ui/button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof HoverCard> = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        This is the content of the HoverCard. It appears when you hover over the
        trigger.
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Default = Template;

export const WithCustomPosition = {
  ...Template,
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent align="start" sideOffset={10}>
        Custom position HoverCard content. It has custom alignment and side
        offset.
      </HoverCardContent>
    </HoverCard>
  ),
};
