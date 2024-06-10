// import all components and export them here
import "./styles/globals.css";

// charts components
import BarChart from "./components/charts/barChart";
import LineChart from "./components/charts/lineChart";

// ui components
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/accordion";
import {
  AlertDialog, 
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/ui/alert-dialog";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "./components/ui/hover-card";
import { Input } from "./components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "./components/ui/popover";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Skeleton } from "./components/ui/skeleton";
import { Switch } from "./components/ui/switch";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "./components/ui/toast";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";
import {BarChartData, BarChartOptions} from './types/chartsTypes'

// Charts components
export { BarChart, LineChart };

// ui components
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
export { Alert, AlertTitle, AlertDescription };
export { Button };
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
export { Checkbox };
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
export { HoverCard, HoverCardTrigger, HoverCardContent };
export { Input };
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
export { RadioGroup, RadioGroupItem };
export { Skeleton };
export { Switch };
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
export { Tabs, TabsList, TabsTrigger, TabsContent };
export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

// export types
export type { ToastProps, ToastActionElement };
export type { BarChartData, BarChartOptions };

