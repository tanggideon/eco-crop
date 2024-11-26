import React from "react";
import Header from "../(components)/Header";
import Image from "next/image"

type ViewDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ViewDetailsModal = ({ isOpen, onClose }: ViewDetailsProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 p-20">
      <div className="relative top-20 mx-auto border w-96 xl:w-[1024px]  shadow-lg rounded-md bg-white p-10">
        <Header name="Supplier Details" />
        <hr />
        <div className="w-full h-full py-5 px-10">
          <div className="flex gap-10 m-5 w-full">
            <div className="">
            <Image src="/assets/path-cornfield-countryside.jpg" alt="crop photo" width={300} height={300}/>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-col items-start justify-start">
                <span className="text-md font-semibold text-gray-400">Supplier Name:</span>
                <h1 className="text-2xl font-semibold text-gray-700">Asuru Grace</h1>
              </div>
              <hr />
              <div className="flex flex-col items-start justify-start">
                <span className="text-md font-semibold text-gray-400">Email:</span>
                <h1 className="text-xl font-semibold text-gray-700">Asurugrace000@gmail.com</h1>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-md font-semibold text-gray-400">Telephone:</span>
                <h1 className="text-xl font-semibold text-gray-700">+233 201234567 / +233 591234567</h1>
              </div>
              <hr />
              {/* <div className="flex flex-col items-start justify-start">
                <span className="text-md font-semibold text-gray-400">Date Joined:</span>
                <h1 className="text-l font-semibold text-gray-700">November 30th, 2024</h1>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="text-md font-semibold text-gray-400">Number of Listed Products:</span>
                <h1 className="text-l font-semibold text-gray-700">7</h1>
              </div> */}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
