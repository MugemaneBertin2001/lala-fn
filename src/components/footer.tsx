// components/footer.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: "Properties", href: "#" },
  { label: "How it Works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "FAQ", href: "#" },
];

const supportLinks: FooterLink[] = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const socialLinks: FooterLink[] = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setEmail("");
  };

  return (
    <footer className="border-t border-blue-800">
      <div className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-4 text-sm text-gray-300">
              We&apos;re dedicated to providing exceptional vacation rentals and
              creating unforgettable travel experiences for our guests.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-sm text-gray-300">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm text-white border border-blue-600 rounded-lg bg-blue-800/50 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-blue-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-sm text-gray-300 transition-colors hover:text-white"
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
