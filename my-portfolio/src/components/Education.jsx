import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="education-section mt-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <FaGraduationCap className="text-blue-400" />
        Education
      </h2>

      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:border-gray-600">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-white">
              Bachelor of Engineering in Electronics and Communication Engineering
            </h3>
            <p className="text-blue-400 font-medium text-sm mt-1">
              PSNA College of Engineering and Technology, Dindigul
            </p>
          </div>
          <div className="sm:text-right">
            <span className="inline-block text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full font-mono">
              2020 – 2024
            </span>
            <div className="text-sm font-semibold text-emerald-400 mt-1">
              CGPA: 7.9
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
