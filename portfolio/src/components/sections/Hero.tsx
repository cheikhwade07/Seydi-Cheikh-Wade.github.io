import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { personalInfo, contactInfo } from '../../data/content'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col">
      {/* Photo Section - Top half */}
      <div className="flex-1 bg-white flex items-end justify-center relative overflow-hidden pt-20">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20"
        >
          <img
            src="./images/WADE, SEYDI CHEIKH (BUSINESS SPECIAL) (3).JPG"
            alt={personalInfo.name}
            className="w-96 md:w-[28rem] lg:w-[34rem] xl:w-[40rem] h-auto object-cover"
          />
        </motion.div>
      </div>

      {/* Name Section - Bottom half */}
      <div className="bg-[#2d3748] px-6 py-12 md:py-16 relative">
        <div className="max-w-4xl mx-auto">
          {/* Name with accent bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start"
          >
            {/* Vertical accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-1.5 bg-primary rounded-full mr-6 self-stretch origin-top"
              style={{ minHeight: '180px' }}
            />

            <div>
              {/* Name - Large and bold */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-light leading-none tracking-tight">
                {personalInfo.name.split(' ')[0]}
                <br />
                {personalInfo.name.split(' ').slice(1).join(' ')}
                <span className="text-primary">.</span>
              </h1>

              {/* Social links */}
              <div className="flex items-center gap-5 mt-6">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/40 hover:text-text-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light/40 hover:text-text-light transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <a
              href="#about"
              className="text-text-light/40 hover:text-text-light transition-colors"
              aria-label="Scroll down"
            >
              <HiChevronDown size={32} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
