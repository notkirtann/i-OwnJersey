import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white sticky top-0 left-0'>
        <div className='flex flex-col gap-4 pt-10 pl-[15%] text-[15px]'>
            
            {/* Add Items Link */}
            <NavLink 
              to='/add' 
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-l-full transition-all duration-200
                ${isActive 
                  ? 'bg-red-50 text-red-600 border-r-4 border-red-600 font-bold shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black border-r-4 border-transparent'}
              `}
            >
                <img className='w-5 h-5 object-contain' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            {/* List Items Link */}
            <NavLink 
              to='/list' 
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-l-full transition-all duration-200
                ${isActive 
                  ? 'bg-red-50 text-red-600 border-r-4 border-red-600 font-bold shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black border-r-4 border-transparent'}
              `}
            >
                <img className='w-5 h-5 object-contain' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            {/* Orders Link */}
            <NavLink 
              to='/orders' 
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-l-full transition-all duration-200
                ${isActive 
                  ? 'bg-red-50 text-red-600 border-r-4 border-red-600 font-bold shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black border-r-4 border-transparent'}
              `}
            >
                <img className='w-5 h-5 object-contain' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar