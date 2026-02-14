"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function NoPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6 text-center">
      
      <div className="flex flex-col items-center">

        {/* Polaroid Frame */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-3 pb-10 rounded-lg shadow-2xl max-w-[200px] mb-4"
        >
          <img
            src="/photos/p6.jpg"
            alt="Inside Joke"
            className="w-full h-auto rounded-md object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold mb-1"
        >
          Interesting choice. I'll leak this image si sigues jugando.
        </motion.h1>

        {/* Button */}
        <Link href="/valentine" className="mt-1">
          <button className="primary-btn-compact">
            Try again 😌
          </button>
        </Link>

      </div>

    </main>
  )
}
