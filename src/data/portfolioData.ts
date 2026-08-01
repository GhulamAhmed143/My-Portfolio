export interface ProjectItem {
  id: string;
  title: string;
  category: "Full Stack" | "Frontend";
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  duration?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillItem {
  name: string;
  level: string;
  desc: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  color: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  role: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    profilePicture: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
    summary: string;
    availability: string;
    badge: string;
    subtitle: string;
    tagline: string;
    bioP1: string;
    bioP2: string;
  };
  stats: {
    projectsShipped: string;
    technologiesUsed: string;
    yearsBuilding: string;
    degree: string;
  };
  highlights: Array<{
    title: string;
    desc: string;
    iconName: string;
    color: string;
  }>;
  skillCategories: SkillCategory[];
  technologies: string[];
  education: EducationItem[];
  languages: string[];
  certifications: string[];
  achievements: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Ghulam Ahmed",
    title: "Full-Stack Developer",
    profilePicture: "/profile.jpg",
    email: "ahmedghulam622@gmail.com",
    phone: "+92 314 0576843",
    location: "Islamabad, Pakistan",
    github: "https://github.com/GhulamAhmed143",
    linkedin: "https://www.linkedin.com/in/ahmed-sohail-247065427/",
    website: "https://ghulamahmed.dev",
    summary:
      "BS Information Engineering Technology student with a strong passion for building modern web applications. Experienced in Next.js, React, TypeScript, Node.js, and Laravel. Completed Web Developer Internship at Pig Bug Solution and shipped multiple full-stack production projects.",
    availability: "Open to Opportunities",
    badge: "5 real projects shipped",
    subtitle: "I build web apps that work — not just prototypes.",
    tagline: "Full-Stack Developer · Islamabad, Pakistan",
    bioP1:
      "I'm a BS Information Engineering Technology student who got into web development because I wanted to build things people actually use. I started with HTML and CSS, moved into React and Node.js, and now I mostly work with Next.js, TypeScript, and Laravel.",
    bioP2:
      "I've built projects like a Netflix-style streaming platform, a COVID statistics visualizer, and a blockchain-based real estate tokenization app. I'm a developer who learns by building real things and shipping them.",
  },

  stats: {
    projectsShipped: "5+",
    technologiesUsed: "15+",
    yearsBuilding: "2+",
    degree: "BS-IET",
  },

  highlights: [
    {
      title: "Frontend & Backend",
      desc: "From React UIs to Laravel APIs and database design — I work across the full stack.",
      iconName: "Code",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Clean, Functional Interfaces",
      desc: "I care about making things look good, but usability and clarity come first.",
      iconName: "Layers",
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Learning Good Practices",
      desc: "TypeScript, component-based architecture, and clean maintainable code.",
      iconName: "BookOpen",
      color: "text-violet-600 bg-violet-50",
    },
  ],

  skillCategories: [
    {
      category: "Frontend",
      iconName: "Code2",
      color: "bg-emerald-500",
      skills: [
        { name: "Next.js (App Router)", level: "Comfortable", desc: "Server Components, SSR, Dynamic Routing" },
        { name: "React", level: "Comfortable", desc: "Hooks, Context, Component Patterns" },
        { name: "TypeScript", level: "Comfortable", desc: "Strict Typing, Interfaces, Generics" },
        { name: "Tailwind CSS", level: "Comfortable", desc: "Responsive Layouts, Custom Config, Animations" },
        { name: "HTML5 / CSS3", level: "Strong", desc: "Semantic Markup, Flexbox, Grid, Custom Properties" },
        { name: "Framer Motion", level: "Learning", desc: "Scroll Animations, Page Transitions" },
      ],
    },
    {
      category: "Backend & Databases",
      iconName: "Database",
      color: "bg-blue-500",
      skills: [
        { name: "Laravel", level: "Comfortable", desc: "MVC, Eloquent ORM, API Development" },
        { name: "Node.js", level: "Familiar", desc: "Express, Async I/O, NPM Ecosystem" },
        { name: "PostgreSQL", level: "Familiar", desc: "Relational Queries, Schema Design" },
        { name: "MongoDB", level: "Familiar", desc: "Document Stores, Aggregation Pipelines" },
        { name: "REST APIs", level: "Comfortable", desc: "API Design, Authentication, Fetch/Axios" },
        { name: "Prisma ORM", level: "Learning", desc: "Type-safe Queries, Migrations" },
      ],
    },
    {
      category: "Tools & Workflow",
      iconName: "Wrench",
      color: "bg-violet-500",
      skills: [
        { name: "Git & GitHub", level: "Comfortable", desc: "Branching, Pull Requests, Collaboration" },
        { name: "Vercel / Deployment", level: "Comfortable", desc: "CI/CD, Environment Variables, Previews" },
        { name: "VS Code", level: "Daily Driver", desc: "ESLint, Prettier, Debugging" },
        { name: "Docker", level: "Basic", desc: "Containerization, Docker Compose" },
        { name: "Postman", level: "Familiar", desc: "API Testing, Collections" },
        { name: "Solidity / Web3", level: "Explored", desc: "Smart Contracts, Web3.js Integration" },
      ],
    },
  ],

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Laravel",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Git & GitHub",
    "Docker",
    "Web3.js",
    "Solidity",
    "PWA",
    "@react-pdf/renderer",
  ],

  education: [
    {
      degree: "BS Information Engineering Technology",
      institution: "Foundation University Islamabad",
      period: "2023 - Present",
      details:
        "Focusing on software engineering principles, web technologies, database management systems, and network infrastructure.",
    },
  ],

  languages: ["English (Professional Working)", "Urdu (Native)"],

  certifications: [
    "Full-Stack Web Development Certification",
    "React & TypeScript Engineering",
    "Web3 Smart Contract Fundamentals",
  ],

  achievements: [
    "Completed a 6-week Web Developer Internship at Pig Bug Solution specializing in Next.js & React.",
    "Shipped 5+ production-ready web applications across Next.js, React, and Laravel.",
    "Engineered a Web3 blockchain real estate tokenization platform using Solidity.",
    "Built an offline-capable Multi-Store POS application with real-time sync.",
  ],

  experience: [
    {
      period: "2026 (6 Weeks)",
      title: "Web Developer Intern",
      role: "Pig Bug Solution — Next.js & React",
      description:
        "Completed a 6-week Web Developer Internship at Pig Bug Solution using Next.js, React, TypeScript, Tailwind CSS, and REST APIs to build responsive user interfaces, integrate backend endpoints, and optimize web app performance.",
      iconName: "Laptop",
      badge: "6-Week Internship",
    },
    {
      period: "2026 - Present",
      title: "Building Full-Stack Projects",
      role: "Next.js, Laravel & TypeScript",
      description:
        "Working on larger projects like the Cloud-Based POS system and NetPrime streaming platform. Managing complexity in real applications with proper backend APIs, database design, and deployment.",
      iconName: "Laptop",
      badge: "Current",
    },
    {
      period: "2023 - 2024",
      title: "React, TypeScript & Blockchain",
      role: "Deeper Frontend + Web3",
      description:
        "Built the blockchain-based real estate tokenization platform with Solidity and Web3.js. Got comfortable with TypeScript and adopted it across all modern web projects.",
      iconName: "Code",
      badge: "Growth",
    },
    {
      period: "2023 - 2024",
      title: "Started with Web Development",
      role: "HTML, CSS, JavaScript & React",
      description:
        "Learned the fundamentals of web development and built foundational projects including the COVID statistics visualizer. Mastered React component architecture.",
      iconName: "BookOpen",
      badge: "Foundation",
    },
    {
      period: "Ongoing",
      title: "BS Information Engineering Technology",
      role: "University Studies",
      description:
        "Pursuing degree coursework while building real-world software applications on the side to merge theoretical foundations with practical engineering.",
      iconName: "GraduationCap",
      badge: "Education",
    },
  ],

  projects: [
    {
      id: "netprime",
      title: "NetPrime — Streaming Platform",
      category: "Full Stack",
      duration: "2024",
      description:
        "A Netflix-inspired streaming platform where users can browse, search, and stream video content. Built with a focus on responsive design, smooth video playback, and a clean content browsing experience.",
      longDescription:
        "NetPrime is a full-featured video streaming web application designed to deliver an engaging user experience similar to Netflix. The application features video category organization, dynamic search filtering, responsive media playback, and custom user list creation. Built using Next.js App Router, React, TypeScript, and Tailwind CSS.",
      highlights: [
        "Video streaming with adaptive playback controls",
        "Search and filter functionality for content discovery",
        "Responsive UI that works seamlessly across all devices",
        "Dynamic category browsing and curated media lists",
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/GhulamAhmed143",
    },
    {
      id: "covid-visualizer",
      title: "COVID / Health Statistics Visualizer",
      category: "Full Stack",
      duration: "2023",
      description:
        "A data visualization dashboard that pulls real-time COVID and health statistics from public APIs and displays them through interactive charts, maps, and filterable data tables.",
      longDescription:
        "A high-performance analytical dashboard designed to visualize complex global public health metrics. It fetches live data from public healthcare APIs, processes statistical breakdowns across countries, and renders interactive visual analytics using Chart.js, React, and custom data filters.",
      highlights: [
        "Interactive charts with real-time data from public health APIs",
        "Country and region-level filtering and comparison",
        "Responsive dashboard layout with clear data presentation",
        "Data export and trend analytical overview",
      ],
      tags: ["React", "Chart.js", "REST APIs", "CSS", "JavaScript"],
      githubUrl: "https://github.com/GhulamAhmed143",
    },
    {
      id: "blockchain-realestate",
      title: "Blockchain Real Estate Tokenization",
      category: "Full Stack",
      duration: "2026",
      description:
        "A platform for tokenizing real estate assets on the blockchain, enabling fractional ownership and transparent property transactions through smart contracts.",
      longDescription:
        "A Web3 decentralized real estate application enabling property tokenization. Real estate assets are represented via Solidity smart contracts, allowing fractional investment, transparent ownership records, and secure crypto wallet transactions using Web3.js and Node.js.",
      highlights: [
        "Smart contract integration for property tokenization",
        "Wallet connection and transaction management with Web3.js",
        "Property listing and fractional ownership dashboard",
        "Transparent ledger history for verified property assets",
      ],
      tags: ["React", "Solidity", "Web3.js", "Node.js", "TypeScript"],
      githubUrl: "https://github.com/GhulamAhmed143",
    },
    {
      id: "cloud-pos",
      title: "Cloud-Based Multi-Store POS",
      category: "Full Stack",
      duration: "2024",
      description:
        "A progressive web app for managing point-of-sale operations across multiple store locations, with real-time inventory sync, sales reporting, and offline support.",
      longDescription:
        "An enterprise-grade multi-location POS and inventory management Progressive Web App. Built with Next.js, Laravel REST API, and PostgreSQL, it enables business owners to manage sales, track stock inventory across multiple branches, generate financial analytics, and operate smoothly offline.",
      highlights: [
        "Multi-store inventory management with real-time sync",
        "Offline-capable PWA with background data synchronization",
        "Comprehensive sales reporting and analytics dashboard",
        "Role-based staff authentication and receipt generation",
      ],
      tags: ["Next.js", "Laravel", "TypeScript", "PWA", "PostgreSQL"],
      githubUrl: "https://github.com/GhulamAhmed143",
    },
  ],
};
