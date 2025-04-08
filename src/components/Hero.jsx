import React from 'react';
import { motion } from 'framer-motion';
import car from "../assets/car.jpg";

const HeroSection = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Drive the Future. <br className="hidden sm:block" /> 
            <span className="text-green-600">Ride the Change.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            GreenRide is building a cleaner, safer, and fairer ride-hailing experience. 
            With a commitment to sustainability, we aim to transform how people commute, 
            reducing carbon footprints while providing an efficient and affordable solution.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Join the Movement
            </motion.button>
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
            className="w-full max-w-md mx-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
