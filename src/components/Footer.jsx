import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Column 1 - Company Info */}
      

        {/* Column 2 - Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-500">Quick Links</h4>
          <ul className="text-lg text-gray-700 space-y-2">
            <li><a href="#" className="hover:text-green-500 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-green-500 transition duration-300">About Us</a></li>
            <li><a href="#sustainability" className="hover:text-green-500 transition duration-300">Sustainability</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-500">Contact Us</h4>
          <p className="text-lg text-gray-700">📩 Email: ridewithgreenride01@gmail.com</p>
        </div>

        {/* Column 4 - Social Media */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-500">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-green-500 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-green-500 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-500">
        <p className="text-lg">&copy; 2025 GreenRide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
