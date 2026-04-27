import React, { useState } from "react";
import { properties } from "../utils/properties";
import { FaRegHeart } from "react-icons/fa6";
import { PiBedBold, PiBathtubBold } from "react-icons/pi";

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 9;

  // Filter Properties
  const filteredProperties =
    activeFilter === "All"
      ? properties
      : properties.filter(
          (property) => property.status === activeFilter
        );

  // Pagination
  const totalPages = Math.ceil(
    filteredProperties.length / propertiesPerPage
  );

  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + propertiesPerPage
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    <main>
      <div className="layout">
        <div className="bg-[#0C092C] h-120.5 text-center flex flex-col justify-center items-center">
          <h1 className="text-white text-[48px] font-bold mb-4">
            Browse Property
          </h1>

          <p className="text-[18px] text-white mb-[54px] font-light">
            Explore verified properties available for rent and sale.
          </p>

          <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">
              <div>
                <label className="block text-gray-800 font-semibold">
                  Property Type
                </label>
                <select className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Office Space</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold">
                  Budget
                </label>
                <input
                  type="number"
                  placeholder="Enter Budget"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold">
                  Location
                </label>
                <select className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
              </div>

              <button className="h-12 w-full cursor-pointer rounded-xl bg-indigo-600 text-white font-semibold">
                Search For Property
              </button>
            </div>
          </div>
        </div>

        <div className="layout md:flex flex-col gap-11">
          <div className="flex justify-between">
            <h1 className="text-[32px]">Featured Properties</h1>

            <div className="md:flex gap-4">
              <button
                onClick={() => handleFilter("All")}
                className={`text-[18px] px-4 py-2 cursor-pointer w-[119px] rounded-lg ${
                  activeFilter === "All"
                    ? "text-white bg-[#7065F0]"
                    : "text-[#7065F0] border border-[#7065F0]"
                }`}
              >
                All
              </button>

              <button
                onClick={() => handleFilter("For Rent")}
                className={`text-[18px] px-4 py-2 cursor-pointer w-[119px] rounded-lg ${
                  activeFilter === "For Rent"
                    ? "text-white bg-[#7065F0]"
                    : "text-[#7065F0] border border-[#7065F0]"
                }`}
              >
                For Rent
              </button>

              <button
                onClick={() => handleFilter("For Sale")}
                className={`text-[18px] px-4 py-2 cursor-pointer w-[119px] rounded-lg ${
                  activeFilter === "For Sale"
                    ? "text-white bg-[#7065F0]"
                    : "text-[#7065F0] border border-[#7065F0]"
                }`}
              >
                For Sale
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProperties.map((property) => {
              const {
                id,
                image,
                name,
                location,
                price,
                feature,
                status,
              } = property;

              return (
                <div key={id} className="w-full">
                  <div className="rounded-[10px] border border-[#D9D9D9] bg-white shadow-xl overflow-hidden">
                    <div className="relative h-64">
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

                        <p className="text-lg text-[#403F3F]">
                          {location}
                        </p>

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

                        <h3 className="text-2xl font-bold">
                          ₦{price}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-gray-500 text-sm">
                Showing {currentProperties.length} of{" "}
                {filteredProperties.length}
              </p>

              <div className="flex items-center gap-6">
                <span className="text-gray-800 font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 disabled:opacity-50"
                  >
                    «
                  </button>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.max(prev - 1, 1)
                      )
                    }
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 disabled:opacity-50"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        Math.min(prev + 1, totalPages)
                      )
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 disabled:opacity-50"
                  >
                    ›
                  </button>

                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 disabled:opacity-50"
                  >
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Properties;