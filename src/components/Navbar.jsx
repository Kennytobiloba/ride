import React, { useState } from 'react';
import Logo from "../assets/greenridelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 sm:p-8">
      <nav className="relative overflow-hidden rounded-xl border border-green-500/20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-green-600 to-green-800 backdrop-blur-md"></div>

        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-4 w-4 rounded-full bg-green-400/10 animate-float top-4 left-[10%]"></div>
          <div className="absolute h-3 w-3 rounded-full bg-green-400/10 animate-float top-8 left-[20%] [animation-delay:0.5s]"></div>
          <div className="absolute h-5 w-5 rounded-full bg-green-400/10 animate-float top-6 left-[80%] [animation-delay:1s]"></div>
          <div className="absolute h-6 w-6 rounded-full bg-green-400/10 animate-float top-2 left-[60%] [animation-delay:1.5s]"></div>
        </div>

        {/* Main Navbar Content */}
        <div className="relative px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="GreenRide Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl sm:text-2xl font-bold text-white">GreenRide</span>
              </div>
            </div> 

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {["Home", "Features", "About", "Contact"].map((item) => (
                <a key={item} href="#" className="relative group">
                  <span className="text-green-100 group-hover:text-white transition-colors duration-300">{item}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-lime-400 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/20 group-hover:w-full transition-all duration-500 delay-100"></div>
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
                    <svg className="w-5 h-5 text-green-200 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-lime-400 rounded blur opacity-60 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative p-2 bg-green-800 rounded leading-none">
                  {isOpen ? (
                    <svg className="w-6 h-6 text-green-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-green-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="relative mt-4 md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-green-900/50 backdrop-blur-sm rounded-lg border border-green-500/10">
                {["Home", "Features", "About", "Contact"].map((item) => (
                  <a key={item} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-800">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
