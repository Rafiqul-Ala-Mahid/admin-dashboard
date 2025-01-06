"use client";

import React from "react";
import { Download } from "lucide-react";
import World from "../../../public/icons/Group 1.svg"
import Image from "next/image";

interface CountryData {
  name: string;
  percentage: number;
  color: string;
}

interface Props {
  totalUsers: string;
  growth: number;
  countries: CountryData[];
}

const WorldMap = () => (
  <Image src={World} alt={""} className="w-[500px] h-[400px]"/>
);

const UsersByCountry: React.FC<Props> = ({ totalUsers, growth, countries }) => {
  return (
    <div className="flex items-start gap-4 bg-[#1F1F1F] border-2 border-gray-600 w-[720px] p-4 text-white">
        {/* Left side - Stats */}
        <div className="w-[300px]">
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-2">Users by country</h2>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold">{totalUsers}</span>
              <span className="text-sm px-2 py-0.5 rounded bg-green-500/10 text-green-500">
                +{growth}%
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {countries.map((country, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{country.name}</span>
                  <span>{country.percentage}%</span>
                </div>
                <div className="h-2 rounded-full bg-gray-800">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${country.percentage}%`,
                      backgroundColor: country.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Map */}
        <div className="col-span-8 relative">
          <button className="absolute top-0 right-0 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <span>Export</span>
            <Download size={16} />
          </button>

          {/* Map */}
          <div className=" h-full">
            <WorldMap />
          </div>

          {/* Australia Stats Circle */}
          <div className="absolute bottom-32 right-2 bg-black p-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#1a1a1a"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="8"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.75} ${
                    2 * Math.PI * 60 * 0.25
                  }`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-semibold">1.86 K</span>
                <span className="text-sm text-gray-400">Australia</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

// Example usage
export default function UsersPage() {
  const data = {
    totalUsers: "12.4 K",
    growth: 28.5,
    countries: [
      { name: "United states", percentage: 30, color: "#A855F7" },
      { name: "United Kingdom", percentage: 20, color: "#A855F7" },
      { name: "Canada", percentage: 20, color: "#A855F7" },
      { name: "Australia", percentage: 15, color: "#06B6D4" },
      { name: "Spain", percentage: 15, color: "#A855F7" },
    ],
  };

  return (
    <div className="">
      <UsersByCountry {...data} />
    </div>
  );
}
