import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Clapperboard } from 'lucide-react';
import logoImg from '../assets/logo/logo (3).png';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0B0B0E] text-[#B8B6BC] gse-body">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .gse-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                onError={(e) => { e.target.src = '/assets/logo.png'; }}
                alt="Gupta Studio Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <span className="text-[10px] font-semibold tracking-widest text-[#fff] uppercase flex items-center gap-1">
                <Clapperboard className="w-3 h-3" /> Short Drama & AI Content
              </span>
            </div>

            <p className="text-sm leading-relaxed text-[#9A98A0] max-w-sm">
              Gupta Studio is a premier short-drama content & AI film production studio supplying episodic video series, screenplay scripting, and 4K AI visual effects clips globally.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[#C9A227]">
                Hong Kong
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[#1FD1C4]">
                India
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-[#B8B6BC]">
                USA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2EFE9]">
              Content Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#short-drama" className="hover:text-[#C9A227] transition-colors">Short Drama Content Supply</a></li>
              <li><a href="#short-drama" className="hover:text-[#C9A227] transition-colors">Episodic Scriptwriting</a></li>
              <li><a href="#short-drama" className="hover:text-[#C9A227] transition-colors">Micro-Series Licensing</a></li>
              <li><a href="#ai-films" className="hover:text-[#C9A227] transition-colors">AI Movies & War Scenes</a></li>
              <li><a href="#vfx-gallery" className="hover:text-[#C9A227] transition-colors">AI Voice Dubbing (25+ Languages)</a></li>
            </ul>
          </div>

          {/* Genres */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2EFE9]">
              Featured Genres
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#vfx-gallery" className="hover:text-[#1FD1C4] transition-colors">CEO & Billionaire Romance</a></li>
              <li><a href="#vfx-gallery" className="hover:text-[#1FD1C4] transition-colors">Revenge & Suspense Drama</a></li>
              <li><a href="#vfx-gallery" className="hover:text-[#1FD1C4] transition-colors">AI Sci-Fi & Cyberpunk</a></li>
              <li><a href="#vfx-gallery" className="hover:text-[#1FD1C4] transition-colors">War at Sea Action Shots</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F2EFE9]">
              Contact Studio
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#B8B6BC]">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>contact@guptaproductions.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#1FD1C4] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>Gupta Studio Production Complex, India & HK</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#7A7A82]">
          <div>
            © {new Date().getFullYear()} Gupta Studio. All rights reserved. Premium short-drama content & AI film production.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-md bg-white/[0.03] border border-white/10 hover:border-[#C9A227]/40 hover:bg-white/[0.06] text-[#B8B6BC] hover:text-[#F2EFE9] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}