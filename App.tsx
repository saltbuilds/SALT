
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
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-10 animate-pulse"
          style={{ background: 'radial-gradient(circle, #81C7D4 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #1A2B44 0%, transparent 70%)', filter: 'blur(100px)' }}
        />
      </div>

      <Navbar scrolled={scrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="packages" className="relative">
          {/* Subtle section divider */}
          <div className="absolute inset-0 bg-[#F8F9FA]/50 backdrop-blur-[2px] -z-10" />
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
