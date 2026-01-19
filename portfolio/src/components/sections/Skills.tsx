import { SectionHeader, SkillCard } from '../ui'
import { skills } from '../../data/content'

export default function Skills() {
  return (
    <section id="skills" className="bg-surface-light section-padding">
      <div className="container-wide mx-auto">
        <SectionHeader
          title="Technical Skills"
          subtitle="Skills demonstrated through production systems and engineering projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
