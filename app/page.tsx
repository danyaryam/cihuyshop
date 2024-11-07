"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

import Categories from "./Category/Categories";
import SliderBanner from "./components/SliderBanner";
import Image from 'next/image';

import box from './src/images/box.png'
import coin from './src/images/coin.png'
import policy from './src/images/policy.png'
import Sale from './components/sale/Sale';
import DiscountBanner from './components/sale/DiscountBanner';

export default function Home() {
  const router = useRouter()

  const handleAllCategoriesClick = () => {
    router.push('/Category')
  }

  const handleAllSalesClick = () => {
    router.push('/components/sales')
  }

  return (
    <div>

      <SliderBanner />

      <div className="w-full my-8 px-8 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Category</h1>
          <button onClick={handleAllCategoriesClick} className="text-green-600 hover:text-green-800 flex items-center justify-start">
            <span className="text-lg">See All</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <Categories />
      </div>

      <div className="w-full my-8 px-8 mx-auto">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold text-gray-800">Clearance Sale</h1>
          <button onClick={handleAllSalesClick} className="text-green-600 hover:text-green-800 flex items-center justify-start">
            <span className="text-lg">See All</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <Sale />
      </div>

      {/* banner discount */}
      <DiscountBanner />

      {/* popular product */}

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-8 py-6 bg-gray-300 text-center">
        <div className="flex flex-col items-center max-w-xs">
          <Image
            src={box}
            alt="box"
            width={50}
            height={50}
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">Free Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">And every existing order gets Free Delivery, especially small scale orders</p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <Image
            src={coin}
            alt="coin"
            width={50}
            height={50}
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">Pay monthly at 0% APR</h2>
          <p className="mt-2 text-sm text-gray-600">Choice payments and checks via card or pay monthly</p>
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <Image
            src={policy}
            alt="policy"
            width={50}
            height={50}
          />
          <h2 className="mt-4 text-lg font-semibold text-gray-800">Safe Delivery</h2>
          <p className="mt-2 text-sm text-gray-600">We ensure that every delivery has no external or internal damage</p>
        </div>
      </div>
    </div>
  );
}
