"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    image:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740063142/473146084_924820043116550_6232122921025454874_n_ol9wux.jpg",
    content:
      "The most amazing vacation rental experience I've ever had. The property exceeded all expectations and the host was incredibly accommodating.",
    rating: 5,
    location: "Stayed in Malibu Villa",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    image:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740063230/988_c840de.jpg",
    content:
      "Perfect for my business trip. The workspace and amenities were exactly what I needed. Will definitely book again!",
    rating: 5,
    location: "Stayed in NYC Loft",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Family Vacation",
    image:
      "https://res.cloudinary.com/dxfhf2lml/image/upload/v1740063424/Emma-Davis-Headshot-Website_sh9xk9.jpg",
    content:
      "Our family had an incredible time. The property was spacious, clean, and had everything we needed for a comfortable stay.",
    rating: 5,
    location: "Stayed in Mountain Retreat",
  },
];

export const Testimonials = () => {
  return (
    <div className="relative py-16">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Hear from our satisfied guests about their extraordinary stays
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 border border-blue-700 shadow-lg rounded-xl bg-blue-800/30"
            >
              <Quote className="absolute w-8 h-8 right-6 top-6 text-blue-600/40" />

              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    fill={i < testimonial.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <blockquote className="mt-4">
                <p className="text-base text-gray-300">{testimonial.content}</p>
              </blockquote>

              <p className="mt-4 text-sm text-blue-400">
                {testimonial.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
