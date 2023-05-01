import React from 'react'

export default function Subscribe() {
  return (
    <div className='h-[400px] bg-[#D4CED0]'>
        <div className='text-center'>
            <div className=''>
            <h1 className='text-gray-800 pt-20  font-bold text-3xl sm:text-5xl'>Subscribe To Get Discount Offers</h1>
            <p className='mt-4 text-xl sm:text-2xl text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque?</p>
            <input type="text" className="mt-6 w-[800px] h-16 rounded-full outline-none placeholder-gray-500 placeholder-opacity-50 text-lg px-6 placeholder-pl-2" placeholder="Enter Your Email" />
            </div>
            <button className=' mt-2  sm:mt-14 bg-red-500 w-64 h-12 text-white font-semibold rounded-full border border-red-600 hover:bg-gray-300 hover:text-red-500 transition-all'>SUBSCRİBE</button>
        </div>
    </div>
  )
}
