"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      days: "3 days ago",
      review: "This blog has been an incredible resource for my travels. The tips and stories are so well-written and insightful. Highly recommend it to anyone looking for adventure ideas!",
    },
    {
      name: "Bob Smith",
      days: "1 week ago",
      review: "I love the travel guides here! The recommendations are always spot on, and the writing is engaging. Can't wait for more updates!",
    },
    {
      name: "Clara Lewis",
      days: "2 weeks ago",
      review: "The blog has given me so many ideas for my next vacation. The author does a great job of capturing the essence of each destination!",
    },
    {
      name: "David Miller",
      days: "1 month ago",
      review: "An amazing blog! The writing is captivating and the advice is always practical. A great resource for anyone planning a trip.",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 px-8 md:px-20 "
        style={{ backgroundImage: "url('/pic1.jpg')" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Side - Empty or any content */}
        <div className="md:w-2/3"></div>

        {/* Right Side - Reviews Section */}
        <div className="md:w-1/3 bg-green-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">What People Say About Our Blog</h2>
          <div className="border-t-2 border-gray-300 pt-6">
            <motion.div
              key={currentReviewIndex}
              className="text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-semibold mb-2">{reviews[currentReviewIndex].name}</p>
              <p className="text-sm text-gray-500 mb-4">{reviews[currentReviewIndex].days}</p>
              <p className="text-gray-700">{reviews[currentReviewIndex].review}</p>
            </motion.div>
            {/* Buttons for navigating reviews */}
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevReview}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                &lt; Prev
              </button>
              <button
                onClick={handleNextReview}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Next &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
