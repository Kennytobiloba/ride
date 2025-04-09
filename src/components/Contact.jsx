import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-[#112923] text-white py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-400">
          Contact Us
        </h1>

        <div className="space-y-6">
          <p className="text-lg sm:text-xl text-gray-300 text-center">
            Have questions or need more information? Reach out to us!
          </p>

          <div className="text-center">
            <p className="text-lg sm:text-xl text-gray-300">📩 Email: ridewithgreenride01@gmail.com</p>
          </div>
          
          {/* Contact Form (Optional) */}
          <form action="https://formspree.io/f/yourformid" method="POST" className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg sm:text-xl text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg sm:text-xl text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg sm:text-xl text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-xl text-white placeholder-gray-400"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-medium transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
