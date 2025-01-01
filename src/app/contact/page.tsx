import React from "react";
import Image from "next/image";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Content Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to me with any inquiries or collaboration opportunities. Id love to hear from you!
          </p>
          <form className="space-y-4">
            {/* Name Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            {/* Email Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            {/* Phone Input */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            {/* Message Input */}
            <textarea
              placeholder="Your Message"
              className="w-full border rounded-lg px-3 py-2 bg-gray-50 focus:outline-none"
              rows={4}
            ></textarea>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-amber-400 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/pic11.jpg"
            alt="Contact Us"
            width={1400}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    
  );
};

export default Contact;
