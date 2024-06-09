import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    },
    size: {
      control: { type: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    },
    onClick: { action: 'clicked' }
  },
  args: {
    children: 'Button',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '👍',  // Assuming the icon button just shows an emoji or icon.
  },
};
