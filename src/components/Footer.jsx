import React from 'react';
import { Film, Sparkles, Globe, Mail, Phone, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 reveal-fade-up">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-600 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Film className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-wider text-white">GUPTA</span>
                  <span className="font-bold text-xl tracking-wider text-amber-400">STUDIO ENTERTAINMENT</span>
                </div>
                <span className="text-[10px] font-semibold tracking-widest text-cyan-400 uppercase -mt-1 flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> AI & Short Drama Studio
                </span>
              </div>
            </a>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              Gupta Studio Entertainment is a next-generation entertainment technology studio specializing in turnkey Short Drama Apps & Websites and studio-grade AI Film & Visual Effects production.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300 font-mono pt-2">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-amber-400" /> Global Studios: India • HK • UK • USA
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Short Drama Mobile Apps</a></li>
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Short Drama Web Streaming</a></li>
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Coin & Subscription Monetization</a></li>
              <li><a href="#ai-films" className="hover:text-cyan-400 transition-colors">AI Script-to-Screen Production</a></li>
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">Generative AI VFX & CGI</a></li>
              <li><a href="#short-drama" className="hover:text-amber-400 transition-colors">Multilingual AI Voice Dubbing</a></li>
            </ul>
          </div>

          {/* Platform Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Interactive</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#app-simulator" className="hover:text-amber-400 transition-colors">Live Mobile App Simulator</a></li>
              <li><a href="#vfx-gallery" className="hover:text-cyan-400 transition-colors">Before/After AI VFX Slider</a></li>
              <li><a href="#pipeline" className="hover:text-amber-400 transition-colors">Script-to-Screen Workflow</a></li>
              <li><a href="#estimator" className="hover:text-amber-400 transition-colors">Project Cost Calculator</a></li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">contact@guptaproductions.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300">+91 98765 43210</span>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
            >
              Contact Studio Team
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 reveal-fade-up">
          <div>
            © {new Date().getFullYear()} Gupta Studio Entertainment. All rights reserved. Providing Short Drama & AI Film Services worldwide.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
