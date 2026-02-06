import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import bannerImgFirst from "../../assets/img_1.jpg";
import bannerImgSecond from "../../assets/img_2.jpg";
import bannerImgThird from "../../assets/img_3.jpg";
import bannerImgFourth from "../../assets/img_4.jpg";
import bannerImgFifth from "../../assets/img_5.jpg";
import bannerImgSeventh from "../../assets/img_7.jpg";
import bannerImgEighth from "../../assets/img_8.jpg";
import bannerImgNinth from "../../assets/img_9.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function BannerSection() {
  const slides = [
    {
      id: 1,
      img: bannerImgFirst,
      title: "Explore Beautiful Lakes",
      subtitle: "Experience the peace of nature"
    },
    {
      id: 2,
      img: bannerImgSecond,
      title: "Mountain Adventures",
      subtitle: "Discover amazing destinations"
    },
    {
      id: 3,
      img: bannerImgThird,
      title: "Travel With Comfort",
      subtitle: "Best tours and packages"
    },
    {
      id: 4,
      img: bannerImgFourth,
      title: "Feel The Nature",
      subtitle: "Unforgettable experiences"
    },
    {
      id: 5,
      img: bannerImgFifth,
      title: "Adventure Awaits",
      subtitle: "Let’s explore the world"
    },
    {
      id: 6,
      img: bannerImgSeventh,
      title: "Dream Destinations",
      subtitle: "Your journey starts here"
    },
    {
      id: 7,
      img: bannerImgEighth,
      title: "Discover New Places",
      subtitle: "Memories for lifetime"
    },
    {
      id: 8,
      img: bannerImgNinth,
      title: "Travel & Enjoy",
      subtitle: "Plan your next trip"
    }
  ];

  return (
    <div className="w-full h-[75vh] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-full relative">
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt={slide.title}
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-6xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base md:text-xl drop-shadow">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
