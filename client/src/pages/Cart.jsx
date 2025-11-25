import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData);
    }
  }, [cartItems, products])

  return (
    <div className='border-black pt-14'>

      <div className='text-2xl mb-6'>
        <div className='inline-flex gap-3 items-center'>
          <p className='text-black font-black text-3xl uppercase tracking-wider'>
            Your <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Cart</span>
          </p>
          <div className='w-16 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
        </div>
      </div>

      <div>
        {
          cartData.map((item, index) => {

            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-5 border-2 border-black mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 px-4 bg-white hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all'>
                <div className='flex items-start gap-6'>
                  <img className='w-20 sm:w-24 border-2 border-black' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-sm sm:text-lg font-black uppercase tracking-wide'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-3'>
                      <p className='font-black text-lg text-red-600'>{currency}{productData.price}</p>
                      <p className='px-3 py-1 border-2 border-black bg-gray-100 font-bold uppercase text-sm'>{item.size}</p>
                    </div>
                  </div>
                </div>
                
                {/* Quantity Input */}
                <input 
                  onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} 
                  className='border-2 border-black max-w-14 sm:max-w-24 px-2 sm:px-3 py-2 font-black text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                  type="number" 
                  min={1} 
                  defaultValue={item.quantity} 
                />
                
                {/* Delete Icon */}
                <img 
                  onClick={()=>updateQuantity(item._id,item.size,0)} 
                  className='w-6 mr-4 sm:w-7 cursor-pointer hover:scale-110 transition-transform' 
                  src={assets.bin_icon} 
                  alt="" 
                />
              </div>
            )

          })
        }
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
            <CartTotal />
            <div className='w-full text-end'>
                <button 
                  onClick={()=>navigate('/place-order')} 
                  className='bg-black text-white text-sm font-black uppercase tracking-wider my-8 px-10 py-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:bg-red-600 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all'
                >
                  Proceed to Checkout
                </button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Cart