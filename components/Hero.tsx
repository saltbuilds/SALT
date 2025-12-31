
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
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div className="space-y-8 max-w-xl text-left z-10">
          <div 
            className="inline-block px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-white/50 backdrop-blur-md shadow-sm"
            style={{ backgroundColor: `${COLORS.AQUA}15`, color: COLORS.NAVY }}
          >
            Premium Web Development
          </div>
          <h1 
            className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter"
            style={{ color: COLORS.NAVY }}
          >
            Digital <br/>
            Foundations <br/>
            <span style={{ color: COLORS.AQUA }}>Built with Salt.</span>
          </h1>
          <p 
            className="text-xl leading-relaxed opacity-70 font-medium max-w-md"
            style={{ color: COLORS.NAVY }}
          >
            We transform vision into high-performance reality using minimalist 2D design and robust technical architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-12 py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl relative overflow-hidden group"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-navy/10 transition-all hover:bg-white active:scale-95 bg-white/40 backdrop-blur-md shadow-sm"
              style={{ color: COLORS.NAVY }}
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Mockup Placeholder */}
        <div className="relative lg:scale-110">
          <div 
            className="aspect-[4/3] rounded-[2.5rem] border border-white/60 shadow-2xl relative overflow-hidden bg-white/40 backdrop-blur-3xl"
          >
            {/* Glass Shine Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50" />
            
            {/* 2D Browser UI Representation */}
            <div className="h-10 bg-white/40 border-b border-white/20 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-300" />
                <div className="w-3 h-3 rounded-full bg-slate-300 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-slate-300 opacity-30" />
              </div>
              <div className="mx-auto w-32 h-4 bg-white/40 rounded-full" />
            </div>
            
            <div className="p-10 space-y-6">
              <div className="w-2/3 h-10 bg-white/60 rounded-xl" />
              <div className="space-y-3">
                <div className="w-full h-3 bg-white/40 rounded-full" />
                <div className="w-full h-3 bg-white/40 rounded-full" />
                <div className="w-1/2 h-3 bg-white/40 rounded-full" />
              </div>
              <div className="grid grid-cols-3 gap-6 pt-10">
                {[1,2,3].map(i => (
                  <div key={i} className="aspect-square bg-white/50 rounded-2xl border border-white/20 shadow-inner" />
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Glass Element */}
          <div 
            className="absolute -bottom-12 -left-12 w-48 h-48 rounded-3xl border border-white/40 rotate-12 -z-10 bg-white/20 backdrop-blur-2xl shadow-xl hidden md:block"
          />
          <div 
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full border border-white/20 -z-10 bg-aqua/10 backdrop-blur-lg animate-bounce duration-[5000ms] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
