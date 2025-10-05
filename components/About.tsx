import React from 'react';
import { ScientistIcon, PublicIcon, KidsIcon } from './icons/FeatureIcons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode, style?: React.CSSProperties }> = ({ icon, title, children, style }) => {
  return (
    <div className="bg-slate-800/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform transition-all duration-300 backdrop-blur-sm border border-slate-700 animate-fade-in-up" style={style}>
      <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-slate-700 text-cyan-400">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{children}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl animate-fade-in-up">What is Exovision?</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Exovision is a multi-faceted project designed to demystify the study of exoplanets—planets orbiting stars outside our solar system.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard icon={<ScientistIcon />} title="AI for Scientists" style={{animationDelay: '400ms'}}>
            Our powerful AI tool helps scientists analyze complex exoplanet data, accelerating research and discovery by answering critical questions about distant worlds.
          </FeatureCard>
          <FeatureCard icon={<PublicIcon />} title="Public Outreach" style={{animationDelay: '600ms'}}>
            We believe space is for everyone. Exovision translates complex scientific findings into accessible and engaging content for the general public.
          </FeatureCard>
          <FeatureCard icon={<KidsIcon />} title="Interactive Gaming" style={{animationDelay: '800ms'}}>
            For our youngest explorers, an interactive game offers fun quizzes and a creative feature to design their own imaginary planets, sparking a lifelong love for astronomy.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default About;