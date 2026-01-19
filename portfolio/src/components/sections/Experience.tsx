import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { SectionHeader } from '../ui'
import { experience } from '../../data/content'

export default function Experience() {
  return (
    <section id="experience" className="bg-surface section-padding">
      <div className="container-wide mx-auto">
        <SectionHeader
          title="Work Experience"
          subtitle="Professional experience in machine learning and software development"
        />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg hidden sm:block">
                    <FaBriefcase className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-text-secondary text-sm">
                      {exp.location} | {exp.duration}
                    </p>
                  </div>
                </div>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-12 w-auto object-contain"
                  />
                )}
              </div>

              {/* Project Description */}
              {exp.projectDescription && (
                <div className="bg-surface-light rounded-lg p-4 mb-6">
                  <p className="text-text-secondary italic">
                    <strong>Project:</strong> {exp.projectDescription}
                  </p>
                </div>
              )}

              {/* Responsibilities */}
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => {
                  const [title, ...rest] = responsibility.split(':')
                  const description = rest.join(':')

                  return (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-text-secondary">
                        <strong className="text-text-primary">{title}:</strong>
                        {description}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
