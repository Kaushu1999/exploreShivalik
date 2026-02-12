import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiUsers, FiFilter } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { Uttarakhand, Himachal, Common } from "../../constants/images";
import PlaceModal from "../../Components/PlaceModal";
import exploreData from "../../constants/exploreData";

/* 🔹 CARD ANIMATION */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export default function DestinationPage() {
  const [selectedState, setSelectedState] = useState("Uttarakhand");
  const [selectedPlace, setSelectedPlace] = useState(null);

  /* 🔍 SEARCH FROM URL */
  const search = new URLSearchParams(useLocation().search).get("search");

  const tourismData = [
    {
      state: "Uttarakhand",
      places: [
        { id: 1, name: "Haridwar", title: "Gateway to Gods", image: Uttarakhand.haridwarImg, bestTime: "Oct to April", activities: ["Ganga Aarti"] },
        { id: 2, name: "Rishikesh", title: "Yoga Capital", image: Uttarakhand.rishikeshImg, bestTime: "Sept to April", activities: ["Rafting", "Yoga"] },
        { id: 3, name: "Mussoorie", title: "Queen of Hills", image: Uttarakhand.mussoorieImg, bestTime: "March to June", activities: ["Sightseeing"] },
        { id: 4, name: "Dhanaulti", title: "Peaceful Hilltop", image: Uttarakhand.dhanaultiImg, bestTime: "March to June", activities: ["Nature Walks"] },
        { id: 5, name: "Kanatal", title: "Scenic Ridge", image: Uttarakhand.kanatalmg, bestTime: "March to June", activities: ["Camping"] },
        { id: 6, name: "Tehri", title: "Lakes & Adventure", image: Uttarakhand.tehriImg, bestTime: "Oct to March", activities: ["Water Sports"] },
        { id: 7, name: "Rudraprayag", title: "Confluence Town", image: Common.rudranathImg, bestTime: "March to June", activities: ["Sightseeing"] },
        { id: 8, name: "Devprayag", title: "Sacred Confluence", image: Common.devprayagImg, bestTime: "Oct to April", activities: ["Spiritual Visit"] },
        { id: 9, name: "Auli", title: "Skiing Paradise", image: Uttarakhand.auliImg, bestTime: "Dec to March", activities: ["Skiing"] },
        { id: 10, name: "Chopta", title: "Trek Gateway (Tungnath)", image: Common.tungnathImg, bestTime: "Apr to Jun", activities: ["Trekking"] },
        { id: 11, name: "Lansdowne", title: "Quiet Cantonment", image: Uttarakhand.lansdowneImg, bestTime: "March to June", activities: ["Relaxation"] },
      ],
    },
    {
      state: "Himachal",
      places: [
        { id: 101, name: "Shimla", title: "Mall Road & Ridge", image: Himachal.shimlaImg, bestTime: "March to June", activities: ["Sightseeing"] },
        { id: 102, name: "Manali", title: "Solang Valley", image: Himachal.manaliImg, bestTime: "Oct to Feb", activities: ["Snow"] },
        { id: 103, name: "Kasol", title: "Parvati Valley", image: Himachal.kasolImg, bestTime: "March to June", activities: ["Trekking"] },
        { id: 104, name: "Spiti Valley", title: "Cold Desert", image: Himachal.spitiImg, bestTime: "June to Sept", activities: ["Road Trip"] },
        { id: 105, name: "Jibhi", title: "Offbeat Village", image: Himachal.jibhiImg, bestTime: "March to June", activities: ["Nature Walk"] },
        { id: 106, name: "Kalpa", title: "Kinnaur Views", image: Himachal.kalpaImg, bestTime: "April to June", activities: ["Sightseeing"] },
        { id: 107, name: "Dharamshala", title: "Tibetan Culture", image: Himachal.dharamshalaImg, bestTime: "March to June", activities: ["Monastery"] },
        { id: 108, name: "Dalhousie", title: "Mini Switzerland", image: Himachal.dalhousieImg, bestTime: "March to June", activities: ["Photography"] },
        { id: 109, name: "Chandigarh", title: "Gateway City", image: Common.chandiImg, bestTime: "Year Round", activities: ["City Tours"] },
        { id: 110, name: "Amritsar", title: "Golden Temple", image: Common.amritsarImg, bestTime: "Oct to March", activities: ["Pilgrimage", "Heritage"] },
      ],
    },
  ];

  const currentState = tourismData.find(
    (item) => item.state === selectedState
  );

  const places = currentState?.places || [];

  /* 🔍 SEARCH FILTER (ONLY ADDITION) */
  const filteredPlaces = places.filter((place) =>
    search
      ? place.name.toLowerCase().includes(search.toLowerCase()) ||
        place.title.toLowerCase().includes(search.toLowerCase())
      : true
  );

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-white">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#1F3A5F] to-[#2F73B9] text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Explore Destinations</h1>
        <p className="text-blue-100 mt-2">Uttarakhand & Himachal Pradesh</p>
        {selectedState === "Uttarakhand" && (
          <p className="text-yellow-200 mt-2 font-semibold">Uttarakhand Destination – Garhwal</p>
        )}
      </div>

      {/* FILTER */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-10">
          <FiFilter className="text-2xl text-[#1F3A5F]" />
          {tourismData.map((item) => (
            <button
              key={item.state}
              onClick={() => setSelectedState(item.state)}
              className={`px-6 py-2 rounded-full font-semibold ${
                selectedState === item.state
                  ? "bg-[#F59E0B] text-white"
                  : "bg-gray-200"
              }`}
            >
              {item.state}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <AnimatePresence>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <motion.div
                key={place.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img src={place.image} alt={place.name} className="h-52 w-full object-cover" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1F3A5F]">{place.name}</h3>
                  <p className="text-[#F59E0B] font-semibold">{place.title}</p>

                  <div className="mt-4 text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <FiCalendar /> {place.bestTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiUsers /> {place.activities.length} Activities
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      // prefer detailed data from exploreData if available
                      const detailed = (exploreData[selectedState] || []).find(
                        (p) => p.id === place.id || p.name === place.name
                      );
                      if (detailed) {
                        setSelectedPlace(detailed);
                      } else {
                        // fallback: convert activities strings to objects without images
                        const fallback = {
                          ...place,
                          heroImage: place.image,
                          activities: (place.activities || []).map((a) => (typeof a === 'string' ? { name: a } : a)),
                        };
                        setSelectedPlace(fallback);
                      }
                    }}
                    className="mt-5 w-full bg-[#F59E0B] text-white py-2 rounded-full font-semibold"
                  >
                    Explore More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    {selectedPlace && (
      <PlaceModal
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
    )}
    </>
  );
}
