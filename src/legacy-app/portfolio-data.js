// portfolio-data.js - content layer for Cheikh's portfolio (May 2026).

const ME = {
  name: "Seydi Cheikh Wade",
  short: "Cheikh",
  role: "Software Engineering · Carleton '28",
  blurb:
    "I care about building software that touches people's lives — and learning everything I can along the way. I've failed plenty, but I don't quit. From deploying ML for a government customs agency to winning hackathons with RAG pipelines and AI study tools, every project has pulled me deeper into understanding how these systems work, how they break, and how to make them better. That drive shows up in everything I build.",
  location: "Ottawa, ON",
  email: "seyiwade@cmail.carleton.ca",
  phone: "+1 (514) 431-3541",
  site: "cheikhwade.com",
  github: "https://github.com/cheikhwade07",
  linkedin: "https://www.linkedin.com/in/seydi-c",
  resumeUrl: "SeydiCheikhWade_resume.pdf",
  resumePreview: "Resume.png",
  statusLines: [
    "Open-Source Statistical Programmer @ Statistics Canada",
    "Ex Junior Data Scientist @ Jasmine Conseil",
    "Software Engineer (Volunteer) @ Develop for Good",
    "2x Hackathon Winner",
    "B.Eng. Software Engineering @ Carleton University",
  ],
};

const FEATURED_PROJECTS = [
  {
    id: "chizu",
    name: "ChizuCode",
    tagline: "A RAG pipeline that teaches your codebase back to you.",
    description:
      "Onboarding onto a new codebase is slow — you don't know what files do, how they connect, or where to start asking questions. ChizuCode ingests a GitHub repo, generates dual embeddings (Gemini for summaries, Voyage AI for raw code), stores vectors in pgvector, and clusters files into semantic domains so you can explore visually. Scoped retrieval lets you ask questions grounded in the actual code. Won MLH Best Use of Gemini API at ConHacks 2026.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "Voyage AI"],
    award: "MLH · Best Use of Gemini API",
    hackathon: "ConHacks 2026",
    role: "Team of 4",
    image: "ChizuCode.png",
    liveUrl: "https://chizu-code.vercel.app/",
    repoUrl: "https://github.com/cheikhwade07/ChizuCode",
    devpostUrl: "https://devpost.com/software/chizucode",
  },
  {
    id: "soki",
    name: "Soki",
    tagline: "AI study platform — upload notes, get flashcards, retain more.",
    description:
      "Students re-read notes passively because making good flashcards is tedious. Soki takes a PDF upload, parses it, sends structured prompts to Gemini, and returns flashcards and quizzes tailored to the source material. An FSRS-based scheduler adapts review intervals to how well you actually retain each card. Won 1st place (AI Automation) and runner-up (Best Language Cognition) at Carleton MindHack — 36-hour sprint, team of 3.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini API", "FSRS"],
    award: "1st Place · AI Automation",
    hackathon: "Carleton MindHack 2026",
    role: "Team of 3",
    image: "Soki.png",
    liveUrl: "https://soki-eight.vercel.app/",
    repoUrl: "https://github.com/cheikhwade07/Soki",
    devpostUrl: "https://devpost.com/software/soki-kq2gc8",
  },
];

const EXPERIENCE = [
  {
    id: "jasmine",
    role: "Junior Data Scientist (Co-op)",
    org: "Jasmine Conseil",
    context: "Federal Government Client",
    period: "Jun – Sep 2025",
    where: "Laval, QC",
    description:
      "The Senegalese Customs Administration needed a way to automate control circuit assignment across 10,000+ import declarations — a process tied to 40% of national budget operations. I built the ML prediction system end-to-end: benchmarked 5+ classifiers, selected MLPClassifier+PCA (ROC-AUC 0.99, F1 0.86 on imbalanced data), and deployed it as a FastAPI REST API on a DigitalOcean Linux VM with firewalld rules and a MuleSoft Anypoint proxy. The prototype I built is now being used to develop a production system for Senegalese Customs.",
    stack: ["Python", "scikit-learn", "FastAPI", "DigitalOcean", "MuleSoft"],
    image: null,
    diagramLabels: {
      source: "Système GAINDE",
      sourceData: "Déclaration de marchandise\n(format JSON)",
      proxy: "Anypoint\n(Proxy API)",
      api: "API\n(VM DigitalOcean)",
      model: "Modèle de\nmachine learning",
      output: "Prédiction de risque\n(format JSON)",
    },
    repoUrl: "https://github.com/cheikhwade07/customs-risk-api-dashboard",
  },
  {
    id: "statcan",
    role: "Open-Source Statistical Programmer (Co-op)",
    org: "Statistics Canada",
    context: "Federal Government",
    period: "May – Aug 2026",
    where: "Ottawa, ON",
    current: true,
    description:
      "Currently contributing to the migration of legacy SAS programs to Python, modernizing data processing workflows for a federal statistical agency. Building and maintaining ETL pipelines for large-scale statistical data, ensuring integrity across transformation stages for downstream analysis.",
    stack: ["Python", "pandas", "SAS", "ETL"],
    image: null,
    repoUrl: null,
  },
];

