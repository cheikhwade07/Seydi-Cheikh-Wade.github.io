export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
  category: 'professional' | 'academic'
  date?: string
  details?: ProjectDetail[]
}

export interface ProjectDetail {
  title: string
  items: string[]
}

export interface Skill {
  name: string
  description: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  logo?: string
  projectDescription?: string
  responsibilities: string[]
}

export interface Education {
  institution: string
  degree: string
  location: string
  year: string
  coursework: string[]
}

export interface ContactInfo {
  location: string
  phone: string
  email: string
  github: string
  linkedin: string
}

export interface PersonalInfo {
  name: string
  title: string
  university: string
  year: string
  tagline: string
  about: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  fork: boolean
  archived: boolean
}

export interface NavLink {
  label: string
  href: string
}
