import React from 'react';

interface VideoSectionProps {
  youtubeLink?: string; // اختياري، لو مش موجود هيستخدم فيديو افتراضي
}

const getEmbedLink = (url: string) => {
  try {
    // لو رابط قصير youtu.be
    if (url.includes('youtu.be')) {
      const id = url.split('/').pop()?.split('?')[0];
      return `https://www.youtube.com/embed/${id}`;
    }
    // لو رابط watch?v=
    const urlObj = new URL(url);
    const v = urlObj.searchParams.get('v');
    if (v) return `https://www.youtube.com/embed/${v}`;
    return url; // لو بالفعل embed
  } catch {
    return url; // fallback
  }
};

const VideoSection: React.FC<VideoSectionProps> = ({
  youtubeLink = 'https://www.youtube.com/embed/EoqH9XElvAE',
}) => {
  const embedLink = getEmbedLink(youtubeLink);

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
              src={embedLink}
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

