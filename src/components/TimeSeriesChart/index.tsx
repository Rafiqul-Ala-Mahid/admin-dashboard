import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

interface DataPoint {
  time: string;
  value1: number;
  value2: number;
}

const TimeSeriesChart = () => {
  const data: DataPoint[] = [
    { time: "12AM", value1: 30, value2: 45 },
    { time: "2AM", value1: 25, value2: 35 },
    { time: "4AM", value1: 40, value2: 30 },
    { time: "6AM", value1: 20, value2: 40 },
    { time: "8AM", value1: 35, value2: 25 },
    { time: "10AM", value1: 45, value2: 35 },
    { time: "12PM", value1: 30, value2: 40 },
    { time: "2PM", value1: 25, value2: 45 },
    { time: "4PM", value1: 35, value2: 30 },
    { time: "6PM", value1: 40, value2: 35 },
    { time: "8PM", value1: 45, value2: 25 },
    { time: "10PM", value1: 35, value2: 40 },
    { time: "11PM", value1: 40, value2: 35 },
  ];

  return (
    <div className="w-[200px] h-[120px] bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 5, right: 2, left: 2, bottom: 5 }}>
          <XAxis
            dataKey="time"
            tick={{ fill: "#9CA3AF", fontSize: 6 }}
            axisLine={{ stroke: "#4B5563" }}
            tickLine={false}
            interval={3}
          />
          <Bar
            dataKey="value1"
            fill="#60A5FA"
            radius={[1, 1, 0, 0]}
            maxBarSize={4}
          />
          <Bar
            dataKey="value2"
            fill="#C084FC"
            radius={[1, 1, 0, 0]}
            maxBarSize={4}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;
