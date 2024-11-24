"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';
import { Bell, ChartLineIcon, Globe, LayoutDashboard, LucideIcon, Menu, Settings, Users, Warehouse, Wheat, TrendingUpDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from "next/image";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon: Icon, label, isCollapsed }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");
  
  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center ${isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"} hover:text-green-500 hover:bg-green-100 gap-3 transition-colors ${isActive ? "bg-green-200 text-white" : ""}`}>
        <Icon className='w-6 h-6 !text-gray-700'/>
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed); 
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };
  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const sidebarClassNames = `fixed flex flex-col ${isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"} bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSidebarCollapsed ? "px-5" : "px-8"}`}>
        <div><Image src="/assets/nature.png" alt="Logo" width={500} height={500} className='!text-gray-700'/></div>
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>EcoCrop</h1>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
          <Menu className='w-4 h-4'/>
        </button>
      </div>
      <div className="flex-grow mt-8">
        <SidebarLink 
          href="/dashboard" 
          icon={LayoutDashboard} 
          label="Dashboard" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/products" 
          icon={Wheat} 
          label="Products" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/suppliers" 
          icon={Warehouse} 
          label="Suppliers" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/analytics" 
          icon={ChartLineIcon} 
          label="Analytics" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/projections" 
          icon={TrendingUpDown} 
          label="Projections" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/map" 
          icon={Globe} 
          label="Maps" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/notifications" 
          icon={Bell} 
          label="Notifications" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/users" 
          icon={Users} 
          label="Users" 
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink 
          href="/settings" 
          icon={Settings} 
          label="Settings" 
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 EcoCrop</p>
      </div>
    </div>
  );
};

export default Sidebar;
