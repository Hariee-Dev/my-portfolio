import React from 'react';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <div className="projects-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        Key Enterprise Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, i) => (
          <div
            key={i}
            className="group relative bg-gray-800/90 border border-gray-700 rounded-xl overflow-hidden p-6 transition-all duration-300 hover:-translate-y-2 hover:border-gray-600 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)] flex flex-col justify-between"
          >

            <div>
              {/* Header */}
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-300">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-xs bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full font-medium">
                  {project.period}
                </span>
              </div>

              {/* Role & Company info */}
              <div className="text-xs text-gray-400 mb-4 font-mono">
                {project.role} &bull; {project.company}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 my-4 bg-gray-900/50 p-3 rounded-lg border border-gray-700/50">
                {project.metrics.map((metric, j) => (
                  <div key={j} className="text-center">
                    <div className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Accomplishments */}
              <ul className="space-y-2.5 text-sm text-gray-300 mb-6">
                {project.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1.5 shrink-0 text-xs">&#9670;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-700/50">
              {project.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="bg-gray-700/50 text-gray-300 border border-gray-600/50 px-2 py-0.5 rounded text-xs font-mono"
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
