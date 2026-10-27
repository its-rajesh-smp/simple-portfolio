/**
 * Portfolio content. Anything marked `TODO(dummy)` is placeholder content to replace later.
 */
import type {
  Education,
  Experience,
  Recommendation,
  Friend,
  Project,
  Quote,
  SocialLink,
  SkillGroup,
} from "@/types/portfolio";

/** TODO(dummy): placeholder images from picsum.photos. */
const placeholder = (seed: string, w: number, h: number) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const PROFILE = {
  name: "Rajesh Singha Mahapatra",
  firstName: "Rajesh",
  handle: "@rajeshsmp",
  /** Name spellings people search for — fed to meta keywords, JSON-LD `alternateName` and /llms.txt. */
  alternateNames: [
    "Rajesh",
    "Rajesh SMP",
    "Rajesh S.M. Patra",
    "Rajesh SM Patra",
    "Rajesh Sinha",
    "Rajesh Mahapatra",
    "Rajesh Maha Patra",
    "Rajesh Singhamahapatra",
    "Rajesh Singha Mahapatra",
    "Rajesh Singha Maha Patra",
    "Rajesh Sinha Mahapatra",
    "Rajesh Sinha Maha Patra",
    "itsrajeshsmp",
  ],
  title: "A Software Engineer.",
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
  telDisplay: "+91 89429 08195",
  location: "West Bengal, India",
  /** IANA zone for the hero's live local-time row. */
  timeZone: "Asia/Kolkata",
  currentCompany: { name: "VAll", url: "https://vallindia.com/" },
  /** Shown next to the Experience heading. */
  yearsOfExperience: 3,
  githubUsername: "its-rajesh-smp",
  footerTagline: "Open to collaborations",
  visitorCount: 1024, // TODO(dummy)
  lastUpdatedAt: "2026-10-26",
} as const;

export const RESUME = {
  /** Google Drive share link — the Resume nav tab, hero button and /resume redirect all open this. */
  url: "https://drive.google.com/file/d/1Ij65Dnh4Bc6eH9dNZU8fhnmVKOvfFccf/view?usp=sharing",
} as const;

/** Paragraphs under the hero tagline; **phrases** render bold. */
export const HERO_ABOUT = [
  "Currently working as a **full stack engineer** at **VAll**, shipping **AI-driven products**, designing **backend systems**, and managing **infrastructure and deployments** with around **3 years of experience** building **production systems**.",
  "I enjoy building **scalable systems** and breaking them down to understand how they **fail and improve**.",
];

