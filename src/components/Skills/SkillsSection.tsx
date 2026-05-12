import { SKILLS } from '../../data/skills';
import { SkillCard } from './SkillCard';

export function SkillsSection() {
  return (
    <section id="skills" className="content-section">
      <div className="section-heading">
        <span className="section-number">05</span>
        <h2>Toolkit</h2>
        <span className="section-meta">/ things I reach for</span>
      </div>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.group} group={skill.group} items={skill.items} />
        ))}
      </div>
    </section>
  );
}
