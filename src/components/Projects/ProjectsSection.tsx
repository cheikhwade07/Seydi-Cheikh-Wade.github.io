import { PROJECTS } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  return (
    <section id="work" className="content-section">
      <div className="section-heading">
        <span className="section-number">04</span>
        <h2>Selected work</h2>
        <span className="section-meta">/ {PROJECTS.length} entries · 2024-2026</span>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 2} />
        ))}
      </div>
    </section>
  );
}
