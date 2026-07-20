import React, { useRef } from 'react';
import { Sparkles, ChevronRight, Video, Smartphone, Globe } from 'lucide-react';

export default function Hero({ theme, onOpenContact }) {
  const videoRef = useRef(null);

  // Prevent any end screens, logos, or ad frames by seamlessly rewinding before the video ends
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.duration && video.currentTime > video.duration - 0.8) {
        video.currentTime = 0.1;
        video.play();
      }
    }
  };

  return (
    <section className={`relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden min-h-[95vh] flex flex-col justify-start md:justify-center items-center ${theme === 'light' ? 'hero-light' : ''}`}>
      
      {/* Seamless High-Definition HTML5 Background Video Loop (Zero Ads, Zero Logos, Zero End Screens) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={(e) => {
            e.target.currentTime = 0.1;
            e.target.play();
          }}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            theme === 'light'
              ? 'opacity-95 brightness-100 contrast-110 saturate-110 scale-105'
              : 'opacity-90 brightness-110 contrast-110 scale-105'
          }`}
        >
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>
        
        {/* Soft Contrast Gradient Overlay for 100% Text Readability */}
        {theme === 'light' ? (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/42 to-slate-950/78" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/45 to-slate-950/90" />
        )}
      </div>

      {/* Luminous Glowing Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-amber-500/15 rounded-full blur-[170px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Centered Content Container */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center space-y-8">
        
        {/* Top Studio Badge */}
        <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl backdrop-blur-md transition-all ${
          theme === 'light'
            ? 'bg-slate-950/70 border-white/25 text-amber-300 shadow-black/30'
            : 'bg-slate-950/85 border-amber-500/50 text-amber-400 shadow-amber-500/20'
        }`}>
          <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: '8s' }} />
          <span>NEXT-GEN ENTERTAINMENT & MEDIA TECHNOLOGY</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div>

        {/* Space Grotesk Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className={`text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] ${
            theme === 'light' ? 'text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]' : 'text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]'
          }`}>
            Powering <span className="text-gradient-gold">Short Drama Apps</span> & <span className="text-gradient-cyan">AI Film Studios</span>
          </h1>

          {/* Subtext */}
          <p className={`text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto ${
            theme === 'light' ? 'text-slate-100 font-semibold drop-shadow-md' : 'text-slate-200 drop-shadow-md'
          }`}>
            Gupta Studio Entertainment delivers end-to-end Solutions for high-growth <span className="font-bold text-amber-500">Short Drama Apps & Web Platforms</span> (like ReelShort & DramaBox) alongside studio-grade <span className="font-bold text-cyan-400">AI Film & VFX Pipelines</span>.
          </p>
        </div>

        {/* Service Pillars Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
          <span className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl border backdrop-blur-md shadow-lg transition-transform hover:scale-105 ${
            theme === 'light' ? 'bg-slate-950/70 border-white/25 text-white' : 'bg-slate-950/85 border-slate-800 text-slate-200'
          }`}>
            <Smartphone className="w-4.5 h-4.5 text-amber-500" /> Turnkey Short Drama Apps
          </span>
          <span className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl border backdrop-blur-md shadow-lg transition-transform hover:scale-105 ${
            theme === 'light' ? 'bg-slate-950/70 border-white/25 text-white' : 'bg-slate-950/85 border-slate-800 text-slate-200'
          }`}>
            <Video className="w-4.5 h-4.5 text-cyan-500" /> Studio-Grade AI Movies & VFX
          </span>
          <span className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl border backdrop-blur-md shadow-lg transition-transform hover:scale-105 ${
            theme === 'light' ? 'bg-slate-950/70 border-white/25 text-white' : 'bg-slate-950/85 border-slate-800 text-slate-200'
          }`}>
            <Globe className="w-4.5 h-4.5 text-emerald-500" /> Global AI Localization & Dubbing
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
          <a
            href="#short-drama"
            className="w-full sm:w-auto px-9 py-4 rounded-2xl font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-2xl shadow-amber-500/35 transition-all duration-300 flex items-center justify-center gap-3 text-base cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Launch Short Drama App</span>
            <ChevronRight className="w-5 h-5" />
          </a>

          <a
            href="#ai-films"
            className={`w-full sm:w-auto px-9 py-4 rounded-2xl font-bold border transition-all duration-300 flex items-center justify-center gap-3 text-base cursor-pointer shadow-xl ${
              theme === 'light'
                ? 'bg-slate-950/70 border-white/30 text-white hover:border-amber-400 hover:bg-slate-900/90'
                : 'glass-panel border-slate-700/80 text-slate-100 hover:border-cyan-400'
            }`}
          >
            <Video className="w-5 h-5 text-cyan-500" />
            <span>AI Film Services</span>
          </a>
        </div>

        {/* Key Stats Bar */}
        <div className="pt-10 max-w-4xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 border-t border-slate-800/80">
          <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all hover:-translate-y-1 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-2xl sm:text-4xl font-black font-mono text-white">50+</div>
            <div className="text-xs sm:text-sm font-medium mt-1 text-slate-200">Short Drama Platforms</div>
          </div>

          <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all hover:-translate-y-1 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-2xl sm:text-4xl font-black text-amber-500 font-mono">10,000+</div>
            <div className="text-xs sm:text-sm font-medium mt-1 text-slate-200">AI Video Shots Produced</div>
          </div>

          <div className={`p-4 rounded-2xl border backdrop-blur-md transition-all hover:-translate-y-1 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-2xl sm:text-4xl font-black text-cyan-500 font-mono">25+</div>
            <div className="text-xs sm:text-sm font-medium mt-1 text-slate-200">Global Voice Languages</div>
          </div>
        </div>

      </div>

    </section>
  );
}
