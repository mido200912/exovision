import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4 animate-fade-in-up" style={{ filter: 'drop-shadow(0 0 20px rgba(14, 165, 233, 0.7))' }}>
          Exovision
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          Exploring Exoplanets for Everyone
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section">
          <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;