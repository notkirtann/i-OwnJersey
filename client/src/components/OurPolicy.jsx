import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div className='group hover:scale-105 transition-transform'>
        <div className='w-16 h-16 mx-auto mb-5 flex items-center justify-center border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:bg-red-600 group-hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-all'>
          <img src={assets.exchange_icon} className='w-10' alt="" />
        </div>
        <p className='font-black uppercase tracking-wider text-lg mb-2'>Easy Exchange</p>
        <p className='text-gray-600 font-semibold'>Hassle-free exchange policy. No questions asked.</p>
      </div>
      
      <div className='group hover:scale-105 transition-transform'>
        <div className='w-16 h-16 mx-auto mb-5 flex items-center justify-center border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:bg-red-600 group-hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-all'>
          <img src={assets.quality_icon} className='w-10' alt="" />
        </div>
        <p className='font-black uppercase tracking-wider text-lg mb-2'>7 Days Return</p>
        <p className='text-gray-600 font-semibold'>Free return policy within 7 days. Your satisfaction guaranteed.</p>
      </div>
      
      <div className='group hover:scale-105 transition-transform'>
        <div className='w-16 h-16 mx-auto mb-5 flex items-center justify-center border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:bg-red-600 group-hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-all'>
          <img src={assets.support_img} className='w-10' alt="" />
        </div>
        <p className='font-black uppercase tracking-wider text-lg mb-2'>Best Support</p>
        <p className='text-gray-600 font-semibold'>24/7 championship customer support at your service.</p>
      </div>
      
    </div>
  )
}

export default OurPolicy