import type {
  PersonalInfo,
  ContactInfo,
  Education,
  Experience,
  SkillCategory,
  Project,
  NavLink,
} from '../types'

export const personalInfo: PersonalInfo = {
  name: 'Seydi Cheikh Wade',
  title: 'Software Engineering Co-op Student',
  university: 'Carleton University',
  year: 'Third Year',
  tagline: 'ML Systems | Backend APIs | Data Engineering',
  about: `Third-year Software Engineering Co-op student at Carleton University specializing in machine learning systems and backend development. During my summer 2025 internship at Jasmine Conseil, I built an ML prediction API for Senegalese customs risk analysis—handling data preprocessing (10K+ customs declarations), model evaluation (F1-score, ROC-AUC), and deployment via FastAPI on DigitalOcean with MuleSoft integration. I work with Python, scikit-learn, FastAPI, PostgreSQL, and cloud platforms. Strong foundations in data structures, algorithms, and database systems. Passionate about building scalable ML systems and backend infrastructure. Bilingual in French and English.`,
}

export const contactInfo: ContactInfo = {
  location: 'Ottawa, Ontario, Canada',
  phone: '(514) 431-3541',
  email: 'seydicheikhwade@gmail.com',
  github: 'https://github.com/cheikhwade07',
  linkedin: 'https://www.linkedin.com/in/seydi-cheikh-wade-4a3288328/',
}

export const education: Education = {
  institution: 'Carleton University',
  degree: 'Bachelor of Engineering in Software Engineering (Co-op)',
  location: 'Ottawa, Ontario',
  year: 'Third Year | Expected Graduation: 2028',
  coursework: [
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Systems',
    'Machine Learning',
    'Software Design',
    'Systems Programming',
    'API Development',
    'Relational Algebra',
  ],
}

export const experience: Experience[] = [
  {
    id: 'jasmine-conseil',
    title: 'Junior Data Scientist (Co-op)',
    company: 'Jasmine Conseil',
    location: 'Laval, QC',
    duration: 'June 23, 2025 - September 5, 2025 (2.5 months)',
    logo: '/images/Jasmine Conseil.png',
    projectDescription:
      'ML prediction system for customs risk analysis in partnership with Senegalese Customs Administration (contributes 40% of national budget)',
    responsibilities: [
      'Data Engineering: Preprocessed 10,000+ customs declaration records (product codes, origin/provenance, importers, statistical risk scores), handling missing values, categorical encoding, and feature engineering using pandas in Jupyter Notebook',
      'Model Development: Evaluated 5+ ML algorithms (Logistic Regression, Decision Trees, SVM, XGBoost, MLP) with/without PCA. Selected MLPClassifier + PCA based on F1-score and ROC-AUC metrics optimized for imbalanced datasets (rare fraud cases)',
      'API Development: Built FastAPI prediction service with Pydantic validation, Swagger/OpenAPI docs, and Joblib model serialization. Tested endpoints with Postman and curl for reliability',
      'Cloud Deployment: Deployed API to DigitalOcean VM (CentOS Stream 9) with Uvicorn server, configured firewalld security, and created MuleSoft Anypoint Platform proxy for API governance and monitoring',
      'Agile Collaboration: Produced weekly progress reports, documented architecture in Confluence, managed code in Bitbucket (Git), and worked closely with senior data scientists under iterative feedback cycles',
      'Technical Decision-Making: Justified MLP over LLMs for interpretability and operational requirements; chose PCA to reduce noise and prevent overfitting; selected FastAPI over Flask for native Pydantic validation',
    ],
  },
]

