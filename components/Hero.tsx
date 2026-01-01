
import React, { useMemo, useState, useEffect } from 'react';
import { COLORS } from '../constants';
import SaltCharacter from './SaltCharacter';

const Hero: React.FC = () => {
  const [buildStatus, setBuildStatus] = useState('Initializing...');
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const saltGrains = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${30 + Math.random() * 40}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${1 + Math.random() * 3}px`,
      drift: (Math.random() - 0.5) * 150,
      opacity: 0.3 + Math.random() * 0.7,
      rotation: Math.random() * 360,
    }));
  }, []);

  const codeLines = useMemo(() => Array.from({ length: 22 }).map((_, i) => ({
    width: `${30 + Math.random() * 65}%`,
    color: i % 4 === 0 ? COLORS.AQUA : i % 3 === 0 ? '#94A3B8' : i % 2 === 0 ? '#CBD5E1' : '#64748B',
    indent: i % 5 === 0 ? '0' : i % 3 === 0 ? '1rem' : '2rem',
    delay: `${i * 0.12}s`,
    duration: `${0.4 + Math.random() * 0.6}s`
  })), []);

  useEffect(() => {
    const statuses = ['Compiling...', 'Optimizing Assets...', 'Building DOM...', 'Finalizing UI...', 'Live Preview'];
    let i = 0;
    const interval = setInterval(() => {
      setBuildStatus(statuses[i]);
      i = (i + 1) % statuses.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-24 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-[70vh] md:min-h-[90vh]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Content - Left side */}
        <div className="space-y-6 md:space-y-8 max-w-xl text-left z-10 relative">
          <div className="absolute -top-16 -left-12 animate-hero-bounce pointer-events-none hidden md:block" style={{ animationDuration: '4s' }}>
            <div className="relative">
              <SaltCharacter type="hero" size={110} />
              <div className="absolute top-4 left-0 w-full h-screen pointer-events-none overflow-visible">
                {saltGrains.map((grain) => (
                  <div
                    key={grain.id}
                    className="absolute bg-black rounded-sm shadow-sm animate-sprinkle"
                    style={{
                      width: grain.size,
                      height: grain.size,
                      left: grain.left,
                      opacity: grain.opacity,
                      animationDelay: grain.delay,
                      animationDuration: grain.duration,
                      '--drift': `${grain.drift}px`,
                      '--rot': `${grain.rotation}deg`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>

          <div 
            className="inline-block px-5 py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2 md:mb-4 border border-white/50 backdrop-blur-md shadow-sm"
            style={{ backgroundColor: `${COLORS.AQUA}15`, color: COLORS.NAVY }}
          >
            Premium Web Development
          </div>
          <h1 
            className="text-5xl md:text-8xl font-black leading-[1] md:leading-[0.95] tracking-tighter"
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
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-2 md:pt-4">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-10 md:px-12 py-4 md:py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl relative overflow-hidden group"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              <span className="relative z-10">LET'S TALK</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-navy/10 transition-all hover:bg-white active:scale-95 bg-white/40 backdrop-blur-md shadow-sm"
              style={{ color: COLORS.NAVY }}
            >
              THE PROOF
            </button>
          </div>
        </div>

        {/* Animation Area - Optimized/Hidden for Mobile */}
        <div className="relative lg:scale-110 h-[500px] hidden lg:flex items-center justify-center">
          <div className="absolute w-[120%] h-[120%] border border-aqua/10 rounded-full animate-spin-slow opacity-20" />
          <div className="absolute w-[110%] h-[110%] border border-navy/5 rounded-full animate-spin-slow-reverse opacity-10" />

          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] border border-white/80 shadow-2xl overflow-hidden bg-white/40 backdrop-blur-3xl">
            <div className="h-12 bg-white/60 border-b border-white/20 flex items-center px-6 gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>
              <div className="mx-auto flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-aqua/20" />
                <div className="w-32 h-2.5 bg-navy/5 rounded-full" />
              </div>
            </div>

            <div className="flex h-full">
              <div className="w-[40%] bg-navy/[0.04] border-r border-white/20 p-6 space-y-2 overflow-hidden">
                {codeLines.map((line, i) => (
                  <div 
                    key={i} 
                    className="h-1.5 rounded-full animate-code-type"
                    style={{ 
                      width: line.width, 
                      backgroundColor: line.color,
                      marginLeft: line.indent,
                      animationDelay: line.delay
                    }}
                  />
                ))}
              </div>
              <div className="flex-1 p-8 relative overflow-hidden bg-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(#81C7D433_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
                <div className="relative h-full flex flex-col gap-6">
                  <div className="w-[70%] h-10 rounded-xl border border-navy/10 bg-white/50 animate-component-snap" />
                  <div className="grid grid-cols-2 gap-4 flex-grow">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="rounded-2xl border border-navy/5 bg-white/40 flex flex-col p-4 animate-component-snap" style={{ animationDelay: `${0.6 + i * 0.15}s` }}>
                        <div className="w-full h-2.5 bg-navy/10 rounded-full mb-2" />
                        <div className="w-1/2 h-2.5 bg-navy/5 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Floating Element - Desktop Only */}
          <div className="absolute -top-12 -right-8 w-48 h-16 rounded-2xl border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl hidden lg:flex items-center px-6 gap-4 animate-float">
             <div className="w-8 h-8 rounded-full bg-aqua/20 flex items-center justify-center">
               <svg className="w-4 h-4 text-aqua" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
             </div>
             <div className="flex flex-col">
               <div className="w-20 h-2 bg-navy/10 rounded-full mb-1" />
               <div className="w-12 h-1.5 bg-navy/5 rounded-full" />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-slow-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 25s linear infinite; }
        @keyframes code-type { 0% { transform: scaleX(0); opacity: 0; } 100% { transform: scaleX(1); opacity: 1; } }
        .animate-code-type { animation: code-type 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        @keyframes component-snap { 0% { transform: scale(0.9) translateY(20px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        .animate-component-snap { animation: component-snap 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; opacity: 0; }
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes hero-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
        .animate-hero-bounce { animation: hero-bounce 4s ease-in-out infinite; }
        @keyframes sprinkle { 0% { transform: translateY(0) scale(0); opacity: 0; } 5% { opacity: 1; scale(1); } 100% { transform: translateY(800px) translateX(var(--drift)) rotate(var(--rot)) scale(0.3); opacity: 0; } }
        .animate-sprinkle { animation: sprinkle linear infinite; }
      `}</style>
    </div>
  );
};

export default Hero;
