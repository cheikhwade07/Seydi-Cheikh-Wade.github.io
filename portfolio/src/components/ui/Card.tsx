import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5 } : undefined}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${
        hover ? 'transition-shadow duration-300 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