export const skills: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        description: 'ML pipelines (Customs Risk System), FastAPI development, data preprocessing',
      },
      {
        name: 'Java',
        description: 'Query processor implementation (Relax), OOP, modular architecture',
      },
      {
        name: 'SQL',
        description: 'Relational queries, schema design (Health & Fitness System), normalization',
      },
      { name: 'C', description: 'Systems programming, memory management, concurrency' },
      { name: 'JavaScript', description: 'REST integration, backend/frontend communication' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & SQL',
    skills: [
      {
        name: 'PostgreSQL',
        description: 'Schema design and normalization in Health & Fitness Management System',
      },
      { name: 'SQL', description: 'JOINs, aggregations, constraints, query optimization' },
      { name: 'ORM', description: 'Entity mapping, constraint enforcement, CRUD operations' },
      {
        name: 'Relational Algebra',
        description: 'Query processor implementation demonstrating database fundamentals',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    skills: [
      {
        name: 'FastAPI',
        description: 'Production API for Customs Risk Prediction System with Pydantic validation',
      },
      {
        name: 'RESTful Design',
        description: 'API endpoints, request/response handling, Swagger/OpenAPI docs',
      },
      {
        name: 'MuleSoft Anypoint',
        description: 'API proxy, governance, monitoring (internship project)',
      },
      { name: 'Uvicorn', description: 'ASGI server deployment and configuration' },
      { name: 'API Testing', description: 'Postman, curl for endpoint validation' },
    ],
  },
  {
    id: 'ml',
    title: 'Data & Machine Learning',
    skills: [
      {
        name: 'ML Pipeline',
        description: 'Preprocessing, feature engineering (Customs Risk System)',
      },
      {
        name: 'Supervised Learning',
        description: 'MLP, XGBoost, Logistic Regression, Decision Trees, SVM',
      },
      { name: 'Model Evaluation', description: 'F1-score, ROC-AUC for imbalanced datasets' },
      { name: 'Dimensionality Reduction', description: 'PCA implementation and integration' },
      { name: 'Tools', description: 'scikit-learn, pandas, NumPy, Joblib for model serialization' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    skills: [
      {
        name: 'DigitalOcean',
        description: 'Linux VM deployment, firewall configuration (Customs Risk System)',
      },
      { name: 'Render', description: 'CI-based API deployment' },
      { name: 'Linux', description: 'Command-line operations, server management' },
      { name: 'Infrastructure', description: 'Port management, environment configuration' },
    ],
  },
  {
    id: 'foundations',
    title: 'Engineering Foundations',
    skills: [
      {
        name: 'OOP & Architecture',
        description: 'Modular design, separation of concerns (all projects)',
      },
      {
        name: 'Data Structures',
        description: 'Implementation in query processor and database systems',
      },
      { name: 'Version Control', description: 'Git, GitHub for all project code' },
      { name: 'Agile', description: 'Jira, Confluence, sprint workflows (internship experience)' },
      { name: 'Testing & Debugging', description: 'Error handling, logging, production monitoring' },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'customs-risk-api',
    title: 'Customs Risk Prediction API',
    description: 'ML System for Senegalese Customs',
    longDescription:
      'Built during 2.5-month internship at Jasmine Conseil in partnership with the Senegalese Customs Administration (contributes 40% of national budget). Developed an ML-powered prototype to predict customs control circuits (Green/Orange/Red) for import declarations, automating risk assessment to accelerate processing and improve fraud detection.',
    image: '/images/Gemini_Generated_Image_gqobk9gqobk9gqob.png',
    techStack: [
      'Python 3.9',
      'scikit-learn',
      'pandas',
      'NumPy',
      'FastAPI',
      'Pydantic',
      'Joblib',
      'Uvicorn',
      'Jupyter Notebook',
      'DigitalOcean',
      'MuleSoft Anypoint',
      'Bitbucket',
      'Confluence',
    ],
    githubUrl: 'https://github.com/cheikhwade07/customs-risk-api-dashboard.git',
    featured: true,
    category: 'professional',
    date: 'Summer 2025',
    details: [
      {
        title: 'Dataset & Problem',
        items: [
          'Dataset: 10,000+ customs declaration records with product codes (HS), origin/provenance countries, importer/commissioner IDs, customs regimes, clearance bureaus, and transaction repetitiveness scores',
          'Challenge: Highly imbalanced dataset (rare Red circuit for high-risk cases) requiring F1-score and ROC-AUC metrics instead of simple accuracy',
          'Goal: Predict control circuit (Green = minimal inspection, Orange = document review, Red = physical inspection) to speed up legitimate trade while catching anomalies',
        ],
      },
      {
        title: 'Data Engineering & Preprocessing',
        items: [
          'Cleaned and transformed data using pandas in Jupyter Notebook: handled missing values, normalized country/regime codes, encoded categorical variables (origin, importer, commissioner)',
          'Engineered features using pre-calculated statistical risk scores (transaction repetitiveness, importer history)',
          'Split dataset 80/20 for training and validation to prevent overfitting',
        ],
      },
      {
        title: 'Model Selection & Evaluation',
        items: [
          'Algorithms tested: Logistic Regression, Decision Trees, SVM, XGBoost, MLPClassifier (neural network)',
          'Configurations: Evaluated each model with and without PCA (Principal Component Analysis) for dimensionality reduction',
          'Metrics: F1-score (handles class imbalance) and ROC-AUC (discriminative power across thresholds)',
          'Final selection: MLPClassifier + PCA offered best compromise between accuracy, generalization, and speed',
        ],
      },
      {
        title: 'Technical Decision-Making',
        items: [
          "Why not LLMs? Problem is structured supervised classification on tabular data, not text generation. LLMs lack architecture for numeric/categorical columns, act as black boxes (not explainable), and would be overkill for this use case",
          'Why PCA? High-dimensional categorical encodings introduced noise. PCA compressed features, improved training speed, and reduced overfitting risk',
          'Why FastAPI? Native Pydantic validation for JSON inputs, auto-generated Swagger docs, and fast ASGI performance ideal for prediction endpoints',
        ],
      },
      {
        title: 'API Development & Deployment',
        items: [
          'FastAPI service: POST /predict-circuit endpoint accepts JSON declaration data, validates with Pydantic, runs MLP+PCA prediction, returns circuit label with warnings for unknown values',
          'Testing: Validated with Postman and curl for edge cases (missing data, unknown importers, format errors)',
          'Deployment: Hosted on DigitalOcean VM (CentOS Stream 9) with Uvicorn server, firewalld security config',
          'API Governance: Created MuleSoft Anypoint Platform proxy (CloudHub 2.0) for secure public access, rate limiting, monitoring',
        ],
      },
    ],
  },
  {
    id: 'health-fitness',
    title: 'Health & Fitness Club Management System',
    description: 'Database Engineering & Backend Systems',
    longDescription:
      'Relational database system for health and fitness club operations, emphasizing normalized schema design, constraint enforcement, and business logic implementation beyond basic CRUD operations.',
    image: '/images/Gemini_Generated_Image_1tnizw1tnizw1tni.png',
    techStack: ['PostgreSQL', 'SQL', 'ORM', 'Database Design', 'Normalization'],
    githubUrl: 'https://github.com/cheikhwade07/Health-and-Fitness-Club-Management-System.git',
    featured: false,
    category: 'academic',
    details: [
      {
        title: 'Database Design',
        items: [
          'PostgreSQL schema normalized to 3NF with proper entity relationships (members, classes, trainers, equipment, facilities)',
          'Primary and foreign key constraints enforced at database level for referential integrity',
          'One-to-many and many-to-many relationships properly modeled',
          'Query optimization using JOINs, aggregations, and indexing strategies',
        ],
      },
      {
        title: 'Backend Implementation',
        items: [
          'ORM-based data access layer with entity mapping and constraint enforcement',
          'Role-based access control for members, trainers, and administrators',
          'Business logic: class capacity limits, scheduling conflict detection, membership validation',
          'Secure CRUD operations without raw SQL exposure',
        ],
      },
    ],
  },
  {
    id: 'relax-query',
    title: 'Relax Relational Algebra Query Processor',
    description: 'Database Systems & Computer Science Fundamentals',
    longDescription:
      'Relational algebra query processor in Java, implementing database systems theory as working code. Demonstrates query execution pipeline from parsing to in-memory execution, bridging SQL operations to their underlying mathematical foundations.',
    image: '/images/code-459070_1280.webp',
    techStack: [
      'Java',
      'Object-Oriented Design',
      'Data Structures',
      'Relational Algebra',
      'Query Processing',
    ],
    githubUrl: 'https://github.com/cheikhwade07/relax-query-processor.git',
    featured: false,
    category: 'academic',
    details: [
      {
        title: 'Implementation',
        items: [
          'Supported operators: Selection (σ), Projection (π), Join (⨝), Union (∪), and other relational algebra operations',
          'Modular architecture: separated parser from executor, enabling extensible operator implementation',
          'Query processing: parses relational algebra expressions and executes against in-memory data structures',
          'Type-safe Java implementation with object-oriented design patterns',
        ],
      },
    ],
  },
  {
    id: 'uno-game',
    title: 'Multiplayer UNO Game',
    description: 'Java & MVC Architecture',
    longDescription:
      'Full-scale UNO game implementation in Java demonstrating production-ready software engineering practices. Built using Model-View-Controller pattern to separate game logic from UI, with emphasis on maintainability, extensibility, and real-time game state management.',
    image: '/images/uno-game-placeholder.jpg',
    techStack: [
      'Java',
      'MVC Architecture',
      'Object-Oriented Design',
      'Event-Driven Programming',
      'State Management',
    ],
    githubUrl: 'https://github.com/cheikhwade07/Multiplayer-UNO-Game-Java-MVC-Architecture.git',
    featured: false,
    category: 'academic',
    details: [
      {
        title: 'Architecture & Design',
        items: [
          'MVC pattern implementation: decoupled game logic (Model) from user interface (View) and input handling (Controller)',
          'Object-Oriented Design principles: inheritance and polymorphism for diverse card behaviors',
          'Modular architecture enabling easy extension of game rules and card types',
          'Type-safe Java implementation with clear separation of concerns',
        ],
      },
      {
        title: 'Game Systems',
        items: [
          'Custom event handling system for real-time synchronization of game flow',
          'State management ensuring consistent game state across multiple players',
          'Turn-based game logic with rule enforcement (card matching, special cards, win conditions)',
          'Support for multiplayer gameplay with player management and turn rotation',
        ],
      },
    ],
  },
]

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const githubConfig = {
  username: 'cheikhwade07',
  excludedRepos: [
    'cheikhwade07',
    'projectweb',
    'Spotify_playlist_downloader',
    'Text-Based-Facebook',
    'customs-risk-api-dashboard',
    'Health-and-Fitness-Club-Management-System',
    'relax-query-processor',
    'Multiplayer-UNO-Game-Java-MVC-Architecture',
  ],
  maxRepos: 6,
}
