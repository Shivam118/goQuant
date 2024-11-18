import React, { useState } from "react";
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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data} // Use the raw data array
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="price" allowDuplicatedCategory={false}/>
        <YAxis dataKey="size" />
        <Tooltip />
        <Legend />

        {/* Map over the data types and create lines for "Ask" and "Bid" */}
        {["Ask", "Bid"].map((type) => (
          <Line
            key={type}
            type="monotone"
            dataKey="size"
            data={data?.filter((d) => d.type === type)} // Filter data for each type
            name={type}
            stroke={type === "Ask" ? "#0f0" : "#f00"} // Green for Ask, Red for Bid
            dot={false}
            isAnimationActive={false}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
