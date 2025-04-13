import React from 'react';

const Partnership = () => {
  return (
    <section id='partnership' className=" text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400">
          Partnership
        </h1>

        {/* For EV Manufacturers */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">For EV Manufacturers</h2>
          <p className="text-lg sm:text-xl text-black">
            Partner with us to supply vehicles for our fleet. GreenRide enables fast market access, branding, and recurring orders via our drive-to-own model. Together, we can accelerate the adoption of electric mobility and bring sustainable transport solutions to the masses.
          </p>
        </div>

        {/* For Investors */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">For Investors</h2>
          <p className="text-lg sm:text-xl text-black">
            GreenRide is tapping into a growing market at the intersection of mobility and sustainability. Let’s shape the future of ride-hailing together by investing in green technologies that drive long-term value and environmental impact.
          </p>
          <p className="text-lg sm:text-xl text-black">
            Request our pitch deck to learn more about the opportunities ahead.
          </p>
        </div>

        {/* For Governments & NGOs */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-400">For Governments & NGOs</h2>
          <p className="text-lg sm:text-xl text-black">
            We align with public transport goals, clean energy agendas, and local empowerment strategies. By partnering with GreenRide, we can work together to accelerate the shift to sustainable urban mobility.
          </p>
        </div>

        {/* Call-to-Actions */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#contact"
            className="bg-green-400 text-black px-6 py-3 text-lg font-semibold rounded-lg hover:bg-green-500 transition duration-300"
          >
            Partner with Us
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-green-400 text-green-400 px-6 py-3 text-lg font-semibold rounded-lg hover:bg-green-400 hover:text-black transition duration-300"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
