import { motion } from 'framer-motion'
import { SectionHeader } from '../ui'
import { personalInfo } from '../../data/content'

export default function About() {
  return (
    <section id="about" className="bg-surface section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeader title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/WADE, SEYDI CHEIKH (BUSINESS SPECIAL) (3).JPG"
                alt={personalInfo.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              {personalInfo.about}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
