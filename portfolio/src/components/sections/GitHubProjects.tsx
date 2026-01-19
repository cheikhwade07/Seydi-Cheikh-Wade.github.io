import { motion } from 'framer-motion'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'
import useGitHubRepos from '../../hooks/useGitHubRepos'
import { githubConfig } from '../../data/content'

const languageColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  TypeScript: '#2b7489',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Go: '#00ADD8',
  Rust: '#dea584',
}

function formatRepoName(name: string): string {
  return name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function GitHubProjects() {
  const { repos, loading, error } = useGitHubRepos()

  if (loading) {
    return (
      <section className="bg-surface-light section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-text-secondary">Loading projects from GitHub...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-surface-light section-padding">
        <div className="container-wide mx-auto">
          <div className="text-center py-12">
            <p className="text-text-secondary mb-4">Unable to load projects from GitHub at this time.</p>
            <a
              href={`https://github.com/${githubConfig.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit my GitHub profile to see all projects
            </a>
          </div>
        </div>
      </section>
    )
  }

  if (repos.length === 0) {
    return null
  }

  return (
    <section className="bg-surface-light section-padding">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center justify-center gap-3">
            <FaGithub className="text-primary" />
            More Projects on GitHub
          </h3>
          <p className="text-text-secondary">
            Additional repositories from my GitHub profile
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.article
              key={repo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-bold text-text-primary mb-2 hover:text-primary transition-colors">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {formatRepoName(repo.name)}
                </a>
              </h4>

              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {repo.description || 'No description available.'}
              </p>

              <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] || '#586069' }}
                    />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch className="text-text-secondary" />
                  {repo.forks_count}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  Updated: {formatDate(repo.updated_at)}
                </span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
