import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../config'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-4 font-black text-2xl uppercase tracking-wider border-b-4 border-red-600 pb-2 inline-block'>All Products List</p>
      <div className='flex flex-col gap-3 font-sans text-gray-700'>

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-4 px-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm font-black uppercase tracking-wide'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-3 py-3 px-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all text-sm bg-white font-semibold' key={index}>
            <img className='w-14 h-14 object-cover border-2 border-black' src={item.image[0]} alt="" />
            <p className='font-bold'>{item.name}</p>
            <p className='uppercase tracking-wide'>{item.category}</p>
            <p className='text-red-600 font-black'>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-2xl text-red-600 hover:text-black font-black hover:scale-110 transition-all'>
              X
            </p>
          </div>
        ))}

      </div>
    </>
  )
}

export default List