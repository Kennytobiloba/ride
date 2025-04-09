import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#112923] text-white py-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 - Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-green-400">GreenRide</h3>
          <p className="text-lg text-gray-300">
            Revolutionizing urban mobility with electric vehicles for a cleaner, greener, and more sustainable future.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-400">Quick Links</h4>
          <ul className="text-lg text-gray-300 space-y-2">
            <li><a href="#" className="hover:text-green-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-green-400 transition duration-300">About Us</a></li>
            <li><a href="#sustainability" className="hover:text-green-400 transition duration-300">Sustainability</a></li>
            <li><a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-400">Contact Us</h4>
          <p className="text-lg text-gray-300">📩 ridewithgreenride01@gmail.com</p>
          <p className="text-lg text-gray-300">📍 1600 Amphitheatre Parkway, Mountain View, CA</p>
        </div>

        {/* Column 4 - Social Media */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-green-400">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-300">
        <p className="text-lg">&copy; 2025 GreenRide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
