
import React from 'react';
import { COLORS } from '../constants';
import SaltCharacter from './SaltCharacter';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-10 md:pt-48 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content */}
        <div className="space-y-6 max-w-xl text-left z-10 relative">
          {/* Floating Mascot - Positioned to stay above the line but clear of the navbar */}
          <div className="absolute -top-36 -left-12 animate-bounce pointer-events-none hidden xl:block" style={{ animationDuration: '4s' }}>
            <SaltCharacter type="hero" size={130} />
          </div>

          <div 
            className="inline-block px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-2 border border-white/50 backdrop-blur-md shadow-sm"
            style={{ backgroundColor: `${COLORS.AQUA}15`, color: COLORS.NAVY }}
          >
            Premium Web Development
          </div>
          <h1 
            className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter"
            style={{ color: COLORS.NAVY }}
          >
            Worth <br/>
            Your <span style={{ color: COLORS.AQUA }}>Salt.</span>
          </h1>
          <p 
            className="text-lg md:text-xl leading-relaxed opacity-70 font-medium max-w-md"
            style={{ color: COLORS.NAVY }}
          >
            Digital foundations seasoned with technical rigor and minimalist soul. We build what stays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-10 py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl relative overflow-hidden group"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              <span className="relative z-10">LET'S TALK</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-navy/10 transition-all hover:bg-white active:scale-95 bg-white/40 backdrop-blur-md shadow-sm"
              style={{ color: COLORS.NAVY }}
            >
              THE PROOF
            </button>
          </div>
        </div>

        {/* INTERACTIVE LAYERED STACK MOCKUP */}
        <div className="relative lg:scale-110 h-[450px] flex items-center justify-center group cursor-default">
          
          {/* Background Bloom */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-aqua/20 blur-[100px] group-hover:scale-150 transition-transform duration-1000" />

          {/* LAYER 1: The Code Foundation (Back) */}
          <div className="absolute -translate-x-20 -translate-y-20 glass-card w-64 p-6 rounded-3xl shadow-xl transform transition-all duration-700 group-hover:-translate-x-32 group-hover:-translate-y-32 animate-float-delayed z-0 rotate-[-8deg] opacity-60">
            <div className="flex gap-1.5 mb-4">
               <div className="w-2 h-2 rounded-full bg-rose-400" />
               <div className="w-2 h-2 rounded-full bg-amber-400" />
               <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-300 rounded" />
              <div className="h-2 w-5/6 bg-slate-300 rounded" />
              <div className="h-2 w-4/6 bg-slate-300 rounded" />
              <div className="h-2 w-full bg-slate-300 rounded" />
              <div className="h-2 w-3/4 bg-slate-300 rounded" />
            </div>
          </div>

          {/* LAYER 2: The Main Platform (Middle) */}
          <div className="relative glass-card w-[420px] aspect-[4/3] rounded-[2.5rem] shadow-2xl z-20 animate-float overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            
            {/* Mockup Content */}
            <div className="h-full flex flex-col">
              {/* Toolbar */}
              <div className="h-10 border-b border-white/20 px-6 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="w-24 h-4 bg-white/40 rounded-full" />
                <div className="w-5 h-5 bg-white/20 rounded-lg" />
              </div>
              
              {/* Body */}
              <div className="flex-1 p-8 space-y-6">
                <div className="h-8 w-1/2 bg-white/60 rounded-xl" />
                <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 bg-white/40 rounded-2xl border border-white/20" />
                   <div className="h-32 bg-white/40 rounded-2xl border border-white/20" />
                </div>
                <div className="h-24 w-full bg-white/30 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* LAYER 3: Analytics / Performance (Front) */}
          <div className="absolute translate-x-28 translate-y-24 glass-card w-48 p-6 rounded-3xl shadow-2xl z-30 transform transition-all duration-700 group-hover:translate-x-44 group-hover:translate-y-36 animate-float-delayed rotate-[6deg]">
             <div className="flex items-center justify-between mb-4">
               <div className="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-aqua rounded" />
               </div>
               <div className="text-[10px] font-black text-navy opacity-40">PERFORMANCE</div>
             </div>
             <div className="text-2xl font-black text-navy">99.9%</div>
             <div className="mt-4 flex items-end gap-1 h-12">
                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-aqua rounded-t-sm opacity-60" style={{ height: `${h}%` }} />
                ))}
             </div>
          </div>

          {/* Extra Detail Elements */}
          <div className="absolute -top-10 -right-4 w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-pulse z-40 border border-white/60 rotate-12">
            <span className="text-xl">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
