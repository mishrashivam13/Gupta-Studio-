import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, Video, Globe, Clapperboard, Sparkles } from 'lucide-react';

function useCountUp(end, isVisible, duration = 1500) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, end, duration]);

  return value;
}

export default function Hero({ onOpenContact }) {
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const seriesCount = useCountUp(500, statsVisible);
  const clipsCount = useCountUp(10000, statsVisible);
  const langCount = useCountUp(25, statsVisible);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.duration && video.currentTime > video.duration - 0.8) {
        video.currentTime = 0.1;
        video.play();
      }
    }
  };

  const reveal = (delay, extra = '') =>
    `transition-all duration-700 ease-out ${extra} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`;
  const revealStyle = (delay) => ({ transitionDelay: `${delay}ms` });

  return (
    <section className="relative pt-24 pb-4 md:pt-40 md:pb-28 overflow-hidden md:min-h-[88vh] flex flex-col justify-center items-center bg-[#030305]">

      <style>{`
        @keyframes orbDriftA { 0%, 100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-46%, -54%) scale(1.1); } }
        @keyframes orbDriftB { 0%, 100% { transform: translate(-50%, 0) scale(1); } 50% { transform: translate(-54%, -4%) scale(1.06); } }
        @keyframes cursiveGlow { 0%, 100% { text-shadow: 0 0 22px rgba(251,191,36,0.35), 0 0 50px rgba(251,191,36,0.12); } 50% { text-shadow: 0 0 32px rgba(251,191,36,0.55), 0 0 70px rgba(251,191,36,0.2); } }
        @keyframes cursiveGlowCyan { 0%, 100% { text-shadow: 0 0 22px rgba(34,211,238,0.35), 0 0 50px rgba(34,211,238,0.12); } 50% { text-shadow: 0 0 32px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.2); } }
        @keyframes shimmerSweep { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }
        @keyframes pillFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes pillFloatReverse { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
        .glow-amber { animation: cursiveGlow 3.4s ease-in-out infinite; }
        .glow-cyan { animation: cursiveGlowCyan 3.4s ease-in-out infinite; }
        .cta-shimmer { position: relative; overflow: hidden; }
        .cta-shimmer::after {
          content: ''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.6), transparent);
          animation: shimmerSweep 2.6s ease-in-out infinite; animation-delay: 1s;
        }
        .pill-float { animation: pillFloat 4.5s ease-in-out infinite; }
        .pill-float-reverse { animation: pillFloatReverse 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .glow-amber, .glow-cyan, .cta-shimmer::after, .pill-float, .pill-float-reverse, .orb-a, .orb-b { animation: none !important; }
        }
      `}</style>

      {/* Minimalist Background Video Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#030305]">
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
          className={`w-full h-full object-cover transition-all duration-[1400ms] ease-out brightness-105 contrast-110 ${
            mounted ? 'scale-105 opacity-85' : 'scale-110 opacity-0'
          }`}
        >
          <source src="/src/assets/The best creatively distinctive and impactful collage animation_1080p.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
        </video>

        {/* Minimalist Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030305]/95 via-[#030305]/60 to-[#030305]/95 pointer-events-none" />
      </div>

      {/* Floating Ambient Glow Orbs — drifting instead of static pulse */}
      <div
        className="orb-a absolute top-1/2 left-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-amber-500/10 rounded-full blur-[130px] sm:blur-[180px] pointer-events-none"
        style={{ animation: 'orbDriftA 9s ease-in-out infinite' }}
      />
      <div
        className="orb-b absolute top-1/3 left-1/2 w-[220px] sm:w-[450px] h-[220px] sm:h-[450px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none"
        style={{ animation: 'orbDriftB 11s ease-in-out infinite' }}
      />

      {/* Centered Minimalist Content Container */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-7">

        {/* Minimalist Headline */}
        <div className={`space-y-3 max-w-3xl mx-auto ${reveal(0)}`} style={revealStyle(0)}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.14] text-white">
            We Provide <span className="glow-amber font-cursive text-amber-400 text-4xl sm:text-6xl lg:text-7xl font-normal">Short Drama Content</span> & <span className="glow-cyan font-cursive text-cyan-400 text-4xl sm:text-6xl lg:text-7xl font-normal">AI Movies</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto text-slate-300">
            Gupta Studio produces and supplies high-quality <span className="font-semibold text-amber-400">Short Drama Video Content</span>, scripts, and video series alongside studio-grade <span className="font-semibold text-cyan-400">AI Film & VFX Production Clips</span>.
          </p>
        </div>

        {/* Floating Interactive Feature Pills */}
        <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium text-slate-200 ${reveal(150)}`} style={revealStyle(150)}>
          <span className="pill-float flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border border-white/10 bg-[#090a10]/85 backdrop-blur-md text-slate-200 shadow-xl transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-0.5 hover:shadow-amber-500/20">
            <Clapperboard className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-400 shrink-0" /> Short Drama Content Supply
          </span>
          <span className="pill-float-reverse flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border border-white/10 bg-[#090a10]/85 backdrop-blur-md text-slate-200 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-0.5 hover:shadow-cyan-500/20">
            <Video className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400 shrink-0" /> AI Movies & War Shots
          </span>
          <span className="pill-float flex items-center gap-1.5 px-3.5 py-2 rounded-2xl border border-white/10 bg-[#090a10]/85 backdrop-blur-md text-slate-200 shadow-xl transition-all duration-300 hover:border-emerald-400/50 hover:-translate-y-0.5 hover:shadow-emerald-500/20">
            <Globe className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 shrink-0" /> Global AI Voice Dubbing
          </span>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-sm sm:max-w-md mx-auto pt-1 ${reveal(300)}`} style={revealStyle(300)}>
          <a
            href="#short-drama"
            className="cta-shimmer flex-1 sm:flex-none w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-xl shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer transform hover:-translate-y-1 hover:shadow-amber-500/40 active:translate-y-0 whitespace-nowrap"
          >
            <span>Get Short Drama Content</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </a>

          <a
            href="#vfx-gallery"
            className="flex-1 sm:flex-none w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl font-bold border border-white/15 backdrop-blur-xl bg-[#090a10]/90 text-white hover:border-cyan-400 hover:bg-slate-900 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm cursor-pointer shadow-lg hover:-translate-y-1 whitespace-nowrap"
          >
            <Video className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-white">Watch AI Movie Videos</span>
          </a>
        </div>

        {/* Floating Minimalist Stats Bar — counts up once visible */}
        <div ref={statsRef} className={`pt-4 sm:pt-8 max-w-3xl mx-auto border-t border-white/10 ${reveal(450)}`} style={revealStyle(450)}>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">

            <div className="minimal-card p-3 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 rounded-2xl">
              <div className="text-base sm:text-2xl lg:text-3xl font-black font-mono text-white tracking-tight">{seriesCount}+</div>
              <div className="text-[8px] sm:text-xs font-medium mt-0.5 text-slate-300 leading-tight">Short Drama Series</div>
            </div>

            <div className="minimal-card p-3 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30 rounded-2xl">
              <div className="text-sm sm:text-2xl lg:text-3xl font-black font-mono text-amber-400 tracking-tight whitespace-nowrap">{clipsCount.toLocaleString()}+</div>
              <div className="text-[8px] sm:text-xs font-medium mt-0.5 text-slate-300 leading-tight">AI Clips Generated</div>
            </div>

            <div className="minimal-card p-3 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 rounded-2xl">
              <div className="text-base sm:text-2xl lg:text-3xl font-black font-mono text-cyan-400 tracking-tight">{langCount}+</div>
              <div className="text-[8px] sm:text-xs font-medium mt-0.5 text-slate-300 leading-tight">Global Voice Languages</div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}