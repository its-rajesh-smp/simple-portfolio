import { Icons } from "@/components/icons";
import { Newspaper } from "lucide-react";

export const DATA = {
  lastUpdatedAt: "24-April-2026",
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

  recommendations: [
    {
      name: "Aneesh Relan",
      role: "Principal Software Engineer at Atlassian",
      imageUrl:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/aneesh_akvwty.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aneesh-relan-046737119/",
      relation: "Rajesh's senior & mentor at VAll",
      recommendation: `
      I’ve had the pleasure of working with Rajesh, and what stands out most is his ability to quickly adapt and thrive in new and evolving areas. He has taken on AI-first projects and ramped up impressively, demonstrating strong curiosity and a willingness to learn. 

      Rajesh is highly dependable when it comes to driving projects end-to-end.  
      
      He manages multiple features with ownership, handles changing requirements with ease, and consistently delivers with responsibility and focus.
      
      He would be a valuable asset to any team looking for someone who combines adaptability, learning agility, and execution excellence.`,
    },
    {
      name: "Kapil Mohan",
      role: "CTO at VAll, ex-LinkedIn",
      imageUrl:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/kapil_rsetgh.jpg",
      linkedinUrl: "https://www.linkedin.com/in/kapilmohan/",
      relation: "Kapil managed Rajesh directly at VAll",
      recommendation: `
      I had the pleasure of working closely with Rajesh as his manager at VAll. He stood out as a bright software engineer, quick learner, and swift executor. He has a strong bias for action — he looks at problems from multiple angles, evaluates trade-offs across complexity, cost, and maintainability, and persists until he finds a practical path forward. He is always curious, fearless in trying new approaches, and has a rare ability to think in systems rather than just isolated tasks.

      One example that stood out was how quickly he picked up AI and agentic application development from scratch, almost entirely on his own, with very little prodding. That combination of self-learning, ownership, speed, and practical problem-solving is what makes him feel like a true 10x engineer. 
      
      He would be an asset to any team that values people who can understand quickly, execute fast, and get meaningful work done.
      `,
    },
    {
      name: "Suresh A",
      role: "Founding Engineer at Sharpener",
      imageUrl:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1777426333/suresh_hyzvae.jpg",
      linkedinUrl: "https://www.linkedin.com/in/suresh-a/",
      relation: "Suresh managed Rajesh directly at Sharpener",
      recommendation: `
      I worked with Rajesh when he was an SDE 1 on my team, and he’s a really solid engineer.

      He has strong problem-solving skills, picks up new concepts quickly, and is comfortable working across the stack. Once he takes ownership of something, you can rely on him to get it done properly without much hand-holding.

      He’s sharp, consistent, and keeps improving his technical skills with every task.

      Would definitely recommend him for any engineering role.
      `,
    },
    // {
    //   name: "Abhishek Mishra",
    //   role: "Software Developer at WagerGeeks",
    //   imageUrl: "https://i.pravatar.cc/160?img=32",
    //   linkedinUrl: "https://www.linkedin.com/in/abhishekmishra77",
    //   relation: "Senior to Abhishek but didn’t manage Abhishek directly",
    //   recommendation:
    //     'I first met Rajesh during a live class at Sharpener, where he was showcasing one of the projects he had built. Not only was the project impressive in terms of design and functionality, but what really stood out to me was how effortlessly he explained every detail, from the logic behind the features to how he deployed the app. I remember thinking, "This guy really knows his stuff and he genuinely enjoys sharing it."\n\nSome time later, we connected on LinkedIn, and to my surprise, Rajesh reached out and asked, "Would you like to work with me at Sharpener as a mentor?" It was a moment I won\'t forget because mentoring and helping others grow is something I\'ve always loved. And thanks to Rajesh, I got that opportunity.\n\nDuring our time working together at Sharpener, he as a full-time mentor and software developer, and I as a part-time mentor, Rajesh supported me every step of the way. Whether it was understanding the structure, managing sessions, or simply being there to guide me through, he never hesitated to help.\n\nHe’s not just a talented developer. He’s someone who uplifts others, shares his knowledge generously, and leads with humility. Working with Rajesh was truly a privilege, and anyone who gets the chance to work alongside him is in for an inspiring journey.',
    // },
  ],
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

        "Designed and implemented <b>agentic workflows</b> using OpenAI Agent Builder, Gemini Gems, and Claude Code, orchestrated via internal <b>MCP server</b>.",

        "Developed and deployed a custom <b>MCP server</b> over HTTP, enabling LLMs and agents to access structured NGO data, tools, and workflows.",

        "Leading <b>end-to-end development</b> of VallIndia’s primary platform, covering <b>backend architecture</b>, <b>infrastructure</b>, and <b>production deployment</b>.",

        "Mentored and guided 2 software engineers, improving code quality, scalable architecture, and engineering best practices.",

        "Worked on data infrastructure migration from DynamoDB to PostgreSQL, designing Backend v2 and executing production migration with minimal downtime.",

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
        "Prototyped a multilingual <b>AI assistant</b> for real-time conversation, doubt resolution, and mock interviews using <b>Gemini</b>, <b>Google TTS</b> and <b>Google STT</b>, reducing manual support effort through automation.",

        "Designed and implemented <b>CI/CD pipelines</b> using <b>GitHub Actions</b> and <b>blue-green deployment</b> with Nginx, enabling <b>zero-downtime releases</b>.",

        "Developed a custom <b>in-app onboarding system</b>, replacing a third-party tool and reducing annual costs by <b>~$300</b>.",

        "Built an in-house voice-based <b>communication module</b> using <b>Whisper</b> and <b>OpenAI APIs</b>, replacing a paid solution and saving <b>~$200</b> annually.",

        "Created <b>Snapit AI</b>, an AI-powered resume assistant for <b>analysis and role-specific recommendations</b>.",

        "Extended Snapit AI with interactive mock interview capabilities, generating questions and evaluating responses for feedback.",

        "Integrated <b>Razorpay payment gateway</b> with paid plans and <b>real-time webhook processing</b>.",

        "Owned end-to-end feature delivery, including development, testing, and code reviews to maintain production quality.",
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
        "Automated <b>appointment booking system</b> by migrating from Zoom to Google Meet, implementing <b>cron-based workflows</b> and reducing costs by <b>~60%</b>.",

        "Designed and developed a student <b>progress tracking system</b> for multi-parameter performance analysis.",

        "Improved <b>landing page performance</b> from <b>55% to 85%</b> using Azure CDN, lazy loading, and optimization techniques.",

        "Built a coupon and UTM tracking system enabling attribution-based analytics.",

        "Re-designed <b>admin dashboards (31+ pages)</b>, improving <b>usability and consistency</b>.",

        "Delivered multiple end-to-end features, ensuring system reliability and production readiness.",
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
          href: "https://github.com/its-rajesh-smp/profilepad-new",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1742887139/Portfolio/htfjzy6eqzzbut1unmpv.jpg",
      video: "",
    },
    {
      title: "Attendly",
      href: "https://attendly.itsrajesh.online",
      dates: "Aug 2023 - Aug 2023",
      active: true,
      description:
        "Attendly is an event discovery and community engagement platform that allows users to explore curated events, RSVP seamlessly, and stay connected with experiences that match their interests. The platform combines a modern frontend with a TypeScript-powered backend to support authentication, event management, attendee participation, and a smooth end-to-end event browsing experience.",
      technologies: [
        "React",
        "Node",
        "Tailwind CSS",
        "PostgereSQL",
        "Prisma",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: "https://attendly.itsrajesh.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/its-rajesh-smp/attendly",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1777099568/Attendly-04-25-2026_12_15_PM_ce6bi0.png",
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
