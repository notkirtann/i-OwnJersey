import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-black'>
          <div className='inline-flex gap-3 items-center mb-6'>
            <p className='text-black font-black text-4xl uppercase tracking-wider'>
              Contact <span className='bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Us</span>
            </p>
            <div className='w-16 h-1 bg-gradient-to-r from-red-600 to-orange-500'></div>
          </div>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' style={{backgroundSize:'cover'}} src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-black text-2xl text-gray-900 uppercase tracking-wider border-l-4 border-red-600 pl-4'>Our Store</p>
          <p className='text-gray-700 font-semibold leading-relaxed'>2 Floor, MFAR SilverLine Tech Park, <br /> WhiteField, Bangalore, KA</p>
          <p className='text-gray-700 font-semibold leading-relaxed'>Tel: +91 92-6262-1762 <br /> Email: admin@iojersey.com</p>
          
          <p className='font-black text-2xl text-gray-900 uppercase tracking-wider border-l-4 border-red-600 pl-4 mt-4'>Careers at iOwnJerseys</p>
          <p className='text-gray-700 font-semibold leading-relaxed'>Learn more about our teams and job openings. Join the championship squad.</p>
          
          <button className='border-2 border-black bg-white px-10 py-4 text-sm font-black uppercase tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-red-600 hover:text-white hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] transition-all'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default Contact