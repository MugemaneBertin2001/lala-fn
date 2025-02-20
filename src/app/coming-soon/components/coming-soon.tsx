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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Home Navigation */}
      <div className="absolute left-4 top-4">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-blue-800/50 px-4 py-2 transition-all hover:bg-blue-800/70"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4">
        {/* Logo Placeholder */}
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-white">
          <Home className="h-8 w-8 text-indigo-600" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-4 text-5xl font-bold">Coming Soon</h1>
          <p className="mb-8 text-xl text-gray-300">
            We&apos;re working hard to bring you something amazing. Stay tuned!
          </p>

          {/* Countdown Timer */}
          <div className="mb-12 grid grid-cols-4 gap-4">
            {timerItems.map((item, index) => (
              <div key={index} className="rounded-lg bg-blue-800/50 p-4">
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mx-auto max-w-md">
            {isSubscribed ? (
              <div className="flex items-center gap-2 rounded-lg border border-green-600 bg-green-800 p-4">
                <svg
                  className="h-5 w-5"
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
                  className="flex-1 rounded-lg border border-blue-600 bg-blue-800/50 px-4 py-2 focus:border-blue-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg bg-blue-600 px-6 py-2 transition-colors hover:bg-blue-500"
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
