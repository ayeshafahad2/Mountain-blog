"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Reviews = () => {
  const [reviews, setReviews] = useState<{ email: string; review: string }[]>(
    []
  );
  const [reviewInput, setReviewInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = () => {
    if (!emailInput || !emailInput.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    setReviews((prevReviews) => [
      ...prevReviews,
      { email: emailInput, review: reviewInput },
    ]);
    setReviewInput("");
    setEmailInput("");
    setIsModalOpen(false);
  };

  const title = "Discover Our Story";
  const description =
    "Dive into the journey that defines us, a tale of passion, perseverance, and purpose.";
  const author = "Your Team";
  const date = "2024-12-18";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Blog Post Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mt-2">{title}</h1>
        <p className="text-lg mt-2 text-gray-700">{description}</p>
        <p className="mt-4 text-gray-600">By {author}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </motion.div>

      {/* Image */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/pic8.jpg"
          alt="Our story image"
          height={1000}
          width={1400}
          className="w-full rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Blog Post Content */}
      <motion.div
        className="mt-8 text-lg text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p>
          Every journey has its beginning, and ours is rooted in a dream. A
          dream to inspire, connect, and create something meaningful. From our
          humble beginnings to becoming a part of your lives, our story is one
          of relentless pursuit and dedication.
        </p>
        <br />
        <p>
          We believe in the power of ideas, the strength of collaboration, and
          the beauty of shared experiences. Through every challenge and triumph,
          weve grown not just as a team but as a family, driven by the values
          that define us.
        </p>
        <br />
        <p>
          As you journey through our story, we hope you see not just the
          milestones weve achieved but the passion and heart that have guided
          us every step of the way. This is more than a story; its a testament
          to the belief that together, we can create wonders.
        </p>
      </motion.div>

      {/* Reviews Section */}
      <div className="mt-12 space-y-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold">Share Your Thoughts</h3>
          <div className="flex flex-col md:flex-row items-center justify-center mt-4 gap-4">
            <input
              type="text"
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              placeholder="Leave your review"
              className="px-4 py-2 border rounded-md w-full md:w-3/4 shadow-sm focus:ring focus:ring-blue-300"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
            >
              Add a Review
            </button>
          </div>
        </motion.div>

        {/* Modal for Email Input */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
              <h3 className="text-lg font-semibold mb-4">Enter Your Email</h3>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300 mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReview}
                  className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {reviews.length > 0 && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-sm text-gray-500">Email: {review.email}</p>
                <p className="text-gray-800">{review.review}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
