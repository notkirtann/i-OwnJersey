import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2 border-gray-200 font-sans'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            
            {/* Add Items Link */}
            <NavLink to='/add' className={ `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l `}>
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Add Items</p>
            </NavLink>

            {/* List Items Link */}
            <NavLink to='/list' className={ `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l `}>
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>List Items</p>
            </NavLink>

            {/* Orders Link */}
            <NavLink to='/orders' className={ `flex items-center gap-3 border border-r-0 px-3 py-2 rounded-l `}>
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>

        </div>
    </div>
  )
}

export default Sidebar