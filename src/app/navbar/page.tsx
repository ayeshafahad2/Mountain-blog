"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Desktop Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">NatureFlow</h1>
          <div className="hidden md:flex space-x-4">
            <Link href="/home" className="text-white hover:text-yellow-400">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-yellow-400">
              About Us
            </Link>
            <Link href="/blog" className="text-white hover:text-yellow-400">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-yellow-400">
              Contact Us
            </Link>
            <Link href="/login" className="text-white hover:text-yellow-400">
              login
            </Link>
            <Link href="/policy" className="text-white hover:text-yellow-400">
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-1/2 bg-gray-800 bg-opacity-90 z-50 h-full transition-transform ease-in-out duration-300`}
      >
        <div className="flex justify-end p-4">
          <button className="text-white text-3xl" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-16">
        <h1 className="text-white text-2xl font-bold">NatureFlow</h1>

          <Link href="/home" className="text-white text-xl" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="text-white text-xl" onClick={toggleMenu}>
            About Us
          </Link>
          <Link href="/blog" className="text-white text-xl" onClick={toggleMenu}>
            Blog
          </Link>
          <Link href="/contact" className="text-white text-xl" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link href="/login" className="text-white text-xl" onClick={toggleMenu}>
            LogIn
          </Link>
          <Link href="/policy" className="text-white  text-xl" onClick={toggleMenu}>
              Privacy Policy
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
