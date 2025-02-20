"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface TimerItem {
  value: string;
  label: string;
}

interface SocialLink {
  name: string;
  url: string;
}

const timerItems: TimerItem[] = [
  { value: "14", label: "Days" },
  { value: "08", label: "Hours" },
  { value: "45", label: "Minutes" },
  { value: "30", label: "Seconds" },
];

const socialLinks: SocialLink[] = [
  { name: "Twitter", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
];

export function ComingSoonPage() {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col">
      {/* Home Navigation */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-800 bg-opacity-50 hover:bg-opacity-70 transition-all"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 bg-white rounded-full mb-8 flex items-center justify-center">
          <Home className="h-8 w-8 text-indigo-600" />
        </div>

        {/* Main Content */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
          <p className="text-xl mb-8 text-gray-300">
            We're working hard to bring you something amazing. Stay tuned!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {timerItems.map((item, index) => (
              <div
                key={index}
                className="bg-blue-800 bg-opacity-50 rounded-lg p-4"
              >
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="bg-green-800 border border-green-600 p-4 rounded-lg flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Thanks for subscribing! We'll keep you updated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-blue-800 bg-opacity-50 border border-blue-600 focus:outline-none focus:border-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
