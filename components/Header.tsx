
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-sm shadow-md shadow-slate-900/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white tracking-widest">
            EXOVISION
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#video" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Video</a>
            <a href="#cta" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Get Started</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
