import { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof Accordion> = {
  render: () => (
    <Accordion defaultValue="item1" type="single" collapsible>
      <AccordionItem value="item1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Content for Item 1. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>
          Content for Item 2. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>
          Content for Item 3. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Default = Template;

export const MultipleOpen = {
  ...Template,
  args: {
    type: "multiple",
    defaultValue: ["item1", "item2"],
  },
};
