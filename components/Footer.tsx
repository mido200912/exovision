
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-500">
        <p>&copy; {currentYear} Exovision. All rights reserved.</p>
        <p className="mt-2 text-sm">Discovering new worlds, one planet at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
