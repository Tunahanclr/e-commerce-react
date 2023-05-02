import React,{useEffect, useState} from 'react'
import {SlBasket} from "react-icons/sl"
import { NavLink, useNavigate } from 'react-router-dom'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../redux/cartSlice'
export default function NavbarRight() {
  const dispatch=useDispatch()
  const {itemCount}=useSelector(state=>state.carts)

  const navigate=useNavigate()
    useEffect(()=>{
        dispatch(getCartTotal())
    },[dispatch])
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <>
        <ul className='md:flex hidden items-center  gap-6'>
        <NavLink to='/'  className='text-base text-red-500 font-semibold'>
    Home
  </NavLink>            <li className='text-lg font-semibold'>PAGES</li>
            <li className='text-base font-semibold'>PRODUCTS</li>
            <li className='text-base font-semibold'>BLOG</li>
            <li className='text-base font-semibold'>CONTACTS</li>
              <div onClick={()=>navigate('cart')} className='relative'>
              <div className='absolute -top-3 -right-3 flex justify-center items-center font-sans bg-red-500 text-white rounded-full w-5 h-5'>
                    {itemCount}
                </div>
                <SlBasket className=' cursor-pointer text-2xl'/>
              </div>
          </ul>
          <div onClick={handleNav} className='block md:hidden'>
          {nav ? (
            <AiOutlineClose className="text-black text-xl cursor-pointer" />
          ) : (
            <AiOutlineMenu className="text-black text-xl cursor-pointer" />
          )}          </div>
    <div className={nav? "bg-white w-full z-50 text-black absolute top-[83px] h-[400px]  left-0  md:hidden flex justify-center text-center flex-col":
        'absolute left-[-100%]'}>
           <ul className=' flex flex-col items-center   gap-3'>
        <NavLink to='/'  className='text-xl font-semibold'>
    Home
  </NavLink>            <li className='text-xl font-semibold'>PAGES</li>
            <li className='text-xl font-semibold'>PRODUCTS</li>
            <li className='text-xl font-semibold'>BLOG</li>
            <li className='text-xl font-semibold'>CONTACTS</li>
              <div className='relative'>
              <div className='absolute -top-3 -right-3 flex justify-center items-center font-sans bg-red-500 text-black rounded-full w-5 h-5'>
                    3
                </div>
                <SlBasket className=' cursor-pointer text-2xl'/>
              </div>
          </ul>
            </div>
                
    </>
  )
}
