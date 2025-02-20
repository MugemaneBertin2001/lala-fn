"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/navbar";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Find your perfect rental
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover amazing properties for your next stay, with instant
                booking and verified hosts.
              </p>

              {/* Search Bar */}
              <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Property Cards */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64">
                <img
                  src={`/api/placeholder/400/300`}
                  alt="Property"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Luxury Villa {i}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Beautiful location with amazing views
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">
                    $299/night
                  </p>
                  <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
