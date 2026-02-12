import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1F3A5F] to-[#2F73B9] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ES</span>
          </div>
          <span className="hidden sm:inline text-xl font-bold text-[#1F3A5F]">Explore Shivaliks</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          <Link to="/" className="hover:text-[#F59E0B] transition duration-300">Home</Link>
          <Link to="/destination" className="hover:text-[#F59E0B] transition duration-300">Destinations</Link>
          <Link to="/tours" className="hover:text-[#F59E0B] transition duration-300">Packages</Link>
          <Link to="/about" className="hover:text-[#F59E0B] transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-[#F59E0B] transition duration-300">Contact</Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block transition-all duration-300">
            <input 
              type="text"
              placeholder="Search..."
              className="w-40 px-4 py-2 rounded-full border-2 border-gray-200 focus:border-[#F59E0B] focus:outline-none transition text-sm"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-600 pointer-events-none" />
          </div>

          {/* Search Icon - Mobile */}
          <button className="md:hidden text-gray-700 hover:text-[#F59E0B] transition">
            <FiSearch className="text-xl" />
          </button>

          {/* Book Button - Desktop */}
          <button className="hidden md:block bg-[#F59E0B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E59E0B] transition duration-300 shadow-md hover:shadow-lg">
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-gray-700"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-fadeIn">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition">Home</Link>
            <Link to="/destination" className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition">Destinations</Link>
            <Link to="/tours" className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition">Packages</Link>
            <Link to="/about" className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition">About</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700 transition">Contact</Link>
            <button className="mt-2 bg-[#F59E0B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#E59E0B] transition w-full">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
