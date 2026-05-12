export type Project = {
  id: string;
  name: string;
  tagline: string;
  long: string;
  stack: string[];
  tags: string[];
  role: string;
  year: string;
  repo: string;
  liveUrl?: string;
  award?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'chizu',
    name: 'ChizuCode',
    tagline: 'RAG pipeline that explains unfamiliar codebases.',
    long: "Won MLH Best Use of Gemini API at ConHacks 2026 with a team of 4. End-to-end RAG: ingests GitHub repos, generates dual embeddings, stores vectors in pgvector, clusters files into semantic domains, and grounds the answer in retrieved chunks.",
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini API', 'Voyage AI'],
    tags: ['AI', 'Full-stack', 'Hackathon winner'],
    role: 'Team of 4 · ConHacks 2026',
    year: '2026',
    repo: 'https://github.com/cheikhwade07/ChizuCode',
    liveUrl: 'https://chizu-code.vercel.app/',
    award: 'MLH · Best Use of Gemini',
  },
  {
    id: 'soki',
    name: 'Soki',
    tagline: 'AI study app: flashcards + spaced repetition.',
    long: 'Won 1st place (AI Automation) and runner-up (Best Language Cognition) at Carleton MindHack. Content pipeline parses uploaded PDFs, prompts Gemini, and returns flashcards + quizzes tailored to the source. FSRS adapts review intervals to each learner.',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Gemini API', 'FSRS'],
    tags: ['AI', 'Full-stack', 'Hackathon winner'],
    role: 'Team of 3 · Carleton MindHack',
    year: '2025',
    repo: 'https://github.com/cheikhwade07/Soki',
    liveUrl: 'https://soki-eight.vercel.app/',
    award: '1st · AI Automation',
  },
  {
    id: 'customs',
    name: 'Customs Risk API',
    tagline: 'ML system automating customs control decisions.',
    long: 'Built during my Jasmine Conseil co-op for the Senegalese Customs Administration: 10,000+ import declarations, imbalanced-data model selection, FastAPI deployment on a DigitalOcean Linux VM, and MuleSoft Anypoint proxy integration.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'DigitalOcean', 'MuleSoft'],
    tags: ['AI', 'Co-op', 'Production'],
    role: 'Jr. Data Scientist · Jasmine Conseil',
    year: 'Summer 2025',
    repo: 'https://github.com/cheikhwade07/customs-risk-api-dashboard',
  },
  {
    id: 'drone',
    name: 'Firefighting Drone Swarm',
    tagline: 'Distributed drone scheduler over UDP with fault recovery.',
    long: 'Built the scheduler for a distributed drone coordination system running as separate Java processes over UDP. Implemented timing-based fault detection, rerouting, and offline marking for failed drones.',
    stack: ['Java', 'UDP', 'Concurrency', 'State Machines'],
    tags: ['Systems', 'Coursework'],
    role: 'Team · SYSC 3303',
    year: 'Winter 2026',
    repo: 'https://github.com/cheikhwade07/Firefighting-Drone-Swarm',
  },
  {
    id: 'relax',
    name: 'Relax Query Processor',
    tagline: 'Mini relational algebra engine in Java.',
    long: 'Parser, AST, and evaluator for a Relax-style relational algebra language. Selection, projection, joins, and set operations are represented as debuggable operator trees.',
    stack: ['Java', 'ANTLR', 'JUnit'],
    tags: ['Systems', 'Coursework'],
    role: 'Solo',
    year: 'Fall 2025',
    repo: 'https://github.com/cheikhwade07/relax-query-processor',
  },
  {
    id: 'uno',
    name: 'Multiplayer UNO',
    tagline: "MVC card game with the inevitable 'Wild +4' bugs.",
    long: 'Multiplayer UNO with a clean MVC split: sockets for networking, animated hand on the view side, and a rules engine that can be tested without touching the UI.',
    stack: ['Java', 'Swing', 'Sockets'],
    tags: ['Coursework', 'Networking'],
    role: 'Team · SYSC 3110',
    year: '2024',
    repo: 'https://github.com/cheikhwade07/Multiplayer-UNO-Game-Java-MVC-Architecture',
  },
];
