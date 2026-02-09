import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiUsers, FiDollarSign, FiArrowRight, FiCheck } from "react-icons/fi";

export default function ToursPage() {
  const [selectedDuration, setSelectedDuration] = useState("all");

  const tours = [
    {
      id: 1,
      name: "Spiritual Char Dham Yatra",
      duration: 12,
      price: 25000,
      group: "6-10",
      description: "Experience the sacred journey to four pilgrimage sites",
      includes: ["Accommodations", "Guided Tours", "Meals", "Transportation"],
      difficulty: "Moderate",
      image: "🏛️",
    },
    {
      id: 2,
      name: "Adventure Trekking Tour",
      duration: 7,
      price: 18000,
      group: "4-8",
      description: "Challenging mountain trails with stunning views",
      includes: ["Expert Guides", "Equipment", "Camping", "Meals"],
      difficulty: "Hard",
      image: "🗻",
    },
    {
      id: 3,
      name: "Romantic Honeymoon Package",
      duration: 5,
      price: 35000,
      group: "Couples",
      description: "Perfect getaway for couples with luxury experiences",
      includes: ["5-Star Hotels", "Private Tours", "Spa", "Meals"],
      difficulty: "Easy",
      image: "💑",
    },
    {
      id: 4,
      name: "Family Holiday Bliss",
      duration: 10,
      price: 22000,
      group: "4-6",
      description: "Fun-filled adventure for the whole family",
      includes: ["All Transport", "Kid-friendly Activities", "Meals", "Lodging"],
      difficulty: "Easy",
      image: "👨‍👩‍👧‍👦",
    },
    {
      id: 5,
      name: "Wildlife & Nature Expedition",
      duration: 8,
      price: 20000,
      group: "5-12",
      description: "Discover diverse flora and fauna of the Himalayas",
      includes: ["Expert Naturalist", "Safe Transport", "Meals", "Photography"],
      difficulty: "Moderate",
      image: "🦅",
    },
    {
      id: 6,
      name: "Budget Explorer Pass",
      duration: 4,
      price: 12000,
      group: "2+",
      description: "Affordable exploration of popular destinations",
      includes: ["Basic Lodging", "Group Tours", "Local Meals", "Transport"],
      difficulty: "Easy",
      image: "🎒",
    },
  ];

  const filteredTours = tours.filter((tour) => {
    if (selectedDuration === "all") return true;
    if (selectedDuration === "short") return tour.duration <= 5;
    if (selectedDuration === "medium") return tour.duration > 5 && tour.duration <= 10;
    if (selectedDuration === "long") return tour.duration > 10;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#2F73B9] to-[#4FA3D1] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Tour Packages</h1>
            <p className="text-xl text-blue-100">
              Choose from our curated selection of unforgettable travel experiences
            </p>
          </motion.div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { value: "all", label: "All Tours" },
            { value: "short", label: "Short (≤5 days)" },
            { value: "medium", label: "Medium (6-10 days)" },
            { value: "long", label: "Long (10+ days)" },
          ].map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDuration(filter.value)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedDuration === filter.value
                  ? "bg-[#F59E0B] text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#F59E0B]"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* TOURS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTours.map((tour) => (
            <motion.div
              key={tour.id}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="card-premium overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white p-6 flex items-start justify-between">
                <div>
                  <div className="text-4xl mb-2">{tour.image}</div>
                  <h3 className="text-xl font-bold">{tour.name}</h3>
                </div>
                <span className="badge badge-accent text-xs">{tour.difficulty}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1">
                <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiCalendar className="text-[#F59E0B]" />
                    <span>{tour.duration} Days</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiUsers className="text-[#4FA3D1]" />
                    <span>{tour.group} Persons</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F59E0B] font-bold text-lg">
                    <FiDollarSign />
                    <span>₹{tour.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <p className="font-semibold text-sm mb-3">Includes:</p>
                  {tour.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <FiCheck className="text-green-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Book Now
                  <FiArrowRight />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* FAQ SECTION */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1F3A5F] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What's included in the tour price?",
                a: "Accommodation, meals, guided tours, and local transportation are included. Check each package for specifics.",
              },
              {
                q: "Can I customize a tour?",
                a: "Yes! Contact our team and we'll create a custom itinerary based on your preferences.",
              },
              {
                q: "What's the best time to visit?",
                a: "March-June and September-November are ideal. Each destination has its own peak season.",
              },
              {
                q: "Do you provide travel insurance?",
                a: "Optional travel insurance can be added to any package. We recommend it for international travelers.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#F5F7FA] p-4 rounded-lg"
              >
                <p className="font-bold text-[#1F3A5F] mb-2">{faq.q}</p>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[#1F3A5F] via-[#2F73B9] to-[#4FA3D1] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="mb-6 text-blue-100">Our travel experts are ready to help you find the perfect tour</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-3 rounded-full font-bold"
        >
          Contact Our Experts
        </motion.button>
      </div>
    </div>
  );
}
