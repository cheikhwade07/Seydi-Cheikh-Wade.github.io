import { Layout } from './components/layout'
import {
  Hero,
  About,
  Education,
  Experience,
  Skills,
  Projects,
  GitHubProjects,
} from './components/sections'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <GitHubProjects />
    </Layout>
  )
}

export default App
