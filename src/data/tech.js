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
  FaCode ,
  FaMicrosoft, // for Excel / Word
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiLaravel,
  SiJira,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiJquery,
  SiGitlab,
  SiXampp,
  SiPrezi,
} from "react-icons/si";
export const techStack = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },

  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-white" },

  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-300" },
  { name: "Django", icon: SiDjango, color: "text-green-700" },

  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },

  // Tools
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-zinc-900 dark:text-white" },
  { name: "GitLab", icon: SiGitlab, color: "text-orange-500" },

  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "Jira", icon: SiJira, color: "text-blue-500" },

  // 🆕 Added
  { name: "Excel", icon: FaMicrosoft, color: "text-green-600" },
  { name: "Word", icon: FaMicrosoft, color: "text-blue-600" },
  { name: "Docs", icon: FaMicrosoft, color: "text-blue-500" },

  { name: "Gamma", icon: FaMicrosoft, color: "text-purple-500" }, // no official icon → fallback
  { name: "Prezi", icon: SiPrezi, color: "text-blue-400" },

  { name: "XAMPP", icon: SiXampp, color: "text-orange-500" },
  { name: "VS Code", icon: FaCode , color: "text-blue-500" },
];