
import React, { useState } from 'react';
import { BrandIdentity, COLORS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Brand/Logo */}
        <BrandIdentity iconSize="w-8 h-8" textSize="text-2xl" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-bold text-xs uppercase tracking-widest transition-all hover:opacity-50 relative group"
              style={{ color: COLORS.NAVY }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all group-hover:w-full opacity-20" />
            </a>
          ))}
          <button 
            onClick={scrollToPackages}
            className="px-6 py-2.5 rounded-xl text-white font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg active:scale-95 shadow-md backdrop-blur-md bg-opacity-90"
            style={{ backgroundColor: COLORS.NAVY }}
          >
            LET'S TALK
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ backgroundColor: COLORS.NAVY }} />
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} style={{ backgroundColor: COLORS.NAVY }} />
          <div className={`w-6 h-0.5 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ backgroundColor: COLORS.NAVY }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-white/20 p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-black tracking-tight"
                style={{ color: COLORS.NAVY }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                scrollToPackages();
              }}
              className="w-full py-5 rounded-2xl text-white font-bold uppercase tracking-widest text-sm shadow-xl"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              LET'S TALK
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
