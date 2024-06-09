import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof Tabs> = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Example Tabs">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        Content of Tab 1. Here you can add any relevant information or
        interactive elements.
      </TabsContent>
      <TabsContent value="tab2">
        Content of Tab 2. This tab can contain a different set of information or
        form elements.
      </TabsContent>
      <TabsContent value="tab3">
        Content of Tab 3. This might include media elements like images or
        videos.
      </TabsContent>
    </Tabs>
  ),
};

export const Default = Template;
