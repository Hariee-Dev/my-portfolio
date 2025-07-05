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
  SiMongodb,
  SiSpringsecurity,
  SiMongoose,
} from 'react-icons/si';

const TechBadgeToggle = () => {
  const [showList, setShowList] = useState(false);

  const techStack = [
    { name: 'React', icon: FaReact, bg: 'bg-cyan-600' },
    { name: 'Java', icon: FaJava, bg: 'bg-red-700' },
    { name: 'Spring Boot', icon: SiSpringboot, bg: 'bg-green-700' },
    { name: 'GitHub', icon: FaGithub, bg: 'bg-gray-800' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, bg: 'bg-blue-500' },
    { name: 'MySQL', icon: SiMysql, bg: 'bg-yellow-600' },
    { name: 'MongoDB', icon: SiMongodb, bg: 'bg-green-600' },
    { name: 'Spring Security', icon: SiSpringsecurity, bg: 'bg-lime-700' },
    { name: 'Mongoose', icon: SiMongoose, bg: 'bg-indigo-600' },
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
