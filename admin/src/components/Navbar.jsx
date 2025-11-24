import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%] font-sans border-b border-gray-300'>
        {/* Logo */}
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="Admin Logo" />
        
        {/* Logout Button */}
        <button 
            onClick={() => setToken('')} 
            className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition-colors cursor-pointer'
        >
            Logout
        </button>
    </div>
  )
}

export default Navbar