import { Icons } from "@/components/icons";
import { HomeIcon, Newspaper } from "lucide-react";

export const DATA = {
  name: "Rajesh Singha Mahapatra",
  initials: "RSMP",
  url: "https://itsrajeshsmp.online",
  location: "West Bengal, INDIA",
  locationLink: "https://maps.app.goo.gl/AzdkQXmuVYt8XsQj7",
  description:
    "Full Stack Developer at VAll. I like to build, debug & fix things.",
  summary:
    "At the mid of 2022, I quit my job as a mechanical engineer to learn web-development, I joined [Sharpener](https://www.sharpener.tech/) to take help of mentors and learn web development, later become a software engineer & most helpful mentor at [Sharpener](https://www.sharpener.tech/). Right now building [VAll✌️](https://vallindia.com/).",
  avatarUrl:
    "https://res.cloudinary.com/dtgoeupid/image/upload/v1742881766/Portfolio/dp.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Next",
    "Node",
    "Postgres",
    "Docker",
    "MySQL",
    "C#",
    "SCSS",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "Redux Toolkit",
    "React Router",
    "React Native",
    "Express",
    "Nest",
    "Firebase",
    "MongoDB",
    "Prisma",
    "GraphQL",
    "RabbitMQ",
    "AWS (EC2, ECS, ECR, Lambda, S3, API Gateway, Cognito, Cloudfront, DynamoDB)",
    "CICD (Github Actions)",
    "Nginx",
    "Git",
    "GitHub",
    "Googling",
    "Prompt Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
        "Building QuestCraftAI, an agentic AI prototype for NGOs that uses AI to generate quests and personalized recommendations, implemented with Supabase, Lovable, and the OpenAI SDK.",
        "Building vallindia.com, the company’s primary web platform, end-to-end — from design prototyping (Lovable) to backend development, infrastructure setup, and deployment.",
        "Mentoring and guiding two software engineers, ensuring code quality, scalable architecture, and best engineering practices.",
        "Migrated data infrastructure from DynamoDB to PostgreSQL, leading the development of Backend v2 and successfully managing the full migration.",
        "Integrated Testcontainer and Jest for integration testing to ensure API stability and reliability.",
        "Integrated Playwright end-to-end test automation to ensure a seamless and bug-free user experience.",
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
        "Prototyped an AI assistant for multi-language conversation, instant doubt support, and instant mock interviews using google’s text to speech, gemini, speech to text. Which can reduce the overall human interaction and human cost by 40%.",
        "Worked on a Unity based game, BOMB. Developed core game mechanics, including A* & flow-field pathfinding, a dynamic wall system, onboarding guides, target prioritization, building unlocks & upgrades, and game replay.",
        "Implemented CICD pipeline using GitHub Actions and Blue/green deployment using Nginx for easy deployment.",
        "Developed a platform guide mechanism using shephard.js to replace usetiful.com guides from all the products and save around $800 annually.",
        "Created communication task using Whisper & ChatGPT API that replaced Elsa AI and saved around $199 per year.",
        "Created Snapit AI, used Gemini API for checking grammar and spelling, resume improvement suggestions, and full resume scan based on job role.",
        "Extended Snapit AI to ask questions to the user based on the job role and resume, and provide the user review with the best possible answer.",
        "Integrated Razorpay payment gateway with SnapitAI, setting up multiple monthly plans and using webhooks for real-time payment processing and updates, generating around $200 in revenue.",
        "Delivered multiple features, performed manual/smoke testing, and conducted final code reviews to ensure quality and reliability.",
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
        "Automated the mock interview process by enhancing the appointment booking system, migrated from Zoom to Google Meet using Google API, and reduced costs by 60%. Used cron & implemented auto-scheduling, meeting link generation, automatic upload of recordings to Google Drive, etc.",
        "Designed a progress report page to track student’s progression based on different parameters.",
        "Improved the landing page website performance from 55% to 85% by using Azure CDN, removing unwanted code, NPM packages, lazy loading images and pages.",
        "Implemented a coupon system and UTM parameters to help the company run different campaigns.",
        "Re-designed the admin and student dashboard (31 Pages) using Tailwind CSS and Material UI.",
        "Fixed bugs, improved existing features, implemented new features, worked on manual testing and smoke testing.",
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
