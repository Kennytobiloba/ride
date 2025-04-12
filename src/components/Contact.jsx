import React from 'react';

const ContactPage = () => {
  return (
    <section id='contact' className="bg-white text-black py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-500">
          Contact Us
        </h1>

        <p className="text-lg sm:text-xl text-center text-black">
          Have questions or need more information? Reach out to us!
        </p>

        {/* Contact Info */}
        <div className="text-center text-lg sm:text-xl font-medium text-black">
          📩 Email:{" "}
          <a
            href="mailto:ridewithgreenride01@gmail.com"
            className="text-green-600 underline hover:text-green-800"
          >
            ridewithgreenride01@gmail.com
          </a>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="max-w-xl mx-auto space-y-6 bg-gray-100 p-8 rounded-2xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-semibold text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-black">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full mt-2 p-3 border-2 border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
