"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center px-6 text-white overflow-hidden">

      {/* Background Glow */}
      <div className="background-glow" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="valentine-card"
      >
        <h1 className="valentine-title">
          Hey... I made something for you.
        </h1>

        <Link href="/valentine">
          <button className="primary-btn-compact mt-6">
            Open It 💌
          </button>
        </Link>
      </motion.div>

    </main>
  )
}
