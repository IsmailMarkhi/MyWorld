import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaCode,
  FaMicrosoft,
  FaBrain,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiLaravel,
  SiJira,
  SiNextdotjs,
  SiExpress,
  SiJquery,
  SiGitlab,
  SiXampp,
  SiPrezi,
  SiAngular,
  SiMongodb,
  SiDocker,
  SiOpenai,
} from "react-icons/si";

export const techStack = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", category: "frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", category: "frontend" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500", category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", category: "frontend" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400", category: "frontend" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-400", category: "frontend" },
  { name: "React", icon: FaReact, color: "text-cyan-400", category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", category: "frontend" },
  { name: "Angular", icon: SiAngular, color: "text-red-600", category: "frontend" },

  // Backend
  { name: "PHP", icon: FaPhp, color: "text-indigo-500", category: "backend" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500", category: "backend" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", category: "backend" },
  { name: "Express.js", icon: SiExpress, color: "text-zinc-300", category: "backend" },
  { name: "Python", icon: FaPython, color: "text-yellow-500", category: "backend" },

  // Database
  { name: "MySQL", icon: SiMysql, color: "text-blue-600", category: "database" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500", category: "database" },

  // DevOps & Tools
  { name: "Docker", icon: SiDocker, color: "text-blue-500", category: "tools" },
  { name: "Docker Desktop", icon: SiDocker, color: "text-blue-400", category: "tools" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600", category: "tools" },
  { name: "GitHub", icon: FaGithub, color: "text-white", category: "tools" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-500", category: "tools" },
  { name: "XAMPP", icon: SiXampp, color: "text-orange-500", category: "tools" },
  { name: "VS Code", icon: FaCode, color: "text-blue-500", category: "tools" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500", category: "tools" },
  { name: "Jira", icon: SiJira, color: "text-blue-500", category: "tools" },

  // AI Tools
  { name: "ChatGPT", icon: SiOpenai, color: "text-green-400", category: "ai" },
  { name: "Claude", icon: FaBrain, color: "text-purple-400", category: "ai" },
  { name: "OpenRouter", icon: FaBrain, color: "text-indigo-400", category: "ai" },
  { name: "DeepSeek", icon: FaBrain, color: "text-sky-400", category: "ai" },
  { name: "Gemini", icon: FaBrain, color: "text-pink-400", category: "ai" },
  { name: "GitHub Copilot", icon: FaBrain, color: "text-emerald-400", category: "ai" },

  // Office / Productivity
  { name: "Microsoft Word", icon: FaMicrosoft, color: "text-blue-600", category: "productivity" },
  { name: "Microsoft Excel", icon: FaMicrosoft, color: "text-green-600", category: "productivity" },
  { name: "Microsoft PowerPoint", icon: FaMicrosoft, color: "text-orange-600", category: "productivity" },
  { name: "Gamma", icon: FaMicrosoft, color: "text-purple-500", category: "productivity" },
  { name: "Prezi", icon: SiPrezi, color: "text-blue-400", category: "productivity" },
];