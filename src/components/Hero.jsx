import React from 'react';
import { motion } from 'framer-motion';
import bg from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <section
    id='home'
      className="relative w-full h-[90vh] bg-cover bg-center  text-white flex items-center justify-center px-4 sm:px-8 text-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto lg:mt-4 mt-16 flex flex-col items-center justify-center gap-6 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold leading-tight mt-8 lg:mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Drive the Future. <br className="hidden sm:block" />
          <span className="text-green-500">Ride the Change.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          GreenRide is building a cleaner, safer, and fairer ride-hailing experience.
          With a commitment to sustainability, we aim to transform how people commute,
          reducing carbon footprints while providing an efficient and affordable solution.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-4 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Join the Movement
          </motion.button>

          <motion.button
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Download App
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
