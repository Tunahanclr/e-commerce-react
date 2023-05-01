import React from 'react'

export default function Sorting({setSort}) {
  return (
    <div className=' my-3 p-5  mt-10 max-w-[1140px] mx-auto flex justify-end'>
            <select onChange={(e)=>setSort(e.target.value)} name="" id="" className='w-28  py-3 px-5 bg-white h-12 outline-black'>
                <option   value="">Seçiniz</option>
                <option value="inc" >Artan</option>
                <option value="dec" >Azalan</option>
            </select>
    </div>
  )
}
