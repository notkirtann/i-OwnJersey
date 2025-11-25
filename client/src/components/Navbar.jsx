import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible,setVisible ] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }
    
  return (
    <div className='flex items-center justify-between py-6 font-bold border-b-4 border-black mb-8 relative z-50'>

      <Link to='/'>
        <img src={assets.logo} alt='' className='w-40 hover:scale-105 transition-transform '/>
      </Link>
      
      <ul className='hidden sm:flex gap-8 text-sm text-black tracking-wider'>
        <NavLink to='/' className='flex flex-col items-center gap-1 uppercase hover:text-red-600 transition-colors'>
          <p>Home</p>
          <hr className='w-2/4 border-none h-[3px] bg-red-600 hidden'/>
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center gap-1 uppercase hover:text-red-600 transition-colors'>
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[3px] bg-red-600 hidden'/>
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1 uppercase hover:text-red-600 transition-colors'>
          <p>About</p>
          <hr className='w-2/4 border-none h-[3px] bg-red-600 hidden'/>
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1 uppercase hover:text-red-600 transition-colors'>
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[3px] bg-red-600 hidden'/>
        </NavLink>
      </ul>
      
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform' alt="" />
        
        <div className='group relative'>
            
              <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer hover:scale-110 transition-transform' alt="" />
            {/* //dropdown menu */}
            { token &&
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                <div className='flex flex-col gap-2 w-40 py-4 px-5 bg-black text-white shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] border-2 border-red-600'>
                    <p className='cursor-pointer hover:text-red-500 transition-colors uppercase text-sm font-bold'>My Profile</p>
                    <Link to='/orders'><p className='cursor-pointer hover:text-red-500 transition-colors uppercase text-sm font-bold'>Orders</p></Link>
                    <p onClick={logout} className='cursor-pointer hover:text-red-500 transition-colors uppercase text-sm font-bold'>Logout</p>
                </div>
            </div>
            }
        </div>
        
        <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-110 transition-transform' alt="" />
            <p className='absolute -right-2 -bottom-2 w-5 h-5 text-center leading-5 bg-red-600 text-white font-black rounded-full text-[10px] border-2 border-white shadow-md'>{getCartCount()}</p>
        </Link>
        
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:scale-110 transition-transform' alt="" />
      </div>
      
      {/*Sidebar for small screens*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-linear-to-b from-black to-gray-900 tracking-all transition-all duration-300 z-50 ${visible?'w-full':'w-0'}`}>
            <div className='flex flex-col text-white'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer hover:bg-red-600 transition-colors'>
                    <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="" />
                    <p className='font-bold uppercase tracking-wider'>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 transition-all font-bold uppercase tracking-wide' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 transition-all font-bold uppercase tracking-wide' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 transition-all font-bold uppercase tracking-wide' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 transition-all font-bold uppercase tracking-wide' to='/contact'>Contact</NavLink>
            </div>
      </div>
    </div>
  )
}

export default Navbar