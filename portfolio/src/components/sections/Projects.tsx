import { motion } from 'framer-motion'
import { SectionHeader, ProjectCard } from '../ui'
import { projects } from '../../data/content'

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured)
  const academicProjects = projects.filter((p) => p.category === 'academic')

  return (
    <section id="projects" className="bg-surface section-padding">
      <div className="container-wide mx-auto">
        <SectionHeader
          title="Projects & Engineering Work"
          subtitle="ML systems, backend development, and database engineering. Each project includes architecture decisions, implementation details, and code."
        />

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-accent-green/10 border-l-4 border-accent-green rounded-r-lg p-4 mb-8"
            >
              <h3 className="text-xl font-bold text-accent-green">
                Featured Project – Professional Experience
              </h3>
              <p className="text-text-secondary italic">
                Completed during Summer 2025 internship at Jasmine Conseil
              </p>
            </motion.div>

            {/* Featured Project Detail */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    ML Prototype • Summer 2025
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {featuredProject.title}
                    </a>
                  </h3>
                  <p className="text-primary font-medium mb-4">{featuredProject.description}</p>
                  <p className="text-text-secondary mb-6">{featuredProject.longDescription}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.slice(0, 8).map((tech) => (
                      <span
                        key={tech}
                        className="bg-surface-light text-text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors font-medium"
                  >
                    View Code on GitHub
                  </a>
                </div>
              </div>

              {/* Project Details */}
              {featuredProject.details && (
                <div className="border-t border-surface-light p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredProject.details.map((detail) => (
                      <div key={detail.title}>
                        <h4 className="font-bold text-text-primary mb-3">{detail.title}</h4>
                        <ul className="space-y-2">
                          {detail.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-text-secondary text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          </div>
        )}

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-accent-blue/10 border-l-4 border-accent-blue rounded-r-lg p-4 mb-8"
        >
          <h3 className="text-xl font-bold text-accent-blue">Academic Projects – Coursework</h3>
          <p className="text-text-secondary italic">
            Completed during Software Engineering degree at Carleton University
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
