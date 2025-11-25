import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center justify-between py-3 px-[4%] bg-white border-b border-gray-200 sticky top-0 z-50'>
        {/* Logo */}
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="Admin Logo" />
        
        {/* Logout Button */}
        <button 
            onClick={() => setToken('')} 
            className='bg-black text-white px-5 py-2 sm:px-7 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200 ease-in-out'
        >
            Logout
        </button>
    </div>
  )
}

export default Navbar