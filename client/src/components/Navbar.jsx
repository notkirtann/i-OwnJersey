import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

export const adminPanelUrl = import.meta.env.VITE_ADMIN_URL;

const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => { navigate('/login'); localStorage.removeItem('token'); setToken(''); setCartItems({}) }

  

  return (
    <div className='flex items-center justify-between py-4 font-bold border-b-2 border-black mb-8 relative z-50 mx-10'>
      
      <Link to='/'><img src={assets.logo} className='w-40 hover:scale-105 transition' /></Link>

      <ul className='hidden sm:flex gap-8 text-sm tracking-wider'>
        <NavLink to='/' className='flex flex-col items-center gap-1 uppercase hover:text-red-600'><p>Home</p></NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 uppercase hover:text-red-600'><p>Collection</p></NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1 uppercase hover:text-red-600'><p>About</p></NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 uppercase hover:text-red-600'><p>Contact</p></NavLink>
        {!token && (
          <a 
            href={adminPanelUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex flex-col items-center gap-1 uppercase hover:text-blue-600 text-white border-black border-2 rounded-4xl px-2 bg-black'
          >
            <p>Admin</p>
          </a>
        )}      
      
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-110 transition' />

        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer hover:scale-110 transition' />

          {token &&
            <div className='group-hover:block hidden absolute right-0 pt-4 z-50'>
              <div className='flex flex-col gap-2 w-40 py-4 px-5 bg-black text-white shadow-[4px_4px_0px_rgba(220,38,38,1)] border-2 border-red-600'>
                <p className='cursor-pointer hover:text-red-500 uppercase text-sm' onClick={() => navigate('/profile')}>My Profile</p>
                <Link to='/orders'><p className='cursor-pointer hover:text-red-500 uppercase text-sm'>Orders</p></Link>
                <p className='cursor-pointer hover:text-red-500 uppercase text-sm' onClick={logout}>Logout</p>
              </div>
            </div>}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 hover:scale-110 transition' />
          <p className='absolute -right-2 -bottom-2 w-5 h-5 text-center leading-5 bg-red-600 text-white font-black rounded-full text-[10px] border-2 border-white'>{getCartCount()}</p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:scale-110 transition' />
      </div>

      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setVisible(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-linear-to-b from-black to-gray-900 text-white z-50 transition-transform duration-300 ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer hover:bg-red-600'>
          <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} /><p className='font-bold uppercase'>Back</p>
        </div>

        <div className='flex flex-col'>
          <NavLink onClick={() => setVisible(false)} to='/' className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 uppercase font-bold'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/collection' className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 uppercase font-bold'>Collection</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/about' className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 uppercase font-bold'>About</NavLink>
          <NavLink onClick={() => setVisible(false)} to='/contact' className='py-3 pl-8 border-b border-gray-700 hover:bg-red-600 hover:pl-12 uppercase font-bold'>Contact</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar
