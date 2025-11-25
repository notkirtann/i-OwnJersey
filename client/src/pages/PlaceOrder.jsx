import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        // API Calls for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;

        // api for Stripe
        case 'stripe':
            toast.info("Stripe integration jald hi aayega");
            break;
        //api for razorpay
        case 'razorpay': 
            toast.info("Razorpay integration coming soon");
            break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const inputStyle = 'w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm';

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-12 pt-8 sm:pt-14 min-h-[80vh] border-t border-gray-200 mx-30'>
      
      {/* ------------- Left Side: Delivery Information ---------------- */}
      <div className='flex flex-col gap-6 w-full sm:max-w-[480px]'>
        
        <div className='text-2xl sm:text-3xl font-bold text-gray-800 mb-2'>
            Delivery Information
        </div>
        
        <div className='flex gap-4'>
          <input required name='firstName' onChange={onChangeHandler} value={formData.firstName} className={inputStyle} type="text" placeholder='First name' />
          <input required name='lastName' onChange={onChangeHandler} value={formData.lastName} className={inputStyle} type="text" placeholder='Last name' />
        </div>
        
        <input required name='email' onChange={onChangeHandler} value={formData.email} className={inputStyle} type="email" placeholder='Email address' />
        <input required name='street' onChange={onChangeHandler} value={formData.street} className={inputStyle} type="text" placeholder='Street' />
        
        <div className='flex gap-4'>
          <input required name='city' onChange={onChangeHandler} value={formData.city} className={inputStyle} type="text" placeholder='City' />
          <input required name='state' onChange={onChangeHandler} value={formData.state} className={inputStyle} type="text" placeholder='State' />
        </div>
        
        <div className='flex gap-4'>
          <input required name='zipcode' onChange={onChangeHandler} value={formData.zipcode} className={inputStyle} type="number" placeholder='Zipcode' />
          <input required name='country' onChange={onChangeHandler} value={formData.country} className={inputStyle} type="text" placeholder='Country' />
        </div>
        
        <input required name='phone' onChange={onChangeHandler} value={formData.phone} className={inputStyle} type="number" placeholder='Phone' />
      </div>

      {/* ------------- Right Side: Cart Totals & Payment ---------------- */}
      <div className='mt-8 w-full sm:max-w-[480px]'>
        
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <div className='text-xl font-bold text-gray-800 mb-6 uppercase'>
            Payment Method
          </div>
          
          {/* Payment Method Selection */}
          <div className='flex gap-4 flex-col lg:flex-row'>
            
            {/* Stripe */}
            <div onClick={()=>setMethod('stripe')} className={`flex items-center gap-3 border rounded-lg p-3 px-4 cursor-pointer transition-all hover:shadow-md ${method === 'stripe' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'stripe' ? 'border-red-500' : 'border-gray-400'}`}>
                 {method === 'stripe' && <div className='w-2.5 h-2.5 bg-red-500 rounded-full'></div>}
              </div>
              <img className='h-5 mx-2 object-contain' src={assets.stripe_logo} alt="Stripe" />
            </div>

            {/* Razorpay */}
            <div onClick={()=>setMethod('razorpay')} className={`flex items-center gap-3 border rounded-lg p-3 px-4 cursor-pointer transition-all hover:shadow-md ${method === 'razorpay' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'razorpay' ? 'border-red-500' : 'border-gray-400'}`}>
                    {method === 'razorpay' && <div className='w-2.5 h-2.5 bg-red-500 rounded-full'></div>}
                </div>
              <img className='h-5 mx-2 object-contain' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            {/* Cash on Delivery */}
            <div onClick={()=>setMethod('cod')} className={`flex items-center gap-3 border rounded-lg p-3 px-4 cursor-pointer transition-all hover:shadow-md ${method === 'cod' ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-white'}`}>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${method === 'cod' ? 'border-red-500' : 'border-gray-400'}`}>
                    {method === 'cod' && <div className='w-2.5 h-2.5 bg-red-500 rounded-full'></div>}
                </div>
              <p className='text-gray-700 text-sm font-semibold mx-2 uppercase tracking-wide whitespace-nowrap'>C.O.D</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='w-full sm:w-auto bg-black text-white px-10 py-3.5 rounded-lg font-bold shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide'>
              Place Order
            </button>
          </div>

        </div>
      </div>

    </form>
  )
}

export default PlaceOrder