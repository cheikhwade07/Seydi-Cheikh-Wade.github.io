// portfolio-data.jsx — content sourced from Cheikh's resume (May 2026).

const ME = {
  name: "Seydi Cheikh Wade",
  short: "Cheikh",
  role: "Software Engineering · Carleton '28",
  blurb: "Third-year software engineering student at Carleton (Co-op). I work on applied ML and the full-stack scaffolding that ships it — RAG pipelines, FastAPI services, and the kind of frontend that makes the model feel useful instead of impressive.",
  blurbWarm: "Hey — I'm Cheikh. Third-year SE at Carleton, currently into applied AI: training models, serving them through FastAPI, and wrapping them in interfaces people actually want to use.",
  location: "Ottawa, ON",
  email: "seyiwade@cmail.carleton.ca",
  phone: "+1 (514) 431-3541",
  site: "cheikhwade.com",
  github: "https://github.com/cheikhwade07",
  linkedin: "https://www.linkedin.com/in/seydi-c",
  resumeUrl: "SeydiCheikhWade_resume.pdf",
  now: [
    "Wiring deeper retrieval into ChizuCode — scoped pgvector search over code + summary embeddings.",
    "Reading Designing Data-Intensive Applications, slowly, with margin notes.",
    "Heading to Statistics Canada this summer for a Python migration co-op.",
  ],
};

const PROJECTS = [
  {
    id: "chizu",
    name: "ChizuCode",
    tagline: "RAG pipeline that explains unfamiliar codebases.",
    long: "Won MLH Best Use of Gemini API at ConHacks 2026 with a team of 4. End-to-end RAG: ingests GitHub repos, generates dual embeddings (Gemini for summaries, Voyage AI for code), stores vectors in pgvector, and clusters files into semantic domains via scikit-learn hierarchical clustering. Scoped retrieval embeds the user's question, runs pgvector similarity over chunked code + summaries, filters for relevance, and grounds the Gemini answer in the retrieved chunks.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "Voyage AI"],
    tags: ["AI", "Full-stack", "Hackathon winner"],
    role: "Team of 4 · ConHacks 2026",
    year: "2026",
    repo: "https://github.com/cheikhwade07/ChizuCode",
    liveUrl: "https://chizu-code.vercel.app/",
    award: "MLH · Best Use of Gemini",
  },
  {
    id: "soki",
    name: "Soki",
    tagline: "AI study app — flashcards + spaced repetition.",
    long: "Won 1st place (AI Automation) and runner-up (Best Language Cognition) at Carleton MindHack — 36-hour sprint, team of 3. Content pipeline parses uploaded PDFs, sends structured prompts to Gemini, and returns flashcards + quizzes tailored to the source. An FSRS-based scheduler adapts review intervals to each learner's pattern.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Gemini API", "FSRS"],
    tags: ["AI", "Full-stack", "Hackathon winner"],
    role: "Team of 3 · Carleton MindHack",
    year: "2025",
    repo: "https://github.com/cheikhwade07/Soki",
    liveUrl: "https://soki-eight.vercel.app/",
    award: "1st · AI Automation",
  },
  {
    id: "customs",
    name: "Customs Risk API",
    tagline: "ML system automating customs control decisions.",
    long: "Built during my Jasmine Conseil co-op for the Senegalese Customs Administration — automates control-circuit assignment across 10,000+ import declarations, supporting 40% of national budget operations. Benchmarked 5+ classifiers; selected MLPClassifier+PCA at ROC-AUC 0.99 / F1 0.86 on imbalanced data, serialized with Joblib. Deployed as a FastAPI REST API on a DigitalOcean Linux VM with Pydantic validation, firewalld rules, and a MuleSoft Anypoint proxy for rate limiting.",
    stack: ["Python", "scikit-learn", "FastAPI", "DigitalOcean", "MuleSoft"],
    tags: ["AI", "Co-op", "Production"],
    role: "Jr. Data Scientist · Jasmine Conseil",
    year: "Summer 2025",
    repo: "https://github.com/cheikhwade07/customs-risk-api-dashboard",
  },
  {
    id: "drone",
    name: "Firefighting Drone Swarm",
    tagline: "Distributed drone scheduler over UDP — with fault recovery.",
    long: "Built the scheduler for a distributed drone coordination system running as 3 separate Java processes over UDP (DatagramSocket), dispatching drones to fire zones in real time. Implemented fault detection and recovery: detects drones stuck mid-flight or jammed nozzles via timing events, reroutes to available drones, and marks faulted units offline.",
    stack: ["Java", "UDP", "Concurrency", "State Machines"],
    tags: ["Systems", "Coursework"],
    role: "Team · SYSC 3303",
    year: "Winter 2026",
    repo: "https://github.com/cheikhwade07/Firefighting-Drone-Swarm",
  },
  {
    id: "relax",
    name: "Relax Query Processor",
    tagline: "Mini relational algebra engine, in Java.",
    long: "For COMP 3005 — parser, AST, and evaluator for a Relax-style relational algebra language. Selection, projection, joins, set ops, written so the operator tree is debuggable by inspection.",
    stack: ["Java", "ANTLR", "JUnit"],
    tags: ["Systems", "Coursework"],
    role: "Solo",
    year: "Fall 2025",
    repo: "https://github.com/cheikhwade07/relax-query-processor",
  },
  {
    id: "uno",
    name: "Multiplayer UNO",
    tagline: "MVC card game with the inevitable 'Wild +4' bugs.",
    long: "Multiplayer UNO with a clean MVC split — sockets for networking, animated hand on the view side, rules engine you can poke at without touching the UI. Built in a team to practice patterns more than to ship a hit game.",
    stack: ["Java", "Swing", "Sockets"],
    tags: ["Coursework", "Networking"],
    role: "Team · SYSC 3110",
    year: "2024",
    repo: "https://github.com/cheikhwade07/Multiplayer-UNO-Game-Java-MVC-Architecture",
  },
];

