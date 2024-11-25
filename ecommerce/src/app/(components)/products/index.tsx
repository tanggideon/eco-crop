import { ExpandIcon, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'


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
      imageURL: "/assets/cassava-roots-sliced.jpg"
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
    {
      id: 6,
      name: "Brown Eggs",
      quantity: 20,
      measurement: "crates",
      supplier: "Majesty Farms",
      price: 12.5,
      imageURL: "/assets/eggs.jpg"
    },
    {
      id: 7,
      name: "Sweet Potatoes",
      quantity: 250,
      measurement: "kg",
      supplier: "Majesty Farms",
      price: 12.5,
      imageURL: "/assets/potatoes-basket.jpg"
    },
  ]

const Products = () => {
  return (
    <div className="w-full h-full flex flex-col gap-1">
        <h1 className="text-xl font-semibold text-gray-700 my-2">Browse Farm Produce</h1>
        <hr />
        <div className="h-[300px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-between mt-5 overflow-y-scroll px-2">
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
                  <div className="w-full">
                    <Button className="shad-secondary-btn w-full my-2">
                      <ShoppingCartIcon />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Products