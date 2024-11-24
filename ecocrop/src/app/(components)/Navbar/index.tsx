"use client"

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsSidebarCollapsed, setIsDarkMode} from '@/state'
import {Bell, Menu, Moon, Settings, Sun} from 'lucide-react'
import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed); 
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
        }
    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
        };
    
    return (
    <div className='flex justify-between w-full items-center mb-7'>
        <div className='flex justify-between items-center gap-5'>
            <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-green-100' onClick={toggleSidebar}>
                <Menu className='w-4 h-4'/>
            </button>
        
        <div className='relative'>
            <input type="search" placeholder='Type to search Products' className='pl-10 pr-4 py-2 w-50 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'/>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Bell className='text-gray-500' size={20} />
            </div>
        </div>
        </div>
        <div className="flex justify-between items-center gap-5">
            <div className="hidden md:flex justify-between items-center gap-5">
                <div className=" rounded-full hover:border hover:border-green-200 hover:bg-green-100 p-1">
                    <button onClick={toggleDarkMode} className='hover:text-green-200'>
                        {isDarkMode ? (
                            <Sun className='cursor-pointer text-gray-500 hover:text-green-400' size={24} />
                        ) : (
                            <Moon className='cursor-pointer text-gray-500 hover:text-green-200' size={24}/>
                        )}
                    </button>
                </div>
                <div className="relative rounded-full hover:border hover:border-green-200 hover:bg-green-100 p-1">
                    <Bell className="cursor-pointer text-gray-500 hover:text-green-200" size={24} />
                    <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-sx font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                        3
                    </span>
                </div>
                <hr className='w-0 h-7 border border-solid border-l border-grey-300 mx-3' />
                <div className="flex items-center gap-3 cursor-pointer rounded-full border border-green-200 p-2 hover:bg-green-100">
                    <div className="w-10 h-10 rounded-full bg-green-200 p-1">
                        <Image src="./assets/icons/user.svg" alt="user avatar" width={100} height={100}/>
                    </div>
                    <span className='font-semibold'>Tang Gideon</span>
                </div>
            </div>
            <Link href="/settings">
                <Settings className="cursor-pointer text-gray-500" size={24}/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar