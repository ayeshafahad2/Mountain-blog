"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  profession: string;
  yearsExperience: string;
  education: string;
  blogLink: string;
  referral: string;
  message: string;
  higherEducation: string[];
  professions: { profession: string; experience: string }[];
}

export default function JoinUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    profession: "",
    yearsExperience: "",
    education: "",
    blogLink: "",
    referral: "",
    message: "",
    higherEducation: [],
    professions: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEducation = () => {
    if (formData.education) {
      setFormData({
        ...formData,
        higherEducation: [...formData.higherEducation, formData.education],
        education: "", // Reset the input field after adding
      });
    }
  };

  const handleAddProfession = () => {
    if (formData.profession && formData.yearsExperience) {
      setFormData({
        ...formData,
        professions: [
          ...formData.professions,
          { profession: formData.profession, experience: formData.yearsExperience },
        ],
        profession: "", // Reset the profession input
        yearsExperience: "", // Reset the years of experience input
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);  // Alert the success message after submitting
  };

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundImage: "url('/pic8.jpg')" }}>
      {/* Banner with "Join Us" overlaid */}
      <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: "url('/pic12.jpg')" }}>
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join Us
        </motion.div>
      </div>

      <div className="container mx-auto p-6">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-full sm:max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-black">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-black rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-black">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-black rounded-md"
                  required
                />
              </div>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age"  className="block text-black">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full p-3 border border-black rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-black rounded-md"
                required
              />
            </div>

            {/* Higher Education */}
            <div>
              <label htmlFor="education" className="block text-black">Higher Education</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full p-3 border border-gray-600 rounded-md"
              >
                <option value="">Select Degree</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
                <option value="PhD">other</option>
              </select>
              <button
                type="button"
                onClick={handleAddEducation}
                className="mt-2 w-full bg-yellow-400 text-white py-2 rounded-md"
              >
                Add Education
              </button>
              <ul className="mt-2">
                {formData.higherEducation.map((degree, index) => (
                  <li key={index} className="text-black">{degree}</li>
                ))}
              </ul>
            </div>

            {/* Profession & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="profession" className="block text-black">Profession</label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full p-3 border border-black rounded-md"
                />
              </div>

              <div>
                <label htmlFor="yearsExperience" className="block text-black">Years of Experience</label>
                <input
                  type="number"
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  className="w-full p-3 border border-black rounded-md"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddProfession}
              className="w-full bg-yellow-400 text-white py-2 rounded-md"
            >
              Add Profession
            </button>
            <ul className="mt-2">
              {formData.professions.map((item, index) => (
                <li key={index} className="text-black">
                  {item.profession} ({item.experience} years)
                </li>
              ))}
            </ul>

            {/* Blog Link */}
            <div>
              <label htmlFor="blogLink" className="block text-black">Blog Link</label>
              <input
                type="url"
                id="blogLink"
                name="blogLink"
                value={formData.blogLink}
                onChange={handleChange}
                className="w-full p-3 border border-black rounded-md"
              />
            </div>

            {/* Referral */}
            <div>
              <label htmlFor="referral" className="block text-black">Referral</label>
              <input
                type="text"
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-3 border border-black rounded-md"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-black">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-black rounded-md"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
