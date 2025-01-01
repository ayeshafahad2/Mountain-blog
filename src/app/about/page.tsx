"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100">
      {/* Full-Width Image at the Start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-full mb-12"
      >
        <Image
          src="/blog.png"
          alt="About Us"
          width={1400}
          height={1000}
          className="w-full rounded-lg shadow-lg"
          priority
        />
      </motion.div>

      {/* Mission and Vision Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row text-center md:text-left items-center justify-center gap-8 mb-20">
          {/* Left Side: Our Mission */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="font-bold text-2xl mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg mb-2">
              Creating valuable content for creatives all around the world.
            </p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>

          {/* Right Side: Our Vision */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="font-bold text-2xl mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg font-bold mb-2">
              We are a community of content writers who share their learnings.
            </p>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Content and Image Alternating Layout */}
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4">
        {/* Content Left, Image Right */}
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-lg text-gray-700"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Creating Valuable Content for Creatives All Around the World
            </h3>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Scelerisque viverra mauris in aliquam sem. At risus viverra
              adipiscing at in tellus.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src="/pic6.jpg"
              alt="Creating Content"
              width={1400}
              height={1000}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>

        {/* Image Left, Content Right */}
        <div className="flex flex-col md:flex-row-reverse gap-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-lg text-gray-700"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why We Started This Blog
            </h3>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Omnis voluptate repudiandae
              recusandae vel delectus, quasi assumenda! Porro modi, dignissimos
              veniam quo laudantium, pariatur facilis minus et tempora
              voluptatem quia itaque.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src="/pic7.jpg"
              alt="Our Vision"
              width={1400}
              height={1000}
              className="w-full rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Our Authors Section */}
      <section className="py-16 px-8 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Authors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "John Doe", role: "Content Writer", imgSrc: "/person1.png" },
            { name: "Jane Smith", role: "Editor", imgSrc: "/person2.png" },
            { name: "Mark Wilson", role: "Researcher", imgSrc: "/person3.png" },
            { name: "Emily Davis", role: "Designer", imgSrc: "/person4.png" },
          ].map((author, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg bg-white"
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={author.imgSrc}
                alt={author.name}
                width={1400}
                height={1200}
                className="w-32 h-32 rounded-full mb-4 object-cover"
                priority
              />
              <h3 className="font-semibold text-xl mb-2">{author.name}</h3>
              <p className="text-gray-600">{author.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Our Team Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-200"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Team to Be a Part of Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/connect"
              className="px-6 py-3 text-lg font-semibold bg-yellow-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Join Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
};

export default About;
