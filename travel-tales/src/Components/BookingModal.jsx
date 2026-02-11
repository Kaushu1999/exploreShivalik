import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar, FiUsers, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

emailjs.init("zZpiZM4Ep1lsPX9sw");

export default function BookingModal({
  isOpen,
  onClose,
  destination = "",
  prefilledSubject = "booking",
}) {
  const [bookingData, setBookingData] = useState({
    destination: destination || "",
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    startDate: "",
    endDate: "",
    preferences: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Prevent background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !bookingData.destination ||
      !bookingData.startDate ||
      !bookingData.name ||
      !bookingData.email
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const bookingMessage = `
Destination: ${bookingData.destination}
Travelers: ${bookingData.travelers}
Start Date: ${bookingData.startDate}
End Date: ${bookingData.endDate || "Not specified"}
Preferences: ${bookingData.preferences || "None"}
      `.trim();

      await emailjs.send("service_xf5d4lj", "template_13igutl", {
        name: bookingData.name,
        message: bookingMessage,
        title: "Booking Request - " + bookingData.destination,
        email: bookingData.email,
        to_email: "exploreshivaliks@gmail.com",
        from_name: bookingData.name,
        from_email: bookingData.email,
        phone: bookingData.phone,
        subject: "Booking Request - " + bookingData.destination,
        reply_to: bookingData.email,
      });

      await emailjs.send("service_xf5d4lj", "template_13igutl", {
        name: bookingData.name,
        message: bookingMessage,
        title: "Booking Request Received",
        email: bookingData.email,
        to_email: bookingData.email,
      });

      setSubmitted(true);

      setBookingData({
        destination: destination || "",
        name: "",
        email: "",
        phone: "",
        travelers: "1",
        startDate: "",
        endDate: "",
        preferences: "",
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError("Failed to send booking request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: 40 },
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
          className="
            fixed inset-0 bg-black/50 z-50
            flex items-end sm:items-center justify-center
            p-3 sm:p-4
          "
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="
              bg-white rounded-2xl shadow-2xl
              w-full max-w-lg
              p-5 sm:p-6 md:p-8
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F3A5F]">
                Book Your Adventure
              </h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <FiX size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {/* Success */}
              {submitted && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg text-sm">
                  ✓ Booking request sent! We'll contact you soon.
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Name */}
              <input
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                disabled={loading}
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none"
              />

              {/* Email + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
                />

                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  disabled={loading}
                  className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
                />
              </div>

              {/* Destination */}
              <input
                type="text"
                name="destination"
                value={bookingData.destination}
                onChange={handleChange}
                placeholder="Destination *"
                required
                disabled={loading}
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
              />

              {/* Travelers */}
              <select
                name="travelers"
                value={bookingData.travelers}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
              >
                {[1,2,3,4,5,6,7,8,9,10,"10+"].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Person" : "People"}
                  </option>
                ))}
              </select>

              {/* Dates */}
              <input
                type="date"
                name="startDate"
                value={bookingData.startDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
              />

              <input
                type="date"
                name="endDate"
                value={bookingData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
              />

              {/* Preferences */}
              <textarea
                name="preferences"
                value={bookingData.preferences}
                onChange={handleChange}
                rows="3"
                placeholder="Special Requests"
                className="w-full px-4 py-3 text-sm sm:text-base rounded-lg border-2 border-gray-300 focus:border-[#F59E0B]"
              />

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 font-semibold hover:bg-gray-100"
                >
                  Cancel
                </button>

                <motion.button
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-3 rounded-lg bg-gradient-to-r from-[#F59E0B] to-[#E59E0B] text-white font-semibold flex items-center justify-center gap-2"
                >
                  {loading ? "Sending..." : <>
                    <FiSend size={18} />
                    Send Request
                  </>}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
