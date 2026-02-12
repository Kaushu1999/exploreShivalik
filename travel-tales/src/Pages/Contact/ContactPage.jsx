import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

// Initialize EmailJS (replace with your Public Key from EmailJS dashboard)
emailjs.init("XfMXQKqa1yiZHyDod");


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();

  useEffect(() => {
    if (location?.state) {
      const { subject, message } = location.state;
      setFormData((prev) => ({
        ...prev,
        subject: subject || prev.subject,
        message: message || prev.message,
      }));
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("📤 Sending email to owner...");
      console.log("Form Data:", formData);
      // 1️⃣ Send email to owner (Contact Us)
await emailjs.send(
  "service_69sh4tz",
  "template_s6w17i8",
  {
    name: formData.name,
    message: formData.message,
    title: formData.subject,
    email: formData.email,

    // owner details
    to_email: "exploreshivaliks@gmail.com",
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    reply_to: formData.email,
  }
);

console.log("✅ Email to owner sent successfully!");


// 2️⃣ Send auto-reply to user
console.log("📤 Sending confirmation email to user...");

await emailjs.send(
  "service_69sh4tz",
  "template_m4u00fr",
  {
    name: formData.name,
    message: formData.message,
    title: "We received your enquiry",
    email: formData.email,

    // VERY IMPORTANT: this must match {{to_email}} in template
    to_email: formData.email,

    // optional fields for template
    user_name: formData.name,
    user_subject: formData.subject,
  }
);

console.log("✅ Confirmation email sent successfully!");


      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error("❌ Error sending email:", err);
      console.error("Error Object:", err);
      console.error("Error Message:", err?.message);
      console.error("Error Status:", err?.status);
      console.error("Error Text:", err?.text);
      console.error("Full Error Details:", {
        message: err?.message,
        status: err?.status,
        text: err?.text,
        toString: err?.toString(),
      });
      
      let errorMessage = "Failed to send message";
      if (err?.message) {
        errorMessage = `${errorMessage}: ${err.message}`;
      } else if (err?.text) {
        errorMessage = `${errorMessage}: ${err.text}`;
      } else if (err?.status) {
        errorMessage = `${errorMessage}: Status ${err.status}`;
      } else if (typeof err === "string") {
        errorMessage = `${errorMessage}: ${err}`;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 81910 04719, +91 78953 32199",
      subtext: "Mon-Fri, 9AM-6PM IST",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      details: "exploreshivaliks@gmail.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Office",
      details: "Indra Colony, Lakhanpur Road, Ramnagar, Nainital 244715, Uttarakhand",
      subtext: "Adventure Capital",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Hours",
      details: "24/7 Support",
      subtext: "Always here to help",
    },
  ];

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

  // WhatsApp config — number must be in E.164 without the plus sign
  const whatsappNumber = "918191004719"; // +91 81910 04719 -> 918191004719
  const getWhatsAppLink = (data) => {
    const name = data?.name || "";
    const subject = data?.subject || "";
    const message = data?.message || "";
    const email = data?.email || "";
    const text = `Hi, I am ${name}. ${subject ? "Subject: " + subject + "." : ""} ${message} ${email ? "(Email: " + email + ")" : ""}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message!
            </p>
          </motion.div>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card-premium p-6 text-center"
            >
              <div className="text-4xl text-[#F59E0B] mb-3 flex justify-center">{info.icon}</div>
              <h3 className="font-bold text-[#1F3A5F] mb-2">{info.title}</h3>
              <p className="text-gray-700 font-semibold mb-1">{info.details}</p>
              <p className="text-sm text-gray-500">{info.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CONTACT FORM & MAP */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-[#1F3A5F] mb-8">Send us a Message</h2>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  <div>
                    <p className="font-bold">Message Sent Successfully!</p>
                    <p className="text-sm">Thank you for reaching out. We'll contact you soon at {formData.email}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">✕</span>
                  <div>
                    <p className="font-bold">Error</p>
                    <p className="text-sm">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition disabled:bg-gray-100"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Tour Booking</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#F59E0B] focus:outline-none transition"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitted || loading}
                className="w-full btn-accent flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : submitted ? "Sending..." : "Send Message"}
                <FiSend />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT SIDE - INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-[#F5F7FA] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1F3A5F] mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#F59E0B]">✓</span>
                  <span>Expert travel consultants ready to help</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F59E0B]">✓</span>
                  <span>Customized tour packages for your needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F59E0B]">✓</span>
                  <span>24/7 customer support for peace of mind</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F59E0B]">✓</span>
                  <span>Best prices guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#F59E0B]">✓</span>
                  <span>Safe and secure booking process</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#1F3A5F] to-[#2F73B9] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quick Response Time</h3>
              <p className="text-blue-100 mb-4">
                We value your time. Our team responds to all inquiries within 24 hours.
              </p>
              <p className="text-blue-100 font-semibold">
                For urgent matters, call us directly at +91 81910 04719
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#1F3A5F] mb-12">Common Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How do I book a tour?", a: "Simply fill out our contact form or call us. Our team will guide you through the entire booking process." },
              { q: "What payment methods do you accept?", a: "We accept all major credit/debit cards, bank transfers, and digital wallets." },
              { q: "Can I cancel or modify my booking?", a: "Yes, cancellations and modifications are allowed up to 7 days before the tour date." },
              { q: "Do you offer group discounts?", a: "Absolutely! We provide special rates for groups of 10 or more." },
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
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="mb-6 text-blue-100">Contact us today and let's plan your perfect adventure</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-3 rounded-full font-bold"
        >
          Get Started Now
        </motion.button>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppLink(formData)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-transform transform hover:scale-105"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

    </div>
  );
}
