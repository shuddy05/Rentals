import React, { useState } from "react";
import { properties } from "../utils/properties";
import { FaRegHeart } from "react-icons/fa6";
import { PiBedBold, PiBathtubBold } from "react-icons/pi";
import circle from "../assets/images/WarningCircle.png";
import ErrorImg from "../assets/images/Frame.png";
import { Link } from "react-router-dom";

const NoMatchFound = ({ onClear }) => (
  <div className="flex flex-col items-center justify-center py-16 px-6">
    <img src={ErrorImg} alt="" className="w-40 sm:w-auto" />

    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 text-center">
      No match found
    </h2>

    <p className="text-gray-500 text-sm sm:text-base mb-8 text-center max-w-sm flex items-start gap-2">
      <span className="shrink-0">
        <img src={circle} alt="" />
      </span>
      We couldn't find any house that matches your search request.
    </p>

    <button
      onClick={onClear}
      className="px-8 py-3 rounded-xl bg-[#7065F0] text-white font-semibold text-base cursor-pointer"
    >
      Clear Filters
    </button>
  </div>
);

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const [searchInputs, setSearchInputs] = useState({
    propertyType: "Apartment",
    budget: "",
    location: "Lagos",
  });

  const [appliedSearch, setAppliedSearch] = useState(null);

  const propertiesPerPage = 9;

  const tabFiltered =
    activeFilter === "All"
      ? properties
      : properties.filter((p) => p.status === activeFilter);

  const filteredProperties = appliedSearch
    ? tabFiltered.filter((p) => {
        const matchType = appliedSearch.propertyType
          ? p.type?.toLowerCase() === appliedSearch.propertyType.toLowerCase()
          : true;

        const matchBudget = appliedSearch.budget
          ? p.price <= Number(appliedSearch.budget)
          : true;

        const matchLocation = appliedSearch.location
          ? p.location
              ?.toLowerCase()
              .includes(appliedSearch.location.toLowerCase())
          : true;

        return matchType && matchBudget && matchLocation;
      })
    : tabFiltered;

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    startIndex,
    startIndex + propertiesPerPage,
  );

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setAppliedSearch({ ...searchInputs });
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setAppliedSearch(null);
    setActiveFilter("All");
    setCurrentPage(1);
    setSearchInputs({
      propertyType: "Apartment",
      budget: "",
      location: "Lagos",
    });
  };

  const noResults = currentProperties.length === 0;

  return (
    <main>
      <div className="layout">
        <div className="bg-[#0C092C] min-h-[420px] md:min-h-[484px] text-center flex flex-col justify-center items-center px-4 py-12">
          <h1 className="text-white text-3xl sm:text-4xl md:text-[48px] font-bold mb-4">
            Browse Property
          </h1>

          <p className="text-sm sm:text-base md:text-[18px] text-white mb-8 md:mb-[54px] font-light px-2">
            Explore verified properties available for rent and sale.
          </p>

          <div className="w-full max-w-5xl bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 items-end">
              <div>
                <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-1">
                  Property Type
                </label>
                <select
                  value={searchInputs.propertyType}
                  onChange={(e) =>
                    setSearchInputs((prev) => ({
                      ...prev,
                      propertyType: e.target.value,
                    }))
                  }
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                >
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Office Space</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-1">
                  Budget
                </label>
                <input
                  type="number"
                  placeholder="Enter Budget"
                  value={searchInputs.budget}
                  onChange={(e) =>
                    setSearchInputs((prev) => ({
                      ...prev,
                      budget: e.target.value,
                    }))
                  }
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold text-sm sm:text-base mb-1">
                  Location
                </label>
                <select
                  value={searchInputs.location}
                  onChange={(e) =>
                    setSearchInputs((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                  <option>Ibadan</option>
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="h-11 sm:h-12 w-full sm:col-span-2 md:col-span-1 cursor-pointer rounded-xl bg-indigo-600 text-white font-semibold text-sm sm:text-base hover:bg-indigo-700 transition-colors"
              >
                Search For Property
              </button>
            </div>
          </div>
        </div>

        <div className="layout flex flex-col gap-8 md:gap-11 py-6 md:py-0">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-[32px] font-semibold">
              Featured Properties
            </h1>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              {["All", "For Rent", "For Sale"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilter(filter)}
                  className={`text-sm sm:text-[18px] px-3 sm:px-4 py-2 cursor-pointer flex-1 sm:flex-none sm:w-[119px] rounded-lg ${
                    activeFilter === filter
                      ? "text-white bg-[#7065F0]"
                      : "text-[#7065F0] border border-[#7065F0]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {noResults ? (
            <NoMatchFound onClear={handleClearFilters} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentProperties.map((property) => {
                  const { id, image, name, location, price, feature, status } =
                    property;

                  return (
                    <div key={id} className="w-full">
                      <div className="rounded-[10px] border border-[#D9D9D9] bg-white shadow-xl overflow-hidden">
                        <div className="relative h-56 sm:h-64">
                          <button
                            className={`absolute top-4 left-4 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white text-sm sm:text-base ${
                              status === "For Sale"
                                ? "bg-[#097521]"
                                : "bg-[#FF7A37]"
                            }`}
                          >
                            {status}
                          </button>

                          <div className="absolute top-4 right-4">
                            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-400 bg-white">
                              <FaRegHeart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                            </div>
                          </div>

                          <img
                            src={image}
                            alt={name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="p-4 sm:p-5 flex flex-col justify-between">
                          <div className="space-y-2 sm:space-y-3">
                            <h2 className="text-lg sm:text-xl font-semibold">
                              {name}
                            </h2>
                            <p className="text-base sm:text-lg text-[#403F3F]">
                              {location}
                            </p>
                            <div className="flex items-center gap-4 sm:gap-6">
                              <div className="flex items-center gap-2">
                                <PiBedBold />
                                <p className="text-sm sm:text-base">
                                  {feature.rooms}
                                </p>
                              </div>
                              <div className="flex items-center gap-2">
                                <PiBathtubBold />
                                <p className="text-sm sm:text-base">
                                  {feature.bath}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 sm:mt-6 flex items-center justify-between">
                            <Link to="/detail">
                              <button className="rounded-lg cursor-pointer bg-purple-500 px-4 sm:px-6 py-2 sm:py-3 text-white text-sm sm:text-base">
                                Details
                              </button>
                            </Link>
                            <h3 className="text-xl sm:text-2xl font-bold">
                              ₦{price}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full bg-white rounded-2xl border border-gray-200 px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-gray-500 text-sm text-center sm:text-left">
                    Showing {currentProperties.length} of{" "}
                    {filteredProperties.length}
                  </p>

                  <div className="flex items-center justify-center sm:justify-end gap-4 sm:gap-6">
                    <span className="text-gray-800 font-medium text-sm sm:text-base whitespace-nowrap">
                      Page {currentPage} of {totalPages}
                    </span>

                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-400 disabled:opacity-50"
                      >
                        «
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage === 1}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-400 disabled:opacity-50"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages),
                          )
                        }
                        disabled={currentPage === totalPages}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-700 disabled:opacity-50"
                      >
                        ›
                      </button>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-gray-700 disabled:opacity-50"
                      >
                        »
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Properties;
