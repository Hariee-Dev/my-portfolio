import React from 'react';

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className="mt-10 py-4 text-center text-sm text-gray-400 border-t border-gray-700">
      <p>Copyright © {year} Hari</p>
      <p>
        Built from scratch using{' '}
        <span className="text-white font-semibold">React</span> and{' '}
        <span className="text-white font-semibold">Tailwind CSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
