import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartEvent,
  ActiveElement,
} from "chart.js";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { BarChartData as ChartData, BarChartOptions as ChartOptions } from "@/types/chartsTypes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  data: ChartData; 
  options: ChartOptions; 
}

const LineChart: React.FC<LineChartProps> = ({ data, options }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleClick = (event: ChartEvent, elements: ActiveElement[]) => {
    if (elements.length > 0) {
      const elementIndex = elements[0].index;
      const label = data.labels[elementIndex];
      const value = data.datasets[0].data[elementIndex];
      setModalContent(`Label: ${label}, Value: ${value}`);
      setModalOpen(true);
    }
  };

  const updatedOptions = {
    ...options,
    onClick: handleClick,
  };

  return (
    <>
      <Line data={data} options={updatedOptions} />
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogTrigger asChild>
          <Button style={{ display: "none" }}>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Chart Details</DialogTitle>
          <DialogDescription>{modalContent}</DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={() => setModalOpen(false)}>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LineChart;
