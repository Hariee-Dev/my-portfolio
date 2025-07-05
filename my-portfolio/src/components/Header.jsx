import React from 'react';
import profile from '../images/profile.jpg';
import { FaHome, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import qaData from '../data/qaData';
import TechBadgeToggle from './TechBadgeToggle'
import Experience from './Experience';
import experienceData from '../data/ExperienceData';
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

          <div className="role font-thin">
            Software Engineer
          </div>

          <div className='about mt-5'>
            Software engineer, currently based in India. When I write code, I champion two things: simplicity and maintainability.
            While most software nowadays suffers from bloat and over-engineering, I ensure that the projects I work on become a joy to work with, not a burden.
          </div>

          <div className="address mt-5 flex items-center gap-2">
            <FaHome />
            Dindigul, Tamil Nadu
          </div>

          <div className="mail mt-2 flex items-center gap-2 text-blue-300">
            <FaEnvelope />
            <a href='mailto:hariharasudham2712@gmail.com' className="hover:underline">
              hello@hari.in
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

  <h2 className="text-2xl font-bold mb-6">Experience</h2>

  <Experience/>

  <Footer/>

</div>





      </div>
    </div>
  );
};

export default Header;
