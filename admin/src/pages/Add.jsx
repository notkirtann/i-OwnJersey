import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { backendUrl } from '../App'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Jersey");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setSizes([])
        setBestseller(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-[0px_10px_30px_rgba(0,0,0,0.1)] border border-gray-100">
      
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2>
        <p className="text-gray-500 text-sm">Fill in the details to list a new jersey.</p>
      </div>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-6'>

        {/* Image Upload Section */}
        <div>
          <p className='mb-3 font-semibold text-gray-700'>Upload Images</p>
          <div className='flex gap-4'>
            {[image1, image2, image3, image4].map((img, index) => {
              const setImg = [setImage1, setImage2, setImage3, setImage4][index];
              return (
                <label key={index} htmlFor={`image${index + 1}`} className='group cursor-pointer'>
                  <div className={`w-24 h-24 flex items-center justify-center rounded-lg border-2 ${!img ? 'border-dashed border-gray-300 bg-gray-50' : 'border-solid border-red-500'} overflow-hidden hover:border-red-400 transition-all`}>
                    <img 
                      className={`object-cover ${!img ? 'w-8 opacity-50' : 'w-full h-full'}`} 
                      src={!img ? assets.upload_area : URL.createObjectURL(img)} 
                      alt="" 
                    />
                  </div>
                  <input onChange={(e) => setImg(e.target.files[0])} type="file" id={`image${index + 1}`} hidden />
                </label>
              )
            })}
          </div>
        </div>

        {/* Product Name */}
        <div className='w-full'>
          <p className='mb-2 font-semibold text-gray-700'>Product Name</p>
          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            className='w-full max-w-lg px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm' 
            type="text" 
            placeholder='e.g. Manchester United Home Kit' 
            required 
          />
        </div>

        {/* Product Description */}
        <div className='w-full'>
          <p className='mb-2 font-semibold text-gray-700'>Description</p>
          <textarea 
            onChange={(e) => setDescription(e.target.value)} 
            value={description} 
            className='w-full max-w-lg px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm min-h-[120px] resize-none' 
            placeholder='Describe the fabric, fit, and features...' 
            required 
          />
        </div>

        {/* Category, SubCategory, Price Row */}
        <div className='flex flex-col sm:flex-row gap-6 w-full'>
          <div className='flex-1 max-w-[200px]'>
            <p className='mb-2 font-semibold text-gray-700'>Category</p>
            <div className="relative">
                <select onChange={(e) => setCategory(e.target.value)} className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 cursor-pointer shadow-sm appearance-none'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
                </select>
            </div>
          </div>

          <div className='flex-1 max-w-[200px]'>
            <p className='mb-2 font-semibold text-gray-700'>Sub Category</p>
            <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 cursor-pointer shadow-sm appearance-none'>
              <option value="Jersey">Jersey</option>
              <option value="Shorts">Shorts</option>
              <option value="Studs">Studs</option>
            </select>
          </div>

          <div className='flex-1 max-w-[200px]'>
            <p className='mb-2 font-semibold text-gray-700'>Price (₹)</p>
            <input 
              onChange={(e) => setPrice(e.target.value)} 
              value={price} 
              className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all shadow-sm' 
              type="number" 
              placeholder='2500' 
            />
          </div>
        </div>

        {/* Product Sizes */}
        <div>
          <p className='mb-3 font-semibold text-gray-700'>Available Sizes</p>
          <div className='flex gap-3'>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
               <div key={size} onClick={() => setSizes(prev => prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size])}>
               <p className={`w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer font-bold transition-all shadow-sm border ${sizes.includes(size) ? "bg-red-500 text-white border-red-500 shadow-[0px_4px_10px_rgba(239,68,68,0.4)]" : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"}`}>
                 {size}
               </p>
             </div>
            ))}
          </div>
        </div>

        {/* Bestseller Checkbox */}
        <div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg w-max border border-gray-200'>
          <input 
            onChange={() => setBestseller(prev => !prev)} 
            checked={bestseller} 
            type="checkbox" 
            id="bestseller" 
            className='w-5 h-5 accent-red-600 cursor-pointer rounded' 
          />
          <label className='cursor-pointer text-gray-700 font-medium' htmlFor="bestseller">Mark as Bestseller</label>
        </div>

        {/* Submit Button */}
        <button 
            type="submit" 
            className='w-full sm:w-48 py-3 px-8 mt-4 bg-black text-white font-bold rounded-lg shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-200'
        >
            ADD PRODUCT
        </button>

      </form>
    </div>
  )
}

export default Add