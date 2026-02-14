import { ReactNode } from "react"
import { motion } from "framer-motion"

interface Props {
  title: string
  children: ReactNode
}

export default function MemoryCard({ title, children }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-2xl shadow-md max-w-xs"
    >
      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>
      <p className="text-gray-600">
        {children}
      </p>
    </motion.div>
  )
}
