import React from 'react';
import experienceData from '../data/ExperienceData';

const Experience = () => {
  return (
    <div className="text-white bg-gray-800 border border-gray-700 rounded-lg p-5 shadow">
      
      {experienceData.map((exp, i) => (
        <div key={i} className="flex items-start gap-4 mb-8">
          
          <div>
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-300">
              {exp.role} {exp.location && `• ${exp.location}`} • {exp.period}
            </p>
            <ul className="text-sm mt-3 text-gray-400 space-y-2 list-disc pl-5">
              {exp.description.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="bg-gray-700/80 px-2.5 py-1 rounded-full text-xs font-mono text-gray-300 border border-gray-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
