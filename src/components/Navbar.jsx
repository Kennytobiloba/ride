import React, { useState } from 'react';
import Logo from "../assets/greenridelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle closing the menu on mobile
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <img src={Logo} alt="GreenRide Logo" className="w-10 h-10 object-contain" />
            <span className="text-xl sm:text-2xl font-bold text-green-800">GreenRide</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "About Us", "Sustainability", "Partnership", "Blog", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group font-medium text-green-800"
              >
                <span className="group-hover:text-green-600 transition duration-300">{item}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-lime-400 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-lime-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative px-5 sm:px-7 py-2 sm:py-3 bg-green-800 rounded-lg leading-none flex items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-green-200 group-hover:text-white transition duration-200">Get Started</span>
                  <svg
                    className="w-5 h-5 text-green-200 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative p-2 bg-green-800 rounded leading-none">
                {isOpen ? (
                  <svg
                    className="w-6 h-6 text-green-200 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-green-200 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-4 md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white rounded-lg shadow-inner">
              {["Home", "About Us", "Sustainability", "Partnership", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block px-3 py-2 rounded-md text-base font-medium text-green-800 hover:bg-green-100"
                  onClick={closeMenu} // Close the menu when an item is clicked
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
