import React from 'react';

const BlogNews = () => {
  return (
    <section className="bg-[#112923] text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400">
          Blog & News
        </h1>

        {/* Blog Post Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Blog Post 1: Cleaner Air, Healthier Cities */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Cleaner Air, Healthier Cities 🌱</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Internal combustion engine vehicles release toxic emissions that harm air quality and public health. With zero tailpipe emissions, EVs significantly reduce pollution—especially in cities where ride-hailing services operate nonstop.
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              GreenRide is committed to cleaner air with every trip.
            </p>
          </div>

          {/* Blog Post 2: Lower Operating Costs for Drivers */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Lower Operating Costs for Drivers 💰</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              EVs have fewer moving parts and require less maintenance. Charging is also cheaper than refueling with petrol or diesel. This means:
            </p>
            <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-300">
              <li>Drivers save more</li>
              <li>Earnings stretch further</li>
              <li>Ride fares can stay competitive</li>
            </ul>
            <p className="text-lg sm:text-xl text-gray-300">
              Our drive-to-own model ensures drivers build ownership while saving on fuel and repairs.
            </p>
          </div>

          {/* Blog Post 3: EVs Are the Future of Innovation */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">EVs Are the Future of Innovation 🚗⚡</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Governments and manufacturers are going all-in on EVs. More EV models are hitting the roads, battery tech is improving, and charging networks are expanding fast.
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              By going electric now, ride-hailing platforms like GreenRide stay ahead of the curve.
            </p>
          </div>

          {/* Blog Post 4: Customers Love Sustainable Choices */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Customers Love Sustainable Choices 🌍</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Riders are more conscious than ever. They prefer brands and services that align with sustainability values. Choosing an electric ride isn’t just smart—it’s a statement.
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              GreenRide riders know they’re making a greener choice every time they ride.
            </p>
          </div>

          {/* Blog Post 5: Government Support & Incentives */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Government Support & Incentives 📈</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              From tax breaks to EV-friendly policies, governments around the world are supporting the transition to electric. This creates a favorable environment for EV-based ride-hailing platforms to grow quickly and scale impact.
            </p>
            <p className="text-lg sm:text-xl text-gray-300">
              GreenRide is tapping into these incentives to build a smarter, cleaner mobility network.
            </p>
          </div>

          {/* Conclusion */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">The Road Ahead</h2>
            <p className="text-lg sm:text-xl text-gray-300">
              The shift to electric ride-hailing isn’t just a trend—it’s a global movement. At GreenRide, we’re not just adapting; we’re leading the charge into a sustainable, equitable, and electric future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
