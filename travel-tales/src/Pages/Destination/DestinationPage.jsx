import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiUsers, FiCalendar, FiStar, FiArrowRight, FiFilter } from "react-icons/fi";
import tourismData from "../../data/tourismData.json";

export default function DestinationPage() {
  const [selectedState, setSelectedState] = useState("Uttarakhand");
  const allPlaces = selectedState === "Uttarakhand" 
    ? tourismData.states[0].popularPlaces 
    : tourismData.states[1].popularPlaces;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Explore Destinations</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover breathtaking locations across Uttarakhand and Himachal Pradesh
            </p>
          </motion.div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-8">
          <FiFilter className="text-[#1F3A5F] text-2xl" />
          <span className="text-gray-600 font-semibold">Filter by State:</span>
          <div className="flex gap-3">
            {["Uttarakhand", "Himachal Pradesh"].map((state) => (
              <motion.button
                key={state}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedState(state)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedState === state
                    ? "bg-[#F59E0B] text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#F59E0B]"
                }`}
              >
                {state}
              </motion.button>
            ))}
          </div>
        </div>

        {/* DESTINATIONS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allPlaces.map((place, idx) => (
            <motion.div
              key={place.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card-premium group overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#2F73B9] to-[#4FA3D1] relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full flex items-center justify-center text-white text-4xl"
                >
                  📍
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1F3A5F] mb-2">{place.name}</h3>
                <p className="text-[#F59E0B] font-semibold mb-3">{place.title}</p>
                <p className="text-gray-600 text-sm mb-4">{place.description}</p>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiCalendar className="text-[#F59E0B]" />
                    <span>{place.bestTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiUsers className="text-[#4FA3D1]" />
                    <span>{place.activities.length} Activities Available</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-accent flex items-center justify-center gap-2"
                >
                  Explore More
                  <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* STATS */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: "📍", label: "Destinations", value: "50+" },
              { icon: "🗻", label: "Mountains", value: "100+" },
              { icon: "🏛️", label: "Temples", value: "200+" },
              { icon: "👥", label: "Travelers", value: "10K+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#1F3A5F]">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#4FA3D1] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Visit?</h2>
        <p className="mb-6 text-blue-100">Book your dream destination with our expert guides today</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-3 rounded-full font-bold"
        >
          Plan Your Trip
        </motion.button>
      </div>
    </div>
  );
}
