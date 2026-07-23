import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo/logo.png';

export default function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 transition-colors bg-[#030305] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column (Compact Decreased Logo) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                onError={(e) => { e.target.src = '/assets/logo.png'; }}
                alt="Gupta Studio Logo"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_8px_rgba(245,158,11,0.2)]"
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm font-normal">
              Gupta Studio is a premier Short Drama Content & AI Film Production studio supplying episodic video series, screenplay scripting, and 4K AI visual effects clips globally.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-[#090a10] border border-white/10 text-amber-400">
                Hong Kong
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#090a10] border border-white/10 text-cyan-400">
                India
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#090a10] border border-white/10 text-slate-300">
                USA
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Content Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Short Drama Content Supply</a></li>
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Episodic Scriptwriting</a></li>
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Micro-Series Licensing</a></li>
              <li><a href="#ai-films" className="hover:text-amber-400 transition-colors">AI Movies & War Scenes</a></li>
              <li><a href="#vfx-gallery" className="hover:text-amber-400 transition-colors">AI Voice Dubbing (25+ Languages)</a></li>
            </ul>
          </div>

          {/* Genres */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Featured Genres
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">CEO & Billionaire Romance</a></li>
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">Revenge & Suspense Drama</a></li>
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">AI Sci-Fi & Cyberpunk</a></li>
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">War at Sea Action Shots</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Studio
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contact@guptaproductions.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Gupta Studio Production Complex, India & HK</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © {new Date().getFullYear()} Gupta Studio. All rights reserved. Premium Short Drama Content & AI Film Production.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#090a10] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
