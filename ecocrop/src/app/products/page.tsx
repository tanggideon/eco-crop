"use client"

import { useState } from "react"
import DashboardCards from "../(components)/Cards"
import Header from "../(components)/Header"
import { Edit, ExpandIcon, PlusCircleIcon, SearchIcon } from "lucide-react"
import CreateProductModal from "./CreateProductModal"
import Image from "next/image"
import { Button } from "@/components/ui/button"


const productData = [
  {
    id: 1,
    name: "Yellow Maize",
    quantity: 250,
    measurement: "kg",
    supplier: "Antika Farms",
    price: 12.5,
    imageURL: "/assets/maize.jpg"
  },
  {
    id: 2,
    name: "Cassava",
    quantity: 250,
    measurement: "kg",
    supplier: "Antika Farms",
    price: 10.00,
    imageURL: "/assets/rice.jpg"
  },
  {
    id: 3,
    name: "Onions",
    quantity: 250,
    measurement: "kg",
    supplier: "Majesty Farms",
    price: 12.5,
    imageURL: "/assets/onions.jpg"
  },
  {
    id: 4,
    name: "Tomatoes",
    quantity: 250,
    measurement: "kg",
    supplier: "Majesty Farms",
    price: 12.5,
    imageURL: "/assets/tomatoes.jpg"
  },
  {
    id: 5,
    name: "Rice",
    quantity: 250,
    measurement: "kg",
    supplier: "Majesty Farms",
    price: 12.5,
    imageURL: "/assets/rice1.jpg"
  },
]

const Products = () => {
  const [searchItem, setSearchItem] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="mx-auto pb-5 w-full">
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input className="w-full py-4 px-2 rounded bg-white" placeholder="Search Products" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
        </div>
        <div className="flex justify-between items-center mb-6 pt-3">
          <Header name="Products"/>
          <button className="flex items-center bg-green-500 hover:bg-green-700 text-gray-200 font-bold py-2 px-4 rounded" onClick={() => setIsModalOpen(true)} >
            <PlusCircleIcon className="w-5 h-5 !text-gray-200 mr-2"/> Create New Product
          </button>
        </div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-between mt-5">
          {
            productData.map(product => (
              <div className="flex flex-col w-full border-2 border-gray-300 rounded-t-lg"key={product.id}>
                <Image src={product.imageURL} alt="crop photo" width={1000} height={1000}/>
                <div className="p-5 flex flex-col">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-gray-600 text-lg">{product.name}</h1>
                    <span className="font-semibold text-gray-400 text-xl">$ {product.price}</span>
                  </div>
                  <p className="mt-2 text-gray-400 text-sm font-semibold">Quantity: {product.quantity} {product.measurement}</p>
                </div>
                <div className="w-full flex gap-2 my-2 px-3">
                  <div className="w-2/3">
                    <Button className="shad-primary-btn w-full my-2">
                      <ExpandIcon />
                      View Details
                    </Button>
                  </div>
                  <div className="w-1/3">
                    <Button className="shad-secondary-btn w-full my-2">
                      <Edit />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Modal */}

      <CreateProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </div>
  )
}

export default Products