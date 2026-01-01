
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-[#F1FDFF] to-[#E6F9FB]">
      {/* Royal Background System & Edge Atmosphere */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Refined Mist Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-[#F7FEFF] to-[#DFF6F9] opacity-40" />
        
        {/* Royal Cyan Blooms - Softened for Subtlety */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full opacity-[0.08] blur-[150px] animate-pulse"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 75%)', animationDuration: '15s' }}
        />
        
        {/* Left Side Edge Atmosphere */}
        <div 
          className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 70%)' }}
        />

        {/* Floating Geometric Shards in Margins */}
        <div className="absolute top-[15%] left-[5%] w-32 h-32 border border-aqua/10 rotate-12 rounded-2xl hidden 2xl:block animate-float-slow" />
        <div className="absolute bottom-[20%] right-[3%] w-48 h-48 border border-navy/[0.03] -rotate-12 rounded-[3rem] hidden 2xl:block animate-float-slow-reverse" />
        
        {/* Royal Navy Depth - Minimal Anchor */}
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] rounded-full opacity-[0.02] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #1A2B44 0%, transparent 80%)' }}
        />
        
        {/* Center Luminous Glow */}
        <div 
          className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full opacity-[0.03] blur-[110px]"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 65%)' }}
        />

        {/* Fine Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      </div>

      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="packages" className="relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] -z-10" />
          <Packages />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
      </main>
      <ChatAssistant />
      <Footer />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-30px) rotate(15deg); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: translateY(0) rotate(-12deg); }
          50% { transform: translateY(40px) rotate(-18deg); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 15s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