export const SOCIALS: SocialLink[] = [
  { kind: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rajeshsmp/" },
  { kind: "github", label: "GitHub", href: "https://github.com/its-rajesh-smp" },
  { kind: "email", label: "Email", href: `mailto:${PROFILE.email}` },
];

export const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Resume", href: RESUME.url, external: true },
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

/** Wrap phrases in **double asterisks** to render them bold. */
export const EXPERIENCES: Experience[] = [
  {
    id: "vall",
    org: "VAll",
    role: "Full Stack Developer",
    period: "Jun 2025 – Present",
    location: "Remote",
    logoUrl: "https://www.vallindia.com/vall-logo.png",
    link: { href: "https://vallindia.com/", label: "vallindia.com" },
    highlights: [
      "Building **QuestCraftAI** from scratch, an agentic AI platform serving **40+ NGOs**. Designed and developed a **3-agent** architecture using **React, Node.js, PostgreSQL, pgvector, RAG**, and **OpenAI Agent SDK** to automate internship and quest generation workflows, significantly reducing manual research effort.",
      "Designed and implemented **agentic workflows** using OpenAI Agent Builder, Gemini Gems, and Claude Code, orchestrated via an internal **MCP server**.",
      "Created and deployed a custom **MCP server** on **ECS**, exposing **4 tools** over VAll India's data, powering QuestCraftAI agents and an **OpenAI-based chatbot** that recommends NGO opportunities based on user resumes.",
      "Worked on end-to-end development of VAll India's primary website, driving design and product discussions, using AI-first tools such as **Lovable**, **Cursor** and **Claude Code** for rapid development, and coordinating feature delivery and task delegation across the team.",
      "Owned and shipped the **BYOQ** collaboration module, enabling users to create quests, invite participants, and review team submissions through a responsive, validated interface built with **React, Tailwind CSS**, and **shadcn/ui**.",
      "Designed a **distributed locking mechanism** using **S3 conditional writes** to prevent duplicate job execution across **multiple machines**, eliminating race conditions where both servers would pick up the same job simultaneously.",
      "Implemented an **integration testing** workflow from scratch using **Testcontainers** and **Jest**, covering **40+ APIs** with automated runs on every PR via the **CI pipeline**, catching environment-specific issues before production.",
      "**Migrated** data infrastructure from **DynamoDB to PostgreSQL**, leading the development of **API v2** and managing the full production migration with minimal downtime.",
      "**Mentored** 2 software engineers on code quality, scalable architecture, and engineering best practices.",
    ],
  },
  {
    id: "sharpener",
    org: "Sharpener",
    role: "SDE 1",
    period: "Mar 2024 – Jun 2025",
    location: "Bangalore",
    logoUrl: "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
    link: { href: "https://www.sharpener.tech/", label: "sharpener.tech" },
    highlights: [
      "Prototyped an **AI assistant** for multilingual conversation support, instant doubt resolution, and mock interviews using **Google TTS**, **Gemini**, and **STT** systems, reducing projected manual support effort by **50%**.",
      "Built **BOMB**, an in-house **Clash of Clans-style** multiplayer strategy game, using Unity and C#. Designed and implemented the **in-game building placement and construction system**, including grid-based interactions and gameplay logic.",
      "Fine-tuned a Google **Gemini model** on **50+ Clash of Clans base layouts** to dynamically generate **intelligent bot bases** with varied defensive strategies.",
      "Designed and implemented **CI/CD pipelines** using **GitHub Actions** and **blue-green deployment** with Nginx, enabling **zero-downtime releases**.",
      "Built an in-house user onboarding and product guidance system using **Shepherd.js**, replacing an external platform and saving approximately **$900** annually in subscription costs.",
      "Created **Snapit AI**, an AI-powered resume analysis platform using **React, Tailwind CSS, NestJS, PostgreSQL**, and **Gemini API** to deliver grammar correction, resume enhancement suggestions, and role-specific resume evaluation.",
      "Extended Snapit AI with interactive mock interviews, generating questions and evaluating responses for feedback.",
      "Created a new **communication task** type, using OpenAI **Whisper** to transcribe audio and Gemini to generate feedback, helping students improve how they communicate while answering technical questions.",
      "Integrated **Razorpay** with Snapit AI, setting up multiple monthly plans and using **webhooks** for real-time payment processing, generating around **$200** in revenue.",
      "Owned and delivered multiple features, performed manual and smoke testing, and conducted final code reviews to ensure quality and reliability.",
    ],
  },
  {
    id: "sharpener-intern",
    org: "Sharpener",
    role: "SDE Intern",
    period: "Sep 2023 – Feb 2024",
    location: "Remote",
    logoUrl: "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
    link: { href: "https://www.sharpener.tech/", label: "sharpener.tech" },
    highlights: [
      "Automated the mock interview process by enhancing the **appointment booking system** and migrating from Zoom to Google Meet using **Google API**, reducing costs by **60%**. Used **cron** to implement **auto-scheduling**, meeting link generation, and automatic upload of recordings to Google Drive.",
      "Designed a **progress report page** to track student progress across different parameters.",
      "Improved landing page performance from **55% to 85%** using **Cloudinary CDN**, removing unused code and npm packages, and lazy loading images and pages.",
      "Built a coupon and UTM tracking system enabling attribution-based analytics.",
      "**Redesigned** the admin and student dashboards **(31 pages)** using **Tailwind CSS** and **Material UI**.",
      "Delivered multiple end-to-end features, ensuring system reliability and production readiness.",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: "Sharpener",
    href: "https://www.sharpener.tech/",
    degree: "Web Development (MERN)",
    period: "2022 – 2023",
    logoUrl: "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
  },
  {
    school: "Raipur Government Polytechnic",
    href: "https://polytechnic.wbtetsd.gov.in/raipurgovpoly/",
    degree: "Diploma in Mechanical Engineering",
    period: "2018 – 2021",
    // The old Wikipedia logo was deleted; add a working URL here (and its host in next.config).
  },
  {
    school: "Simlapal M.M High School",
    href: "https://www.justdial.com/Bankura/Simlapal-M-M-High-School-Simlapal/9999P3242-3242-180821025658-N8Y6_BZDET",
    degree: "Higher Secondary Education (10+2) Science",
    period: "2018",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyjCF6BQdTsrd4Fgmb3viW4WcvzzqX2qIfQ&s",
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "aneesh-relan",
    name: "Aneesh Relan",
    headline: "Principal Software Engineer at Atlassian",
    relation: "Senior & mentor at VAll",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/aneesh_akvwty.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-relan-046737119/",
    message: [
      "I've had the pleasure of working with Rajesh, and what stands out most is his ability to quickly adapt and thrive in new and evolving areas. He has taken on AI-first projects and ramped up impressively, demonstrating strong curiosity and a willingness to learn.",
      "Rajesh is highly dependable when it comes to driving projects end-to-end. He manages multiple features with ownership, handles changing requirements with ease, and consistently delivers with responsibility and focus.",
      "He would be a valuable asset to any team looking for someone who combines adaptability, learning agility, and execution excellence.",
    ],
  },
  {
    id: "kapil-mohan",
    name: "Kapil Mohan",
    headline: "CTO at VAll, ex-LinkedIn",
    relation: "Managed me directly at VAll",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/kapil_rsetgh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kapilmohan/",
    message: [
      "I had the pleasure of working closely with Rajesh as his manager at VAll. He stood out as a bright software engineer, quick learner, and swift executor. He has a strong bias for action — he looks at problems from multiple angles, evaluates trade-offs across complexity, cost, and maintainability, and persists until he finds a practical path forward. He is always curious, fearless in trying new approaches, and has a rare ability to think in systems rather than just isolated tasks.",
      "One example that stood out was how quickly he picked up AI and agentic application development from scratch, almost entirely on his own, with very little prodding. That combination of self-learning, ownership, speed, and practical problem-solving is what makes him feel like a true 10x engineer.",
      "He would be an asset to any team that values people who can understand quickly, execute fast, and get meaningful work done.",
    ],
  },
  {
    id: "suresh-a",
    name: "Suresh A",
    headline: "Founding Engineer at Sharpener",
    relation: "Managed me directly at Sharpener",
    image: "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/suresh_hyzvae.jpg",
    linkedinUrl: "https://www.linkedin.com/in/suresh-a/",
    message: [
      "I worked with Rajesh when he was an SDE 1 on my team, and he's a really solid engineer.",
      "He has strong problem-solving skills, picks up new concepts quickly, and is comfortable working across the stack. Once he takes ownership of something, you can rely on him to get it done properly without much hand-holding.",
      "He's sharp, consistent, and keeps improving his technical skills with every task. Would definitely recommend him for any engineering role.",
    ],
  },
];

export const PROJECTS: Project[] = [
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
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Real artists ship.", author: "Steve Jobs" },
];
