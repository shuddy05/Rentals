import React from 'react'
import logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div>

            <img src={logo} alt="Our Logo" />
        </div>
        <div className='flex justify-between'>
            <h1 className='text-gray-500 hover:text-[#7065F0] text-[18px] cursor-pointer'>
                Home
            </h1>
            <h1 className='text-gray-500 hover:text-[#7065F0] text-[18px] cursor-pointer'>
                Properties
            </h1>
             <h1 className='text-gray-500 hover:text-[#7065F0] text-[18px] cursor-pointer'>
                About Us
            </h1>
             <h1 className='text-gray-500 hover:text-[#7065F0] text-[18px] cursor-pointer'>
                List Properties
            </h1>
             <h1 className='text-gray-500 hover:text-[#7065F0] text-[18px] cursor-pointer'>
                Contact Us
            </h1>

        </div>
        <div className='md:w-5.5 md:h-11.75 flex gap-18[px]'>

            <button className=' text-[18px] text-[#7065F0]' >
                Login
            </button>
            
            <button className='text-[18px] text-white bg-[#7065F0] roundedxl '>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar