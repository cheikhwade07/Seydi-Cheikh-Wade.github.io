import { motion } from 'framer-motion'
import { SectionHeader, ProjectCard } from '../ui'
import { projects } from '../../data/content'

export default function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const professionalProjects = projects.filter(
    (project) => project.category === 'professional' && !project.featured
  )
  const academicProjects = projects.filter((project) => project.category === 'academic')

  return (
    <section id="projects" className="bg-surface section-padding">
      <div className="container-wide mx-auto">
        <SectionHeader
          title="Projects & Engineering Work"
          subtitle="ML systems, backend development, and database engineering. Each project includes architecture decisions, implementation details, and code."
        />

        {featuredProject && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 mb-8"
            >
              <h3 className="text-xl font-bold text-primary">
                {featuredProject.featuredCalloutTitle ?? 'Featured Project'}
              </h3>
              <p className="text-text-secondary italic">
                {featuredProject.featuredCalloutSubtitle ?? featuredProject.date}
              </p>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                  />
                  {featuredProject.featuredImageLabel && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredProject.featuredImageLabel}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-2">
                    {featuredProject.githubUrl || featuredProject.liveUrl ? (
                      <a
                        href={featuredProject.liveUrl ?? featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {featuredProject.title}
                      </a>
                    ) : (
                      featuredProject.title
                    )}
                  </h3>
                  <p className="text-primary font-medium mb-4">{featuredProject.description}</p>
                  <p className="text-text-secondary mb-6">{featuredProject.longDescription}</p>

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

                  {(featuredProject.githubUrl || featuredProject.liveUrl) && (
                    <div className="flex flex-wrap gap-3">
                      {featuredProject.githubUrl && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors font-medium"
                        >
                          View Code on GitHub
                        </a>
                      )}
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
                        >
                          View Live Application
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {featuredProject.details && (
                <div className="border-t border-surface-light p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {featuredProject.details.map((detail) => (
                      <div key={detail.title}>
                        <h4 className="font-bold text-text-primary mb-3">{detail.title}</h4>
                        <ul className="space-y-2">
                          {detail.items.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-text-secondary text-sm"
                            >
                              <span className="text-primary mt-1">&bull;</span>
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

        {professionalProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-accent-green/10 border-l-4 border-accent-green rounded-r-lg p-4 mb-8"
            >
              <h3 className="text-xl font-bold text-accent-green">
                Professional & Industry Projects
              </h3>
              <p className="text-text-secondary italic">
                Applied ML and backend engineering work in internship and production-oriented settings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
              {professionalProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-accent-blue/10 border-l-4 border-accent-blue rounded-r-lg p-4 mb-8"
        >
          <h3 className="text-xl font-bold text-accent-blue">Academic Projects - Coursework</h3>
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
