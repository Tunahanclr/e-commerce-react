import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Campaigns from '../components/Campaigns'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import Title from '../components/Title/Title'
export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Campaigns/>
      <Title/>
      <Sorting/>
      <div className='flex'>
      <Category/>
      <Products/>
      </div>
    </div>
  )
}
