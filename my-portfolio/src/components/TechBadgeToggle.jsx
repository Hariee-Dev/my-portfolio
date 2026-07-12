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
} from 'react-icons/si';

const TechBadgeToggle = () => {
  const [showList, setShowList] = useState(false);

  const techStack = [
    { name: 'Java', icon: FaJava, bg: 'bg-gradient-to-r from-red-600 to-orange-600' },
    { name: 'Spring Boot', icon: SiSpringboot, bg: 'bg-gradient-to-r from-green-600 to-emerald-600' },
    { name: 'Spring Security', icon: SiSpringsecurity, bg: 'bg-gradient-to-r from-lime-600 to-green-700' },
    { name: 'Apache Kafka', icon: SiApachekafka, bg: 'bg-gradient-to-r from-gray-700 to-gray-900' },
    { name: 'MySQL', icon: SiMysql, bg: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
    { name: 'ClickHouse', icon: SiClickhouse, bg: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { name: 'React', icon: FaReact, bg: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, bg: 'bg-gradient-to-r from-sky-400 to-blue-500' },
    { name: 'Docker', icon: SiDocker, bg: 'bg-gradient-to-r from-blue-500 to-indigo-600' },
    { name: 'GitHub', icon: FaGithub, bg: 'bg-gradient-to-r from-zinc-700 to-zinc-900' },
  ];

  return (
    <div className="text-white">
      <label className="flex items-center gap-2 mb-4 cursor-pointer">
        <input
          type="checkbox"
          checked={showList}
          onChange={() => setShowList(!showList)}
        />
        <span className="font-semibold">Show as List</span>
      </label>

      {showList ? (
        <ul className="space-y-2">
          {techStack.map((tech, i) => (
            <li key={i} className="flex items-center gap-2 font-semibold">
              <tech.icon size={20} />
              {tech.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative overflow-hidden w-full">
          <div className="flex w-max animate-slide hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 px-3 py-1 mx-1 rounded-full ${tech.bg} border border-white/20 text-sm whitespace-nowrap shrink-0 font-semibold`}
              >
                <tech.icon size={18} />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechBadgeToggle;
