"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    src: "/photos/image1.jpeg",
    text: "The first day I realized I was starting to like you.",
  },
  {
    src: "/photos/p2.jpg",
    text: "Somehow even grocery shopping felt like a date.",
  },
  {
    src: "/photos/p3.jpg",
    text: "I love that we can laugh, eat too much, and still sit down and open the Word together.",
  },
  {
    src: "/photos/p4.jpg",
    text: "You look better in my hoodie than I ever did.",
  },
  {
    src: "/photos/p5.jpg",
    text: "And I want more of this.",
  },
]

export default function ValentinePage() {
  const [answered, setAnswered] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!answered) return

    const isLast = currentSlide === slides.length - 1
    const delay = isLast ? 8000 : 5500

    const timer = setTimeout(() => {
      if (!isLast) {
        setCurrentSlide(prev => prev + 1)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [answered, currentSlide])

  return (
    <main className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black">

      {!answered && (
        <div className="valentine-card z-10">
          <div className="valentine-title">
            Will You Be My Valentine?
          </div>

          <div className="relative flex justify-center gap-6 pt-10 h-32">
            <button
              className="primary-btn"
              onClick={() => setAnswered(true)}
            >
              Yes 💌
            </button>

            <a href="/no">
              <button className="primary-btn secondary-btn">
                No 🙃
              </button>
            </a>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {answered && (
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center space-y-16 px-6">

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 5.5, ease: "easeInOut" }}
                className="bg-white p-4 pb-14 rounded-lg shadow-2xl"
              >
                <img
                  src={slides[currentSlide].src}
                  alt="Us"
                  className="max-h-[55vh] max-w-[70vw] object-cover rounded-md"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-white text-2xl md:text-3xl font-medium max-w-2xl text-center leading-relaxed"
                style={{
                  textShadow: "0px 0px 20px rgba(255,255,255,0.25)",
                }}
              >
                {slides[currentSlide].text}
              </motion.div>

              {currentSlide === slides.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  className="text-pink-400 text-xl mt-4"
                >
                  So… February 14th?
                </motion.div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  )
}
