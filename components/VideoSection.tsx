import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-20 sm:py-32 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Discover Exoplanets Visually
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
            A simple, visual journey for children and new learners to understand what an exoplanet is.
          </p>
        </div>

        <div className="max-w-4xl mx-auto shadow-2xl shadow-cyan-500/20 rounded-lg overflow-hidden border border-slate-700">
          <div className="aspect-video">
       <iframe
  loading="lazy"
  style={{ border: 'none', width: '100%', height: '500px' }}
  src="https://www.youtube.com/embed/EoqH9XElvAE"
  title="What is an Exoplanet? by NASA"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
