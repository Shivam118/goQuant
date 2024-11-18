import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function LiveLineChart({ data }) {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="price" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone" // Smooth curve
        dataKey="size"
        stroke="#82ca9d"
        name="Bids"
        data={data?.filter((d) => d.type === "Bid")}
        dot={false}
        isAnimationActive={false} // No animation for real-time updates
        strokeWidth={2} // Thicker line for better visuals
      />
      <Line
        type="monotone"
        dataKey="size"
        stroke="#8884d8"
        data={data?.filter((d) => d.type === "Ask")}
        name="Asks"
        dot={false}
        isAnimationActive={false} // No animation for real-time updates
        strokeWidth={2}
      />
    </LineChart>
    // </ResponsiveContainer>
  );
}
