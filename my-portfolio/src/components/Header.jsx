import React from 'react';
import profile from '../images/profile.jpg';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import qaData from '../data/qaData';
import TechBadgeToggle from './TechBadgeToggle';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';




const Header = () => {
  return (
    <div className='bg-gray-900 text-white w-full min-h-screen px-4 pb-10'>
      <div className='max-w-5xl pt-4 lg:pt-14 mx-auto z-2'>
        
        <div className="profile">
          <div className='profile-img flex items-start justify-between'>
           <img
  src={profile}// or use import if from src
  alt="hari"
  className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-gray-800"
/>
          </div>

          <div className="name text-3xl font-semibold font-sans mt-4">
            Hariharasudhan M
          </div>

          <div className="role font-light text-blue-400 text-lg mt-1 tracking-wide">
            Full Stack Developer
          </div>

          <div className='about mt-5 text-gray-300 leading-relaxed max-w-3xl'>
            I am a results-driven Full Stack Developer with 1.4 years of professional experience building and shipping production-grade enterprise applications at Solartis. My core expertise lies in Java, Spring Boot, and React.js, with a proven track record of architecting robust microservices, implementing scalable event-driven systems using Apache Kafka, and designing high-throughput RESTful APIs. Passionate about engineering excellence, I champion simplicity, performance, and clean maintainability in every line of code I write.
          </div>

          <div className="address mt-5 flex items-center gap-2 text-gray-300 text-sm">
            <FaHome className="text-blue-400" />
            Madurai, Tamil Nadu
          </div>

          <div className="mail mt-2 flex items-center gap-2 text-blue-300 text-sm">
            <FaEnvelope className="text-blue-400" />
            <a href='mailto:hariharasudhanm2712@gmail.com' className="hover:underline">
              hariharasudhanm2712@gmail.com
            </a>
          </div>

          <div className="linkedIn mt-4 ">
           
            <button className="ctl bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-sm flex gap-1 justify-center items-center" onClick={()=>{
              window.open('https://www.linkedin.com/in/harie2712/','_blank');
            }}>
               <FaLinkedin size={20}/>
              Connect on LinkedIn
            </button>
          </div>
          <hr className='mt-8 border-gray-700'/>
          
        </div>

        <div className="skills-Section">
  <p className="skill text-xl font-semibold mt-4">Skills</p>

  <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {qaData.map((item, index) => (
      <div
        key={index}
        className="bg-gray-800 border border-gray-700 rounded-lg p-5 shadow"
      >
        <h1 className="text-2xl font-bold text-white mb-2">{item.title}</h1>
        <p className="text-gray-300 whitespace-pre-line">{item.description}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {item.icons.map(({ icon: Icon, color, title }, i) => (
            <Icon
              key={i}
              size={24}
              style={{ color }}
              title={title}
              className="hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    ))}
  </div>

  <TechBadgeToggle />

  <hr className='mt-8 border-gray-700'/>

  <Projects />

  <hr className='mt-8 border-gray-700'/>

  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
    Professional Experience
  </h2>

  <Experience />

  <Footer />

</div>





      </div>
    </div>
  );
};

export default Header;
