import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  BarChart,
  ResponsiveContainer,
} from "recharts";

export default function LiveBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <XAxis
          dataKey="timestamp"
          label="Time"
          tick={false}
          // tickFormatter={(date) => new Date(date).toLocaleTimeString()}
        />
        <YAxis />
        <Bar dataKey="spread" fill="#f00" />
      </BarChart>
    </ResponsiveContainer>
  );
}
