import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import image1 from "../assets/images/2.jpg";
import image2 from "../assets/images/6.png";
import image3 from "../assets/images/7.jpg";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LuSquareArrowOutUpLeft } from "react-icons/lu";
import { RiCarWashingLine } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";
import { FiPhone, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import agentImg from "../assets/images/newpass.jpg";
import propertyImg from "../assets/images/2.jpg";
import { properties } from "../utils/properties";
import { PiBedBold, PiBathtubBold } from "react-icons/pi";
const DetailedProperties = () => {
  const features = [
    "Decent Detailed Finishing",
    "Shower cubicle",
    "Gated house",
    "Spacious Fully fitted kitchen",
    "Fitted Wardrobes",
    "Bathtub",
    "Ample Car Park",
    "Wall mounted Chimney (Extractor)",
    "Wardrobe",
    "Good lighting",
    "Large living area",
    "Water heater",
  ];

  return (
    <main>
      <div className="layout">
        <div className="flex flex-col gap-3 mb-10 ">
          <h1 className="text-[32px]"> Modern Villa</h1>
          <p className="text-5 font-normal flex gap-2 items-center ">
            {" "}
            <span>
              {" "}
              <IoLocationOutline className="h-5 w-4 text-[#403F3F]" />{" "}
            </span>{" "}
            Badagry, Ogun Nigeria
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8.5  justify-between">
          <div className="relative w-full h-full lg:w-[789px] lg:h-[462px]  rounded-lg   ">
            <button className="absolute top-4 left-4 rounded-full px-4 bg-[#FF7A37] py-2 text-white ">
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

          <div className="flex flex-col gap-8.5  ">
            <div className="w-full  lg:w-[417px] h-[214px] rounded-lg ">
              <img
                src={image2}
                className="w-full h-full rounded-lg object-cover"
                alt=""
              />
            </div>
            <div className="w-full lg:w-[417px] h-[214px] rounded-lg ">
              <img
                src={image3}
                alt=""
                className="w-full rounded-lg h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  justify-between mt-5 ">
          <div className="grid grid-cols-2  md:grid-cols-5 gap-4 md:gap-16 ">
            <div className="text-[18px] flex flex-col gap-1">
              <h1>Bedrooms</h1>
              <p className="flex items-center gap-2">
                {" "}
                <MdOutlineBedroomChild /> 03
              </p>
            </div>
            <div className="text-[18px] flex flex-col gap-1">
              <h1>Bathrooms</h1>
              <p className="flex items-center gap-2">
                {" "}
                <LuBath /> 03
              </p>
            </div>
            <div className="text-[18px] flex flex-col gap-1">
              <h1>Square Area</h1>
              <p className="flex items-center gap-2">
                {" "}
                <LuSquareArrowOutUpLeft />
                850 square ft
              </p>
            </div>
            <div className="text-[18px] flex flex-col gap-1">
              <h1>Packing</h1>
              <p className="flex items-center gap-2">
                {" "}
                <RiCarWashingLine /> 02
              </p>
            </div>
            <div className="text-[18px] flex flex-col gap-1">
              <h1>Properties Status</h1>
              <p className=""> For Rent</p>
            </div>
          </div>
          <div>
            <h1 className="text-[24px] md:text-[40px] font-bold ">
              N4,000,000/year
            </h1>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ── LEFT COLUMN ── */}
            <div className="flex-1 flex flex-col gap-6">
              {/* About */}
              <div className="rounded-2xl border border-dashed border-[#7065F0] p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  About this property
                </h2>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Spacious and well-designed 3-bedroom apartment located in a
                  serene environment. Features modern fittings, ample parking
                  space, and easy access to major roads, schools, and shopping
                  centers.
                </p>
              </div>

              {/* Property Features */}
              <div className="rounded-2xl border border-dashed border-[#7065F0] p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">
                  Property Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <BsCheckSquareFill className="text-[#7065F0] w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-700 text-[15px]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-dashed border-[#7065F0] p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">
                  Location
                </h2>
                <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-gray-200">
                  <iframe
                    title="Property Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=2.8%2C6.3%2C3.6%2C6.9&layer=mapnik&marker=6.6%2C3.15"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                  {/* Popup card */}
                  <div className="absolute bottom-4 left-4 bg-white rounded-2xl shadow-lg flex items-center gap-3 p-3 max-w-[210px]">
                    <img
                      src={propertyImg}
                      alt="Modern Villa"
                      className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        Modern Villa
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <FiMapPin className="text-[#7065F0] w-3 h-3 flex-shrink-0" />
                        <p className="text-xs text-gray-500">
                          Badagry, Ogun Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="lg:w-[340px] flex flex-col gap-6">
              {/* Agent Card */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">
                  Agent Detail
                </h2>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={agentImg}
                    alt="Janet Jackson"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-[15px]">
                      Janet Jackson
                    </p>
                    <p className="text-sm text-gray-500">Real Estate Agent</p>
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#7065F0] text-white font-semibold text-[15px]">
                  <FiPhone className="w-4 h-4" />
                  Call Agent
                </button>
              </div>

              {/* Schedule a Tour */}
              <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-5">
                  Schedule a Tour
                </h2>

                {/* Toggle */}
                <div className="flex gap-3 mb-5">
                  <button className="flex-1 py-2.5 rounded-xl font-semibold text-sm bg-[#7065F0] text-white">
                    In Person
                  </button>
                  <button className="flex-1 py-2.5 rounded-xl font-semibold text-sm border border-[#7065F0] text-[#7065F0] bg-white">
                    Virtual
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Date */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="dd/mm/yy"
                      readOnly
                      className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-200 bg-white text-gray-400 text-sm placeholder-gray-400 focus:outline-none"
                    />
                    <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="--:-- --"
                      readOnly
                      className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-200 bg-white text-gray-400 text-sm placeholder-gray-400 focus:outline-none"
                    />
                    <FiClock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>

                  {/* Name */}
                  <input
                    type="text"
                    placeholder="Name"
                    readOnly
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-400 text-sm placeholder-gray-400 focus:outline-none"
                  />

                  {/* Email */}
                  <input
                    type="text"
                    placeholder="Email"
                    readOnly
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-400 text-sm placeholder-gray-400 focus:outline-none"
                  />

                  {/* Message */}
                  <textarea
                    placeholder="Message"
                    readOnly
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-400 text-sm placeholder-gray-400 focus:outline-none resize-none"
                  />

                  <button className="w-full py-3.5 rounded-xl bg-[#7065F0] text-white font-semibold text-[15px]">
                    Submit Tour Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-20">
          <h1 className="text-[32px]  mb-5 ">Simple Apartments</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-[28px] ">
            {properties.slice(0, 3).map((property) => {
              const { id, image, name, location, price, feature, status } =
                property;

              return (
                <div key={id} className="w-full">
                  <div className="rounded-[10px] border border-[#D9D9D9] bg-white shadow-xl overflow-hidden">
                    <div className="relative ">
                      <button
                        className={`absolute top-4 left-4 rounded-full px-4 py-2 text-white ${
                          status === "For Sale"
                            ? "bg-[#097521]"
                            : "bg-[#FF7A37]"
                        }`}
                      >
                        {status}
                      </button>

                      <div className="absolute top-4 right-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400 bg-white">
                          <FaRegHeart className="h-6 w-6 text-gray-500" />
                        </div>
                      </div>

                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <h2 className="text-xl font-semibold">{name}</h2>

                        <p className="text-lg text-[#403F3F]">{location}</p>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2">
                            <PiBedBold />
                            <p>{feature.rooms}</p>
                          </div>

                          <div className="flex items-center gap-2">
                            <PiBathtubBold />
                            <p>{feature.bath}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <button className="rounded-lg bg-purple-500 px-6 py-3 text-white">
                          Details
                        </button>

                        <h3 className="text-2xl font-bold">₦{price}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailedProperties;