const VOLUNTEERING = [
  {
    id: "dfg",
    role: "Software Engineer (Volunteer)",
    org: "Develop for Good",
    client: "Crisis Center, Inc.",
    period: "May – Aug 2026",
    where: "Remote",
    current: true,
    description:
      "Crisis Center, Inc. runs crisis and suicide hotlines, sexual assault support, recovery programs, and youth services across six counties in Central Alabama — serving over 30,000 people. Their website is often the first point of contact for someone in crisis. I'm part of a volunteer engineering team redesigning and rebuilding that digital front door, contributing to UX research, information architecture, and implementation.",
    image: "CrisisCenterPage.png",
    siteUrl: "https://www.crisiscenterbham.org/",
    orgUrl: "https://www.developforgood.org/",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "SQL", "Java", "C", "C++", "JavaScript", "TypeScript"] },
  { group: "ML / Data", items: ["scikit-learn", "pandas", "NumPy", "MLP / XGBoost / SVM", "PCA", "ROC-AUC", "Imbalanced data"] },
  { group: "Frameworks", items: ["FastAPI", "Next.js", "Pydantic", "Joblib", "NextAuth", "JDBC", "Jupyter"] },
  { group: "Infra & Cloud", items: ["PostgreSQL", "pgvector", "Docker", "Linux CLI", "DigitalOcean", "MuleSoft", "Git"] },
];

const PINNED_OTHER_PROJECTS = [
  {
    id: "drone",
    name: "Firefighting Drone Swarm",
    tagline: "Distributed drone scheduler over UDP — with fault recovery.",
    stack: ["Java", "UDP", "Concurrency", "State Machines"],
    repoUrl: "https://github.com/cheikhwade07/Firefighting-Drone-Swarm",
  },
];

let CONTRIB = Array.from({ length: 52 }, () => Array.from({ length: 7 }, () => 0));

function normalizeRepoUrl(url) {
  return String(url || "").replace(/\/$/, "").toLowerCase();
}

async function fetchGitHubContributions(username = "cheikhwade07") {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const contributions = data.contributions || [];
    const grid = [];
    let week = [];
    for (const day of contributions) {
      week.push(day.level);
      if (week.length === 7) {
        grid.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(0);
      grid.push(week);
    }
    while (grid.length < 52) grid.unshift(Array(7).fill(0));
    if (grid.length > 52) grid.splice(0, grid.length - 52);

    CONTRIB = grid;
    window.CONTRIB = grid;
    window._contribTotal = contributions.reduce((sum, day) => sum + day.count, 0);
    window._contribRange = {
      start: contributions[0]?.date || null,
      end: contributions[contributions.length - 1]?.date || null,
    };
    window._contribLoaded = true;
    window.dispatchEvent(new CustomEvent("contrib-loaded"));
  } catch (err) {
    console.warn("GitHub contributions fetch failed:", err);
    window._contribLoaded = true;
    window.dispatchEvent(new CustomEvent("contrib-loaded"));
  }
}

async function fetchGitHubRepos(username = "cheikhwade07") {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const repos = await response.json();
    const excludeUrls = [
      ...FEATURED_PROJECTS.map((p) => p.repoUrl),
      ...PINNED_OTHER_PROJECTS.map((p) => p.repoUrl),
      ...EXPERIENCE.filter((e) => e.repoUrl).map((e) => e.repoUrl),
    ].map(normalizeRepoUrl);
    const filtered = repos
      .filter((repo) => (
        !repo.fork &&
        repo.description &&
        !excludeUrls.includes(normalizeRepoUrl(repo.html_url))
      ))
      .slice(0, 6)
      .map((repo) => ({
        id: repo.name,
        name: repo.name,
        tagline: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        repoUrl: repo.html_url,
      }));

    window._otherRepos = filtered;
    window._reposError = false;
    window._reposLoaded = true;
    window.dispatchEvent(new CustomEvent("repos-loaded"));
  } catch (err) {
    console.warn("GitHub repos fetch failed:", err);
    window._otherRepos = [];
    window._reposError = true;
    window._reposLoaded = true;
    window.dispatchEvent(new CustomEvent("repos-loaded"));
  }
}

// Legacy aliases keep the terminal/editorial themes available without making
// them part of the redesign work.
const PROJECTS = [
  ...FEATURED_PROJECTS.map((project) => ({
    id: project.id,
    name: project.name,
    tagline: project.tagline,
    long: project.description,
    stack: project.stack,
    tags: [project.hackathon, project.award].filter(Boolean),
    role: `${project.role} · ${project.hackathon}`,
    year: project.hackathon.match(/\d{4}/)?.[0] || "2026",
    repo: project.repoUrl,
    liveUrl: project.liveUrl,
    award: project.award,
  })),
  ...PINNED_OTHER_PROJECTS.map((project) => ({
    id: project.id,
    name: project.name,
    tagline: project.tagline,
    long: project.tagline,
    stack: project.stack,
    tags: ["Systems", "Coursework"],
    role: "Team · SYSC 3303",
    year: "Winter 2026",
    repo: project.repoUrl,
  })),
];

const EDUCATION = [
  {
    school: "Carleton University",
    degree: "B.Eng. Software Engineering (Co-op)",
    gpa: "3.6 / 4.0",
    period: "2023 – 2028",
    where: "Ottawa, ON",
    clearance: "Reliability Status",
    coursework: [
      "Database Management Systems",
      "Algorithms & Data Structures",
      "Real-Time Concurrent Systems",
      "Operating Systems",
      "Software Architecture & Design",
      "Programming Languages",
      "OO Software Development",
      "Computer Organization & Architecture",
      "Linear Algebra",
    ],
  },
];

Object.assign(window, {
  ME,
  FEATURED_PROJECTS,
  EXPERIENCE,
  VOLUNTEERING,
  SKILLS,
  PINNED_OTHER_PROJECTS,
  CONTRIB,
  fetchGitHubContributions,
  fetchGitHubRepos,
  PROJECTS,
  EDUCATION,
});

fetchGitHubContributions();
fetchGitHubRepos();
