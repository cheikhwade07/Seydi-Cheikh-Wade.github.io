import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { SectionHeader } from '../ui'
import { education } from '../../data/content'

export default function Education() {
  return (
    <section className="bg-surface-light section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeader title="Education" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-4 rounded-lg">
              <FaGraduationCap className="text-primary text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {education.degree}
              </h3>
              <p className="text-primary font-medium mb-1">{education.institution}</p>
              <p className="text-text-secondary mb-4">
                {education.location} | {education.year}
              </p>

              <div>
                <h4 className="font-semibold text-text-primary mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="bg-surface-light text-text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
