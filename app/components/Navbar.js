"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-1">
              <a href="/" className="text-logo text-2xl font-bold">
                Krator
              </a>
            </div>
          </div>
          {/* Navigation links for medium and larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-black opacity-70 rounded-lg p-2">
              Home
            </Link>
            <Link href="/bookcoverdesign" className="text-black opacity-70 rounded-lg p-2">
              Generate Book Cover
            </Link>
            <Link href="/createillustration" className="text-black opacity-70 rounded-lg p-2">
              Generate Illustrations
            </Link>
            <Link href="/writebookcontent" className="text-black opacity-70 rounded-lg p-2">
              Generate Painting
            </Link>
            <Link href="/" className="text-black opacity-70 rounded-lg p-2">
              Contact
            </Link>
          </div>
          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              className="text-black opacity-70 rounded-lg p-2 focus:outline-none"
              onClick={toggleMobileMenu}
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Responsive login/signup button */}
          <div className="">
            <button className="w-32 h-12 bg-btn text-primary text-sm rounded-lg">
              Login/Signup
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu content */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 mt-2">
            <Link href="/" className="text-black opacity-70 rounded-lg p-2">
              Home
            </Link>
            <Link href="/bookcoverdesign" className="text-black opacity-70 rounded-lg p-2">
              Generate Book Cover
            </Link>
            <Link href="/createillustration" className="text-black opacity-70 rounded-lg p-2">
              Generate Illustrations
            </Link>
            <Link href="/writebookcontent" className="text-black opacity-70 rounded-lg p-2">
              Generate Painting
            </Link>
            <Link href="/" className="text-black opacity-70 rounded-lg p-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
