import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo/logo.png';

export default function Navbar({ theme, onToggleTheme, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Short Drama Content', href: '#short-drama' },
    { name: 'AI Film Production', href: '#ai-films' },
    { name: 'AI VFX & Dubbing', href: '#vfx-gallery' },
    { name: 'About Us', href: '#about-us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030305]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2'
          : 'bg-gradient-to-b from-[#030305]/90 via-[#030305]/65 to-transparent border-b border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Studio Logo (Decreased Size as Requested) */}
          <a href="#" className="flex items-center shrink-0 group py-0.5">
            <img
              src={logoImg}
              onError={(e) => { e.target.src = '/assets/logo.png'; }}
              alt="Gupta Studio Logo"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.2)]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-white hover:text-amber-400 transition-colors drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area: Theme Switcher & Quote Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            
            {/* Sun/Moon Light-Dark Mode Toggle */}
            {/* <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl border border-white/15 bg-[#090a10] text-amber-400 hover:border-amber-400 transition-all cursor-pointer shadow-md"
              title="Toggle Light/Dark Theme"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button> */}

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>Get Custom Content</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger area */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-white/15 bg-[#090a10] text-amber-400 shadow-sm"
            >
              {theme === 'light' ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/15 bg-[#090a10] text-white shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 border-b bg-[#030305] border-white/10 text-white shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold py-2 border-b border-white/10 text-white hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full py-3 rounded-xl font-bold text-slate-950 bg-amber-400 flex items-center justify-center gap-2 text-sm shadow-md"
          >
            <span>Get Custom Content</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
