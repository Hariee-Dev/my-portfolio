import React from 'react';
import experienceData from '../data/ExperienceData';

const Experience = () => {
  return (
    <div className="text-white bg-gray-800 border border-gray-700 rounded-lg p-5 shadow">
      
      {experienceData.map((exp, i) => (
        <div key={i} className="flex items-start gap-4 mb-8">
          
          <div>
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <p className="text-sm text-gray-300">{exp.role} • {exp.period}</p>
            <p className="text-sm mt-1 text-gray-400">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.technologies.map((tech, j) => (
                <span
                  key={j}
                  className="bg-gray-700 px-2 py-1 rounded-full text-xs font-medium"
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
