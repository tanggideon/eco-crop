import { Carrot, LucideIcon, Milk, SaladIcon, WheatIcon, UserRound, Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react'


const supplierData = [
  {
    id: 1,
    name: "Antika Farms",
    supplierType: "Company",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Gold"
  },
  {
    id: 2,
    name: "Majesty Farms",
    supplierType: "Company",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Gold"
  },
  {
    id: 3,
    name: "Ahmed Hafiz",
    supplierType: "Individual",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Silver"
  },
  {
    id: 4,
    name: "Goro Farms",
    supplierType: "Company",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Gold"
  },
  {
    id: 5,
    name: "Asuru Grace",
    supplierType: "Individual",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Bronze"
  },
  {
    id: 6,
    name: "Antika Farms",
    supplierType: "Company",
    location: "GA-2340-0031",
    contact: "+233 123456789",
    email: "antikagroup@email.com",
    status: "Gold"
  },
]

interface SupplierLinkProps {
  icon : LucideIcon;
  label : string;
  status : string;
}

interface CategoryLinkProps {
  icon: LucideIcon;
  label: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ icon: Icon, label }) => {
    
  return (
    <Link href="/">
      <div className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-green-100 gap-3 transition-colors`}>
        <Icon className='w-6 h-6 !text-gray-700'/>
        <span className={`font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};

const SupplierLink: React.FC<SupplierLinkProps> = ({ icon: Icon, label, status }) => {
    
  return (
    <Link href="/">
      <div className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-green-100 gap-3 transition-colors`}>
        <Icon className='w-6 h-6 !text-gray-700'/>
        <div className='flex justify-between items-center w-full'>
          <span className={`font-bold text-gray-700`}>{label}</span>
          <span className={`font-normal text-gray-700`}>{status}</span>
        </div>
      </div>
    </Link>
  );
};


const Categories = () => {
  return (
    <div className='w-[400px] h-full border-r border-gray-200 rounded-md'>
      <div className="w-full h-full">
        <h1 className='text-xl font-semibold text-gray-700 p-5'>Categories</h1>
        <hr />
      </div>
      <div className='px-5 py-2'>
        <CategoryLink label='Cereals and Grains' icon={WheatIcon}/>
        <CategoryLink label='Tubers' icon={Carrot}/>
        <CategoryLink label='Fruits and Vegetables' icon={SaladIcon}/>
        <CategoryLink label='Dairy Products' icon={Milk}/>
      </div>
      <div className="w-full h-full">
        <h1 className='text-xl font-semibold text-gray-700 p-5'>Suppliers</h1>
        <hr />
        <div className='px-5 py-2'>
          {supplierData.map(supplier => (
            <div className='w-full' key={supplier.id}>
              <SupplierLink label={supplier.name} icon={supplier.supplierType === "Individual" ? UserRound : Warehouse} status={supplier.status}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories