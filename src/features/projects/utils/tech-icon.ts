const SKILL_ICON = "https://skillicons.dev/icons?i=";

/** Known technology → skillicons.dev id. Unknown techs render without an icon. */
const ICON_IDS: Record<string, string> = {
  react: "react",
  "react.js": "react",
  "node.js": "nodejs",
  node: "nodejs",
  express: "express",
  mongodb: "mongodb",
  postgresql: "postgres",
  prisma: "prisma",
  mysql: "mysql",
  firebase: "firebase",
  redux: "redux",
  sass: "sass",
  typescript: "ts",
  testing: "jest",
  "next.js": "nextjs",
  tailwind: "tailwind",
  docker: "docker",
  aws: "aws",
};

export const getTechIconUrl = (tech: string) => {
  const id = ICON_IDS[tech.toLowerCase()];
  return id ? `${SKILL_ICON}${id}` : null;
};
