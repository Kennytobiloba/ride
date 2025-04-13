import React from 'react';
import sustainabilityImg from "../assets/OIP.jpg"; // Replace with your actual image path

const Sustainability = () => {
  return (
    <section id='sustainability' className="text-white py-16 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-12">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-green-500">
            Sustainability
          </h1>

          {/* Why Electric Vehicles */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-400">Why Electric Vehicles?</h2>
            <p className="text-lg sm:text-xl text-black">
              EVs reduce emissions, save fuel costs, and in the future of urban transportation.
            </p>
          </div>

          {/* Our Commitments */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-400">Our Commitments</h2>
            <ul className="list-disc pl-6 text-lg sm:text-xl text-black">
              <li>100% electric fleet by 2030</li>
              <li>Battery-swapping and charging solutions</li>
              <li>Environmental reporting and transparency</li>
            </ul>
          </div>

          {/* Sustainability Impact */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-400">Sustainability Impact</h2>
            <ul className="list-disc pl-6 text-lg sm:text-xl text-black">
              <li>Monthly CO₂ reduction goals</li>
              <li>Community tree-planting drives</li>
              <li>Maintenance systems with green workshops</li>
            </ul>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Sustainability;
