
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import CustomCursor from './components/CustomCursor';

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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white via-[#F8FEFF] to-[#F0FAFB]">
      <CustomCursor />
      
      {/* Royal Background System with Subtle Cyan Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Refined Mist Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-[#F9FEFF] to-[#E6F7F9] opacity-60" />
        
        {/* Royal Cyan Blooms - Softened for Subtlety */}
        <div 
          className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.12] blur-[150px] animate-pulse"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 75%)', animationDuration: '12s' }}
        />
        
        {/* Royal Navy Depth - Minimal Anchor */}
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[55%] h-[55%] rounded-full opacity-[0.03] blur-[130px]"
          style={{ background: 'radial-gradient(circle, #1A2B44 0%, transparent 80%)' }}
        />
        
        {/* Center Luminous Glow */}
        <div 
          className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full opacity-[0.06] blur-[110px]"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 65%)' }}
        />

        {/* Fine Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      </div>

      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="packages" className="relative">
          {/* Subtle section divider with glass effect */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px] -z-10" />
          <Packages />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
      </main>
      <ChatAssistant />
      <Footer />
    </div>
  );
};

export default App;
