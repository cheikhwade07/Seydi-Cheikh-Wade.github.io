import type { Project } from '../../data/projects';

export function ProjectCard({ project, featured }: { project: Project; featured: boolean }) {
  const href = project.liveUrl ?? project.repo;

  return (
    <article className={`project-card surface-card ${featured ? 'featured' : ''}`}>
      <div className="project-topline">
        <span>{project.tags.join(' · ')}</span>
        <span>{project.year}</span>
      </div>
      {project.award && <div className="award-pill">{project.award}</div>}
      {project.liveUrl && <span className="live-label">Live · visit site</span>}
      <h3>
        <a href={href} target="_blank" rel="noreferrer">
          {project.name}
        </a>
      </h3>
      <p className="project-tagline">{project.tagline}</p>
      <p>{project.long}</p>
      <div className="stack-list" aria-label={`${project.name} technology stack`}>
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="project-links">
        <span>{project.role}</span>
        <a href={project.repo} target="_blank" rel="noreferrer">
          Repository
        </a>
      </div>
    </article>
  );
}
