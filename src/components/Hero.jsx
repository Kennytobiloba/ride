import React from 'react';
import { motion } from 'framer-motion';
import car from "../assets/car.jpg";

const HeroSection = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Drive the Future. <br className="hidden sm:block" /> 
            <span className="text-cyan-400">Ride the Change.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            GreenRide is building a cleaner, safer, and fairer ride-hailing experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-medium transition">
              Join the Movement
            </button>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-medium transition">
              Become a Driver
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-xl font-medium transition">
              Partner with Us
            </button>
          </div>
        </div>

        {/* Right Side Car Image with Animation */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.img
            src={car}
            alt="GreenRide Car"
            className="w-full max-w-md mx-auto mix-blend-lighten brightness-110"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
