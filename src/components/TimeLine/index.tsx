/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  time: string;
  value: number;
}

const TimeLine = () => {
  const data1: DataPoint[] = [
    { time: "12 AM", value: 25 },
    { time: "2 AM", value: 50 },
    { time: "4 AM", value: 100 },
    { time: "6 AM", value: 40 },
    { time: "8 AM", value: 80 },
    { time: "10 AM", value: 60 },
    { time: "12 PM", value: 100 },
    { time: "2 PM", value: 400 },
    { time: "4 PM", value: 40 },
    { time: "6 PM", value: 35 },
    { time: "8 PM", value: 45 },
    { time: "10 PM", value: 120 },
    { time: "11 PM", value: 20 },
  ];

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
    queryKey: ["TimeData"],
    queryFn: fetchData,
  });

  // Loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
    
  console.log(data)
  return (
    <div className="w-[300px] h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data1}
          margin={{ top: 10, right: 100, left: -35, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#374151"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="time"
            tick={{ fill: "#9CA3AF", fontSize: 8 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9CA3AF", fontSize: 8 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 500]}
            ticks={[0, 100, 250, 500]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#C084FC"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "#C084FC" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeLine;
