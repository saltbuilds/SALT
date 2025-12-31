
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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Royal Background System with Subtle Cyan Gradient */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* Subtle Mist Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#F0F9FA]" />
        
        {/* Royal Cyan Blooms - Softened for Subtlety */}
        <div 
          className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full opacity-15 blur-[140px] animate-pulse"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 70%)', animationDuration: '10s' }}
        />
        
        {/* Royal Navy Depth - Minimal Anchor */}
        <div 
          className="absolute bottom-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #1A2B44 0%, transparent 75%)' }}
        />
        
        {/* Extra Luminous Flare */}
        <div 
          className="absolute top-[20%] left-[5%] w-[35%] h-[35%] rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 60%)' }}
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
          {/* Subtle section divider with glass effect */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] -z-10" />
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
