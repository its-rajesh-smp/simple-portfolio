/**
 * Portfolio content. Anything marked `TODO(dummy)` is placeholder content to replace later.
 */
import type {
  Experience,
  Friend,
  Project,
  Quote,
  SocialLink,
  SkillGroup,
} from "@/types/portfolio";

const SKILL_ICON = "https://skillicons.dev/icons?i=";
/** TODO(dummy): placeholder images from picsum.photos. */
const placeholder = (seed: string, w: number, h: number) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PROFILE = {
  name: "Rajesh Singha Mahapatra",
  firstName: "Rajesh",
  handle: "@rajeshsmp",
  title: "A Full Stack web developer.",
  role: "Full Stack Developer",
  url: "https://www.itsrajeshsmp.online",
  description: "Full Stack Developer at VAll. Open-source contributor building AI SaaS products.",
  bio: "I'm a Full Stack developer at VAll, shipping AI-driven products, designing backend systems, and managing infrastructure. I love building scalable systems and breaking them down to understand how they fail and improve.",
  avatarUrl: "https://res.cloudinary.com/dtgoeupid/image/upload/v1742881766/Portfolio/dp.jpg",
  ogImage: "https://res.cloudinary.com/dtgoeupid/image/upload/v1779285598/og_2_fkh0mo.jpg",
  /** Original pixel-art scenes per theme (regenerate with scripts/generate-hero-gif.py). */
  heroImage: { day: "/hero-pixel-day.gif", night: "/hero-pixel-night.gif" },
  email: "its.rajeshsmp@gmail.com",
  tel: "+918942908195",
  location: "West Bengal, India",
  currentCompany: { name: "VAll", url: "https://vallindia.com/" },
  githubUsername: "its-rajesh-smp",
  footerTagline: "Open to collaborations",
  visitorCount: 1024, // TODO(dummy)
  lastUpdatedAt: "2026-10-09",
} as const;

export const RESUME = {
  fileName: "Rajesh_Singha_Mahapatra_Resume.pdf",
  /** Direct PDF url for the inline viewer. TODO(dummy): replace with a real PDF link. */
  pdfUrl: "",
  /** Where "Download" / "Open" point. */
  externalUrl: "https://drive.google.com/drive/u/0/folders/1fPOYCJ1ZkfHCWeW1OdxzXnuhkbguE8sC",
  summary: { before: "Full Stack Developer at VAll.", highlight: "AI-first products", after: ". Builder. One page." },
};

export const HERO_TECH = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"] as const;

export const SOCIALS: SocialLink[] = [
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajeshsmp/",
    preview: placeholder("rajesh-linkedin", 600, 340), // TODO(dummy)
  },
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/", // TODO(dummy)
    preview: placeholder("rajesh-instagram", 600, 340),
  },
  { kind: "github", label: "GitHub", href: "https://github.com/its-rajesh-smp" },
  { kind: "email", label: "Email", href: `mailto:${PROFILE.email}` },
];

export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "GuestBook", href: "/guestbook" },
  { label: "Resume", href: "/resume" },
] as const;

