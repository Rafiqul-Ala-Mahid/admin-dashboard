"use client";
// Dashboard.tsx

import React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import AnalyticsChart from "../AnalyticsChart";
import TimeSeriesChart from "../TimeSeriesChart";
import TimeLine from "../TimeLine";



const Dashboard: React.FC = () => {
  // Component state types
  const [dateRange] = React.useState<string>("Jan 2024 - Dec 2024");


  return (
    <div className="bg-[#1F1F1F] mb-4 w-[720px] p-4 border-2 border-gray-600 text-white h-[500px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Section */}
        <div className="lg:col-span-2">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
            <div className="">
              <h2 className="text-xs text-gray-400">Total revenue</h2>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold">$240.8K</span>
                <span className="text-green-500 text-xs">24.8%</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-xs text-gray-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                <span className="text-xs text-gray-400">Expenses</span>
              </div>
              <button
                className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg text-xs"
                onClick={() => console.log("Date range clicked")}
              >
                {dateRange}
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="bg-transparent h-[400px] ml-[-50px] w-[500px]">
            <AnalyticsChart />
          </div>
        </div>

        {/* Right Side Stats */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xs text-gray-400">Total profit</h2>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">$144.6K</span>
              <span className="text-green-500 text-xs">28.5%</span>
            </div>
            <div className="w-[200px] mt-4">
              <TimeSeriesChart />
            </div>
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-xs text-gray-400">Last 12 months</span>
              </div>
              <button
                className="text-purple-500 text-xs"
                onClick={() => console.log("View report clicked")}
              >
                View report
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xs text-gray-400">Total sessions</h2>
              <ExternalLink size={16} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">400</span>
              <span className="text-green-500 text-xs">19.8%</span>
            </div>
            <div className="w-[200px] mt-4">
              <TimeLine />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs">Live</span>
            </div>
            <span className="text-xs text-gray-400">10k visitors</span>
            <button
              className="text-purple-500 text-xs"
              onClick={() => console.log("View report clicked")}
            >
              View report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
