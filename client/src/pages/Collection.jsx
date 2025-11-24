import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const {products, search, showSearch } = useContext(ShopContext);
  
  const [showFilter,setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([]);
  // states for storing selected filters
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  //sorting
  const [sortType, setSortType] = useState('relevant')

  // logic to toggle Category selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      // If already exists, remove it
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      // If doesn't exist, add it
      setCategory(prev => [...prev, e.target.value])
    }
  }

  // logic to toggle SubCategory (Type) selection
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  // function to apply the filters
  const applyFilter = () => {
    // Create a copy of the original products array
    let productsCopy = products.slice();

    // addes search Logic 
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Filter by Category if any are selected
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    // Filter by SubCategory if any are selected
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    //Apply Sort
    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => (a.price - b.price));
        break;
      case 'high-low':
        productsCopy.sort((a, b) => (b.price - a.price));
        break;
      default:
        // 'relevant' keeps the original order (no sorting needed)
        break;
    }

    // Update the state
    setFilterProducts(productsCopy);
  }

  // 5. Run applyFilter whenever products, category, or subCategory state changes
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products,sortType,search,showSearch,products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t'>
      {/*Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
        </p>
        {/**Category */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Men'} className='w-3' onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Women'} className='w-3' onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Kids'} className='w-3' onChange={toggleCategory} /> Kids
            </p>
          </div>
        </div>
        {/*SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Jersey'} className='w-3' onChange={toggleSubCategory} /> Jersey
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Shorts'} className='w-3' onChange={toggleSubCategory} /> Shorts
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Studs'} className='w-3' onChange={toggleSubCategory} /> Studs
            </p>
          </div>
        </div>
      </div>

      {/*Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/**PRODUCT SORT */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2' >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/**Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
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
