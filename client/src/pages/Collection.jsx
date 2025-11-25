import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products, search, showSearch } = useContext(ShopContext);
  
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => (a.price - b.price));
        break;
      case 'high-low':
        productsCopy.sort((a, b) => (b.price - a.price));
        break;
      default:
        break;
    }

    setFilterProducts(productsCopy);
  }

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products,sortType,search,showSearch,products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-black pt-8'>
      {/*Filter Options */}
      <div className='min-w-64'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 font-black uppercase tracking-wider hover:text-red-600 transition-colors'>
          Filter
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        
        {/**Category */}
        <div className={`border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white pl-5 py-5 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-black uppercase tracking-wider'>Category</p>
          <div className='flex flex-col gap-3 text-sm font-bold text-gray-700'>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Men'} className='w-4 h-4 accent-red-600' onChange={toggleCategory} /> Men
            </label>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Women'} className='w-4 h-4 accent-red-600' onChange={toggleCategory} /> Women
            </label>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Kids'} className='w-4 h-4 accent-red-600' onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>
        
        {/*SubCategory Filter */}
        <div className={`border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white pl-5 py-5 my-5 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-black uppercase tracking-wider'>Type</p>
          <div className='flex flex-col gap-3 text-sm font-bold text-gray-700'>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Jersey'} className='w-4 h-4 accent-red-600' onChange={toggleSubCategory} /> Jersey
            </label>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Shorts'} className='w-4 h-4 accent-red-600' onChange={toggleSubCategory} /> Shorts
            </label>
            <label className='flex gap-3 items-center cursor-pointer hover:text-red-600 transition-colors'>
              <input type="checkbox" value={'Studs'} className='w-4 h-4 accent-red-600' onChange={toggleSubCategory} /> Studs
            </label>
          </div>
        </div>
      </div>

      {/*Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-6'>
          <div className='inline-flex gap-3 items-center'>
            <p className='text-black font-black text-2xl uppercase tracking-wider'>
              All <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Collections</span>
            </p>
          </div>
          
          {/**PRODUCT SORT */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-black text-sm px-4 py-2 font-bold bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all cursor-pointer uppercase' >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        
        {/**Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8'>
          {
            filterProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price ={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection