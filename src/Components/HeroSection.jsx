import React from 'react'
import image from "../assets/images/image 489.png"
const HeroSection = () => {
  return (
    <main className='h-screen'>
      <div className="layout flex justify-between">
    <div>

      <h1> Buy, Rent or Sell Your Property Easily</h1>
      <p>A great platform to buy, sell, or even rent your properties without any commissions.</p>

      <button type="button" className='text-white bg-purple-500 rounded-xl'> Browse Properties</button>
    <div className='flex justify-between gap-10'>
      <div className='flex flex-col gap-6'><h1>50K+</h1>
      <p>Happy Renters</p></div>
       <div className='flex flex-col gap-6'><h1>100K+</h1>
      <p>Active Users</p></div>
       <div className='flex flex-col gap-6'><h1>1K+</h1>
      <p>Properties Listed</p></div>
    </div>

    </div>
    <div>


      <img src={image} alt="" />
    </div>

      </div>


    </main>
  )
}

export default HeroSection