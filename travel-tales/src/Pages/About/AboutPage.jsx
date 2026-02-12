import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiGlobe } from "react-icons/fi";

export default function AboutPage() {
  const values = [
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Our Mission",
      description: "To provide authentic, unforgettable travel experiences that connect people with nature and culture.",
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the leading travel companion for discovering the world's most beautiful destinations.",
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Our Values",
      description: "Sustainability, authenticity, and customer satisfaction guide every decision we make.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "8+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  const team = [
    { name: "Saurabh Suyal", role: "Founder & CEO", emoji: "👨‍💼" },
    { name: "Priya Sharma", role: "Head of Operations", emoji: "👩‍💼" },
    { name: "Arjun Singh", role: "Travel Consultant", emoji: "👨‍🚀" },
    { name: "Sneha Patel", role: "Customer Care Manager", emoji: "👩‍💻" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Explore Shivaliks</h1>
            <p className="text-xl text-blue-100">
              Your trusted companion for discovering the magic of the Himalayas
            </p>
          </motion.div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold text-[#1F3A5F] mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Explore Shivaliks was founded with a simple dream: to share the breathtaking beauty of
              Uttarakhand and Himachal Pradesh with travelers from around the world. What started as
              a small initiative has grown into a trusted platform serving thousands of happy customers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We believe that travel is not just about visiting places; it's about creating memories,
              connecting with people, and discovering yourself. Every journey we curate is designed to
              provide authentic experiences and lasting connections.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are proud to be the most recommended travel platform for exploring the sacred
              and adventurous destinations of North India.
            </p>
            <div className="mt-6">
              <p className="text-gray-700">Founder: <span className="text-[#F59E0B] font-semibold">Saurabh Suyal</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-6xl text-center text-[#F59E0B]"
          >
            🏔️
          </motion.div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#1F3A5F] mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="card-premium p-8 text-center"
              >
                <div className="text-4xl text-[#F59E0B] mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#1F3A5F] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#F59E0B] mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      {/* <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-[#1F3A5F] mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="card-premium p-6 text-center"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-lg font-bold text-[#1F3A5F]">{member.name}</h3>
              <p className="text-[#F59E0B] font-semibold text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* COMMITMENT */}
      <div className="bg-[#F5F7FA] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="text-5xl mb-4">♻️</div>
            <h2 className="text-3xl font-bold text-[#1F3A5F] mb-4">Our Commitment to Sustainability</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are committed to sustainable and responsible tourism. Every tour is designed to
              minimize environmental impact while maximizing positive contributions to local communities.
              By choosing us, you're not just traveling – you're making a difference.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#1F3A5F] via-[#2F73B9] to-[#4FA3D1] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Travel Community</h2>
        <p className="mb-6 text-blue-100">Start your adventure with us today</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-3 rounded-full font-bold"
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
}
