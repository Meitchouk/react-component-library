import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof Card> = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Title of the Card</CardTitle>
        <CardDescription>
          Description of what the card is about.
        </CardDescription>
      </CardHeader>
      <CardContent>
        This is the content of the card. It might include text, links, or any
        other elements that are needed.
      </CardContent>
      <CardFooter>This is the footer of the card.</CardFooter>
    </Card>
  ),
};

export const Default = Template;

export const WithLongContent = {
  ...Template,
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Expanded Card</CardTitle>
        <CardDescription>
          More detailed description with extended content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
        euismod ligula. Morbi mattis pretium interdum. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Praesent volutpat et erat sit amet commodo. Nullam sed sapien dui. Nulla
        facilisi. Donec elementum velit a orci facilisis rutrum. Nam consectetur
        orci sed dolor cursus, eget consectetur orci dapibus.
      </CardContent>
      <CardFooter>More detailed footer information or actions.</CardFooter>
    </Card>
  ),
};
