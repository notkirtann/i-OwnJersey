import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer flex flex-col gap-2' to={`/product/${id}`}>
      <div className='overflow-hidden w-full h-64 bg-gray-100 rounded-md'>
        <img className='hover:scale-110 transition ease-in-out' src={image?.[0]} alt="" />
      </div>
      <div className='text-sm pt-2 pb-1'>
        {/* truncate: Cuts off long text with "..." to keep height even */}
        <p className='font-medium truncate block'>{name}</p> 
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
