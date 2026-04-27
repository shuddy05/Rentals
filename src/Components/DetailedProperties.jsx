import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import image1 from "../assets/images/2.jpg"
import image2 from "../assets/images/6.png"
import image3 from "../assets/images/7.jpg"
import { MdOutlineBedroomChild } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LuSquareArrowOutUpLeft } from "react-icons/lu";
import { RiCarWashingLine } from "react-icons/ri";
const DetailedProperties = () => {
  return (
    <main>
<div className="layout">


    <div className="flex flex-col gap-3 mb-10 ">
        <h1 className='text-[32px]'> Modern Villa</h1>
        <p className='text-5 font-normal flex gap-2 items-center '>  <span> <IoLocationOutline className='h-5 w-4 text-[#403F3F]' /> </span> Badagry, Ogun Nigeria</p>
    </div>
<div className='flex gap-8.5  justify-between'> 
     <div className="relative h-64 w-[789px] h-[462px]  rounded-lg   ">
                        <button
                          className= "absolute top-4 left-4 rounded-full px-4 bg-[#FF7A37] py-2 text-white "
                        >
                          For Sale
                        </button>
    
                        <div className="absolute top-4 right-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white">
                            <FaRegHeart className="h-6 w-6 text-gray-500" />
                          </div>
                        </div>
    
                        <img
                          src={image1}
                          alt=""
                          className="h-full w-full object-cover rounded-lg  "
                        />
                      </div>

<div className='flex flex-col gap-8.5 '>

                      <div className='w-[417px] h-[214px] rounded-lg ' >  
                        <img src={image2} className='w-full h-full object-cover' alt="" />
                      </div>
                      <div className='w-[417px] h-[214px] rounded-lg '>
                        <img src={image3} alt=""  className='w-full h-full object-cover'/>
                      </div>
</div>
</div>
   
<div className='flex justify-between mt-5 '>
    <div className='flex justify-between gap-16 '  >    

        <div className='text-[18px] flex flex-col gap-1'>
            <h1>Bedrooms</h1>
            <p className='flex items-center gap-2'> <MdOutlineBedroomChild /> 03</p>
        </div>
         <div className='text-[18px] flex flex-col gap-1'>
            <h1>Bathrooms</h1>
            <p className='flex items-center gap-2'> <LuBath /> 03</p>
        </div>
         <div className='text-[18px] flex flex-col gap-1'>
            <h1>Square Area</h1>
            <p className='flex items-center gap-2'> <LuSquareArrowOutUpLeft />850 square ft</p>
        </div>
         <div className='text-[18px] flex flex-col gap-1'>
            <h1>Packing</h1>
            <p className='flex items-center gap-2'> <RiCarWashingLine /> 02</p>
        </div>
         <div className='text-[18px] flex flex-col gap-1'>
            <h1>Properties Status</h1>
            <p className=''> For Rent</p>
        </div>
    </div>
    <div><h1 className='text-[40px] font-bold '>
        N4,000,000/year
        </h1></div>
</div>

<section className='flex justify-between gap-[68px] mt-[28px] '>
    <div className='w-[769px]'>  
        <div className='flex flex-col gap-2 mb-[35px] '>
            <h1 className=' text-[22px] font-semibold '>About this property</h1>
<p className=' text-[18px] font-extralight '>Spacious and well-designed 3-bedroom apartment located in a serene environment. Features modern fittings, ample parking space, and easy access to major roads, schools, and shopping centers.
</p>

        </div>

    </div>
    <div className=' w-[399px] ' ></div>
</section>

</div>

    </main>
  )
}

export default DetailedProperties