
import Link from 'next/link';
import React from 'react'

const Categories =[
  {
    id: 1,
    name: "Grains and Cereals",
    href: "/"
  },
  {
    id: 2,
    name: "Tubers",
    href: "/"
  },
  {
    id: 3,
    name: "Fruits and Vegetables",
    href: "/"
  },
  {
    id: 4,
    name: "Dairy Products",
    href: "/"
  },
]

interface CategoryLinkProps {
  href: string;
  label: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ href, label }) => {
    
  return (
    <Link href={href}>
      <div className={`cursor-pointer flex items-center justify-start px-8 py-4 hover:text-green-500 hover:bg-green-300 gap-3 transition-colors`}>
        <span className={`font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};


const Footer = () => {
  return (
    <div className="w-full p-5 flex justify-between gap-5 items-start bg-green-100">
      <div className="w-full h-full py-5 px-2">
        <h1 className='text-xl font-semibold text-gray-700 p-2'>Categories</h1>
        <hr />
        <div className="w-full">
          {Categories.map(category => (
            <div className='w-full' key={category.id}>
              <CategoryLink label={category.name} href={category.href}/>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full py-5 px-2">
        <h1 className='text-xl font-semibold text-gray-700 p-2'>About Us</h1>
        <hr />
      </div>
      <div className="w-full h-full py-5 px-2">
        <h1 className='text-xl font-semibold text-gray-700 p-2'>Our Newsletter</h1>
        <hr />
      </div>
      <div className="w-full h-full py-5 px-2">
        <h1 className='text-xl font-semibold text-gray-700 p-2'>Contact Us</h1>
        <hr />
      </div>
    </div>
  )
}

export default Footer