export const personalDetails = {
  name: "Abhisar Varshney",
  handle: "@Abhixarvar",
  role: "Full-Stack Web Developer",
  dob: "14-12-2004",
  email: "abhisarvasrhney2004@gmail.com",
  phone: "8799721618",
  location: "Delhi, India",
  languages: ["Hindi", "English"],
  linkedin: "https://www.linkedin.com/in/abhisar-varshney-313a65362/",
  github: "https://github.com/Abhixarvar",
  objective: "Passionate full-stack developer dedicated to crafting modern, performant web applications and clean C++ software solutions. Focused on modular code, intuitive design, and scalable database systems.",
  stats: [
    { label: "Public Repos", value: "5+", icon: "FolderGit2", color: "#58a6ff" },
    { label: "Core Focus", value: "Full-Stack Web", icon: "Code2", color: "#3fb950" },
    { label: "Degree", value: "BCA (2024-27)", icon: "GraduationCap", color: "#d29922" },
    { label: "Certifications", value: "NPTEL & Tech", icon: "Award", color: "#bc8cff" }
  ]
};

export const skillsData = [
  {
    category: "Languages & Core",
    icon: "Code2",
    items: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Zap", color: "#f1e05a", desc: "DOM manipulation, async code & modern web apps" },
      { name: "C / C++", level: "Intermediate", icon: "Cpu", color: "#f34b7d", desc: "Object-oriented programming, data structures & CLI logic" },
      { name: "Python", level: "Intermediate", icon: "Terminal", color: "#3572A5", desc: "Scripting, algorithm design & data processing" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", color: "#e34c26", desc: "Responsive layouts, CSS grid/flexbox & smooth UI animations" }
    ]
  },
  {
    category: "Databases & Backend",
    icon: "Database",
    items: [
      { name: "MongoDB", level: "Intermediate", icon: "Database", color: "#47A248", desc: "NoSQL document collections & dynamic query logic" },
      { name: "MySQL", level: "Intermediate", icon: "Server", color: "#00758F", desc: "Relational database schema design & SQL queries" },
      { name: "MariaDB", level: "Intermediate", icon: "HardDrive", color: "#C05B4D", desc: "High-performance relational storage engines" }
    ]
  },
  {
    category: "Developer Tools & Cloud",
    icon: "GitBranch",
    items: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", color: "#f05032", desc: "Version control, branching workflows & code hosting" },
      { name: "Vercel", level: "Advanced", icon: "Globe", color: "#ffffff", desc: "CI/CD serverless deployment & production hosting" },
      { name: "VS Code & Terminal", level: "Advanced", icon: "Terminal", color: "#007ACC", desc: "CLI operations, debugging & dev workflow optimization" }
    ]
  }
];

