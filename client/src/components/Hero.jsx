import React from 'react'
import { assets } from '../assets/assets'
import {Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10 relative z-0'>

      {/*Hero left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-16 sm:py-0 bg-linear-to-br from-gray-900 via-gray-800 to-black'>
        <div className='text-white px-8'>
            <div className='flex items-center gap-3 mb-6'>
                <p className='w-12 md:w-16 h-1 bg-linear-to-r from-red-600 to-orange-500'></p>
                <p className='font-black text-sm md:text-base tracking-widest uppercase'>Our Bestsellers</p>
            </div>
            <h1 className='prata-regular text-4xl sm:py-4 lg:text-6xl leading-tight font-black uppercase bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent'>
              Latest Arrivals
            </h1>
            <p className='text-gray-300 text-sm md:text-base mb-6 mt-4 max-w-md'>
              Own the pitch. Dominate the game. Premium jerseys for champions.
            </p>
            <div className='flex items-center gap-3 group cursor-pointer'>
              <Link to='/collection'>
              <p className='font-bold text-base md:text-lg tracking-wide uppercase hover:text-red-500 transition-colors'>Shop Now</p>
              </Link>  
                <div className='w-10 md:w-14 h-0.5 bg-linear-to-r from-red-600 to-orange-500 group-hover:w-20 transition-all duration-300'></div>
            </div>
        </div>
      </div>
      {/*Hero Right Side */}
      <img className='w-full sm:w-1/2 object-cover h-80 sm:h-[500px] grayscale-20 hover:grayscale-0 transition-all duration-500' src={assets.hero_img} alt="" />
    </div>
  )
}

export default Hero