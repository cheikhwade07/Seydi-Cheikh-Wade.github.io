import { useState, useEffect } from 'react'
import type { GitHubRepo } from '../types'
import { githubConfig } from '../data/content'

interface UseGitHubReposReturn {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

export default function useGitHubRepos(): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://api.github.com/users/${githubConfig.username}/repos?sort=updated&direction=desc&per_page=100`
        )

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }

        const data: GitHubRepo[] = await response.json()

        // Filter repos
        const filteredRepos = data
          .filter((repo) => {
            // Exclude forks, archived, and excluded repos
            if (repo.fork || repo.archived) return false
            if (githubConfig.excludedRepos.includes(repo.name)) return false
            // Only include repos with some activity
            return repo.description || repo.language
          })
          .slice(0, githubConfig.maxRepos)

        setRepos(filteredRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return { repos, loading, error }
}
