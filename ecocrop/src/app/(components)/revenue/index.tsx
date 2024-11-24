"use client"

import { Ellipsis } from 'lucide-react'
import React from 'react'

const RevenueCharts = () => {
  return (
    <div>
        <div className="flex items-center justify-between p-3">
            <h1 className='text-xl font-semibold text-gray-700'>Revenue Generated</h1>
            <Ellipsis className="w-6 h-6 text-green-500 rounded-full cursor-pointer hover:bg-gray-200 hover:text-gray-500"/>
        </div>
    </div>
  )
}

export default RevenueCharts