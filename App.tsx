import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

const App: React.FC = () => {
  return (
    <div className="bg-transparent text-slate-200 font-sans antialiased relative z-10">
      <BackgroundParticles />
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;