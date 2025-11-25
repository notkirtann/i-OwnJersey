import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const[bestseller,setBestSeller] = useState([]);
  
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])
  
    return (
    <div className='my-10 py-6 bg-linear-to-br from-gray-900 via-gray-800 to-black text-white mx-10'>
        <div className='text-center text-3xl py-8'>
            <div className='inline-flex gap-3 items-center mb-6'>
              <div className='w-12 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
              <p className='font-black text-4xl uppercase tracking-wider'>
                Best <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Sellers</span>
              </p>
              <div className='w-12 h-1 bg-linear-to-r from-orange-500 to-red-600'></div>
            </div>
            <p className='w-3/4 m-auto text-base text-gray-300 font-semibold max-w-2xl leading-relaxed'>
              Fan favorites. Championship quality. The jerseys that legends are made of.
            </p>
        </div> 
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8 px-4'>
            {bestseller.map((item,index)=>(
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price ={item.price} />
            ))}
        </div>
    </div>
  )
}

export default BestSeller