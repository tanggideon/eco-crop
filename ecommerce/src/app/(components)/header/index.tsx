import React from 'react'
import Image from "next/image";

const Header = () => {
  return (
    <div className='w-full py-5 bg-green-100'>
      <div className="w-full flex items-center justify-center gap-5">
        <Image src="/assets/nature.png" alt="Logo" width={50} height={50} className='!text-gray-700' />
        <h1 className="font-extrabold text-2xl">EcoCrop</h1>
      </div>
    </div>
  )
}

export default Header