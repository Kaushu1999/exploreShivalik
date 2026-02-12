import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F3A5F] text-white mt-20">
      

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-12">
        {/* Brand */}
        <div>
          <h4 className="text-xl font-bold mb-4">Explore Shivaliks</h4>
          <p className="text-gray-300 text-sm mb-6">
            Your gateway to the most enchanting destinations in the Himalayas. Discover beauty, culture, and adventure.
          </p>
          <p className="text-gray-300 text-sm mb-4">Founder: <span className="text-[#F59E0B] font-semibold">Saurabh Suyal</span></p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#F59E0B] transition text-lg"><FiFacebook /></a>
            <a href="#" className="hover:text-[#F59E0B] transition text-lg"><FiInstagram /></a>
            <a href="#" className="hover:text-[#F59E0B] transition text-lg"><FiTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/" className="text-gray-300 hover:text-[#F59E0B] transition">Home</a></li>
            <li><a href="/destinations" className="text-gray-300 hover:text-[#F59E0B] transition">Destinations</a></li>
            <li><a href="/tours" className="text-gray-300 hover:text-[#F59E0B] transition">Tours & Packages</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-[#F59E0B] transition">About Us</a></li>
          </ul>
        </div>

        {/* Destinations */}
        <div>
          <h4 className="text-lg font-bold mb-6">Popular Destinations</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-300 hover:text-[#F59E0B] transition">Uttarakhand</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F59E0B] transition">Himachal Pradesh</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F59E0B] transition">Nainital</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#F59E0B] transition">Rishikesh</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6">Contact Info</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FiPhone className="text-[#F59E0B] mt-1" />
              <div>
                <p className="text-gray-300 text-sm">+91 81910 04719, +91 78953 32199</p>
                <p className="text-gray-400 text-xs">Mon-Fri, 9AM-6PM IST</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiMail className="text-[#F59E0B] mt-1" />
              <p className="text-gray-300 text-sm">exploreshivaliks@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <FiMapPin className="text-[#F59E0B] mt-1" />
              <p className="text-gray-300 text-sm">Indra Colony, Lakhanpur Road, Ramnagar, Nainital 244715, Uttarakhand</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-lg font-bold mb-6">Our Location</h4>
          <div className="w-full h-40 rounded overflow-hidden border border-gray-600">
            <iframe
              title="Explore Shivaliks Location"
              src="https://www.google.com/maps?q=Indra%20Colony%20Lakhanpur%20Road%20Ramnagar%20Nainital%20244715%20Uttarakhand&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
        <p>&copy; {currentYear} Explore Shivalik. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  )
}

export default Footer