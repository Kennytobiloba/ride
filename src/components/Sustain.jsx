import React from 'react';

const Sustainability = () => {
  return (
    <section className="bg-[#112923] text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400">
          Sustainability
        </h1>

        {/* Why Electric Vehicles Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">Why Electric Vehicles?</h2>
          <p className="text-lg sm:text-xl text-gray-300">
            EVs reduce emissions, save fuel costs, and are the future of urban transportation.
          </p>
        </div>

        {/* Our Commitments Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">Our Commitments</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300">
            <li>100% electric fleet by [target year]</li>
            <li>Battery-swapping and charging solutions</li>
            <li>Environmental reporting and transparency</li>
          </ul>
        </div>

        {/* Sustainability Impact Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">Sustainability Impact</h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300">
            <li>Monthly CO₂ reduction goals</li>
            <li>Community tree-planting drives</li>
            <li>Maintenance systems with green workshops</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
