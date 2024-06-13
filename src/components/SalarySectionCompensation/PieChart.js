import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
  return (
    <PieChart
      colors={["#e8641c", "#28c4d4", "#10d47c", "#e8a40c", "#9844fc"]}
      series={[
        {
          data: [
            { id: 0, value: 40, label: "Net Payable" },
            { id: 1, value: 25, label: "Current month CTC" },
            { id: 2, value: 5, label: "Current month deductions" },
            { id: 3, value: 10, label: "Year to date deductions" },
            { id: 4, value: 40, label: "Year to date earnings" },
          ],
          cx: 110,
        },
      ]}
      width={400}
      height={200}
    />
  );
}
