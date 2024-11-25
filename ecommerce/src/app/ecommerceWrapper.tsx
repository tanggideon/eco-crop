"use client"

import React, { useEffect } from 'react'
import StoreProvider, { useAppSelector } from './redux'
import Header from './(components)/header'
import Footer from './(components)/footer'
import Categories from './(components)/category'


type Props = {}


const EcommerceWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <div className={"light bg-gray-50 text-gray-900 w-full "}>
                <Header />
                
                    <main className="flex w-full h-full py-7 bg-gray-50"> 
                        <Categories />
                        {children}
                    </main>
                <Footer />
            </div>
        </StoreProvider>
    )
}

export default EcommerceWrapper