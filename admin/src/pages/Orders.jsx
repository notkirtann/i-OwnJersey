import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
const currency = "$";

const Orders = ({ token }) => {

  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token])

  return (
    <div>
      <h3 className='mb-6 font-black text-2xl uppercase tracking-wider border-b-4 border-red-600 pb-2 inline-block'>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all p-6 md:p-8 my-4 text-xs sm:text-sm text-gray-700 font-sans bg-white' key={index}>
            
            {/* Order Icon */}
            <img className='w-14' src={assets.parcel_icon} alt="Parcel" />
            
            {/* Order Items & Address */}
            <div>
              <div className='font-semibold'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span className='font-black'> {item.size} </span> </p>
                  } else {
                    return <p className='py-0.5' key={index}> {item.name} x {item.quantity} <span className='font-black'> {item.size} </span> ,</p>
                  }
                })}
              </div>
              <p className='mt-3 mb-2 font-black uppercase tracking-wide'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='font-semibold'>
                <p>{order.address.street + ","}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              </div>
              <p className='font-bold mt-2'>{order.address.phone}</p>
            </div>

            {/* Order Info */}
            <div className='font-bold'>
              <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
              <p className='mt-3'>Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>

            {/* Price */}
            <p className='text-sm sm:text-[15px] font-black text-red-600'>{currency}{order.amount}</p>

            {/* Status Dropdown */}
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className='p-3 font-black border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer uppercase tracking-wide text-sm hover:border-red-600 transition-colors'>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders 