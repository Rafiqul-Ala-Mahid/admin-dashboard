import React from "react";
import { ChevronDown } from "lucide-react";

interface Order {
  id: string;
  date: string;
  status: "Paid" | "Pending";
  total: number;
  selected?: boolean;
}

const RecentOrders = () => {
  const orders: Order[] = [
    { id: "#1532", date: "Dec 30, 10:06 AM", status: "Paid", total: 329.4 },
    { id: "#1531", date: "Dec 29, 2:59 AM", status: "Pending", total: 117.24 },
    { id: "#1530", date: "Dec 29, 12:54 AM", status: "Pending", total: 52.16 },
    { id: "#1529", date: "Dec 28, 2:32 PM", status: "Paid", total: 350.32 },
    { id: "#1528", date: "Dec 27, 2:20 PM", status: "Pending", total: 246.78 },
    { id: "#1527", date: "Dec 26, 9:48 AM", status: "Paid", total: 64.0 },
  ];

  return (
    <div className="bg-transparent border-2 h-[450px] w-[400px] border-gray-600 p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white text-xl font-semibold">Recent orders</h2>
        <button className="flex items-center gap-2 bg-zinc-900 text-white px-3 py-1.5 rounded-lg text-sm">
          Jan 2024
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="">
        {/* Header */}
        <div className="grid grid-cols-4 text-xs text-zinc-400 px-3 py-2">
          <div>Order</div>
          <div>Date</div>
          <div>Status</div>
          <div className="text-right">Total</div>
        </div>

        {/* Orders */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="grid grid-cols-4 items-center px-3 py-3 rounded-lg hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-zinc-700 bg-zinc-600 text-purple-600 focus:ring-purple-600 checked:bg-purple-600 appearance-none"
              />
              <span className="text-white text-xs">{order.id}</span>
            </div>
            <div className="text-zinc-400 text-xs">{order.date}</div>
            <div>
              <span
                className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === "Paid"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-yellow-500/10 text-yellow-500"
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="text-white text-right text-xs">
              ${order.total.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
