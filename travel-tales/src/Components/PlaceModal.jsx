import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function PlaceModal({ place, onClose }) {
  if (!place) return null

  const images = place.images && place.images.length ? place.images : [place.heroImage || place.image]
  const [mainImage, setMainImage] = useState(images[0])

  useEffect(() => {
    const imgs = place.images && place.images.length ? place.images : [place.heroImage || place.image]
    setMainImage(imgs[0])
  }, [place])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/60" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

        <motion.div
          className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-start justify-between p-4 border-b gap-4">
            <div>
              <h3 className="text-2xl font-bold text-[#1F3A5F]">{place.name}</h3>
              <p className="text-sm text-gray-600">{place.title}</p>
              {place.description && (
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">{place.description}</p>
              )}
            </div>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <FiX size={22} />
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="w-full h-72 bg-gray-100 rounded-lg overflow-hidden">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt={place.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-auto">
                  {images.map((src, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setMainImage(src)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex-none w-24 h-16 rounded overflow-hidden border ${mainImage===src? 'ring-2 ring-[#F59E0B]' : ''}`}
                    >
                      <img src={src} alt={`${place.name}-${idx}`} className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-[#1F3A5F] mb-2">Activities</h4>
              <ul className="list-inside text-sm text-gray-700 space-y-3">
                {place.activities && place.activities.map((act, i) => (
                  <motion.li key={i} whileHover={{ x: 6 }} className="flex items-center gap-3">
                    {
                    
                    // act.image && (
                    //   <img src={act.image} alt={act.name} className="w-10 h-8 object-cover rounded" />
                    // )
                    
                    
                    }
                    <span className="font-medium">{"*"}</span>
                    <span className="font-medium">{act.name || act}</span>
                  </motion.li>
                ))}
              </ul>

              {place.bestTime && (
                <div className="mt-6">
                  <h5 className="text-sm font-semibold">Best time</h5>
                  <p className="text-sm text-gray-600">{place.bestTime}</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
