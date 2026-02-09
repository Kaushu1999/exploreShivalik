import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiClock, FiStar, FiArrowRight } from "react-icons/fi";
import tourismData from "../../data/tourismData.json";

export default function TourismSiteDetail() {
  const [activeUK, setActiveUK] = useState(null);
  const [activeHP, setActiveHP] = useState(null);

  const uttarakhand = tourismData.states.find(
    (s) => s.name === "Uttarakhand"
  );

  const himachal = tourismData.states.find(
    (s) => s.name === "Himachal Pradesh"
  );

  const toggleUK = (place) => {
    setActiveUK(activeUK?.id === place.id ? null : place);
  };

  const toggleHP = (place) => {
    setActiveHP(activeHP?.id === place.id ? null : place);
  };

  return (
    <div className="bg-gradient-to-b from-[#F5F7FA] to-white">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center animate-fadeIn">
        <div className="inline-block mb-4">
          <span className="badge badge-accent">Explore the Himalayas</span>
        </div>
        <h1 className="heading-xl mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9]">
          {uttarakhand.tagline}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {uttarakhand.description}
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="btn-primary">Start Exploring</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

      {/* ================= UTTARAKHAND ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2">Uttarakhand Destinations</h2>
          <p className="text-gray-600">Discover the most beautiful destinations in the land of gods</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {uttarakhand.popularPlaces.map((place, idx) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleUK(place)}
              className={`
                card-premium p-6 cursor-pointer overflow-hidden group
                ${activeUK?.id === place.id ? 'ring-2 ring-[#F59E0B]' : ''}
              `}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg text-[#1F3A5F]">
                  {place.name}
                </h3>
                <motion.div
                  animate={activeUK?.id === place.id ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiArrowRight className="text-[#F59E0B]" />
                </motion.div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{place.title}</p>
              <div className="flex items-center text-xs text-gray-600 gap-2">
                <FiMapPin size={14} />
                <span>Uttarakhand</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UK DETAILS */}
        <AnimatePresence>
          {activeUK && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="mt-10 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#F59E0B]"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F3A5F] mb-3">
                    {activeUK.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {activeUK.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#F59E0B] mb-4">
                    <FiClock size={18} />
                    <span className="font-semibold">Best Time: {activeUK.bestTime}</span>
                  </div>
                  <button className="btn-accent w-full">
                    Book Your Trip
                  </button>
                </div>

                <div className="md:col-span-2">
                  <h4 className="font-semibold text-lg mb-4 text-[#1F3A5F]">Popular Activities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeUK.activities.map((act, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-gradient-to-r from-[#F5F7FA] to-[#E6ECF2] p-4 rounded-lg flex items-center gap-3 hover:shadow-md transition"
                      >
                        <FiStar className="text-[#F59E0B] flex-shrink-0" />
                        <span className="text-sm">{act}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SEPARATOR */}
      <div className="separator my-12"></div>

      {/* ================= HIMACHAL ================= */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-2">Himachal Pradesh Destinations</h2>
          <p className="text-gray-600">Experience adventure and tranquility in the Valley of Gods</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {himachal.popularPlaces.map((place, idx) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => toggleHP(place)}
              className={`
                p-6 rounded-2xl shadow-lg cursor-pointer text-white transition-all
                ${activeHP?.id === place.id
                  ? 'bg-gradient-to-br from-[#1F3A5F] to-[#2F73B9] ring-2 ring-[#F59E0B]'
                  : 'bg-gradient-to-br from-[#2F73B9] to-[#4FA3D1]'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{place.name}</h3>
                  <p className="text-sm opacity-90">{place.title}</p>
                </div>
                <FiArrowRight className="text-[#F59E0B] text-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* HP DETAILS */}
        <AnimatePresence>
          {activeHP && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="mt-10 bg-gradient-to-br from-white to-[#F5F7FA] p-8 rounded-2xl shadow-xl border-l-4 border-[#4FA3D1]"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#1F3A5F] mb-3">
                    {activeHP.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {activeHP.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#4FA3D1] mb-4">
                    <FiClock size={18} />
                    <span className="font-semibold">Best Time: {activeHP.bestTime}</span>
                  </div>
                  <button className="btn-primary w-full">
                    Plan Your Adventure
                  </button>
                </div>

                <div className="md:col-span-2">
                  <h4 className="font-semibold text-lg mb-4 text-[#1F3A5F]">Must-Do Activities</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeHP.activities.map((act, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-4 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-md transition border border-[#E6ECF2]"
                      >
                        <FiStar className="text-[#4FA3D1] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{act}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gradient-to-r from-[#1F3A5F] via-[#2F73B9] to-[#4FA3D1] text-white py-20 mt-16"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="heading-xl mb-4">Ready for Your Adventure?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the magic of Uttarakhand and Himachal Pradesh with our curated travel packages and expert guides.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1F3A5F] px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition"
            >
              Book Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1F3A5F] transition"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
