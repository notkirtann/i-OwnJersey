import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])
    
    if (!showSearch || !visible) {
        return null;
    }
    
  return (
    <div className='border-t-4 border-b-4 border-black bg-linear-to-r from-gray-50 to-white text-center py-6'>
      <div className='inline-flex items-center justify-center border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-6 py-3 my-3 mx-3 w-3/4 sm:w-1/2 bg-white'>
        <input 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)} 
          type="text" 
          placeholder='Search for jerseys, teams, players...' 
          className='flex-1 outline-none bg-inherit text-sm font-semibold placeholder:text-gray-500' 
        />
        <img className='w-5 opacity-60' src={assets.search_icon} alt="" />
      </div>
      <img 
        onClick={()=>setShowSearch(false)} 
        className='inline w-4 cursor-pointer hover:scale-110 transition-transform opacity-80 hover:opacity-100' 
        src={assets.cross_icon} 
        alt="" 
      />
    </div>
  )
}

export default SearchBar