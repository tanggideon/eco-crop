import React from 'react'
import Header from '../(components)/Header';


type ViewDetailsProps = {
    isOpen: boolean;
    onClose: () => void;
}

const ViewDetailsModal = ({isOpen, onClose}: ViewDetailsProps) => {
    if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20 p-20">
        <div className='relative top-20 mx-auto border w-96 xl:w-[1024px]  shadow-lg rounded-md bg-white p-10' >
            <Header name="Supplier Details"/>
        </div>
        
    </div>
  )
}

export default ViewDetailsModal