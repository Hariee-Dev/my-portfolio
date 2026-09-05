import React, { useState } from 'react';
import {
  FaReact,
  FaGithub,
  FaJava,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiSpringsecurity,
  SiApachekafka,
  SiDocker,
  SiClickhouse,
  SiJavascript,
  SiPostman,
  SiBootstrap,
  SiHtml5,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const TechBadgeToggle = () => {
  const [showList, setShowList] = useState(false);

  const techStack = [
    { name: 'Java', icon: FaJava, iconColor: '#f97316' },
    { name: 'Spring Boot', icon: SiSpringboot, iconColor: '#4ade80' },
    { name: 'React.js', icon: FaReact, iconColor: '#38bdf8' },
    { name: 'Apache Kafka', icon: SiApachekafka, iconColor: '#e2e8f0' },
    { name: 'MySQL', icon: SiMysql, iconColor: '#38bdf8' },
    { name: 'ClickHouse', icon: SiClickhouse, iconColor: '#facc15' },
    { name: 'Spring Security', icon: SiSpringsecurity, iconColor: '#4ade80' },
    { name: 'JavaScript', icon: SiJavascript, iconColor: '#facc15' },
    { name: 'SQL', icon: TbSql, iconColor: '#2dd4bf' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, iconColor: '#38bdf8' },
    { name: 'Bootstrap', icon: SiBootstrap, iconColor: '#a78bfa' },
    { name: 'Docker', icon: SiDocker, iconColor: '#60a5fa' },
    { name: 'Postman', icon: SiPostman, iconColor: '#fb923c' },
    { name: 'Git & GitHub', icon: FaGithub, iconColor: '#e2e8f0' },
    { name: 'HTML5 & CSS3', icon: SiHtml5, iconColor: '#fb923c' },
  ];

  return (
    <div className="text-white mt-8">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase font-mono tracking-wider text-gray-400">Core Technologies</span>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-300 hover:text-white select-none">
          <input
            type="checkbox"
            checked={showList}
            onChange={() => setShowList(!showList)}
            className="rounded bg-gray-800 border-gray-700 text-blue-500 focus:ring-0 cursor-pointer"
          />
          <span className="font-medium">Show as Grid</span>
        </label>
      </div>

      {showList ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {techStack.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-750 border border-gray-700/80 hover:border-gray-500 text-gray-200 text-sm font-medium transition-all shadow-sm"
            >
              <tech.icon size={18} style={{ color: tech.iconColor }} className="shrink-0" />
              <span className="truncate">{tech.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative overflow-hidden w-full py-1">
          <div className="flex w-max animate-slide hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 mx-1.5 rounded-full bg-gray-800/90 hover:bg-gray-750 border border-gray-700/80 hover:border-gray-500 text-gray-200 text-sm whitespace-nowrap shrink-0 font-medium transition-all shadow-sm"
              >
                <tech.icon size={16} style={{ color: tech.iconColor }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechBadgeToggle;
