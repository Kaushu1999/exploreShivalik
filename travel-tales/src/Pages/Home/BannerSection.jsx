import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSection() {
  const images = Object.values(
    import.meta.glob("../../assets/*.{jpg,jpeg,png,webp}", {
      eager: true,
      import: "default",
    })
  );

  // Split images into groups of 4 for collage
  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    slides.push(images.slice(i, i + 4));
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div className="w-full relative overflow-hidden" style={{ height: 'calc(var(--vh, 1vh) * 80)', minHeight: '400px' }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ 
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slides.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">

              {/* COLLAGE GRID */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {group.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover block"
                    alt="travel"
                  />
                ))}
              </div>

              {/* ENHANCED OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

              {/* TEXT CONTENT WITH ANIMATIONS */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6"
              >
                <motion.div
                  variants={itemVariants}
                  className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30"
                >
                  <span className="text-sm font-semibold tracking-wide">Welcome to Explore Shivalik</span>
                </motion.div>

                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl"
                >
                  Explore Uttarakhand <br /> & Himachal Pradesh
                </motion.h2>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl drop-shadow-lg"
                >
                  <span className="text-[#F59E0B] font-semibold">Char Dham</span> • <span className="text-blue-200">Sacred Mountains</span> • <span className="text-orange-200">Ancient Temples</span> • <span className="text-blue-200">Adventure & Serenity</span>
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#F59E0B] hover:bg-[#E59E0B] text-white px-8 py-4 rounded-full font-bold shadow-xl transition text-lg"
                  >
                    Explore Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition text-lg"
                  >
                    Learn More
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="mt-12 flex gap-8 justify-center text-sm"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-gray-200">Destinations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">10K+</div>
                    <div className="text-gray-200">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-gray-200">Support</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white text-sm font-medium">Scroll to explore</span>
                  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  );
}
