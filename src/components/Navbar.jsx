import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md rounded-b-xl overflow-hidden">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <span className="mb-1 sm:mb-0">Saturday, 8AM to 10PM</span>
          <span>Call us now +1 5589 5548 35</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-green-700">
          MEDICIO
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-700 font-semibold">HOME</Link>
          <Link to="/about-us" className="text-gray-700 hover:text-green-700 font-semibold">ABOUT</Link>
          <Link to="/services" className="text-gray-700 hover:text-green-700 font-semibold">SERVICES</Link>
          <Link to="/department" className="text-gray-700 hover:text-green-700 font-semibold">DEPARTMENTS</Link>
         
           <HashLink smooth to="/make-appointment#doctors" className="text-gray-700 hover:text-green-700 font-semibold">DOCTORS</HashLink>

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-green-700 font-semibold flex items-center"
            >
              MORE
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link to="/make-appointment#gallery" className="block px-4 py-2 text-gray-700 hover:bg-green-50">Gallery</Link>
                <Link to="/make-appointment#faq" className="block px-4 py-2 text-gray-700 hover:bg-green-50">FAQ</Link>
              </div>
            )}
          </div>

          {/* ✅ Fixed Link */}
          <Link to="/contactpage" className="text-gray-700 hover:text-green-700 font-semibold">CONTACT</Link>
        </div>

        {/* Make an Appointment Button */}
        <Link
          to="/make-appointment"
          className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-full transition duration-300"
        >
          Make an Appointment
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 space-y-3 shadow-md">
          <Link to="/" className="block text-gray-700 font-semibold">HOME</Link>
          <Link to="/about-us" className="block text-gray-700 font-semibold">ABOUT</Link>
          <Link to="/services" className="block text-gray-700 font-semibold">SERVICES</Link>
          <Link to="/department" className="block text-gray-700 font-semibold">DEPARTMENTS</Link>
          
         
          <Link smooth to="/#doctors" className="hover:text-green-600">DOCTORS</Link>


          <Link to="/make-appointment#gallery" className="block text-gray-700 font-semibold">GALLERY</Link>
          <Link to="/make-appointment#faq" className="block text-gray-700 font-semibold">FAQ</Link>
          {/* ✅ Fixed Link */}
          <Link to="/contactpage" className="block text-gray-700 font-semibold">CONTACT</Link>
          <Link to="/make-appointment" className="block w-full bg-green-700 text-white text-center py-2 rounded-full font-semibold mt-4">Make an Appointment</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
