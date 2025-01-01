import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Name */}
          <div>
            <h1 className="text-xl font-bold mb-4">Fintreret</h1>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="font-semibold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-sm mb-4">
              Get the latest updates and news by subscribing to our newsletter.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded"
              />
              <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="text-sm text-center md:text-left">
            <p>Finstreet 118, 2561 Fintown</p>
            <p>Hello@finsweet.com | 020 7993 2905</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
