import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-32 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Explore the Cosmos?</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
          Whether you're a researcher, a curious mind, or a young adventurer, your journey into the world of exoplanets starts here.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="https://novi-ai-chat-bot.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-cyan-300"
          >
            Try Our AI
          </a>
          <a
            href="https://nasaspaceapps-starhunters.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-10 py-4 text-lg font-semibold text-purple-300 bg-transparent border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-slate-900 hover:shadow-lg hover:shadow-purple-400/30 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Play the Game
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
