import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh]  border-black'>
      
      {/* ------------- Left Side: Delivery Information ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        
        <div className='text-xl sm:text-2xl my-3'>
          <div className='inline-flex gap-3 items-center'>
            <p className='text-black font-black text-3xl uppercase tracking-wider'>
              Delivery <span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Information</span>
            </p>
          </div>
        </div>
        
        <div className='flex gap-3'>
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='First name' />
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='Last name' />
        </div>
        
        <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="email" placeholder='Email address' />
        <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='Street' />
        
        <div className='flex gap-3'>
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='City' />
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='State' />
        </div>
        
        <div className='flex gap-3'>
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="number" placeholder='Zipcode' />
          <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="text" placeholder='Country' />
        </div>
        
        <input className='border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-2 px-4 w-full font-semibold focus:border-red-600 focus:outline-none transition-colors' type="number" placeholder='Phone' />
      </div>

      {/* ------------- Right Side: Cart Totals & Payment ---------------- */}
      <div className='mt-8'>
        
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <div className='inline-flex gap-3 items-center mb-6'>
            <p className='text-black font-black text-3xl uppercase tracking-wider'>
              Payment <span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Method</span>
            </p>
          </div>
          
          {/* Payment Method Selection */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            
            {/* Stripe */}
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all p-3 px-4 cursor-pointer bg-white'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'stripe' ? 'bg-red-600' : 'bg-white'}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>

            {/* Razorpay */}
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all p-3 px-4 cursor-pointer bg-white'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'razorpay' ? 'bg-red-600' : 'bg-white'}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>

            {/* Cash on Delivery */}
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all p-3 px-4 cursor-pointer bg-white'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'cod' ? 'bg-red-600' : 'bg-white'}`}></p>
              <p className='text-gray-700 text-sm font-black mx-4 uppercase tracking-wider'>Cash on Delivery</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-4 text-sm font-black uppercase tracking-wider border-2 border-black shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:bg-red-600 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all'>
              Place Order
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default PlaceOrder