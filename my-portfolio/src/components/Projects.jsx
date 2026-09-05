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
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 my-5">
              {project.metrics.map((metric, j) => (
                <div
                  key={j}
                  className="relative group overflow-hidden rounded-xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/70 hover:border-blue-500/50 p-3 sm:p-3.5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {/* Subtle top glow highlight */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-cyan-400 transition-all duration-300" />

                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold font-mono tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-400 group-hover:text-slate-300 uppercase tracking-wider mt-1 transition-colors leading-tight">
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
