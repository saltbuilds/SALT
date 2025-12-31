
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-8 max-w-xl">
          <div 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4"
            style={{ backgroundColor: `${COLORS.AQUA}20`, color: COLORS.NAVY }}
          >
            Premium Web Development
          </div>
          <h1 
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
            style={{ color: COLORS.NAVY }}
          >
            Building Digital Foundations <br/>
            <span style={{ color: COLORS.AQUA }}>with SALT.</span>
          </h1>
          <p 
            className="text-xl leading-relaxed opacity-80"
            style={{ color: COLORS.NAVY }}
          >
            We craft high-performance websites for businesses that want to stand out. Our approach combines sharp 2D design with robust technical excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-10 py-4 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90 active:scale-95 shadow-lg"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              Get Started
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-10 py-4 rounded-xl font-bold text-lg border-2 transition-all hover:bg-slate-50 active:scale-95 bg-white"
              style={{ borderColor: COLORS.NAVY, color: COLORS.NAVY }}
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Mockup Placeholder */}
        <div className="relative">
          <div 
            className="aspect-[4/3] rounded-2xl border-4 border-white shadow-2xl relative overflow-hidden bg-white"
            style={{ borderColor: COLORS.AQUA }}
          >
            {/* 2D Browser UI Representation */}
            <div className="h-8 bg-slate-100 border-b flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="p-8 space-y-4">
              <div className="w-3/4 h-8 bg-slate-100 rounded animate-pulse" />
              <div className="w-full h-4 bg-slate-50 rounded" />
              <div className="w-full h-4 bg-slate-50 rounded" />
              <div className="w-2/3 h-4 bg-slate-50 rounded" />
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="aspect-square bg-slate-100 rounded-lg" />
                <div className="aspect-square bg-slate-100 rounded-lg" />
                <div className="aspect-square bg-slate-100 rounded-lg" />
              </div>
              <div className="mt-8 flex justify-center italic text-slate-400 text-sm font-medium">
                IMAGE: Modern Laptop Mockup - 2D Illustration
              </div>
            </div>
          </div>
          {/* Floating Element */}
          <div 
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl border-4 rotate-6 -z-10 bg-white shadow-lg hidden md:block"
            style={{ borderColor: COLORS.AQUA }}
          />
        </div>
      </div>
      
      {/* Background Decorative Shapes */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full -z-20 opacity-5"
        style={{ 
          background: `radial-gradient(circle at top right, ${COLORS.AQUA}, transparent)` 
        }}
      />
    </div>
  );
};

export default Hero;