export const projectsData = [
  {
    id: "dev-typing",
    title: "DEV TYPING",
    tagline: "Speed Typing App & Snippet Practice for Developers",
    category: "Web Apps",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 12,
    forks: 4,
    description: "An interactive code typing application where software developers hone typing speed using real code syntax and snippets instead of generic prose. Features live WPM/Accuracy metrics and user history.",
    tech: ["HTML5", "CSS3", "JavaScript", "MongoDB", "Vercel"],
    highlights: [
      "Real-time syntax evaluation with WPM and accuracy metrics",
      "MongoDB database integration for persistent snippet libraries and high scores",
      "Deploys automatically to production on Vercel"
    ],
    github: "https://github.com/Abhixarvar",
    live: "https://dev-typing.vercel.app",
    featured: true,
    icon: "Keyboard"
  },
  {
    id: "ecommerce-admin",
    title: "Full-Stack E-Commerce & Admin Panel",
    tagline: "Complete Storefront with Inventory & Dynamic Banner Management",
    category: "Web Apps",
    visibility: "Public",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 18,
    forks: 7,
    description: "A comprehensive e-commerce application featuring a dynamic product catalog, active shopping cart, and a dedicated Admin Dashboard for real-time stock management and banner customization.",
    tech: ["HTML5", "CSS3", "JavaScript", "MongoDB", "Vercel"],
    highlights: [
      "Custom Admin Panel for live stock updates and dynamic site banners",
      "Dynamic REST API data fetching backed by MongoDB database",
      "Responsive UI built with performant vanilla HTML5, CSS3, and JavaScript",
      "Hosted live on Vercel infrastructure"
    ],
    github: "https://github.com/Abhixarvar",
    live: "https://vercel.com",
    featured: true,
    icon: "ShoppingBag"
  },
  {
    id: "dairy-management",
    title: "Dairy Management System",
    tagline: "Console Application engineered purely in C++",
    category: "C++ & Tools",
    visibility: "Public",
    language: "C++",
    languageColor: "#f34b7d",
    stars: 9,
    forks: 3,
    description: "A structured C++ application created to streamline dairy operational records, stock tracking, and automated billing calculations using object-oriented C++ principles.",
    tech: ["C++", "OOP", "File I/O", "Data Structures"],
    highlights: [
      "Engineered completely in C++ focusing on modular object-oriented architecture",
      "Implements file stream handling for persistent data storage",
      "Optimized memory footprint and interactive CLI menu navigation"
    ],
    github: "https://github.com/Abhixarvar",
    live: null,
    featured: true,
    icon: "Terminal"
  }
];

export const educationData = [
  {
    period: "2024 — 2027",
    degree: "Bachelors of Computer Application (BCA)",
    institution: "Jagannath University, Haryana",
    status: "In Progress",
    icon: "GraduationCap",
    details: "Focusing on core computer science subjects, programming fundamentals in C/C++, web development, database management, and software engineering principles."
  },
  {
    period: "2023",
    degree: "Class XII (Senior Secondary)",
    institution: "CBSE Board",
    score: "62%",
    icon: "BookOpen",
    details: "Completed high school education under CBSE board curriculum with focus on science & computer fundamentals."
  },
  {
    period: "2021",
    degree: "Class X (Secondary School)",
    institution: "CBSE Board",
    score: "74%",
    icon: "CheckCircle",
    details: "Foundation education in science, mathematics, and computer applications."
  }
];

export const achievementsData = [
  {
    title: "NPTEL Certification — The Joy of Computing using Python",
    issuer: "NPTEL / IIT",
    type: "Course Certification",
    icon: "Award",
    badgeColor: "#d29922",
    desc: "Comprehensive coursework covering Python programming fundamentals, algorithmic problem solving, and data structure applications."
  },
  {
    title: "University Coding Contests",
    issuer: "Jagannath University",
    type: "Competitive Coding",
    icon: "Trophy",
    badgeColor: "#3fb950",
    desc: "Active participant in university-level competitive programming events focusing on algorithm optimization and C++/Python problem solving."
  },
  {
    title: "Full-Stack Web App Deployments",
    issuer: "Vercel & Self-Paced",
    type: "Practical Project Mastery",
    icon: "FolderGit2",
    badgeColor: "#58a6ff",
    desc: "Successfully built and deployed multiple full-stack web applications backed by MongoDB databases and modern responsive design."
  }
];

export const softSkillsData = [
  { name: "Teamwork & Collaboration", icon: "Users", desc: "Proven ability to collaborate on shared repositories, version control workflows, and team web projects." },
  { name: "Clean Code & UI Design", icon: "Sparkles", desc: "Detail-oriented approach to user experiences, structured project organization, and reusable code components." },
  { name: "Problem Solving", icon: "Brain", desc: "Analytical mindset focused on breaking complex logic and bugs down into clean, maintainable solutions." },
  { name: "Adaptability & Growth", icon: "RefreshCw", desc: "Enthusiastic about learning new web frameworks, modern tooling, and software engineering best practices." }
];
