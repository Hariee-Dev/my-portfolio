import React from 'react';
import {
  FaReact,
  FaJava,
  FaGithub,
  FaGitAlt,
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
} from 'react-icons/si';

const qaData = [
  {
    title: "Backend & Streaming",
    description: `I architect high-performance, secure, and event-driven backend microservices.
    
    My focus is on microservices, event-driven data streaming pipelines, RESTful API design, and containerized deployments.`,
    icons: [
      { icon: FaJava, color: '#E76F00', title: 'Java' },
      { icon: SiSpringboot, color: '#6DB33F', title: 'Spring Boot' },
      { icon: SiApachekafka, color: '#231F20', title: 'Apache Kafka' },
      { icon: SiDocker, color: '#2496ED', title: 'Docker' },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gray-700 rounded text-gray-200 border border-gray-600">
            REST API
          </span>
        ),
        color: '',
        title: 'RESTful API'
      }
    ],
  },
  {
    title: "Frontend & Design",
    description: `I build responsive, clean, and interactive user interfaces.
    
    Using utility-first framework practices and standard libraries to deliver pixel-perfect designs with fluid user experiences.`,
    icons: [
      { icon: SiHtml5, color: '#E34F26', title: 'HTML5' },
      { icon: SiCss3, color: '#1572B6', title: 'CSS3' },
      { icon: SiJavascript, color: '#F7DF1E', title: 'JavaScript' },
      { icon: FaReact, color: '#61DBFB', title: 'React.js' },
      { icon: SiTailwindcss, color: '#38BDF8', title: 'Tailwind CSS' },
      { icon: SiBootstrap, color: '#7952B3', title: 'Bootstrap' }
    ],
  },
  {
    title: "Databases & Analytics",
    description: `I design optimized schemas for both relational databases and analytical OLAP engines.
    
    Experienced in bulk persistence logic, query speedups, and automated business intelligence reporting pipelines.`,
    icons: [
      { icon: SiMysql, color: '#00758F', title: 'MySQL' },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded text-white">
            ClickHouse
          </span>
        ),
        color: '',
        title: 'ClickHouse'
      },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-red-600 rounded text-white">
            JasperReports
          </span>
        ),
        color: '',
        title: 'JasperReports'
      }
    ],
  },
  {
    title: "Security & Tools",
    description: `I secure applications using robust access control and maintain solid development workflows.
    
    Expertise in authentication protocols, RBAC, Git version control, and API testing platforms.`,
    icons: [
      { icon: SiSpringsecurity, color: '#6DB33F', title: 'Spring Security' },
      {
        icon: () => (
          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-purple-600 rounded text-white">
            JWT
          </span>
        ),
        color: '',
        title: 'JWT'
      },
      { icon: FaGitAlt, color: '#F05032', title: 'Git' },
      { icon: FaGithub, color: '#FFFFFF', title: 'GitHub' },
      { icon: SiPostman, color: '#FF6C37', title: 'Postman' }
    ],
  }
];

export default qaData;
