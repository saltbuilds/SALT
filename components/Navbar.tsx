
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo */}
        <BrandIdentity iconSize="w-8 h-8" textSize="text-2xl" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-sm uppercase tracking-widest transition-colors hover:opacity-70"
              style={{ color: COLORS.NAVY }}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={scrollToPackages}
            className="px-6 py-2.5 rounded-full text-white font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-md"
            style={{ backgroundColor: COLORS.NAVY }}
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 mb-1.5 transition-all" style={{ backgroundColor: COLORS.NAVY }} />
          <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: COLORS.NAVY }} />
          <div className="w-6 h-0.5" style={{ backgroundColor: COLORS.NAVY }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold"
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
              className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest"
              style={{ backgroundColor: COLORS.NAVY }}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
