import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-6'>
        <div className='text-2xl mb-6'>
            <div className='inline-flex gap-3 items-center'>
              <p className='text-black font-black text-2xl uppercase tracking-wider'>
                Cart <span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Totals</span>
              </p>
            </div>
        </div>

        <div className='flex flex-col gap-3 mt-2 text-sm font-bold'>
            <div className='flex justify-between py-2 border-b-2 border-gray-300'>
                <p className='uppercase tracking-wide'>Subtotal</p>
                <p className='text-red-600'>{currency} {getCartAmount()}.00</p>
            </div>
            <div className='flex justify-between py-2 border-b-2 border-gray-300'>
                <p className='uppercase tracking-wide'>Shipping Fee</p>
                <p className='text-red-600'>{currency} {delivery_fee}.00</p>
            </div>
            <div className='flex justify-between py-3 border-t-4 border-black mt-2'>
                <b className='uppercase tracking-wide text-lg'>Total</b>
                <b className='text-red-600 text-lg'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal