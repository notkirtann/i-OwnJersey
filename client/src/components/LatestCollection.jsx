import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProduct,setLatestProduct]=useState([]);

    useEffect(()=>{
      setLatestProduct(products.slice(0,10));
    },[products])

  return (
    <div className='my-16 mx-4 py-12 bg-linear-to-b from-white to-gray-50'>
      <div className='text-center py-8 text-3xl'>
        <div className='inline-flex gap-3 items-center mb-6'>
          <div className='w-12 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
          <p className='text-black font-black text-4xl uppercase tracking-wider'>
            Latest <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Collection</span>
          </p>
          <div className='w-12 h-1 bg-linear-to-r from-orange-500 to-red-600'></div>
        </div>
        <p className='w-3/4 m-auto text-base text-gray-600 font-semibold max-w-2xl leading-relaxed'>
          Unleash your inner champion with our premium sports jerseys. Authentic quality meets unbeatable style.
        </p>
      </div>
      
      {/* Rendering Products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8 px-4' >
        {latestProduct.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price ={item.price} />
        ))}
      </div>

    </div>
  )
}

export default LatestCollection