import { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '../components/ui/dialog';
import { Button } from '../components/ui/button'; 

const meta: Meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj = {
  render: (args) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent {...args}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>This is a description of the dialog.</DialogDescription>
        <DialogFooter>
          <Button onClick={() => console.log("Action!")}>Do Action</Button>
          <DialogClose asChild>
            <Button variant="ghost">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {},
};

