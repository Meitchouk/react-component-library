// src/stories/Table.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
  TableCaption
} from "@/components/ui/table";

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  subcomponents: { TableHeader, TableBody, TableRow, TableHead, TableCell, TableFooter, TableCaption },
  decorators: [(Story) => <div style={{ margin: '3em' }}><Story /></div>]
} as Meta;

const Template: StoryObj<typeof Table> = {
  args: {
    children: (
      <>
        <TableCaption>Transaction History</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2021-01-01</TableCell>
            <TableCell>123456</TableCell>
            <TableCell>$150</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2021-01-02</TableCell>
            <TableCell>123457</TableCell>
            <TableCell>$250</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>$400</TableCell>
          </TableRow>
        </TableFooter>
      </>
    )
  }
};

export const Default = Template;
