import React from "react";
import { EyeIcon, Users, UserPlus, Star, MoreHorizontal } from "lucide-react";

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: {
    value: number;
    isPositive: boolean;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  change,
}) => (
  <div className=" h-[110px] border-2 border-gray-600 bg-[#1F1F1F] p-4 mb-4">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <span className="text-gray-400">{icon}</span>
        <span className="text-xs text-gray-400">{label}</span>
      </div>
      <button className="text-gray-400 hover:text-gray-300">
        <MoreHorizontal size={20} />
      </button>
    </div>
    <div className="flex items-center space-x-3">
      <span className="text-xl font-semibold text-white">{value}</span>
      <span
        className={`text-xs px-2 py-0.5 rounded ${
          change.isPositive
            ? "text-green-500 bg-green-500/10"
            : "text-red-500 bg-red-500/10"
        }`}
      >
        {change.isPositive ? "+" : "-"}
        {Math.abs(change.value)}%
      </span>
    </div>
  </div>
);

const MetricsDashboard: React.FC = () => {
  const metrics = [
    {
      icon: <EyeIcon size={20} />,
      label: "Pageviews",
      value: "50.8K",
      change: { value: 28.4, isPositive: true },
    },
    {
      icon: <Users size={20} />,
      label: "Monthly users",
      value: "23.6K",
      change: { value: 12.6, isPositive: false },
    },
    {
      icon: <UserPlus size={20} />,
      label: "New sign ups",
      value: "756",
      change: { value: 3.1, isPositive: true },
    },
    {
      icon: <Star size={20} />,
      label: "Subscriptions",
      value: "2.3K",
      change: { value: 11.3, isPositive: true },
    },
  ];

  return (
    <div className="w-[400px]">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsDashboard;
