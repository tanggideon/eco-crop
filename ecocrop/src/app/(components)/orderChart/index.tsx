"use client";

import { Ellipsis } from "lucide-react";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    retail: 12500,
    wholesale: 25015,
  },
  {
    name: "February",
    retail: 12500,
    wholesale: 45015,
  },
  {
    name: "March",
    retail: 5500,
    wholesale: 5215,
  },
  {
    name: "April",
    retail: 2500,
    wholesale: 215,
  },
  {
    name: "May",
    retail: 12500,
    wholesale: 25015,
  },
  {
    name: "June",
    retail: 22500,
    wholesale: 2515,
  },
  {
    name: "July",
    retail: 2500,
    wholesale: 2015,
  },
  {
    name: "August",
    retail: 2500,
    wholesale: 2015,
  },
  {
    name: "September",
    retail: 2500,
    wholesale: 2015,
  },
  {
    name: "October",
    retail: 2500,
    wholesale: 2015,
  },
  {
    name: "November",
    retail: 2500,
    wholesale: 2015,
  },
  {
    name: "December",
    retail: 2500,
    wholesale: 2015,
  },
];

const OrderBarChart = () => {
  return (
    <div className="bg-gray-100 py-5 h-full">
      <div className="flex items-center justify-between p-3 h-[10%]">
        <h1 className="text-xl font-semibold text-gray-700">Monthly Orders</h1>
        <Ellipsis className="w-6 h-6 text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500" />
      </div>
      <div className="w-full h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="wholesale"
              stackId="1"
              stroke="#8884d8"
              fill="#33CC33B2"
            />
            <Area
              type="monotone"
              dataKey="retail"
              stackId="1"
              stroke="#82ca9d"
              fill="#3380CCCC"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderBarChart;
