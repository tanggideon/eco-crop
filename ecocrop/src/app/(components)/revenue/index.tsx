"use client";

import { Ellipsis } from "lucide-react";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sunday",
    retail: 12500,
    wholesale: 25015,
  },
  {
    name: "Monday",
    retail: 12500,
    wholesale: 45015,
  },
  {
    name: "Tuesday",
    retail: 5500,
    wholesale: 5215,
  },
  {
    name: "Wednesday",
    retail: 2500,
    wholesale: 215,
  },
  {
    name: "Thursday",
    retail: 12500,
    wholesale: 25015,
  },
  {
    name: "Friday",
    retail: 22500,
    wholesale: 2515,
  },
  {
    name: "Saturday",
    retail: 2500,
    wholesale: 2015,
  },
];

const RevenueCharts = () => {
  return (
    <div className="bg-gray-100 py-5 h-full">
      <div className="flex items-center justify-between p-3 h-[10%]">
        <h1 className="text-xl font-semibold text-gray-700">
          Revenue Generated
        </h1>
        <Ellipsis className="w-6 h-6 text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500" />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend 
            />
            <Bar
              dataKey="retail"
              fill="#33CC33B2"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="wholesale"
              fill="#3380CCCC"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueCharts;
