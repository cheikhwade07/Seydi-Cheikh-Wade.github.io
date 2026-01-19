import { motion } from 'framer-motion'
import type { SkillCategory } from '../../types'

interface SkillCardProps {
  category: SkillCategory
  index: number
}

export default function SkillCard({ category, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-text-primary mb-4 pb-2 border-b-2 border-primary">
        {category.title}
      </h3>
      <ul className="space-y-3">
        {category.skills.map((skill) => (
          <li key={skill.name} className="group">
            <div className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <div>
                <span className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-text-secondary text-sm"> – {skill.description}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
