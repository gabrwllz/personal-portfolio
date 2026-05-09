import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiVuedotjs,
  SiAstro,
  SiLit,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
} from "react-icons/si"
import { FaCodeBranch, FaJava } from "react-icons/fa"
import { TbApi } from "react-icons/tb"

export const PROFILE = {
  name: "Gabrielle",
  fullName: "Gabrielle Bouchard",
  title: "Software Developer",
  description:
    "Passionate full-stack developer focused on creating modern and performant web solutions. I enjoy learning new technologies and applying them to build innovative applications.",
  email: "gabriellebouchard1999@outlook.com",
  socials: {
    github: "https://github.com/gabrwllz",
    linkedin: "https://www.linkedin.com/in/gabrielle-b-6abb96308/",
  },
}

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Astro", icon: SiAstro },
      { name: "Lit", icon: SiLit },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "API Integration", icon: FaCodeBranch },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "CI/CD", icon: FaCodeBranch },
      { name: "Docker", icon: SiDocker },
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: "On the fly - Flight tracker",
    description:
      "Web application for tracking flight prices in real time, helping users monitor fare changes and find the best deals for their trips.",
    longDescription:
      "A full-stack application that scrapes and monitors flight prices across multiple airlines. Users can set price alerts and track fare trends over time.",
    technologies: ["React", "TypeScript", "Python"],
    image: "✈️",
    github: "https://github.com/gabrwllz/flight_track",
    url: null,
    favorite: true,
    date: "2025-05",
  },
]

export const EXPERIENCE_START = new Date("2025-01-01")

export const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "GoTo Technologies",
    period: "2025 - Present",
    description: "Development and maintenance of ...",
    skills: ["Lit", "TypeScript"],
  },
]