export const SKILL_GROUPS: SkillGroup[] = [
  { category: "Languages", core: ["TypeScript", "JavaScript"], others: ["HTML", "CSS", "SCSS"] },
  { category: "Frontend", core: ["React", "Next.js", "Tailwind CSS"], others: ["Redux Toolkit", "Tanstack Query", "Material UI"] },
  { category: "Backend", core: ["Node.js", "NestJS", "Express"], others: ["Prisma"] },
  { category: "Databases", core: ["PostgreSQL", "Firebase"], others: ["MongoDB"] },
  { category: "AWS", core: ["EC2", "S3", "Lambda", "ECS"], others: ["ECR", "SQS"] },
  { category: "DevOps", core: ["Docker"], others: ["GitHub Actions", "Pulumi"] },
  { category: "AI", core: ["Prompt Engineering", "MCP", "LangChain", "Agent SDK"], others: ["RAG", "Gemini API", "OpenAI API"] },
  { category: "Testing", core: ["Jest", "Testcontainers"], others: ["Playwright"] },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "vall",
    org: "VAll",
    role: "Full Stack Developer",
    period: "Jun 2025 – Present",
    location: "Remote",
    logo: "building",
    highlights: [
      "Building QuestCraftAI from scratch — an agentic AI platform serving 40+ NGOs with a 3-agent architecture (React, Node.js, PostgreSQL, pgvector, RAG, OpenAI Agent SDK).",
      "Created and deployed a custom MCP server on ECS exposing 4 tools that power QuestCraftAI agents and a resume-based NGO recommendation chatbot.",
      "Designed a distributed locking mechanism using S3 conditional writes to prevent duplicate job execution across machines.",
      "Implemented integration testing with Testcontainers and Jest covering 40+ APIs, running on every PR via CI.",
      "Migrated data infrastructure from DynamoDB to PostgreSQL and led API v2 with minimal downtime.",
    ],
  },
  {
    id: "open-source",
    org: "Open Source",
    role: "Contributor",
    period: "2025 – Present",
    location: "Remote",
    logo: "github",
    livePrs: true,
    highlights: [
      "Investigated PDF template rendering bugs in Reactive Resume and submitted a fix with tests, acknowledged by the maintainer.",
      "Reproduced issues from trackers and turned them into small, reviewable patches maintainers could merge quickly.",
    ],
  },
  {
    id: "sharpener",
    org: "Sharpener",
    role: "SDE 1 · SDE Intern",
    period: "Sep 2023 – Jun 2025",
    location: "Bangalore",
    logo: "briefcase",
    highlights: [
      "Prototyped a multilingual AI assistant for doubt resolution and mock interviews using Google TTS, STT and Gemini.",
      "Designed CI/CD pipelines with GitHub Actions and blue-green deployments on Nginx for zero-downtime releases.",
      "Built Snapit AI, an AI-powered resume analysis platform with React, NestJS, PostgreSQL and Gemini API.",
      "Improved landing page performance from 55% to 85% using Cloudinary CDN and lazy loading.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "reactive-resume",
    name: "Reactive Resume",
    tagline: "Open Source Contribution",
    description:
      "Fixed PDF template rendering bugs in a popular open-source resume builder, with tests, acknowledged by the maintainer.",
    image:
      "https://res.cloudinary.com/dtgoeupid/image/upload/v1779197740/Reactive-Resume-_-A-free-and-open-source-resume-builder-05-19-2026_07_02_PM_ehx79p.png",
    frame: "from-lime-200 via-emerald-200 to-teal-300",
    tech: ["React", "TypeScript", "Testing"],
    status: "Live",
    ribbon: "Merged PR", // TODO(dummy)
    link: "https://github.com/amruthpillai/reactive-resume/pull/3044",
    githubLink: "https://github.com/amruthpillai/reactive-resume",
  },
  {
    slug: "profilepad",
    name: "ProfilePad",
    tagline: "Portfolio Builder",
    description: "Create and manage professional portfolio websites with templates, real-time editing, and SEO built in.",
    image:
      "https://res.cloudinary.com/dtgoeupid/image/upload/v1778432506/ProfilePad-05-10-2026_10_27_PM_wkfsbs.png",
    frame: "from-sky-200 via-indigo-300 to-violet-400",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    status: "Beta",
    githubLink: "https://github.com/its-rajesh-smp/profilepad-new",
  },
  {
    slug: "attendly",
    name: "Attendly",
    tagline: "Event Discovery Platform",
    description: "Explore curated events, RSVP seamlessly, and stay connected with experiences that match your interests.",
    image:
      "https://res.cloudinary.com/dtgoeupid/image/upload/v1777099568/Attendly-04-25-2026_12_15_PM_ce6bi0.png",
    frame: "from-fuchsia-200 via-purple-200 to-indigo-200",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma"],
    status: "Beta",
    githubLink: "https://github.com/its-rajesh-smp/attendly",
  },
  {
    slug: "blinkit-clone",
    name: "BlinkIt Clone",
    tagline: "Quick Commerce App",
    description: "Auth, cart, orders, Google Maps address selection, order tracking, invoices, and Razorpay payments.",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1742886229/Portfolio/mnbrkzuv7pvo4whbc6w7.png",
    frame: "from-yellow-200 via-amber-200 to-green-300",
    tech: ["React", "Node.js", "Express", "MySQL", "Redux"],
    status: "Live",
    link: "https://www.youtube.com/watch?v=wCWGeTGMYWg",
    githubLink: "https://github.com/its-rajesh-smp/blinkit",
  },
  {
    slug: "trackyfy",
    name: "TrackyFy",
    tagline: "Expense Tracker",
    description: "Manage daily credit and expenses with Google Auth, filters, categorized charts, and downloadable reports.",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1742886360/Portfolio/p9npqhxu4ixfdasmxaq3.png",
    frame: "from-cyan-200 via-sky-200 to-blue-300",
    tech: ["React", "Firebase", "Redux", "Sass"],
    status: "Live",
    link: "https://trackyfi.netlify.app/",
    githubLink: "https://github.com/its-rajesh-smp/TrackyFi",
  },
];

export const FEATURED_PROJECT_COUNT = 4;

export const ABOUT_SKILLS = [
  { name: "React", icon: `${SKILL_ICON}react` },
  { name: "JavaScript", icon: `${SKILL_ICON}js` },
  { name: "TypeScript", icon: `${SKILL_ICON}ts` },
  { name: "PostgreSQL", icon: `${SKILL_ICON}postgres` },
  { name: "Node.js", icon: `${SKILL_ICON}nodejs` },
  { name: "Next.js", icon: `${SKILL_ICON}nextjs` },
  { name: "AWS", icon: `${SKILL_ICON}aws` },
  { name: "Docker", icon: `${SKILL_ICON}docker` },
];

// TODO(dummy)
export const FRIENDS: Friend[] = [
  { name: "lorem", href: "#", image: placeholder("friend-lorem", 64, 64) },
  { name: "ipsum", href: "#", image: placeholder("friend-ipsum", 64, 64) },
  { name: "dolor", href: "#", image: placeholder("friend-dolor", 64, 64) },
];

export const QUOTES: Quote[] = [
  { text: "If you never want to be criticized, don't do anything new.", author: "Jeff Bezos" },
  { text: "Desire is a contract you make with yourself to be unhappy until you get what you want.", author: "Naval Ravikant" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
];
