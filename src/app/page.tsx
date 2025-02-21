"use client";

import { useState } from "react";
import {
  Search,
  Star,
  MapPin,
  Users,
  Bath,
  Home,
  Wifi,
  Coffee,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";

interface Property {
  id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  beds: number;
  baths: number;
  guests: number;
  amenities: string[];
  imagePath: string;
}

const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    description:
      "Stunning oceanfront villa with private beach access and panoramic views",
    price: 599,
    rating: 4.9,
    reviews: 128,
    beds: 4,
    baths: 3,
    guests: 8,
    amenities: ["Beach Access", "Pool", "WiFi", "Kitchen"],
    imagePath:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740062099/961e25b6-e709-463b-9ee3-f41f8e39a2d0_qn37vk.jpg",
  },
  {
    id: 2,
    title: "Modern Downtown Loft",
    location: "New York City, NY",
    description:
      "Stylish loft in the heart of Manhattan with city skyline views",
    price: 299,
    rating: 4.8,
    reviews: 96,
    beds: 2,
    baths: 2,
    guests: 4,
    amenities: ["City View", "Gym", "WiFi", "Workspace"],
    imagePath:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740062099/5988b627-40d5-47c7-b9b4-31fd63ed3143_koxd7j.jpg",
  },
  {
    id: 3,
    title: "Mountain Retreat Cabin",
    location: "Aspen, Colorado",
    description:
      "Cozy cabin surrounded by nature with spectacular mountain views",
    price: 399,
    rating: 4.95,
    reviews: 84,
    beds: 3,
    baths: 2,
    guests: 6,
    amenities: ["Fireplace", "Hot Tub", "WiFi", "Parking"],
    imagePath:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740062057/d0faedf7-c49a-4a0b-adf1-ce9fa335c961_yb2psu.avif",
  },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("anywhere");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="px-6 py-24 mx-auto text-white max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Find Your Dream Vacation Rental
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Discover exceptional properties worldwide. From cozy apartments to
              luxury villas, find the perfect place for your next adventure.
            </p>

            {/* Enhanced Search Bar */}
            <div className="mt-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <div className="relative flex-1 max-w-md">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full py-3 pl-10 pr-3 text-white border border-blue-600 rounded-lg bg-blue-800/50 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none sm:text-sm"
                    placeholder="Search locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="block py-3 pl-3 pr-10 text-white border border-blue-600 rounded-lg bg-blue-800/50 focus:border-blue-400 focus:outline-none sm:text-sm"
                >
                  <option value="anywhere">Anywhere</option>
                  <option value="united-states">United States</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                </select>

                <button className="px-6 py-3 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-sm hover:bg-blue-500">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Featured Properties
          </h2>
          <Link
            href="/coming-soon"
            className="text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            View all properties →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleProperties.map((property) => (
            <div
              key={property.id}
              className="relative overflow-hidden transition-all border border-blue-600 shadow-lg group rounded-xl bg-blue-800/50 hover:shadow-xl"
            >
              <div className="relative h-[200px] md:h-[240px] lg:h-[280px] w-full overflow-hidden rounded-t-xl">
                <Image
                  src={property.imagePath}
                  alt={property.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {property.title}
                  </h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-300">
                      {property.rating} ({property.reviews})
                    </span>
                  </div>
                </div>

                <div className="flex items-center mt-2 text-sm text-gray-300">
                  <MapPin className="flex-shrink-0 w-4 h-4" />
                  <span className="ml-1">{property.location}</span>
                </div>

                <p className="mt-3 text-sm text-gray-300 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Home className="w-4 h-4" />
                    <span className="ml-1">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4" />
                    <span className="ml-1">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4" />
                    <span className="ml-1">{property.guests} guests</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-4">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-200 border border-blue-700 rounded-full bg-blue-900/50"
                    >
                      {amenity === "WiFi" && <Wifi className="w-3 h-3 mr-1" />}
                      {amenity === "Kitchen" && (
                        <Coffee className="w-3 h-3 mr-1" />
                      )}
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-baseline text-white">
                    <span className="text-2xl font-bold">
                      ${property.price}
                    </span>
                    <span className="text-sm text-gray-300">/night</span>
                  </div>
                  <Link  href="/auth" className="px-4 py-2 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-lg shadow-sm hover:bg-blue-500">
                    Book now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
