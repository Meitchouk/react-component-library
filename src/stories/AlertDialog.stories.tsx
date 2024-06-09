import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "../components/ui/alert-dialog";
import { Button } from "../components/ui/button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryObj<typeof AlertDialog> = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Show Alert Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Warning</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button>Delete</Button>
          </AlertDialogAction>
          <AlertDialogCancel asChild>
            <Button variant="outline">Cancel</Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Default = Template;
