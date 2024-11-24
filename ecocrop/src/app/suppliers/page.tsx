"use client"

import { useState } from "react";
import DashboardCards from "../(components)/Cards"
import Header from "../(components)/Header"
import { Mail, Phone, PlusCircleIcon, SearchIcon } from "lucide-react";
import CreateSupplierModal from "./CreateSupplierModal";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ViewDetailsModal from "./ViewDetails";

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

const Suppliers = () => {

  const [searchItem, setSearchItem] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isViewDetailsModalOpen, setIsViewDetailsModalOpen] = useState(false);

  
  return (
    <div className="mx-auto pb-5 w-full">
      <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input className="w-full py-4 px-2 rounded bg-white" placeholder="Search Suppliers" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
      </div>
      <div className="flex justify-between items-center mb-6 pt-3">
          <Header name="Suppliers"/>
          <button className="flex items-center bg-green-500 hover:bg-green-700 text-gray-200 font-bold py-2 px-4 rounded" 
            onClick={() => setIsCreateModalOpen(true)} >
            <PlusCircleIcon className="w-5 h-5 !text-gray-200 mr-2"/> Add New Supplier
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-between mt-5">
          {
            supplierData.map(supplier => (
              <div className="flex flex-col w-full border-2 border-gray-300 p-5 items-center" key={supplier.id}>
                {/* <Image src={product.imageURL} alt="crop photo" width={1000} height={1000}/> */}
                <Image src={supplier.supplierType === "Individual" ? "./assets/icons/user.svg" : "./assets/icons/warehouse.svg"} 
                  alt="crop photo" width={50} height={50}/>
                <div className="flex justify-between items-center w-full" key={supplier.id}>
                  <h1 className="font-bold text-green-600 text-lg">{supplier.name}</h1>
                  <span className="text-gray-400 text-xs">{supplier.supplierType}</span>
                  
                </div>
                <div className="flex flex-col my-2 gap-1 w-full">
                  <div className="cursor-pointer flex items-center hover:bg-green-100 justify-start gap-3 px-2">
                    <Mail className='w-6 h-6 !text-green-400'/>
                    <p className="font-semibold text-green-400 text-lg">{supplier.email}</p>
                  </div>
                  <div className="cursor-pointer flex items-center hover:bg-green-100 justify-start gap-3 px-2">
                    <Phone className='w-6 h-6 !text-green-400'/>
                    <p className="font-semibold text-green-400 text-lg">{supplier.contact}</p>
                  </div>
                </div>
                <div className="font-semibold text-gray-400 text-xl w-full">{supplier.status}</div>

                <Button type="submit" className="shad-primary-btn w-full my-2" onClick={() => setIsViewDetailsModalOpen(true)}>
                  View Details
                </Button>
              </div>
            ))
          }
        </div>
      {/* Modals */}
      <ViewDetailsModal isOpen={isViewDetailsModalOpen} onClose={() => setIsViewDetailsModalOpen(false)}/>
      <CreateSupplierModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)}/>
    </div>
  )
}

export default Suppliers