import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';

const qaData = [
  {
    title: "Apps",
    description: `I develop responsive web-based applications using modern frontend tools.

My stack includes everything from semantic HTML and custom styling to utility-first CSS and component-based UI libraries.`,
    icons: [
      { icon: SiHtml5, color: '#E34F26', title: 'HTML' },
      { icon: SiCss3, color: '#1572B6', title: 'CSS' },
      { icon: SiTailwindcss, color: '#38BDF8', title: 'Tailwind CSS' },
      { icon: BiColorFill, color: '#FF69B4', title: 'DaisyUI' },
      { icon: SiJavascript, color: '#F7DF1E', title: 'JavaScript' },
      { icon: FaReact, color: '#61DBFB', title: 'React' },
      { icon: SiVite, color: '#646CFF', title: 'Vite' },
    ],
  },
  {
    title: "QA",
    description: `I've worked with a variety of tools to ensure our code is always of the highest quality.

Recently, I also started using AI tools like ChatGPT, Gemini, DeepSeek, and Claid to assist with code reviews, refactoring, and design feedback.`,
    icons: [
      { icon: SiOpenai, color: '#10A37F', title: 'ChatGPT' },
      {
        icon: () => (
          <span className="text-xs font-semibold px-2 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded text-white">
            Gemini
          </span>
        ),
        color: '',
        title: 'Gemini',
      },
      {
        icon: () => (
          <span className="text-xs font-semibold px-2 py-1 bg-purple-500 rounded text-white">
            DeepSeek
          </span>
        ),
        color: '',
        title: 'DeepSeek',
      },
      {
        icon: () => (
          <span className="text-xs font-semibold px-2 py-1 bg-pink-500 rounded text-white">
            claude
          </span>
        ),
        color: '',
        title: 'claude',
      },
    ],
  },
  {
    title: "APIs",
    description: `RESTful APIs, microservices, serverless functions, and more.

I have experience building and scaling APIs for both internal and external use.`,
    icons: [
      { icon: FaJava, color: '#E76F00', title: 'Java' },
      { icon: SiSpringboot, color: '#6DB33F', title: 'Spring Boot' },
      { icon: FaNodeJs, color: '#3C873A', title: 'Node.js' },
    ],
  },
  {
    title: "Database",
    description: `Skilled in both relational and NoSQL databases. I’ve worked with traditional SQL systems and modern document-based solutions.`,
    icons: [
      { icon: SiMysql, color: '#00758F', title: 'MySQL' },
      { icon: SiMongodb, color: '#47A248', title: 'MongoDB' },
    ],
  },
];

export default qaData;
