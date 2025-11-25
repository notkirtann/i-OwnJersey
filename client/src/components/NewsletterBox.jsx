import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center py-16 bg-linear-to-br from-black via-gray-900 to-black border-2 border-black shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] my-16 mx-20'>
      <p className='text-3xl font-black text-white uppercase tracking-wider mb-4'>
        Become Premium Member
      </p>
      <p className='text-lg font-black bg-linear-to-r from-red-600 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider mb-4'>
        Get 10-15% Off Every Purchase
      </p>
      <p className='text-gray-300 mt-3 font-semibold max-w-md mx-auto'>
        Join the championship club. Exclusive deals, early access to new drops, and VIP treatment.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-8 border-2 border-white pl-4 bg-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]'>
        <input className='w-full sm:flex-1 outline-none font-semibold' type="email" placeholder='Enter Your Email Address' required />
        <button type='submit' className='bg-red-600 text-white text-sm font-black uppercase tracking-wider px-10 py-4 border-l-4 border-black hover:bg-black transition-colors'>
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox