/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface DataPoint {
  month: string;
  value1: number;
  value2: number;
}


// const data1: DataPoint[] = [
//   { month: "Jan", value1: 25000, value2: 0 },
//   { month: "Feb", value1: 35000, value2: 15000 },
//   { month: "Mar", value1: 15000, value2: 30000 },
//   { month: "Apr", value1: 25000, value2: 45000 },
//   { month: "May", value1: 65000, value2: 60000 },
//   { month: "Jun", value1: 75000, value2: 90000 },
//   { month: "Jul", value1: 85000, value2: 95000 },
//   { month: "Aug", value1: 150000, value2: 100000 },
//   { month: "Sep", value1: 120000, value2: 140000 },
//   { month: "Oct", value1: 90000, value2: 160000 },
//   { month: "Nov", value1: 75000, value2: 190000 },
//   { month: "Dec", value1: 80000, value2: 210000 },
// ];

const CustomTooltip = ({ active, payload, label }: any) => {

  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0A0F1E] rounded-lg border border-gray-800 shadow-lg">
        <p className="text-xl font-semibold text-white">
          ${(payload[0].value / 1000).toFixed(1)}k
        </p>
        <p className="text-xs text-gray-400">{label} 21, 2023</p>
        <div className="mt-2 flex items-center gap-1">
          <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
            12.5% ↑
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const AnalyticsChart = () => {
  // Fetch function
  const fetchData = async () => {
    const response = await fetch(
      "https://mocki.io/v1/45bfa31e-3a0f-4294-9c9b-b6031d419345"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  // Using TanStack Query with object signature
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["apiData"],
    queryFn: fetchData,
  });

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.2} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={true}
            tick={{ fill: "#6B7280" }}
            className="text-[10px]"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280" }}
            ticks={[0, 25000, 50000, 100000, 150000, 200000, 250000]}
            tickFormatter={(value) => `${value / 1000}K`}
            className="text-[10px]"
          />

          <Tooltip content={<CustomTooltip />} />

          <ReferenceLine x="Oct" stroke="#4B5563" strokeDasharray="3 3" />

          <Line
            type="monotone"
            dataKey="value1"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, fill: "#3B82F6" }}
          />
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 8, fill: "#8B5CF6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
