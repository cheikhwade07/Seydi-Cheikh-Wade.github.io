import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../../types'
import Button from './Button'

interface ProjectCardProps {
  project: Project
  index: number
  featured?: boolean
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        featured ? 'border-l-4 border-accent-green' : ''
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        {featured && (
          <div className="absolute top-4 left-4 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured Project
          </div>
        )}
        {project.category === 'academic' && (
          <div className="absolute top-4 left-4 bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-medium">
            Academic Project
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          {project.date && (
            <span className="text-text-secondary text-sm">{project.date}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2 hover:text-primary transition-colors">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="text-text-secondary text-sm italic mb-4">{project.description}</p>
        <p className="text-text-secondary mb-4 line-clamp-3">{project.longDescription}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="bg-surface-light text-text-primary px-2 py-1 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="bg-surface-light text-text-secondary px-2 py-1 rounded text-xs">
              +{project.techStack.length - 5} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button href={project.githubUrl} external size="sm" variant="primary">
            <FaGithub className="mr-2" />
            View Code
          </Button>
          {project.liveUrl && (
            <Button href={project.liveUrl} external size="sm" variant="outline">
              <FaExternalLinkAlt className="mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
