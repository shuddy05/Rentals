import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import image1 from "../assets/images/2.jpg"
const DetailedProperties = () => {
  return (
    <main>
<div className="layout">


    <div className="flex flex-col gap-3 mb-10 ">
        <h1 className='text-8'> Modern Villa</h1>
        <p className='text-5 font-normal '>  <span> <IoLocationOutline className='h-5 w-4 text-[#403F3F]' /> </span> Badagry, Ogun Nigeria</p>
    </div>
<div>
     <div className="relative h-64">
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
                          className="h-full w-full object-cover"
                        />
                      </div>


                      <div></div>
                      <div></div>
</div>
   
</div>

    </main>
  )
}

export default DetailedProperties