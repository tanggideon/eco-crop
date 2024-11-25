import React from 'react'
import Navbar from '../(components)/navbar'
import Hero from '../(components)/hero'
import { Separator } from '@/components/ui/separator'
import Promotions from '../(components)/promotions'
import Products from '../(components)/products'


const Ecommerce = () => {
  return (
    <div className="w-full h-full px-5">
      <Navbar />
      <Separator />
      <div className="flex gap-5 flex-col lg:flex-row my-5 h-full">
        <div className="w-full lg:w-3/4 h-full flex flex-col justify-center items-center">
          <Hero />
          <hr className="py-4"/>
          <Products />
        </div>
        <div className="w-full lg:w-1/4 h-full bg-green-200">
          <Promotions />
        </div>
      </div>
    </div>
  )
}

export default Ecommerce