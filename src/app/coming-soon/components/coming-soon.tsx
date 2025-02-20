"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { type FC, useState, type FormEvent, type ChangeEvent } from "react";

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
] as const;

const socialLinks: SocialLink[] = [
  { name: "Twitter", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" },
] as const;

export const ComingSoonPage: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-b from-blue-900 to-black">
      {/* Home Navigation */}
      <div className="absolute left-4 top-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 transition-all rounded-lg bg-blue-800/50 hover:bg-blue-800/70"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        {/* Logo Placeholder */}
        <div className="flex items-center justify-center w-16 h-16 mb-8 bg-white rounded-full">
          <Home className="w-8 h-8 text-indigo-600" />
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="mb-4 text-5xl font-bold">Coming Soon</h1>
          <p className="mb-8 text-xl text-gray-300">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {timerItems.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-blue-800/50">
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="flex items-center gap-2 p-4 bg-green-800 border border-green-600 rounded-lg">
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
                <span>
                  Thanks for subscribing! We&apos;ll keep you updated.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-blue-600 rounded-lg bg-blue-800/50 focus:border-blue-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 transition-colors bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-400 transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
