import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black text-white mt-20'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 py-16 px-8 text-sm border-t-4 border-red-600'>
        <div>
          <img src={assets.logo} alt="" className='mb-5 w-36 invert' />
          <p className='w-full md:w-2/3 text-gray-300 leading-relaxed font-semibold'>
            i-OwnJersey is your ultimate destination for authentic sports apparel. We bring you premium jerseys, shorts, and gear from the world's top teams. Own your passion. Wear your legacy.
          </p>
        </div>

        <div>
          <p className='text-xl font-black mb-5 uppercase tracking-wider text-red-500'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-300 font-semibold'>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>Home</li>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>About Us</li>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>Delivery</li>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-black mb-5 uppercase tracking-wider text-red-500'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-300 font-semibold'>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>+91-00-0000-0000</li>
            <li className='hover:text-red-500 cursor-pointer transition-colors'>contact-support@iojersey.com</li>
          </ul>
        </div>
      </div>
      
      <div className='border-t-2 border-gray-800'>
        <p className='py-6 text-sm text-center font-bold text-gray-400 tracking-wide'>Copyright 2025 @ iojersey.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer