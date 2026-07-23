import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import logoImg from '../assets/logo/logo (3).png';

export default function Navbar({ onOpenContact }) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 gse-body ${
        scrolled
          ? 'bg-[#0B0B0E]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30 py-2'
          : 'bg-gradient-to-b from-[#0B0B0E]/90 via-[#0B0B0E]/60 to-transparent border-b border-transparent py-3.5'
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .gse-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">

          {/* Logo Area */}
          <a href="#" className="flex items-center shrink-0 group py-0.5">
            <img
              src={logoImg}
              onError={(e) => { e.target.src = '/assets/logo.png'; }}
              alt="Gupta Studio"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-[#D8D6DA] hover:text-[#C9A227] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-md font-semibold text-[#fff] bg-[#053bcd] hover:bg-[#DBB640] transition-colors text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <span>Get Custom Content</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-white/15 bg-white/[0.03] text-[#F2EFE9]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 space-y-4 border-b border-white/10 bg-[#0B0B0E] text-[#F2EFE9] shadow-xl shadow-black/40">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold py-3 border-b border-white/10 text-[#D8D6DA] hover:text-[#C9A227]"
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
            className="w-full py-3 rounded-md font-semibold text-[#0B0B0E] bg-[#C9A227] flex items-center justify-center gap-2 text-sm"
          >
            <span>Get Custom Content</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}