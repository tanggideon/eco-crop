"use client"

import { Ellipsis } from 'lucide-react'
import React from 'react'
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: "Products",
    count: 125,
    fill: "#33CC33B2"
  },
  {
    name: "Suppliers",
    count: 25,
    fill: "#3380CCCC"
  },
  {
    name: "Customers",
    count: 1225,
    fill: "#FFFF00BF"
  },
  // {
  //   name: "Total",
  //   count: 1375,
  //   fill: "#fff"
  // },
]


const Count = () => {
  return (
    <div className="bg-gray-100 py-5 h-full">
       <div className="flex items-center justify-between px-3 h-[10%]">
            <h1 className='text-xl font-semibold text-gray-700'>Count</h1>
            <Ellipsis className="w-6 h-6 text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500"/>
        </div>
        <div className="w-full h-[80%]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
              <RadialBar label={{position: "insideStart", fill: "#000"}} background dataKey="count"/>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-around h-[10%]">
          <div className='flex flex-col justify-center items-center gap-2'>
            <div className="w-5 h-5 rounded-full bg-green-300"/>
            <h2 className="text-sm font-bold text-gray-500">Products</h2>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <div className="w-5 h-5 rounded-full bg-blue-300"/>
            <h2 className="text-sm font-bold text-gray-500">Suppliers</h2>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <div className="w-5 h-5 rounded-full bg-yellow-300"/>
            <h2 className="text-sm font-bold text-gray-500">Customers</h2>
          </div>
        </div>
    </div>
  )
}

export default Count