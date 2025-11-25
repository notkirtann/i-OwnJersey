import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-10 border-black'>
          <div className='inline-flex gap-3 items-center mb-6'>
            <p className='text-black font-black text-4xl uppercase tracking-wider'>
              About <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Us</span>
            </p>
            <div className='w-16 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
          </div>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
              <p className='font-semibold leading-relaxed'>iOwnJerseys was born out of a passion for sports and a desire to revolutionize the way fans connect with their favorite teams. Our journey began with a simple idea: to provide authentic, high-quality sports apparel that lets you wear your passion with pride.</p>
              <p className='font-semibold leading-relaxed'>Since our inception, we've worked tirelessly to curate a diverse selection of premium jerseys, shorts, and sports gear sourced directly from official manufacturers. From legendary clubs to rising stars, we offer an extensive collection for true champions.</p>
              <b className='text-gray-900 text-xl font-black uppercase tracking-wider border-l-4 border-red-600 pl-4'>Our Mission</b>
              <p className='font-semibold leading-relaxed'>Our mission at iOwnJerseys is to empower fans with authentic gear, unbeatable quality, and championship service. We are dedicated to delivering a seamless experience that exceeds expectations, from browsing to delivery and beyond. Own your legacy.</p>
          </div>
      </div>

      <div className='text-xl py-6 mb-8'>
          <div className='inline-flex gap-3 items-center'>
            <div className='w-12 h-1 bg-linear-to-r from-red-600 to-orange-500'></div>
            <p className='text-black font-black text-3xl uppercase tracking-wider'>
              Why <span className='bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent'>Choose Us</span>
            </p>
          </div>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
          <div className='border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white'>
            <b className='font-black text-lg uppercase tracking-wider'>Quality Assurance:</b>
            <p className='text-gray-700 font-semibold leading-relaxed'>We meticulously select and vet each product to ensure it meets our championship quality standards. 100% authentic or your money back.</p>
          </div>
          <div className='border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white'>
            <b className='font-black text-lg uppercase tracking-wider'>Convenience:</b>
            <p className='text-gray-700 font-semibold leading-relaxed'>With our user-friendly interface and lightning-fast ordering process, getting your gear has never been easier. Shop like a champion.</p>
          </div>
          <div className='border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(220,38,38,1)] hover:border-red-600 transition-all px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white'>
            <b className='font-black text-lg uppercase tracking-wider'>Exceptional Service:</b>
            <p className='text-gray-700 font-semibold leading-relaxed'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About