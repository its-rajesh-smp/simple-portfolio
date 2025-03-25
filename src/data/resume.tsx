import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rajesh Singha Mahapatra",
  initials: "RSMP",
  url: "https://dillion.io",
  location: "West Bengal, INDIA",
  locationLink: "https://maps.app.goo.gl/uJLLEH3cgNdVoBvf7",
  description:
    "Software Engineer & Mentor. I like to build, debug & fix things. Very active on Linkedin.",
  summary:
    "At the mid of 2022, I quit my job as a mechanical engineer to learn web-development, I joined [Sharpener](https://www.sharpener.tech/) to take help of mentors and learn web development, later become a software engineer & most helpful mentor at [Sharpener](https://www.sharpener.tech/).",
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
    "SQL",
    "C#",
    "SCSS",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "Redux Toolkit",
    "React Router",
    "React Native",
    "Express",
    "MySQL",
    "Nest",
    "Firebase",
    "MongoDB",
    "Prisma",
    "GraphQL",
    "RabbitMQ",
    "AWS (EC2, ECS, Lambda, Bedrock, S3, API Gateway)",
    "CICD (Github Actions)",
    "Git",
    "GitHub",
    "Googling",
    "Prompt Engineering",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
        name: "Send Email",
        url: "mailto:its.rajeshsmp@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Sharpener",
      href: "https://www.sharpener.tech/",
      badges: [],
      location: "Bangalore, India",
      title: "SDE 1",
      logoUrl:
        "https://sharpener.blob.core.windows.net/landing/logo/sharpenerLogo.png",
      start: "March 2024",
      end: "Present",
      description: [
        "Creating an AI agent using Langchain, Langraph, Langsmith, and Gemini to strategically attack inactive players and create accounts to reduce initial user shortage.",
        "Fine-tuned an AI model on 100+ Clash of Clans bases to generate strategic base layouts.",
        "Implemented a microservice architecture, used fire-and-forget and RPC pattern to communicate between Sharpener backend and game backend using RabbitMQ as a queue.",
        "Developed core game mechanics, including A* & flow-field pathfinding, a dynamic wall system, onboarding guides, target prioritization, building unlocks & upgrades, and game replay.",
        "Implemented CI/CD pipeline using GitHub Actions for easy deployment of game build.",
        "Developed a platform guide mechanism using Shepherd.js to replace Usetiful.com guides from all the products and save around $800 annually.",
        "Created a communication task using Whisper & ChatGPT API that replaced Elsa AI and saved around $199 per year.",
        "Created Snapit AI, used Gemini API for checking grammar and spelling, resume improvement suggestions, and full resume scan based on job role.",
        "Integrated Razorpay payment gateway with Snapit AI, setting up multiple monthly plans and using webhooks for real-time payment processing and updates, generating around $200 in revenue.",
        "Completed the first set of code reviews, fixed bugs, improved existing features, implemented new features, and worked on manual testing.",
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
        "Re-designed the admin dashboard (31 Pages) using Tailwind CSS and Material UI.",
        "Re-designed the student dashboard using Tailwind CSS and Material UI.",
        "Fixed bugs, improved existing features, implemented new features, worked on manual testing and smoke testing.",
      ] as string[],
    },
    {
      company: "Root and leaves",
      href: "https://nvidia.com/",
      badges: [],
      location: "Delhi, India",
      title: "React Native Intern",
      logoUrl: "https://rootandleaves.com/static/image/favicon.png",
      start: "August 2023",
      end: "September 2023",
      description: [
        "Worked on monorepo architecture and created 20+ mobile screens using React Native CLI.",
        "Integrated graphql apis using apollo client",
        "Used stylesheets for styling the screens",
        "Used redux-toolkit for state management",
      ] as string[],
    },
    {
      company: "Anand CY Limited (ACYM)",
      href: "https://www.anandgroupindia.com/acymautomotive/",
      badges: [],
      location: "San Jose, CA",
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
      href: "https://uwaterloo.ca",
      degree: "Diploma in Mechanical Engineering",
      logoUrl: "/waterloo.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Simlapal M.M High School",
      href: "https://wlu.ca",
      degree: "Higher Secondary Education (10+2) Science",
      logoUrl: "/laurier.png",
      start: "2018",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "message-broker-util",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "The MessageBroker package provides an abstraction layer over RabbitMQ, enabling easy message publishing, consuming, and RPC request-response communication. This package simplifies interaction with RabbitMQ using TypeScript and amqplib.",
      technologies: ["Node", "amqplib", "RabbitMQ", "TypeScript"],
      links: [
        {
          type: "NPM",
          href: "https://github.com/its-rajesh-smp/blinkit",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ProfilePad",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
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
          href: "https://github.com/its-rajesh-smp/blinkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "BlinkIt Clone",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
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
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "TrackyFy",
      href: "https://trackyfi.netlify.app/",
      dates: "June 2023 - Present",
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
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "BuddyBook",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "BodyBook is a social media platform with all essential P0 features, enabling users to engage in real-time interactions. It includes features like real-time data fetching, a feed for posting text and images, liking and commenting on posts, finding and connecting with friends through friend requests, online and offline user status, a built-in messenger, and indicators for typing, message sent, and unseen status.",
      technologies: [
        "React",
        "SCSS",
        "Firebase",
        "Redux",
        "React Router",
        "Vite",
        "Firebase Events",
        "Firebase Realtime Database",
        "Firebase Storage",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
