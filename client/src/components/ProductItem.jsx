import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
    
  return (
    <Link className='cursor-pointer flex flex-col gap-3 group' to={`/product/${id}`}>
      <div className='overflow-hidden w-full h-64 bg-gray-100 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] hover:border-red-400 transition-all duration-300'>
        <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out' src={image?.[0]} alt="" />
      </div>
      <div className='text-sm pt-2 pb-1'>
        <p className='font-black truncate block uppercase tracking-wide text-base group-hover:text-red-400 transition-colors'>{name}</p> 
        <p className='text-lg font-black mt-1 bg-linear-to-r from-red-400 to-orange-500 bg-clip-text text-transparent'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem