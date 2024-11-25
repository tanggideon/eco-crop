"use client"

import { SearchIcon, ShoppingCartIcon } from 'lucide-react'
import React, { useState } from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Image from "next/image"
import { Button } from "@/components/ui/button"


const Navbar = () => {
    const [searchItem, setSearchItem] = useState("");
    
  return (
    <div className="w-full flex justify-between items-center">
        <div className="flex items-center border-2 border-gray-200 rounded w-[350px]">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input className="w-full py-4 px-2 rounded bg-white outline-none" placeholder="Search Products" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
        </div>
        <div className="flex gap-2 items-center justify-center">
            <div className="relative p-1">
                <ShoppingCartIcon className="cursor-pointer text-gray-500 hover:text-green-200" size={24}/>
                <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-sx font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                    3
                </span>
            </div>
            <hr className='w-0 h-7 border border-solid border-l border-grey-300 mx-3' />
            <SignInButton mode='modal'>
              <Button className='flex items-center gap-3 cursor-pointer rounded-full border border-green-200 p-3 hover:bg-green-100 outline-none border-none'>
                  <div className="w-10 h-10 rounded-full bg-green-200 p-1">
                      <Image src="./assets/icons/user.svg" alt="user avatar" width={100} height={100}/>
                  </div>
                  <span className='font-semibold'>Sign In</span>
              </Button>
            </SignInButton>
        </div>
    </div>
  )
}

export default Navbar