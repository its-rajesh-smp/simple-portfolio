import { Icons } from "@/components/icons";
import { Newspaper } from "lucide-react";

export const DATA = {
  lastUpdatedAt: "20-May-2026",
  name: "Rajesh Singha Mahapatra",
  initials: "RSMP",
  url: "https://www.itsrajeshsmp.online",
  location: "West Bengal, INDIA",
  locationLink: "https://maps.app.goo.gl/AzdkQXmuVYt8XsQj7",
  description:
    "Full Stack Developer at VAll. Open-source contributor building AI SaaS products.",
  summary: `Currently working as a **full stack engineer** at **VAll**, shipping **AI-driven products**, designing **backend systems**, and managing **infrastructure and deployments** with **2.5+ years of experience** building **production systems**.

I've worked across the stack while **mentoring engineers** and improving **system reliability**.

I also contribute to **open source**, including debugging real-world issues, submitting PRs, and helping maintainers ship reliable fixes.

I enjoy building **scalable systems** and breaking them down to understand how they **fail and improve**.`,
  avatarUrl:
    "https://res.cloudinary.com/dtgoeupid/image/upload/v1742881766/Portfolio/dp.jpg",
  ogImage:
    "https://res.cloudinary.com/dtgoeupid/image/upload/v1779284973/og_qpzelk.webp",

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
      others: ["HTML", "CSS", "SCSS"],
    },
    Frontend: {
      core: ["React", "Next.js", "Tailwind CSS"],
      others: ["Redux Toolkit", "Tanstack Query", "Material UI"],
    },
    Backend: {
      core: ["Node.js", "NestJS", "Express"],
      others: ["Prisma"],
    },
    Databases: {
      core: ["PostgreSQL", "Firebase"],
      others: ["MongoDB"],
    },
    AWS: {
      core: ["EC2", "S3", "Lambda", "ECS"],
      others: ["ECR", "SQS"],
    },
    DevOps: {
      core: ["Docker"],
      others: ["GitHub Actions", "Pulumi"],
    },
    AI: {
      core: ["Prompt Engineering", "MCP", "LangChain", "Agent SDK"],
      others: ["RAG", "Gemini API", "OpenAI API"],
    },
    Testing: {
      core: ["Jest", "Testcontainers"],
      others: ["Playwright"],
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
      medium: {
        name: "Medium Blogs",
        url: "https://medium.com/@its.rajeshsmp",
        icon: Icons.medium,
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
      start: "Jun 2025",
      end: "Present",
      description: [
        "Building <b>QuestCraftAI</b> from scratch, an agentic AI platform serving <b>40+ NGOs</b>. Designed and developed a <b>3-agent</b> architecture using <b>React, Node.js, PostgreSQL, pgvector, RAG</b>, and <b>OpenAI Agent SDK</b> to automate internship and quest generation workflows, significantly reducing manual research effort.",

        "Designed and implemented <b>agentic workflows</b> using OpenAI Agent Builder, Gemini Gems, and Claude Code, orchestrated via internal <b>MCP server</b>.",

        "Created and deployed a custom <b>MCP server</b> on <b>ECS</b>, exposing <b>4 tools</b> over VAllIndia's data, powering QuestCraftAI agents and an <b>OpenAI-based chatbot</b> that recommends NGO opportunities based on user resumes.",

        // "Designed an event booking system for NGOs using <b>Razorpay</b> webhooks, <b>SQS</b>, <b>Lambda</b>, and <b>DLQ-based</b> recovery workflows to handle failed webhook events and prevent duplicate bookings. Validated under load with <b>k6</b> handling 100 concurrent users.",

        "Worked on end-to-end development of VAll India’s primary website, driving design and product discussions, using AI-first tools such as <b>Lovable</b>, <b>Cursor</b> and <b>Claude Code</b> for rapid development, and coordinating feature delivery and task delegation across the team.",

        "Owned and shipped the <b>BYOQ</b> collaboration module, enabling users to create quests, invite participants, and review team submissions through a responsive, validated interface built with <b>React, Tailwind CSS</b>, and <b>shadcn/ui</b>.",

        // "Improved fundraiser transaction API response time from <b>6s to 2s</b> by adding a composite <b>B-tree index.</b>",

        "Designed a <b>distributed locking mechanism</b> using <b>S3 conditional writes</b> to prevent duplicate job execution across <b>2 EC2 servers</b>, eliminating race conditions where both servers would pick up the same job simultaneously.",

        "Implemented <b>integration testing</b> workflow from scratch using <b>Testcontainers</b> and <b>Jest</b>, covering <b>40+ APIs</b> with automated runs on every PR via <b>CI pipeline</b>, catching environment-specific issues before production.",

        "<b>Migrated</b> data infrastructure from <b>DynamoDB to PostgreSQL</b>, leading the development of <b>API v2</b> and successfully managing the full production migration with minimal downtime.",

        "<b>Mentored</b> 2 software engineers on code quality, scalable architecture, and engineering best practices.",
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
      start: "Mar 2024",
      end: "Jun 2025",
      description: [
        "Prototyped an <b>AI assistant</b> for multilingual conversation support, instant doubt resolution, and mock interviews using <b>Google TTS</b>, <b>Gemini</b>, and <b>STT</b> systems, reducing projected manual support effort by <b>50%</b>.",

        "Designed and implemented <b>CI/CD pipelines</b> using <b>GitHub Actions</b> and <b>blue-green deployment</b> with Nginx, enabling <b>zero-downtime releases</b>.",

        "Built an in-house user onboarding and product guidance system using <b>Shepherd.js</b>, replacing an external platform and saving approximately <b>$900</b> annually in subscription costs.",

        "Created <b>Snapit AI</b>, an AI-powered resume analysis platform using <b>React, Tailwind CSS, NestJS, PostgreSQL</b>, and <b>Gemini API</b> to deliver grammar correction, resume enhancement suggestions, and role-specific resume evaluation.",

        "Extended Snapit AI with interactive mock interview capabilities, generating questions and evaluating responses for feedback.",

        "Integrated <b>Razorpay</b> payment gateway with <b>SnapitAI</b>, setting up multiple monthly plans and using <b>webhooks</b> for real-time payment processing and updates, generating around <b>$200</b> in revenue.",

        "Owned and delivered multiple features, performed manual/smoke testing, and conducted final code reviews to ensure quality and reliability.",
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
      start: "Sep 2023",
      end: "Feb 2024",
      description: [
        "Automated the mock interview process by enhancing the <b>appointment booking system</b>, migrating from Zoom to Google Meet using <b>Google API</b>, and reducing costs by <b>60%</b>. Used <b>cron</b> and implemented <b>auto-scheduling</b>, meeting link generation, and automatic upload of recordings to Google Drive.",

        "Designed a <b>progress report page</b> to track student progress based on different parameters.",

        "Improved the performance of the landing page website from <b>55% to 85%</b> by using <b>Cloudinary CDN</b>, removing unwanted code and NPM packages, and lazy loading images and pages.",

        "Built a coupon and UTM tracking system enabling attribution-based analytics.",

        "<b>Re-designed</b> the admin & student dashboard <b>(31 Pages)</b> using <b>Tailwind CSS</b> and <b>Material UI.</b>",

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
      start: "Dec 2021",
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
  blogs: [
    {
      title: "Practical DB Indexing: 8sec to 80ms on 8 Million Rows",
      href: "https://medium.com/@its.rajeshsmp/practical-db-indexing-8sec-to-80ms-on-8-million-rows-c859cc220537",
      dates: "Medium Article",
      description:
        "A practical breakdown of database indexing and query performance wins.",
      technologies: ["PostgreSQL", "Indexing", "Performance"],
      links: [
        {
          type: "Read",
          href: "https://medium.com/@its.rajeshsmp/practical-db-indexing-8sec-to-80ms-on-8-million-rows-c859cc220537",
          icon: <Newspaper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1778151005/indexing_yx6t9l.webp",
    },
    {
      title: "A distributed locking mechanism",
      href: "https://medium.com/@its.rajeshsmp/create-a-distributed-locking-mechanism-6612b95fc8b7",
      dates: "Medium Article",
      description:
        "A practical implementation of a distributed cron locking mechanism.",
      technologies: ["Cron", "Distributed System", "Locking Mechanism"],
      links: [
        {
          type: "Read",
          href: "https://medium.com/@its.rajeshsmp/create-a-distributed-locking-mechanism-6612b95fc8b7",
          icon: <Newspaper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1778430335/destributes_locking_mechanism_zoepic.webp",
    },
    {
      title: "Sharding and Partitioning",
      href: "https://medium.com/@its.rajeshsmp/sharding-and-partationing-161d489b8c3e",
      dates: "Medium Article",
      description:
        "A simple look at scaling databases with sharding and partitioning.",
      technologies: ["Databases", "Sharding", "Partitioning"],
      links: [
        {
          type: "Read",
          href: "https://medium.com/@its.rajeshsmp/sharding-and-partationing-161d489b8c3e",
          icon: <Newspaper className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1778151005/sharding_wfttct.webp",
    },
  ],
  projects: [
    {
      title: "Reactive Resume Open Source Contribution",
      href: "https://github.com/amruthpillai/reactive-resume/pull/3044",
      dates: "May 2026",
      active: true,
      description:
        "Investigated PDF template rendering bugs in Reactive Resume, submitted PR #3044 with a proposed fix and tests, and received maintainer acknowledgment when the issue was resolved in a later release.",
      technologies: [
        "Open Source",
        "React",
        "TypeScript",
        "PDF Rendering",
        "Testing",
      ],
      links: [
        {
          type: "PR",
          href: "https://github.com/amruthpillai/reactive-resume/pull/3044",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/amruthpillai/reactive-resume",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1779197740/Reactive-Resume-_-A-free-and-open-source-resume-builder-05-19-2026_07_02_PM_ehx79p.png",
      video: "",
    },
    {
      title: "ProfilePad",
      href: "https://github.com/its-rajesh-smp/profilepad-new",
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
        "https://res.cloudinary.com/dtgoeupid/image/upload/v1778432506/ProfilePad-05-10-2026_10_27_PM_wkfsbs.png",
      video: "",
    },
    {
      title: "Attendly",
      href: "https://github.com/its-rajesh-smp/attendly",
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
