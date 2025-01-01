"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* Full Width Video */}
      <div className="relative w-full aspect-[16/5]">
      <div className="relative w-full h-full">
  {/* Background Image */}
  <Image
    src="/pic11.jpg" // Replace with your image path
    alt="Background Image"
    width={1000}
    height={1200}
    className="w-full h-full object-cover"
  />

  {/* Welcome Text */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center text-center text-white"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold shadow-lg text-white ">
      Welcome to Mountain & River Blog
    </h1>
  </motion.div>
</div>


      {/* Feature Post */}
      <motion.section
        className="my-16 px-8 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-3xl mb-8 text-center">
          Start the Feature Post
        </h2>
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="w-full md:w-3/4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/pic2.jpg"
              alt="Feature Post"
              width={1400}
              height={800}
              className="w-full h-3/5 mb-4 rounded-lg"
            />
            <h3 className="font-semibold text-xl mb-2">Mountain Adventures</h3>
            <p className="text-gray-600">By Author Name | Date: 2024-12-20</p>
            <p className="mt-4 text-gray-800 w-11/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nam
              illum cum consectetur aliquam consequatur expedita nisi
              praesentium explicabo quos voluptate, impedit, et soluta. Incidunt
              fugiat adipisci quisquam temporibus iste.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua... Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nam
              illum cum consectetur aliquam consequatur expedita nisi
              praesentium explicabo quos voluptate, impedit, et soluta. Incidunt
              fugiat adipisci quisquam temporibus iste.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            
            </p>
            <Link
              href="/blog/mountain-adventures"
              className="text-blue-500 mt-4 inline-block"
            >
              Read More
            </Link>
          </motion.div>

          {/* Left Sidebar */}
          <motion.div
            className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-bold text-xl mb-4">ALL POSTS</h3>
            <ul className="space-y-8">
              {[
                { title: "Mountain Adventures", date: "2024-12-19" },
                { title: "River Exploration", date: "2024-12-18" },
                { title: "Mountain Trails", date: "2024-12-17" },
                { title: "River Reflections", date: "2024-12-16" },
              ].map((post, index) => (
                <li key={index} className="group">
                  <h4 className="font-semibold text-lg group-hover:text-blue-500">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 font-bold">{`By Author Name | Date: ${post.date}`}</p>
                  <p className="text-lg text-gray-800 font-bold hidden group-hover:block">
                    Click to explore more about this amazing blog.
                  </p>
                </li>
              ))}
            </ul>
            <Link href="/blog" className="text-blue-500 inline-block">
              View All
            </Link>
          </motion.div>
        </div>
          {/* Weight Section */}

          {/* Weight Section */}
<section className="bg-gray-200 px-4 sm:px-6 lg:px-8 py-8 md:py-12">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
    {/* Left Side: Our Mission */}
    <div className="w-full md:w-1/2 px-4">
      <h2 className="font-bold text-2xl sm:text-3xl mb-4">Our Mission</h2>
      <p className="text-gray-700 text-base sm:text-lg mb-4">
        Creating valuable content for creatives all around the world
      </p>
      <p className="text-gray-600 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </div>

    {/* Right Side: About Us */}
    <div className="w-full md:w-1/2 px-4">
      <h2 className="font-bold text-2xl sm:text-3xl mb-4">About Us</h2>
      <p className="text-gray-700 text-base sm:text-lg font-bold mb-4">
        We are a community of content writers who share their learnings
      </p>
      <p className="text-gray-600 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link href="/about" className="text-blue-500 font-medium mt-4 block">
        Read More
      </Link>
    </div>
  </div>
</section>

     
      </motion.section>

     {/* Choose a Category */}
<section
  className="relative py-16 px-8 md:px-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/pic8.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      Choose a Category
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Mountain Adventures", 
          href: "/category/mountain", 
          content: "Explore breathtaking mountain views." 
        },
        { 
          title: "River Exploration", 
          href: "/category/river", 
          content: "Dive into serene river explorations." 
        },
        { 
          title: "Travel Reviews", 
          href: "/category/reviews", 
          content: "Read authentic reviews of top destinations." 
        },
        { 
          title: "Nature Trails", 
          href: "/category/nature", 
          content: "Discover the beauty of nature trails." 
        },
      ].map((category, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col justify-center items-center h-40 rounded-lg shadow-lg bg-white bg-opacity-80 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={category.href}>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800">{category.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{category.content}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Why We Started */}
<section
  className="relative h-96 mt-32 bg-cover bg-center"
  style={{ backgroundImage: "url('/pic1.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-8">
    <motion.h2
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Why We Started?
    </motion.h2>
    <motion.p
      className="text-lg font-medium mb-6"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      It started out as a simple idea and evolved into our passion.
    </motion.p>
    <motion.p
      className="text-sm max-w-2xl mb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <Link
        href="/discover"
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition"
      >
        Discover Our Story
      </Link>
    </motion.div>
  </div>
</section>



    </div>
    </div>
  );
};

export default Home;
