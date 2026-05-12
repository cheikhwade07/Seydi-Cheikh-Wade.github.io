import { lazy, Suspense } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero/Hero';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Grain } from './components/ambient/Grain';
import { OceanBand } from './components/ambient/OceanBand';
import { Particles } from './components/ambient/Particles';
import { useTheme } from './theme/useTheme';

const ProjectsSection = lazy(() =>
  import('./components/Projects/ProjectsSection').then((module) => ({ default: module.ProjectsSection })),
);
const SkillsSection = lazy(() =>
  import('./components/Skills/SkillsSection').then((module) => ({ default: module.SkillsSection })),
);
const GithubCard = lazy(() => import('./components/Github/GithubCard').then((module) => ({ default: module.GithubCard })));

export default function App() {
  const { isDark } = useTheme();

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {!isDark && <OceanBand />}
      {isDark && <Grain />}
      <Particles />
      <div className="page-wrap">
        <TopBar />
        <main id="main">
          <Hero />
          <Suspense fallback={<div className="section-loading">Loading work...</div>}>
            <ProjectsSection />
            <SkillsSection />
            <GithubCard />
          </Suspense>
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
