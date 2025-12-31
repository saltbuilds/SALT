
import React, { useMemo } from 'react';
import { COLORS } from '../constants';
import SaltCharacter from './SaltCharacter';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Particles for the background sprinkle
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

  // UI Components for the "Website Building" animation
  const codeLines = Array.from({ length: 15 }).map((_, i) => ({
    width: `${40 + Math.random() * 50}%`,
    color: i % 3 === 0 ? COLORS.AQUA : i % 2 === 0 ? '#CBD5E1' : '#64748B',
    delay: `${i * 0.15}s`
  }));

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Content - Left side */}
        <div className="space-y-8 max-w-xl text-left z-10 relative">
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
            className="inline-block px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border border-white/50 backdrop-blur-md shadow-sm"
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
            className="text-xl leading-relaxed opacity-70 font-medium max-w-md"
            style={{ color: COLORS.NAVY }}
          >
            Digital foundations seasoned with technical rigor and minimalist soul. We build what stays.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <button 
              onClick={() => scrollToSection('packages')}
              className="px-12 py-5 rounded-2xl text-white font-black text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95 shadow-xl relative overflow-hidden group"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              <span className="relative z-10">LET'S TALK</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest border border-navy/10 transition-all hover:bg-white active:scale-95 bg-white/40 backdrop-blur-md shadow-sm"
              style={{ color: COLORS.NAVY }}
            >
              THE PROOF
            </button>
          </div>
        </div>

        {/* Dynamic Website Constructor Animation - Right side */}
        <div className="relative lg:scale-110 h-[500px] flex items-center justify-center">
          
          {/* Main Browser Canvas */}
          <div className="relative w-full aspect-[4/3] rounded-[2.5rem] border border-white/60 shadow-2xl overflow-hidden bg-white/40 backdrop-blur-3xl group">
            
            {/* Browser Header */}
            <div className="h-10 bg-white/60 border-b border-white/20 flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              </div>
              <div className="mx-auto w-32 h-3 bg-white/40 rounded-full" />
            </div>

            {/* Animation Content Area */}
            <div className="flex h-full">
              
              {/* Left Side: Code Terminal */}
              <div className="w-[35%] bg-navy/[0.03] border-r border-white/20 p-6 space-y-3 overflow-hidden">
                {codeLines.map((line, i) => (
                  <div 
                    key={i} 
                    className="h-1.5 rounded-full animate-code-slide"
                    style={{ 
                      width: line.width, 
                      backgroundColor: line.color,
                      animationDelay: line.delay
                    }}
                  />
                ))}
                {/* Simulated Syntax Highlighting Cursor */}
                <div className="w-2 h-4 bg-aqua animate-pulse mt-2 ml-1" />
              </div>

              {/* Right Side: Visual Canvas */}
              <div className="flex-1 p-8 relative overflow-hidden">
                
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#81C7D422_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

                <div className="relative h-full flex flex-col gap-6">
                  {/* Wireframe Heading */}
                  <div className="w-1/2 h-8 rounded-lg border-2 border-navy/5 bg-white/30 animate-item-pop" style={{ animationDelay: '0.5s' }}>
                    <div className="w-full h-full bg-aqua/20 scale-x-0 animate-fill-high-fi origin-left" style={{ animationDelay: '2s' }} />
                  </div>

                  {/* Wireframe Layout Cards */}
                  <div className="grid grid-cols-2 gap-4 flex-grow">
                    {[1, 2].map((i) => (
                      <div 
                        key={i} 
                        className="relative rounded-2xl border-2 border-dashed border-navy/10 bg-white/20 flex flex-col p-4 animate-item-pop overflow-hidden" 
                        style={{ animationDelay: `${0.8 + i * 0.2}s` }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                        
                        <div className="w-12 h-12 rounded-xl bg-navy/5 mb-3" />
                        <div className="w-full h-2 bg-navy/5 rounded-full mb-2" />
                        <div className="w-2/3 h-2 bg-navy/5 rounded-full" />

                        {/* High-Fi Transformation Layer */}
                        <div className="absolute inset-0 bg-white opacity-0 animate-fade-to-high-fi flex flex-col p-4" style={{ animationDelay: '2.5s' }}>
                           <div className="w-12 h-12 rounded-xl bg-aqua/20 mb-3" />
                           <div className="w-full h-2 bg-navy/10 rounded-full mb-2" />
                           <div className="w-2/3 h-2 bg-navy/10 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Build Progress Button */}
                  <div className="w-full h-12 rounded-2xl border-2 border-navy/5 bg-navy/5 flex items-center justify-center animate-item-pop" style={{ animationDelay: '1.5s' }}>
                    <div className="text-[10px] font-black uppercase tracking-widest text-navy/20 animate-pulse">Building Foundation...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Chef Shaker 'Seasoning' the UI */}
          <div className="absolute -top-20 -right-10 z-20 animate-chef-hover group-hover:scale-110 transition-transform">
            <div className="relative">
              <SaltCharacter type="chef" size={140} />
              
              {/* Concentrated 'Magic Salt' Spray */}
              <div className="absolute top-1/2 left-0 w-40 h-60 pointer-events-none transform -rotate-[30deg] -translate-x-full">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-1 h-1 bg-aqua rounded-full animate-magic-dust"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 20}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      opacity: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Decorative Floating Glass */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-3xl border border-white/40 rotate-12 -z-10 bg-white/20 backdrop-blur-2xl shadow-xl hidden md:block" />
        </div>
      </div>

      <style>{`
        @keyframes hero-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        .animate-hero-bounce {
          animation: hero-bounce 4s ease-in-out infinite;
        }

        @keyframes sprinkle {
          0% { transform: translateY(0) translateX(0) rotate(0deg) scale(0); opacity: 0; }
          5% { opacity: 1; transform: translateY(5px) translateX(0) rotate(10deg) scale(1); }
          100% { transform: translateY(800px) translateX(var(--drift)) rotate(var(--rot)) scale(0.3); opacity: 0; }
        }
        .animate-sprinkle {
          animation: sprinkle linear infinite;
        }

        @keyframes code-slide {
          0% { transform: translateX(-100%); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-code-slide {
          animation: code-slide 0.8s ease-out forwards;
        }

        @keyframes item-pop {
          0% { transform: scale(0.8) translateY(20px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
        .animate-item-pop {
          animation: item-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        @keyframes chef-hover {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        .animate-chef-hover {
          animation: chef-hover 5s ease-in-out infinite;
        }

        @keyframes magic-dust {
          0% { transform: translate(0, 0) scale(0); opacity: 0; }
          20% { opacity: 1; scale: 1; }
          100% { transform: translate(-100px, 300px) scale(0.5); opacity: 0; }
        }
        .animate-magic-dust {
          animation: magic-dust 2s ease-in infinite;
        }

        @keyframes fill-high-fi {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-fill-high-fi {
          animation: fill-high-fi 1s ease-out forwards;
        }

        @keyframes fade-to-high-fi {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-to-high-fi {
          animation: fade-to-high-fi 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
