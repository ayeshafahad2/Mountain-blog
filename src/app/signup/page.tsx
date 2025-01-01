"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Signup = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-yellow-300 to-yellow-600">
      {/* Left Section - Image */}
      <div className="hidden md:block w-1/2 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/pic17.jpg" // Replace with your image path
            alt="Signup"
            width={800}
            height={400}
            className="object-cover rounded-lg shadow-xl"
          />
        </motion.div>
      </div>

      {/* Right Section - Signup Form */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-lg rounded-lg"
      >
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Sign Up</h1>

        <form className="w-full max-w-sm space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300">
            Sign Up
          </button>
        </form>

        {/* Social Signup */}
        <div className="w-full max-w-sm mt-6 space-y-4">
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition-all duration-300">
            <FontAwesomeIcon icon={faGoogle} className="h-6 w-6 mr-3 text-blue-500" />
            Sign Up with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-100 transition-all duration-300">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 mr-3 text-blue-600" />
            Sign Up with Facebook
          </button>
        </div>

        {/* Login Link */}
        <p className="mt-6 text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-500 hover:underline cursor-pointer">Login</span>
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
