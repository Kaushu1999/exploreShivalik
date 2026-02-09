import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiUsers, FiMapPin } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BookingModal({ isOpen, onClose, destination = "", prefilledSubject = "booking" }) {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState({
    destination: destination || "",
    travelers: "1",
    startDate: "",
    endDate: "",
    preferences: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToContact = (e) => {
    e.preventDefault();
    if (!bookingData.destination || !bookingData.startDate) {
      alert("Please fill in destination and start date");
      return;
    }

    const bookingMessage = `
Destination: ${bookingData.destination}
Number of Travelers: ${bookingData.travelers}
Start Date: ${bookingData.startDate}
End Date: ${bookingData.endDate || "Not specified"}
Preferences: ${bookingData.preferences || "None"}
    `.trim();

    onClose();
    navigate("/contact", {
      state: {
        subject: prefilledSubject,
        message: bookingMessage,
      },
    });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 20 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[#1F3A5F]">Book Your Adventure</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleProceedToContact} className="space-y-4">
              {/* Destination */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FiMapPin size={18} className="text-[#F59E0B]" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={bookingData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Nainital, Manali, Rishikesh"
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                />
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FiUsers size={18} className="text-[#F59E0B]" />
                  Number of Travelers
                </label>
                <select
                  name="travelers"
                  value={bookingData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Person" : "People"}
                    </option>
                  ))}
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FiCalendar size={18} className="text-[#F59E0B]" />
                  Start Date
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={bookingData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <FiCalendar size={18} className="text-[#F59E0B]" />
                  End Date (Optional)
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={bookingData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                />
              </div>

              {/* Preferences */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="preferences"
                  value={bookingData.preferences}
                  onChange={handleChange}
                  rows="3"
                  placeholder="e.g., Budget preferences, dietary restrictions, adventure level..."
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#E59E0B] text-white font-semibold hover:shadow-lg transition"
                >
                  Continue to Contact
                </motion.button>
              </div>
            </form>

            {/* Info */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              You'll be guided to our contact form to finalize your booking details.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
