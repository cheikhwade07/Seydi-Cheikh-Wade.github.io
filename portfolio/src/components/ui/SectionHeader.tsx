import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? 'text-text-light' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-text-light/70' : 'text-text-secondary'
          }`}
        >
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`h-1 w-20 bg-primary mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}
