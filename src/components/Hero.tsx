import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 bg-thinkWhite relative overflow-hidden">
      {/* Decorative Red Square (TrackPoint homage) */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-thinkRed opacity-10 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>

      <div className="z-10 max-w-4xl space-y-8">
        <img 
          src="https://i.imgur.com/4qbt6w4.png" 
          alt="ThinkHome" 
          className="w-64 md:w-96 mb-8"
        />
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Kompletní <span className="text-thinkRed">IT management</span><br />
          a podpora pod jednou střechou.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light">
          Zjednodušujeme IT tak, aby se firmy nenechaly nachytat a nemusely řešit několik dodavatelů zároveň.
        </p>

        <div className="pt-8">
           <button 
            onClick={onCtaClick}
            className="inline-block bg-thinkBlack text-white px-8 py-4 font-bold text-lg hover:bg-thinkRed transition-colors duration-300"
           >
             Kontaktujte nás
           </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-thinkRed w-8 h-8" />
      </div>
    </div>
  );
};

export default Hero;