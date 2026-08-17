export const personalDetails = {
  name: "Abhisar Varshney",
  role: "Aspiring Game & Full-Stack Developer",
  dob: "14-12-2004",
  email: "abhisarvasrhney2004@gmail.com",
  phone: "8799721618",
  address: "26 Patel Apartments Plot-10 sec-13 Rohini, Delhi-110085",
  languages: ["Hindi", "English"],
  linkedin: "https://www.linkedin.com/in/abhisar-varshney-313a65362/",
  github: "https://github.com/Abhixarvar",
  objective: "Passionate about game development and eager to learn industry tools like C++, Unity or Unreal Engine. Seeking a beginner-friendly position where I can apply my growing knowledge and continue developing real-world skills.",
  level: 20,
  xp: 85,
  stats: [
    { label: "Projects Completed", value: "5+", icon: "Sparkles", color: "emerald" },
    { label: "Core Focus", value: "Game Dev & Web", icon: "Gamepad2", color: "cyan" },
    { label: "Degree", value: "BCA (2024-27)", icon: "GraduationCap", color: "amber" },
    { label: "Certifications", value: "NPTEL & Anthropic", icon: "Award", color: "purple" }
  ]
};

export const skillsData = [
  {
    category: "Languages & Core",
    icon: "Code2",
    items: [
      { name: "C / C++", level: "Intermediate", icon: "Cpu", rarity: "diamond", desc: "Core language logic & OOP game logic foundations" },
      { name: "JavaScript", level: "Advanced", icon: "Zap", rarity: "emerald", desc: "Modern ES6+, DOM manipulation & Web Apps" },
      { name: "Python", level: "Intermediate", icon: "Terminal", rarity: "gold", desc: "Scripting, problem solving & data structures" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", rarity: "emerald", desc: "Responsive UIs, modern styling & CSS animations" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    items: [
      { name: "MongoDB", level: "Intermediate", icon: "Database", rarity: "emerald", desc: "NoSQL document storage for web applications" },
      { name: "MySQL", level: "Intermediate", icon: "Server", rarity: "gold", desc: "Relational database querying & schema design" },
      { name: "MariaDB", level: "Intermediate", icon: "HardDrive", rarity: "gold", desc: "High performance SQL database engines" },
      { name: "Vercel", level: "Advanced", icon: "Globe", rarity: "diamond", desc: "Deployment platform for modern frontend & fullstack apps" }
    ]
  },
  {
    category: "AI & Workflow Tools",
    icon: "Bot",
    items: [
      { name: "Claude Code", level: "Certified", icon: "Brain", rarity: "purple", desc: "Anthropic Claude 101 certified prompt & AI development workflow" },
      { name: "Gemini AI", level: "Proficient", icon: "Sparkles", rarity: "purple", desc: "Multi-modal model prompting & system architecture" },
      { name: "ChatGPT", level: "Proficient", icon: "MessageSquare", rarity: "purple", desc: "AI assisted debugging & game design logic" },
      { name: "Git & GitHub", level: "Intermediate", icon: "GitBranch", rarity: "diamond", desc: "Version control & repository management" }
    ]
  }
];

export const projectsData = [
  {
    id: "dev-typing",
    title: "DEV TYPING",
    tagline: "Speed Typing Game for Software Developers",
    category: "Web Apps",
    rarity: "Diamond Item",
    rarityColor: "#38BDF8",
    description: "An interactive code typing game where users hone their typing speed by typing actual syntax and real code snippets instead of generic English words. Features full score tracking and user persistence.",
    tech: ["HTML5", "CSS3", "JavaScript", "MongoDB", "Vercel"],
    highlights: [
      "Real-time syntax highlighting and speed metrics (WPM/Accuracy)",
      "MongoDB database integration for storing user scores and code snippet libraries",
      "Deployed and hosted live on Vercel"
    ],
    github: "https://github.com/Abhixarvar",
    live: "https://dev-typing.vercel.app",
    featured: true,
    icon: "Keyboard"
  },
  {
    id: "ecommerce-admin",
    title: "Full-Stack E-Commerce & Admin Panel",
    tagline: "Complete Storefront with Dedicated Stock & Banner Management",
    category: "Web Apps",
    rarity: "Netherite Item",
    rarityColor: "#A855F7",
    description: "A fully functional e-commerce web application featuring a dynamic product catalog, interactive cart, and a separate Admin Dashboard for managing inventory stock, dynamic banners, and orders.",
    tech: ["HTML5", "CSS3", "JavaScript", "MongoDB", "Vercel"],
    highlights: [
      "Custom Admin Panel for instant banner updates and live stock management",
      "Dynamic data fetching backed by MongoDB database",
      "Responsive shopping interface built with clean vanilla HTML, CSS, and JS",
      "Hosted live on Vercel"
    ],
    github: "https://github.com/Abhixarvar",
    live: "https://vercel.com",
    featured: true,
    icon: "ShoppingBag"
  },
  {
    id: "dairy-management",
    title: "Dairy Management System",
    tagline: "Console Application built purely in C++",
    category: "Game & C++",
    rarity: "Redstone Item",
    rarityColor: "#EF4444",
    description: "A structured C++ application created to streamline dairy operations, record management, stock tracking, and billing calculations using object-oriented C++ principles.",
    tech: ["C++", "OOP", "File I/O", "Data Structures"],
    highlights: [
      "Engineered completely in C++ focusing on robust modular structure",
      "Implements file handling for persistent data storage",
      "Optimized memory management and CLI interactive menus"
    ],
    github: "https://github.com/Abhixarvar",
    live: null,
    featured: true,
    icon: "Terminal"
  },
  {
    id: "phone-recommendation",
    title: "AI Phone Recommendation Engine",
    tagline: "Multi-Model AI Mobile Selector",
    category: "AI Systems",
    rarity: "Emerald Item",
    rarityColor: "#10B981",
    description: "An intelligent smartphone finder tool that aggregates user requirements, budget limits, and camera/gaming preferences to generate precise phone recommendations using multi-model AI reasoning.",
    tech: ["Claude Code", "Gemini AI", "ChatGPT", "JavaScript", "HTML/CSS"],
    highlights: [
      "Leverages prompt architecture & multi-model comparison (Claude, Gemini, ChatGPT)",
      "Smart filtering by budget, battery life, camera quality, and gaming performance",
      "Clean UI for interactive model recommendations"
    ],
    github: "https://github.com/Abhixarvar",
    live: null,
    featured: false,
    icon: "Smartphone"
  },
  {
    id: "game-recommendation",
    title: "AI Game Recommendation Engine",
    tagline: "Personalized Video Game Matchmaker",
    category: "AI Systems",
    rarity: "Gold Item",
    rarityColor: "#F59E0B",
    description: "A customized game finder application tailored for gamers. Inputs player genre tastes, hardware specs, and playstyle preferences to output curated PC/Console game recommendations with detailed specs.",
    tech: ["Claude Code", "Gemini AI", "ChatGPT", "JavaScript", "Game Design"],
    highlights: [
      "Tailored specifically for game enthusiasts using multi-model prompt chains",
      "Suggests titles based on GPU requirements, game length, story depth, and mechanics",
      "Built with a high-energy gaming themed interactive workflow"
    ],
    github: "https://github.com/Abhixarvar",
    live: null,
    featured: false,
    icon: "Gamepad2"
  }
];

export const educationData = [
  {
    period: "2024 — 2027",
    degree: "Bachelors of Computer Application (BCA)",
    institution: "Jagannath University, Haryana",
    status: "In Progress",
    icon: "GraduationCap",
    details: "Focused on core computer science subjects, programming fundamentals in C/C++, web development, database management, and software engineering principles."
  },
  {
    period: "2023",
    degree: "Class XII (Senior Secondary)",
    institution: "CBSE Board",
    score: "62%",
    icon: "BookOpen",
    details: "Completed high school education under CBSE board curriculum."
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
    badgeColor: "#F59E0B",
    desc: "Comprehensive coursework covering Python programming, algorithms, data structures, and computational thinking."
  },
  {
    title: "Claude Code 101",
    issuer: "Anthropic",
    type: "AI Certification",
    icon: "BrainCircuit",
    badgeColor: "#A855F7",
    desc: "Certified training on Anthropic's Claude Code and advanced LLM prompt engineering workflows for software development."
  },
  {
    title: "University Coding Contests",
    issuer: "Jagannath University",
    type: "Competitive Coding",
    icon: "Trophy",
    badgeColor: "#10B981",
    desc: "Active participant in university-level competitive programming events with a focus on Python algorithm optimization and problem solving."
  }
];

export const softSkillsData = [
  { name: "Teamwork & Collaboration", icon: "Users", desc: "Proven ability to collaborate in team projects, shared repos, and group coding challenges." },
  { name: "Creativity & Game Design", icon: "Sparkles", desc: "Out-of-the-box approach to user interactions, game mechanics, and innovative project ideas." },
  { name: "Problem Solving", icon: "Brain", desc: "Analytical mindset focused on breaking down complex bugs and logic into clean solutions." },
  { name: "Adaptability", icon: "RefreshCw", desc: "Quick learner passionate about mastering Unity, Unreal Engine, and emerging AI tools." }
];
