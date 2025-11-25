import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useEffect } from 'react';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProduct'

const Product = () => {
  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item);
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='border-black pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2'>
            {
              productData.image.map((item,index)=>(
                <img 
                  onClick={()=>setImage(item)} 
                  src={item} 
                  key={index} 
                  className='w-[24%] sm:w-full sm:mb-3 shrink-0 cursor-pointer border-2 border-black hover:border-red-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                  alt="" 
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' src={image} alt="" />
          </div>
        </div>
        
        {/**Product Info */}
        <div className='flex-1'>
            <h1 className='font-black text-3xl mt-2 uppercase tracking-wide'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-3'>
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4" />
              <p className='pl-2 font-bold text-gray-600'>(122)</p>
            </div>
            <p className='mt-5 text-4xl font-black bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-700 md:w-4/5 leading-relaxed font-semibold'>{productData.description}</p>
            
            <div className='flex flex-col gap-4 my-8'>
              <p className='font-black uppercase tracking-wider text-lg'>Select Size</p>
              <div className='flex gap-3'>
                {productData.sizes.map((item,index)=>(
                  <button 
                    onClick={() => setSize(item)} 
                    className={`border-2 border-black py-3 px-6 font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${item === size ? 'bg-red-600 text-white border-red-600 shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]' : 'bg-white hover:bg-gray-100'}`} 
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={()=>addToCart(productData._id,size)} 
              className='bg-black text-white px-10 py-4 text-base font-black uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:bg-red-600 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all'
            >
              Add to Cart
            </button>
          
          <hr className='mt-8 sm:w-4/5 border-2 border-gray-300' />
          
          <div className='text-sm text-gray-700 mt-6 flex flex-col gap-2 font-semibold'>
            <p>✓ 100% Original product.</p>
            <p>✓ Cash on delivery is available on this product.</p>
            <p>✓ Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      
      {/* Description & Review Section */}
      <div className='mt-20 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'>
        <div className='flex'>
          <b className='border-b-4 border-black px-6 py-4 text-base font-black uppercase tracking-wider bg-red-600 text-white'>Description</b>
          <p className='border-b-4 border-black px-6 py-4 text-base font-black uppercase tracking-wider bg-white hover:bg-gray-100 cursor-pointer transition-colors'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-8 py-8 text-sm text-gray-700 bg-white font-semibold leading-relaxed'>
          <p>An authentic jersey that represents your passion for the game. Our premium sports apparel is designed for true fans who demand quality and style. Whether you're at the stadium or on the streets, wear your colors with pride.</p>
          <p>Each product features detailed team branding, official logos, and authentic colors. Available in multiple sizes with a comfortable athletic fit designed for both performance and everyday wear.</p>
        </div>
      </div>
      
      {/*related product */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product