"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/pic13.jpg')" }} // Replace with your image URL
    >
      <div className="bg-black bg-opacity-50 w-full h-full absolute"></div> {/* Overlay */}
      <motion.div
        className="relative max-w-4xl mx-auto bg-gray-100 bg-opacity-90 shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-gray-700 leading-7 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Welcome to our Privacy Policy page. Your privacy is critically important
          to us. This document explains the types of information we collect, how
          we use it, and the steps we take to safeguard your data.
        </motion.p>
        <motion.h2
          className="text-2xl font-semibold text-gray-700 mt-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Information We Collect
        </motion.h2>
        <motion.ul
          className="list-disc list-inside text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <li>Personal data such as name and email address</li>
          <li>Usage data like IP address, browser type, and device information</li>
          <li>Cookies for improving user experience</li>
        </motion.ul>
        <motion.h2
          className="text-2xl font-semibold text-gray-700 mt-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          How We Use Your Information
        </motion.h2>
        <motion.p
          className="text-gray-700 leading-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          We use the collected data to provide and improve our services, communicate
          with you, and comply with legal obligations. Rest assured, we prioritize
          the security and confidentiality of your information.
        </motion.p>
        <motion.p
          className="text-sm text-gray-600 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          If you have any questions about our Privacy Policy, please contact us.
        </motion.p>
      </motion.div>
    </div>
  );
}
