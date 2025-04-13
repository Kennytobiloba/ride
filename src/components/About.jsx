import React from 'react';

const AboutUs = () => {
  return (
    <section id='aboutus' className=" text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400">
          About Us
        </h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Our Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Our Story</h2>
            <p className="text-lg sm:text-xl text-black">
              GreenRide was born from a bold vision: to redefine urban mobility through sustainability, inclusivity, and empowerment.
              We saw the challenges—unfair treatment of drivers, rising emissions from fuel-based fleets, and unsafe ride-hailing practices—and decided it was time for a change.
            </p>
            <p className="text-lg sm:text-xl text-black">
              GreenRide isn’t just another ride-hailing platform; it’s a movement to put people and the planet first. We believe that a better ride-hailing experience can be created when we focus on sustainability, safety, and fairness for both passengers and drivers alike.
            </p>
          </div>

          {/* Right Section - Our Mission */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-400">Our Mission</h2>
            <p className="text-lg sm:text-xl text-black">
              We started small, with a few passionate minds, and have grown into a mission-driven team determined to build a cleaner and fairer mobility ecosystem. Our mission goes beyond just providing a ride—it's about creating a transportation solution that benefits the planet and the people who use it.
            </p>
            <p className="text-lg sm:text-xl text-black">
              At GreenRide, we’re focused on empowering drivers by offering fair wages, support, and recognition for their hard work. We ensure the safety of our passengers and drivers by adhering to rigorous safety standards and protocols. And, most importantly, we prioritize environmental sustainability by shifting the focus toward electric vehicles and green energy.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-8 text-center">
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition duration-300">
           <a href="#contact">Get Involved</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
