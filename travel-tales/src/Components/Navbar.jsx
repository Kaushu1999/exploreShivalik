import React from "react";
import { FiPhone, FiMapPin, FiSearch } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0B1F44] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiPhone className="text-[var(--secondary)]" />
              <span>+123-456-789</span>
            </div>

            <div className="flex items-center gap-2">
              <FiMapPin className="text-[var(--secondary)]" />
              <span>Jl. Niti Mandala, Renon, Bali 80225</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaFacebookF className="hover:text-[var(--secondary)] cursor-pointer" />
            <FaTwitter className="hover:text-[var(--secondary)] cursor-pointer" />
            <FaYoutube className="hover:text-[var(--secondary)] cursor-pointer" />
            <FaInstagram className="hover:text-[var(--secondary)] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#2F73B9]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="logo.png" className="h-25 w-25"/>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            <a className="hover:text-[var(--secondary)] cursor-pointer">Home</a>
            <a className="hover:text-[var(--secondary)] transition cursor-pointer">About Us</a>

            <div className="flex items-center gap-1 hover:text-[var(--secondary)] cursor-pointer">
              Packages
              <span className="text-xs">▼</span>
            </div>

            <div className="flex items-center gap-1 hover:text-[var(--secondary)] cursor-pointer">
              Destination
              <span className="text-xs">▼</span>
            </div>

            <div className="flex items-center gap-1 hover:text-[var(--secondary)] cursor-pointer">
              Pages
              <span className="text-xs">▼</span>
            </div>

            <a className="hover:text-[var(--secondary)] cursor-pointer transition">Contact</a>
          </nav>

          {/* Right Icon */}
          <div className="text-white hover:text-[var(--secondary)] cursor-pointer">
            <FiSearch size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
