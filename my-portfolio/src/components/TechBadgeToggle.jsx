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
    { name: 'Java', icon: FaJava, color: '#f97316' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#22c55e' },
    { name: 'React.js', icon: FaReact, color: '#38bdf8' },
    { name: 'Apache Kafka', icon: SiApachekafka, color: '#f43f5e' },
    { name: 'MySQL', icon: SiMysql, color: '#0ea5e9' },
    { name: 'ClickHouse', icon: SiClickhouse, color: '#eab308' },
    { name: 'Spring Security', icon: SiSpringsecurity, color: '#10b981' },
    { name: 'JavaScript', icon: SiJavascript, color: '#facc15' },
    { name: 'SQL', icon: TbSql, color: '#14b8a6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#a855f7' },
    { name: 'Docker', icon: SiDocker, color: '#3b82f6' },
    { name: 'Postman', icon: SiPostman, color: '#f97316' },
    { name: 'Git & GitHub', icon: FaGithub, color: '#94a3b8' },
    { name: 'HTML5 & CSS3', icon: SiHtml5, color: '#ea580c' },
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
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg border backdrop-blur-sm text-gray-100 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                backgroundColor: `${tech.color}15`,
                borderColor: `${tech.color}40`,
                boxShadow: `0 2px 8px ${tech.color}15`
              }}
            >
              <tech.icon size={18} style={{ color: tech.color }} className="shrink-0" />
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
                className="flex items-center gap-2 px-3.5 py-1.5 mx-1.5 rounded-full border backdrop-blur-sm text-gray-100 text-sm whitespace-nowrap shrink-0 font-medium transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  backgroundColor: `${tech.color}15`,
                  borderColor: `${tech.color}40`,
                  boxShadow: `0 2px 8px ${tech.color}15`
                }}
              >
                <tech.icon size={16} style={{ color: tech.color }} />
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
