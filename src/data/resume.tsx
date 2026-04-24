import { Icons } from "@/components/icons";
import { Newspaper } from "lucide-react";

export const DATA = {
  name: "Rajesh Singha Mahapatra",
  initials: "RSMP",
  url: "https://itsrajeshsmp.online",
  location: "West Bengal, INDIA",
  locationLink: "https://maps.app.goo.gl/AzdkQXmuVYt8XsQj7",
  description: "Full Stack Developer at VAll. Building AI SaaS products.",
  summary: `I transitioned from **mechanical engineering** to **software development** in 2022 and now have **2.5 years of experience** building **production systems**.

At **VAll**, currently working as a **full stack engineer**, shipping **AI-driven products**, designing **backend systems**, and managing **infrastructure and deployments**.

I’ve worked across the stack while **mentoring engineers** and improving **system reliability**.

I enjoy building **scalable systems** and breaking them down to understand how they **fail and improve**.`,
  avatarUrl:
    "https://res.cloudinary.com/dtgoeupid/image/upload/v1742881766/Portfolio/dp.jpg",
  skills: {
    Languages: {
      core: ["TypeScript", "JavaScript"],
      others: ["C#", "HTML", "CSS", "SCSS"],
    },
    Frontend: {
      core: ["React", "Next.js", "Tailwind CSS"],
      others: [
        "React Native",
        "Redux",
        "Redux Toolkit",
        "React Router",
        "Material UI",
      ],
    },
    Backend: {
      core: ["Node.js", "NestJS", "Express"],
      others: ["GraphQL", "RabbitMQ", "Firebase"],
    },
    Databases: {
      core: ["PostgreSQL", "Prisma"],
      others: ["MySQL", "MongoDB"],
    },
    AWS: {
      core: ["EC2", "S3", "Lambda", "ECS"],
      others: [
        "ECR",
        "API Gateway",
        "Cognito",
        "IAM",
        "CloudWatch",
        "CloudFront",
      ],
    },
    DevOps: {
      core: ["Docker", "GitHub Actions", "Nginx"],
      others: ["Git", "GitHub", "Pulumi"],
    },
    AI: {
      core: ["Prompt Engineering", "Claude"],
      others: ["Cursor"],
    },
  },
  navbar: [
    {
      href: "https://drive.google.com/drive/u/0/folders/1fPOYCJ1ZkfHCWeW1OdxzXnuhkbguE8sC",
      icon: Newspaper,
      label: "Resume",
    },
  ],
  contact: {
    email: "its.rajeshsmp@gmail.com",
    tel: "+918942908195",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/its-rajesh-smp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajeshsmp/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "its.rajeshsmp@gmail.com",
        url: "mailto:its.rajeshsmp@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "VAll",
      href: "https://vallindia.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl:
        "https://content.vallindia.com/wp-content/uploads/2024/12/vall-logo.png?w=768&h=666",
      start: "June 2025",
      end: "Present",
      description: [
        "Building <b>QuestCraftAI</b> from scratch, an <b>agentic AI platform</b> for NGOs, leveraging <b>multi-agent architecture</b>, <b>RAG (pgvector)</b>, and <b>memory systems</b> to enable automated quest generation and personalized recommendations.",

        "Designed and implemented <b>agentic workflows</b> using OpenAI Agent Builder, Gemini Gems, and Claude Code, orchestrated via internal <b>MCP infrastructure</b>.",

        "Developed and deployed a custom <b>MCP (Model Context Protocol) server</b> over HTTP, enabling <b>LLMs and agents</b> to access structured NGO data, tools, and workflows.",

        "Leading <b>end-to-end development</b> of VallIndia’s primary platform, covering <b>backend architecture</b>, <b>infrastructure</b>, and <b>production deployment</b>.",

        "Mentored and guided 2 software engineers, improving code quality, scalable architecture, and engineering best practices.",

        "Led data infrastructure migration from DynamoDB to PostgreSQL, designing Backend v2 and executing production migration with minimal downtime.",

        "Implemented <b>integration testing</b> using <b>Testcontainers</b> and <b>Jest</b>, improving API reliability and catching environment-specific issues early.",

        "Built <b>E2E test automation</b> using <b>Playwright</b>, reducing regression issues and ensuring consistent user experience.",
      ] as string[],
    },
    {
      company: "Sharpener",
      href: "https://www.sharpener.tech/",
      badges: [],
      location: "Bangalore, India",
      title: "SDE 1",
      logoUrl:
        "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
      start: "March 2024",
      end: "June 2025",
      description: [
        "Prototyped a <b>multilingual AI assistant</b> for real-time conversation, doubt resolution, and mock interviews using Gemini and speech APIs, reducing manual support effort through automation.",

        "Designed and implemented <b>CI/CD pipelines</b> using <b>GitHub Actions</b> and <b>blue-green deployment</b> with Nginx, enabling <b>zero-downtime releases</b>.",

        "Developed a custom <b>in-app onboarding system</b>, replacing a third-party tool and reducing annual costs by <b>~$300</b>.",

        "Built an in-house <b>voice-based communication module</b> using <b>Whisper</b> and <b>OpenAI APIs</b>, replacing a paid solution and saving <b>~$200</b> annually.",

        "Created <b>Snapit AI</b>, an AI-powered resume assistant for <b>analysis and role-specific recommendations</b>.",

        "Extended Snapit AI with interactive mock interview capabilities, generating questions and evaluating responses for feedback.",

        "Integrated <b>Razorpay payment gateway</b> with paid plans and <b>real-time webhook processing</b>.",

        "Owned <b>end-to-end feature delivery</b>, including development, testing, and code reviews to maintain <b>production quality</b>.",
      ] as string[],
    },
    {
      company: "Sharpener",
      href: "https://www.sharpener.tech/",
      badges: [],
      location: "Remote",
      title: "SDE Intern",
      logoUrl:
        "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
      start: "September 2023",
      end: "February 2024",
      description: [
        "Automated <b>mock interview scheduling</b> by migrating from Zoom to Google Meet using APIs, implementing <b>cron-based workflows</b> and reducing costs by <b>~60%</b>.",

        "Designed and developed a student <b>progress tracking system</b> for multi-parameter performance analysis.",

        "Improved <b>landing page performance</b> from <b>55% to 85%</b> using Azure CDN, lazy loading, and optimization techniques.",

        "Built a <b>coupon and UTM tracking system</b> enabling <b>attribution-based analytics</b>.",

        "Re-designed <b>admin and student dashboards (31+ pages)</b>, improving <b>usability and consistency</b>.",

        "Delivered multiple <b>end-to-end features</b>, ensuring <b>system reliability</b> and production readiness.",
      ] as string[],
    },
    {
      company: "Anand CY Limited (ACYM)",
      href: "https://www.anandgroupindia.com/acymautomotive/",
      badges: [],
      location: "Delhi, India",
      title: "Mechanical Engineer Intern",
      logoUrl:
        "https://www.anandgroupindia.com/wp-content/uploads/2017/12/acym.png",
      start: "December 2021",
      end: "May 2022",
      description:
        "Worked on CNC programming and manufacturing of automobile parts.",
    },
  ],
  education: [
    {
      school: "Sharpener",
      href: "https://www.sharpener.tech/",
      degree: "Web Development (MERN)",
      logoUrl:
        "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Raipur Government Polytechnic",
      href: "https://polytechnic.wbtetsd.gov.in/raipurgovpoly/",
      degree: "Diploma in Mechanical Engineering",
      logoUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/ff/Logo_of_Raipur_Government_Polytechnic.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Simlapal M.M High School",
      href: "https://www.justdial.com/Bankura/Simlapal-M-M-High-School-Simlapal/9999P3242-3242-180821025658-N8Y6_BZDET",
      degree: "Higher Secondary Education (10+2) Science",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyjCF6BQdTsrd4Fgmb3viW4WcvzzqX2qIfQ&s",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "message-broker-util",
      href: "https://www.npmjs.com/package/message-broker-util",
      dates: "March 2025 - Present",
      active: true,
      description:
        "The MessageBroker package provides an abstraction layer over RabbitMQ, enabling easy message publishing, consuming, and RPC request-response communication. This package simplifies interaction with RabbitMQ using TypeScript and amqplib.",
      technologies: ["Node", "amqplib", "RabbitMQ", "TypeScript"],
      links: [
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/message-broker-util",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1742887160/Portfolio/s94mswykoavk75y1dp3i.png",
      video: "",
    },
    {
      title: "ProfilePad",
      href: "https://github.com/its-rajesh-smp?tab=repositories&q=profilepad&type=&language=&sort=",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "ProfilePad is a web application designed to help users create and manage professional portfolio websites effortlessly. It includes features like customizable templates, real-time editing, project showcasing, social media integration, and SEO optimization to enhance online presence. The platform ensures a seamless user experience with a focus on performance and accessibility.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Node",
        "Express",
        "MongoDB",
        "Prisma",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/its-rajesh-smp?tab=repositories&q=profilepad&type=&language=&sort=",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1742887139/Portfolio/htfjzy6eqzzbut1unmpv.jpg",
      video: "",
    },
    {
      title: "BlinkIt Clone",
      href: "https://www.youtube.com/watch?v=wCWGeTGMYWg",
      dates: "July 2023 - July 2023",
      active: true,
      description:
        "Designed a clone of BlinkIt.com with all the P0 features, including user authentication, cart management, order processing, Google Maps-based address selection, order tracking, downloadable invoices, and secure payments.",
      technologies: [
        "React",
        "Tailwind CSS",
        "React Router Dom",
        "Redux Toolkit",
        "Redux Thunk",
        "React Redux",
        "React Context API",
        "Vite",
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize",
        "JWT",
        "Bcrypt",
        "Google Map API",
        "Razorpay",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=wCWGeTGMYWg",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/its-rajesh-smp/blinkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1742886229/Portfolio/mnbrkzuv7pvo4whbc6w7.png",
      video: "",
    },
    {
      title: "TrackyFy",
      href: "https://trackyfi.netlify.app/",
      dates: "June 2023 - June 2023",
      active: true,
      description:
        "TrackyFy is a web application designed to efficiently manage daily credit and expenses. It offers features like user authentication with Google Auth, the ability to add, remove, edit, search, and filter transactions, a dashboard with categorized expense charts, and downloadable expense and credit reports. Additionally, it includes exclusive VIP features for advanced financial tracking.",
      technologies: [
        "React",
        "SCSS",
        "Firebase",
        "Redux",
        "React Router",
        "Vite",
      ],
      links: [
        {
          type: "Website",
          href: "https://trackyfi.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/its-rajesh-smp/TrackyFi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1742886360/Portfolio/p9npqhxu4ixfdasmxaq3.png",
      video: "",
    },
  ],
} as const;
