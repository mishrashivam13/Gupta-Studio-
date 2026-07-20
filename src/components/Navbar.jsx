import React, { useState, useEffect } from 'react';
import { Film, Sun, Moon, ArrowRight, Menu, X } from 'lucide-react';

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
          ? theme === 'light'
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-md py-2.5 sm:py-3.5'
            : 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-2.5 sm:py-3.5'
          : 'bg-transparent border-b border-transparent py-2.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform shrink-0">
              <Film className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-[13px] sm:text-[18px] font-black tracking-tight whitespace-nowrap ${theme === 'light' && !scrolled ? 'text-white drop-shadow-md' : theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                GUPTA <span className="text-amber-500">STUDIO</span>
              </span>
              <span className="text-[8px] sm:text-[10px] mt-1 font-bold tracking-[0.16em] uppercase text-amber-400 whitespace-nowrap">
                Entertainment
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs 2xl:text-sm font-extrabold transition-colors hover:text-amber-500 whitespace-nowrap ${
                  theme === 'light' && !scrolled ? 'text-white drop-shadow-md' : theme === 'light' ? 'text-slate-800' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Area: Theme Switcher & Quote Button */}
          <div className="hidden xl:flex items-center gap-3">
            
            {/* Sun/Moon Light-Dark Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                theme === 'light' && !scrolled
                  ? 'bg-slate-950/45 border-white/30 text-white hover:bg-slate-950/65'
                  : theme === 'light'
                  ? 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                  : 'bg-slate-900 border-slate-800 text-amber-400 hover:border-amber-500/50'
              }`}
              title="Toggle Light/Dark Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={onOpenContact}
              className="px-4 2xl:px-6 py-3 rounded-xl font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all text-xs 2xl:text-sm flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex xl:hidden items-center gap-1">
            <button
              onClick={onToggleTheme}
              className={`p-1.5 rounded-lg border ${
                theme === 'light' && !scrolled ? 'bg-slate-950/45 border-white/30 text-white' : theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-slate-900 border-slate-800 text-amber-400'
              }`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg ${theme === 'light' && !scrolled ? 'text-white' : theme === 'light' ? 'text-slate-800' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`xl:hidden px-4 pt-4 pb-6 space-y-4 border-b ${
          theme === 'light' ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-white'
        }`}>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold py-2 border-b border-slate-800/30"
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
            className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 flex items-center justify-center gap-2 text-sm"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
