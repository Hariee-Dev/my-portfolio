import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <div className="projects-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaLaptopCode className="text-blue-400" />
        Projects
      </h2>

      <div className="flex flex-col gap-6">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800/90 border border-gray-700/80 rounded-xl p-6 sm:p-7 shadow-md"
          >
            {/* Header: Title, Subtitle, and Timeline */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-blue-400 mt-0.5">
                  {project.subtitle}
                </p>
                <div className="text-xs text-gray-400 mt-1 font-mono">
                  {project.role}
                </div>
              </div>

              <div>
                <span className="inline-block text-xs bg-gray-700/80 text-gray-300 border border-gray-600/50 px-3 py-1 rounded-full font-mono">
                  {project.period}
                </span>
              </div>
            </div>

            {/* Impact Metrics Strip */}
            <div className="grid grid-cols-3 divide-x divide-gray-700/60 bg-gray-900/60 border border-gray-700/60 rounded-lg py-3 px-2 my-5 text-center">
              {project.metrics.map((metric, j) => (
                <div key={j} className="px-2">
                  <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                    {metric.value}
                  </div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Bullets */}
            <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
              {project.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-blue-400 mt-1.5 shrink-0 text-xs">&#9670;</span>
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-700/60">
              {project.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="bg-blue-950/60 text-blue-300 border border-blue-800/70 text-xs px-2.5 py-0.5 rounded font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
