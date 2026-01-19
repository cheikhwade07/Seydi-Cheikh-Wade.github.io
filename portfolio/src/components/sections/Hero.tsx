import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import { personalInfo } from '../../data/content'

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-primary-dark relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-primary/20" />

      {/* Animated background shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-narrow mx-auto px-4 text-center relative z-10">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-light mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* University & Year */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-text-light/80 mb-4"
        >
          {personalInfo.university} | {personalInfo.year}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-md md:text-lg text-text-light/60 mb-12"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={handleScrollDown}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-text-light/30 text-text-light/50 hover:border-primary hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FaArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
