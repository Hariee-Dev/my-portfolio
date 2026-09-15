import React, { useState } from 'react';
import profile from '../images/profile.png';
import resumePdf from '../resume/Hariharasudhan_M_Resume.pdf';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaTools,
  FaBriefcase,
} from 'react-icons/fa';
import qaData from '../data/qaData';
import TechBadgeToggle from './TechBadgeToggle';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Footer from './Footer';

const skillTabs = ['All', 'AI & Dev Tools', 'Backend', 'Frontend', 'Databases', 'Architecture'];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = qaData.filter((item) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'AI & Dev Tools') return item.category.includes('AI') || item.category.includes('Tools');
    if (activeCategory === 'Backend') return item.category.includes('Backend') || item.category.includes('Security');
    if (activeCategory === 'Frontend') return item.category.includes('Frontend') || item.category.includes('Languages');
    if (activeCategory === 'Databases') return item.category.includes('Databases') || item.category.includes('Reporting');
    if (activeCategory === 'Architecture') return item.category.includes('Concepts');
    return true;
  });

  return (
    <div className='bg-gray-900 text-white w-full min-h-screen px-4 pb-10'>
      <div className='max-w-5xl pt-8 lg:pt-14 mx-auto'>

        {/* Hero / Profile Section */}
        <div className="profile">
          <div className='profile-img flex items-start justify-between'>
            <img
              src={profile}
              alt="Hariharasudhan M"
              className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full border-4 border-gray-800 shadow-xl"
            />
          </div>

          <div className="name text-3xl md:text-4xl font-bold font-sans mt-5 tracking-tight text-white">
            Hariharasudhan M
          </div>

          <div className="role font-medium text-blue-400 text-lg md:text-xl mt-1 tracking-wide">
            Full Stack Developer | Java · Spring Boot · React.js
          </div>

          {/* Professional Summary */}
          <div className='about mt-4 text-gray-300 leading-relaxed max-w-4xl text-sm md:text-base'>
            Full Stack Developer specializing in Java, Spring Boot, and React.js, with experience delivering two production-grade enterprise applications end-to-end — from system design through deployment. Skilled in microservices, event-driven architecture with Apache Kafka, and secure RESTful API development using Spring Security and JWT. Comfortable working across the stack, including OLAP analytics with ClickHouse and responsive UI development with Tailwind CSS, with a track record of measurable performance and efficiency gains.
          </div>

          {/* Contact Details */}
          <div className="contact-info mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400 shrink-0" />
              <span>Madurai, Tamil Nadu</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400 shrink-0" />
              <a href="tel:+919345293334" className="hover:text-blue-300 transition-colors">
                +91-9345293334
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400 shrink-0" />
              <a href="mailto:hariharasudhan.magudeeswaran@gmail.com" className="text-blue-300 hover:underline">
                hariharasudhan.magudeeswaran@gmail.com
              </a>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="cta-buttons mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/harie2712"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 text-sm transition-colors shadow-sm"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Hariee-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 text-sm transition-colors shadow-sm"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={resumePdf}
              download="Hariharasudhan_M_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-gray-200 hover:text-white font-medium py-2 px-4 rounded-md text-sm transition-colors shadow-sm inline-flex items-center gap-2"
            >
              <FaFileAlt size={15} />
              <span>Resume</span>
            </a>
          </div>

          <hr className='mt-10 border-gray-800' />
        </div>

        {/* Technical Skills Section */}
        <div className="skills-section mt-10">
          <div className="flex items-center gap-2 mb-6">
            <FaTools className="text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {skillTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400'
                    : 'bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700/80 border border-gray-700/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl p-5 shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 bg-gradient-to-b from-gray-800/90 to-gray-900/90 border border-gray-700/80 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5"
              >
                {/* Top glowing sheen */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-400 transition-all duration-300" />

                <div>
                  <div className="text-[11px] uppercase font-mono tracking-wider font-semibold text-blue-400 mb-1.5">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300/90 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-blue-950/60 border border-blue-800/70 text-blue-300 text-xs px-2.5 py-1 rounded-md font-mono font-medium hover:border-blue-600 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-gray-700/50">
                  {item.icons.map(({ icon: Icon, color, title }, i) => (
                    <Icon
                      key={i}
                      size={20}
                      style={{ color: color || undefined }}
                      title={title}
                      className="hover:scale-125 transition-transform duration-200 cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <TechBadgeToggle />
        </div>

        <hr className='mt-12 border-gray-800' />

        {/* Projects Section */}
        <Projects />

        <hr className='mt-12 border-gray-800' />

        {/* Professional Experience Section */}
        <div className="experience-section mt-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FaBriefcase className="text-blue-400" />
            Professional Experience
          </h2>
          <Experience />
        </div>

        <hr className='mt-12 border-gray-800' />

        {/* Education Section */}
        <Education />

        {/* Footer Section */}
        <Footer />

      </div>
    </div>
  );
};

export default Header;
