import React from 'react';
import experienceData from '../data/ExperienceData';

const Experience = () => {
  return (
    <div className="text-white bg-gray-800/90 border border-gray-700 rounded-xl p-6 shadow-lg">
      {experienceData.map((exp, i) => (
        <div key={i} className="last:mb-0 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-xl font-bold text-white">{exp.company}</h3>
              <p className="text-sm font-medium text-blue-400 mt-0.5">
                {exp.role} {exp.location && `• ${exp.location}`}
              </p>
            </div>
            <div>
              <span className="inline-block text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-mono">
                {exp.period}
              </span>
            </div>
          </div>

          <ul className="text-sm mt-4 text-gray-300 space-y-2.5">
            {exp.description.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-blue-400 mt-1.5 shrink-0 text-xs">&#9670;</span>
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-700/50">
            {exp.technologies.map((tech, j) => (
              <span
                key={j}
                className="bg-blue-950/60 text-blue-300 px-2.5 py-0.5 rounded text-xs font-mono border border-blue-800/70 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
