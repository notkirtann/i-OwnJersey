import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const { products, currency } = useContext(ShopContext);

  return (
    <div className=' border-black pt-16'>

        <div className='text-2xl mb-8'>
            <div className='inline-flex gap-3 items-center'>
              <p className='text-black font-black text-3xl uppercase tracking-wider'>
                My <span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Orders</span>
              </p>
              <div className='w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500'></div>
            </div>
        </div>

        <div>
            {
                // Simulating orders from product slice
                products.slice(1, 4).map((item, index) => (
                    <div key={index} className='py-6 border-2 border-black mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 bg-white'>
                        <div className='flex items-start gap-6 text-sm'>
                            <img className='w-20 sm:w-24 border-2 border-black' src={item.image[0]} alt="" />
                            <div>
                                <p className='sm:text-base font-black uppercase tracking-wide'>{item.name}</p>
                                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                                    <p className='text-xl font-black text-red-600'>{currency}{item.price}</p>
                                    <p className='font-bold'>Quantity: 1</p>
                                    <p className='font-bold'>Size: M</p>
                                </div>
                                <p className='mt-3 font-semibold'>Date: <span className='text-gray-500'>25, Jul, 2024</span></p>
                            </div>
                        </div>
                        <div className='md:w-1/2 flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <p className='min-w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-[0_0_8px_rgba(34,197,94,0.6)]'></p>
                                <p className='text-sm md:text-base font-bold'>Ready to ship</p>
                            </div>
                            <button className='border-2 border-black px-6 py-2 text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] transition-all'>
                              Track Order
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
      
    </div>
  )
}

export default Orders