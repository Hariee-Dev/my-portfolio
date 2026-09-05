import React from 'react';
import {
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaCode,
  FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiApachekafka,
  SiDocker,
  SiPostman,
  SiSpringsecurity,
  SiBootstrap,
  SiClickhouse,
  SiEclipseide,
  SiAnthropic,
  SiOpenai,
  SiGooglegemini,
  SiGithubcopilot,
} from 'react-icons/si';
import { BsStars } from 'react-icons/bs';
import { VscVscode } from 'react-icons/vsc';
import { TbSql } from 'react-icons/tb';

const qaData = [
  {
    category: "AI & Developer Tools",
    title: "AI-Powered Engineering",
    description: "Proficient with next-generation AI developer tools for accelerated full-stack development, rapid prototyping, and automated code synthesis.",
    skills: ["Claude Code", "OpenAI Codex", "Google Stitch", "GitHub Copilot", "Cursor"],
    icons: [
      { icon: SiAnthropic, color: '#D97706', title: 'Claude Code' },
      { icon: SiOpenai, color: '#10A37F', title: 'OpenAI Codex' },
      { icon: SiGooglegemini, color: '#4285F4', title: 'Google Stitch' },
      { icon: SiGithubcopilot, color: '#818CF8', title: 'GitHub Copilot' },
      { icon: BsStars, color: '#F59E0B', title: 'AI Engineering' }
    ],
  },
  {
    category: "Languages",
    title: "Programming Languages",
    description: "Strong foundation in object-oriented and web-standard languages for scalable distributed systems.",
    skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"],
    icons: [
      { icon: FaJava, color: '#E76F00', title: 'Java' },
      { icon: SiJavascript, color: '#F7DF1E', title: 'JavaScript' },
      { icon: TbSql, color: '#00758F', title: 'SQL' },
      { icon: SiHtml5, color: '#E34F26', title: 'HTML5' },
      { icon: SiCss3, color: '#1572B6', title: 'CSS3' },
    ],
  },
  {
    category: "Backend",
    title: "Backend & Microservices",
    description: "Enterprise backend architecture with Spring Boot, asynchronous Kafka streaming, and robust API design.",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring JDBC",
      "RESTful API Design",
      "Microservices",
      "Apache Kafka",
      "Docker"
    ],
    icons: [
      { icon: SiSpringboot, color: '#6DB33F', title: 'Spring Boot' },
      { icon: SiSpringsecurity, color: '#6DB33F', title: 'Spring Security' },
      { icon: SiApachekafka, color: '#FFFFFF', title: 'Apache Kafka' },
      { icon: SiDocker, color: '#2496ED', title: 'Docker' },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-700 rounded text-gray-200 border border-gray-600">
            REST API
          </span>
        ),
        color: '',
        title: 'RESTful API Design'
      },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-700 rounded text-gray-200 border border-gray-600">
            Spring JDBC
          </span>
        ),
        color: '',
        title: 'Spring JDBC'
      }
    ],
  },
  {
    category: "Frontend",
    title: "Frontend Development",
    description: "Modern, responsive, user-centric interfaces built with React.js, Tailwind CSS, and semantic layouts.",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    icons: [
      { icon: FaReact, color: '#61DBFB', title: 'React.js' },
      { icon: SiTailwindcss, color: '#38BDF8', title: 'Tailwind CSS' },
      { icon: SiBootstrap, color: '#7952B3', title: 'Bootstrap' },
      { icon: SiHtml5, color: '#E34F26', title: 'HTML5' },
      { icon: SiCss3, color: '#1572B6', title: 'CSS3' }
    ],
  },
  {
    category: "Databases",
    title: "Databases & OLAP",
    description: "Relational persistence and ultra-fast analytical queries on high-volume datasets.",
    skills: ["MySQL", "ClickHouse (OLAP / Columnar)"],
    icons: [
      { icon: SiMysql, color: '#38bdf8', title: 'MySQL' },
      { icon: SiClickhouse, color: '#facc15', title: 'ClickHouse' },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            OLAP
          </span>
        ),
        color: '',
        title: 'Columnar OLAP'
      }
    ],
  },
  {
    category: "Reporting & Analytics",
    title: "Reporting & Analytics",
    description: "Automated business intelligence pipelines, large dataset analytics, and PDF/tabular report exports.",
    skills: ["JasperReports", "ClickHouse Analytical Queries"],
    icons: [
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            JasperReports
          </span>
        ),
        color: '',
        title: 'JasperReports'
      },
      { icon: SiClickhouse, color: '#facc15', title: 'ClickHouse Analytics' }
    ],
  },
  {
    category: "Security",
    title: "Security & Access Control",
    description: "Stateless token-based authentication, RBAC authorization, and audit trail enforcement.",
    skills: ["Spring Security", "JWT Authentication", "Role-Based Access Control (RBAC)"],
    icons: [
      { icon: SiSpringsecurity, color: '#4ade80', title: 'Spring Security' },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            JWT
          </span>
        ),
        color: '',
        title: 'JWT Authentication'
      },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            RBAC
          </span>
        ),
        color: '',
        title: 'Role-Based Access Control'
      }
    ],
  },
  {
    category: "Tools",
    title: "Tools & Environments",
    description: "Industry-standard tooling for version control, API testing, and collaborative engineering.",
    skills: ["Git", "GitHub", "Postman", "Eclipse", "VS Code"],
    icons: [
      { icon: FaGitAlt, color: '#fb923c', title: 'Git' },
      { icon: FaGithub, color: '#f1f5f9', title: 'GitHub' },
      { icon: SiPostman, color: '#fb923c', title: 'Postman' },
      { icon: SiEclipseide, color: '#a78bfa', title: 'Eclipse' },
      { icon: VscVscode, color: '#38bdf8', title: 'VS Code' }
    ],
  },
  {
    category: "Concepts",
    title: "Architecture & Engineering Concepts",
    description: "Core computer science principles and modern distributed software architectures.",
    skills: [
      "Microservices Architecture",
      "Event-Driven Architecture",
      "OOP",
      "SDLC",
      "Data Structures & Algorithms",
      "DBMS"
    ],
    icons: [
      { icon: FaProjectDiagram, color: '#38bdf8', title: 'Microservices & Event-Driven Architecture' },
      { icon: FaCode, color: '#a78bfa', title: 'OOP & Algorithms' },
      {
        icon: () => (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-800 border border-gray-600 rounded text-gray-300 font-mono">
            SDLC
          </span>
        ),
        color: '',
        title: 'SDLC'
      }
    ],
  }
];

export default qaData;