const EXPERIENCE = [
  {
    role: "Open-Source Statistical Programmer (Co-op)",
    org: "Statistics Canada",
    period: "May – Aug 2026",
    where: "Ottawa, ON",
    bullets: [
      "Contributing to the SAS-to-Python migration of legacy statistical programs — Python and pandas, modernizing data workflows for a federal statistical agency.",
      "Building and maintaining ETL pipelines for large-scale statistical data, ensuring integrity across transformation stages for downstream analysis.",
    ],
  },
  {
    role: "Junior Data Scientist (Co-op)",
    org: "Jasmine Conseil",
    period: "Jun – Sep 2025",
    where: "Laval, QC · federal government client",
    bullets: [
      "Shipped an ML system for the Senegalese Customs Administration automating control-circuit assignment across 10,000+ declarations, supporting 40% of national budget ops.",
      "Benchmarked 5+ classifiers; MLPClassifier+PCA won at ROC-AUC 0.99 / F1 0.86 on imbalanced data; serialized with Joblib for production.",
      "Deployed as a FastAPI REST API on a DigitalOcean Linux VM — Pydantic validation, Swagger docs, firewalld rules, MuleSoft Anypoint proxy for rate limiting.",
    ],
  },
];

const VOLUNTEERING = [
  {
    role: "Software Engineer (Volunteer)",
    org: "Develop for Good · Crisis Center, Inc.",
    period: "May – Aug 2026",
    where: "Remote",
    bullets: [
      "Redesigning and rebuilding a website for a crisis-support nonprofit serving clients, donors, and volunteers.",
      "Contributing to UX research, information architecture, and low/no-code implementation as part of a structured volunteer engineering team.",
    ],
  },
  {
    role: "B.Eng. Software Engineering (Co-op)",
    org: "Carleton University",
    period: "2023 – May 2028",
    where: "Ottawa, ON · GPA 3.6/4.0",
    bullets: [
      "Coursework: Database Systems, Algorithms & Data Structures, Operating Systems, OO Software Development, Real-Time Concurrent Systems, Requirements Engineering, Computer Architecture.",
      "Reliability Status security clearance.",
    ],
  },
];

const SKILLS = [
  { group: "Languages", items: ["Python", "SQL", "Java", "C", "C++", "JavaScript", "TypeScript"] },
  { group: "ML / Data", items: ["scikit-learn", "pandas", "NumPy", "MLP / XGBoost / SVM", "PCA", "ROC-AUC", "Imbalanced data"] },
  { group: "Frameworks", items: ["FastAPI", "Next.js", "Pydantic", "Joblib", "NextAuth", "JDBC", "Jupyter"] },
  { group: "Infra & Cloud", items: ["PostgreSQL", "pgvector", "Docker", "Linux CLI", "DigitalOcean", "MuleSoft", "Git"] },
];

// 52 weeks × 7 days contribution grid (seeded random, looks plausible)
const CONTRIB = (() => {
  let s = 1337;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  return Array.from({ length: 52 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const base = 0.25 + 0.4 * Math.sin((w + d * 0.3) / 4);
      const r = rnd();
      if (r < 0.18) return 0;
      const v = r * base * 4;
      return Math.min(4, Math.floor(v));
    })
  );
})();

Object.assign(window, { ME, PROJECTS, EXPERIENCE, VOLUNTEERING, SKILLS, CONTRIB });
