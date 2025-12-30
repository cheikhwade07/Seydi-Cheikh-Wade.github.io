/*
 * GitHub Projects Loader
 * Fetches and displays repositories from GitHub API
 */

(function () {
    'use strict';

    const GITHUB_USERNAME = 'cheikhwade07';
    const EXCLUDED_REPOS = ['cheikhwade07', 'projectweb', 'Spotify_playlist_downloader', 'Text-Based-Facebook', 'SYSC-4001', 'SYSC4001', 'java-app', 'Java-App'];
    const MAX_REPOS = 12;
    const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`;

    // Format repository name for display
    function formatRepoName(name) {
        return name
            .split(/[-_]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }

    // Get language color (simplified - you can expand this)
    function getLanguageBadge(language) {
        if (!language) return '';
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'Java': '#b07219',
            'C': '#555555',
            'C++': '#f34b7d',
            'TypeScript': '#2b7489',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'Shell': '#89e051'
        };
        const color = colors[language] || '#586069';
        return `<span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: ${color}; color: white; border-radius: 3px; font-size: 0.75rem; margin-right: 0.5rem;">${language}</span>`;
    }

    // Create project card HTML
    function createProjectCard(repo) {
        const description = repo.description || 'No description available.';
        const language = repo.language || '';
        const stars = repo.stargazers_count || 0;
        const forks = repo.forks_count || 0;
        const updated = new Date(repo.updated_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <article>
                <header class="major">
                    <h2><a href="${repo.html_url}" target="_blank">${formatRepoName(repo.name)}</a></h2>
                </header>
                <a href="${repo.html_url}" class="image fit" target="_blank">
                    <img src="images/code-459070_1280.webp" alt="${formatRepoName(repo.name)}" 
                         onerror="this.src='images/istockphoto-1075599562-612x612.jpg';" />
                </a>
                <p>${description}</p>
                <div style="margin: 1rem 0; text-align: left;">
                    ${getLanguageBadge(language)}
                    <span style="color: #666; font-size: 0.9rem;">
                        <i class="fas fa-star" style="margin-right: 0.25rem;"></i>${stars}
                        <i class="fas fa-code-branch" style="margin-left: 0.5rem; margin-right: 0.25rem;"></i>${forks}
                        <span style="margin-left: 0.5rem;">Updated: ${updated}</span>
                    </span>
                </div>
                <ul class="actions special">
                    <li><a href="${repo.html_url}" class="button" target="_blank">View on GitHub</a></li>
                </ul>
            </article>
        `;
    }

    // Filter repositories
    function shouldIncludeRepo(repo) {
        // Exclude forks, archived, and excluded repos
        if (repo.fork || repo.archived) return false;
        if (EXCLUDED_REPOS.includes(repo.name)) return false;
        // Only include repos with some activity (has description or code)
        return repo.description || repo.language;
    }

    // Load GitHub projects
    async function loadGitHubProjects() {
        const container = document.getElementById('github-projects-container');
        if (!container) return;

        try {
            container.innerHTML = '<p style="text-align: center; padding: 2rem;">Loading projects from GitHub...</p>';

            const response = await fetch(GITHUB_API_URL);

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const repos = await response.json();
            const filteredRepos = repos
                .filter(shouldIncludeRepo)
                .slice(0, MAX_REPOS);

            if (filteredRepos.length === 0) {
                container.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No additional projects found.</p>';
                return;
            }

            container.innerHTML = filteredRepos.map(createProjectCard).join('');

            // Reinitialize any necessary scripts after adding new content
            if (typeof jQuery !== 'undefined' && jQuery.fn.scrolly) {
                jQuery('.scrolly').scrolly();
            }

        } catch (error) {
            console.error('Error loading GitHub projects:', error);
            container.innerHTML = `
                <article style="text-align: center; padding: 2rem;">
                    <p style="color: #666;">Unable to load projects from GitHub at this time.</p>
                    <p style="color: #666; font-size: 0.9rem;">Please visit my <a href="https://github.com/${GITHUB_USERNAME}" target="_blank">GitHub profile</a> to see all my projects.</p>
                </article>
            `;
        }
    }

    // Load projects when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadGitHubProjects);
    } else {
        loadGitHubProjects();
    }

})();