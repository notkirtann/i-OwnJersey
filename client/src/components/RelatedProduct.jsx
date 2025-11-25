import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if (products.length > 0 && category && subCategory) {
            let productsCopy = products.slice();
            
            // same category
            productsCopy = productsCopy.filter((item) => category === item.category);
            
            // same subCategory
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            // top 5 related items
            setRelated(productsCopy.slice(0,5));
        }
    },[products, category, subCategory])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-6'>
            <div className='inline-flex gap-3 items-center mb-6'>
              <div className='w-12 h-1 bg-gradient-to-r from-red-600 to-orange-500'></div>
              <p className='text-black font-black text-4xl uppercase tracking-wider'>
                Related <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Products</span>
              </p>
              <div className='w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600'></div>
            </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-8'>
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            ))}
        </div>
    </div>
  )
}

export default RelatedProducts