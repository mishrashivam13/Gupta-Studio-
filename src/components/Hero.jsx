import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ChevronRight, Video, Smartphone, Globe } from 'lucide-react';

// Counts a number up from 0 to `end` once it enters view, and eases out near the finish
function useCountUp(end, isVisible, duration = 1400) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      setValue(Math.round(end * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, end, duration]);

  return value;
}

export default function Hero({ theme, onOpenContact }) {
  const videoRef = useRef(null);
  const statsRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  // Orchestrated entrance: badge -> headline -> subtext -> pills -> CTAs -> stats
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  // Trigger the stat counters only once they actually scroll into view
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

  const dramaCount = useCountUp(50, statsVisible);
  const shotsCount = useCountUp(10000, statsVisible);
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

  // Stagger helper: each element rises + fades in on its own delay after mount
  const reveal = (delayMs, extra = '') =>
    `transition-all duration-700 ease-out ${extra} ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;
  const revealStyle = (delayMs) => ({ transitionDelay: `${delayMs}ms` });

  return (
    <section className={`relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden min-h-[95vh] flex flex-col justify-start md:justify-center items-center ${theme === 'light' ? 'hero-light' : ''}`}>

      <style>{`
        @keyframes orbFloatA {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-46%, -54%) scale(1.08); }
        }
        @keyframes orbFloatB {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-54%, -3%) scale(1.05); }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        @keyframes gridDrift {
          0% { background-position: 0 0; }
          100% { background-position: 4rem 4rem; }
        }
        .cta-shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%; height: 100%;
          background: linear-gradient(115deg, transparent, rgba(255,255,255,0.55), transparent);
          animation: shimmerSweep 2.8s ease-in-out infinite;
          animation-delay: 1.2s;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-shimmer::after,
          .orb-a, .orb-b, .grid-drift, .badge-spin {
            animation: none !important;
          }
        }
      `}</style>

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
          className={`w-full h-full object-cover transition-all duration-[1400ms] ease-out ${
            mounted ? 'scale-105 opacity-90' : 'scale-110 opacity-0'
          } ${theme === 'light' ? 'brightness-100 contrast-110 saturate-110' : 'brightness-110 contrast-110'}`}
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

      {/* Luminous Glowing Ambient Orbs — now drifting, not just pulsing in place */}
      <div
        className="orb-a absolute top-1/2 left-1/2 w-[750px] h-[750px] bg-amber-500/15 rounded-full blur-[170px] pointer-events-none"
        style={{ animation: 'orbFloatA 9s ease-in-out infinite' }}
      />
      <div
        className="orb-b absolute top-1/3 left-1/2 w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"
        style={{ animation: 'orbFloatB 11s ease-in-out infinite' }}
      />

      {/* Grid Pattern Overlay — slow drift adds depth without being loud */}
      <div
        className="grid-drift absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none"
        style={{ animation: 'gridDrift 18s linear infinite' }}
      />

      {/* Centered Content Container */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10 text-center space-y-8">

        {/* Top Studio Badge */}
        {/* <div
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xl backdrop-blur-md ${reveal(0)} ${
            theme === 'light'
              ? 'bg-slate-950/70 border-white/25 text-amber-300 shadow-black/30'
              : 'bg-slate-950/85 border-amber-500/50 text-amber-400 shadow-amber-500/20'
          }`}
          style={revealStyle(0)}
        >
          <Sparkles className="badge-spin w-4 h-4 text-amber-500" style={{ animation: 'spin 8s linear infinite' }} />
          <span>NEXT-GEN ENTERTAINMENT & MEDIA TECHNOLOGY</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        </div> */}

        {/* Headline + Subtext */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1
            className={`text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] ${reveal(120)}`}
            style={revealStyle(120)}
          >
            Powering <span className="text-gradient-gold">Short Drama Content</span> & <span className="text-gradient-cyan">AI Film Studios</span>
          </h1>

          <p
            className={`text-base sm:text-xl lg:text-2xl font-normal leading-relaxed max-w-3xl mx-auto drop-shadow-md ${reveal(240)} ${
              theme === 'light' ? 'text-slate-100 font-semibold' : 'text-slate-200'
            }`}
            style={revealStyle(240)}
          >
            Gupta Studio Entertainment delivers end-to-end content solutions for compelling <span className="font-bold text-amber-500">Short Drama Series</span>, AI films, VFX and multilingual dubbing.
          </p>
        </div>

        {/* Service Pillars Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-200">
          {[
            { icon: Smartphone, color: 'text-amber-500', label: 'Short Drama Content Production' },
            { icon: Video, color: 'text-cyan-500', label: 'Studio-Grade AI Movies & VFX' },
            { icon: Globe, color: 'text-emerald-500', label: 'Global AI Localization & Dubbing' },
          ].map(({ icon: Icon, color, label }, i) => (
            <span
              key={label}
              className={`flex items-center gap-2 px-4.5 py-2.5 rounded-xl border backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 ${reveal(
                360 + i * 90
              )} ${theme === 'light' ? 'bg-slate-950/70 border-white/25 text-white' : 'bg-slate-950/85 border-slate-800 text-slate-200'}`}
              style={revealStyle(360 + i * 90)}
            >
              <Icon className={`w-4.5 h-4.5 ${color}`} /> {label}
            </span>
          ))}
        </div>

        {/* Action Buttons — stay side-by-side even on small phones */}
        <div className={`flex flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md mx-auto pt-2 ${reveal(700)}`} style={revealStyle(700)}>
          <a
            href="#short-drama"
            className="cta-shimmer relative overflow-hidden flex-1 sm:flex-none px-4 sm:px-9 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-2xl shadow-amber-500/35 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-base cursor-pointer transform hover:-translate-y-1 hover:shadow-amber-500/50 active:translate-y-0 active:duration-100 whitespace-nowrap"
          >
            <span>Explore Content Services</span>
            <ChevronRight className="hidden sm:block w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#ai-films"
            className={`flex-1 sm:flex-none px-4 sm:px-9 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold border transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-base cursor-pointer shadow-xl hover:-translate-y-1 whitespace-nowrap ${
              theme === 'light'
                ? 'bg-slate-950/70 border-white/30 text-white hover:border-amber-400 hover:bg-slate-900/90'
                : 'glass-panel border-slate-700/80 text-slate-100 hover:border-cyan-400'
            }`}
          >
            <Video className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 shrink-0" />
            <span>AI Film Services</span>
          </a>
        </div>

        {/* Key Stats Bar — counts up once it scrolls into view */}
        <div
          ref={statsRef}
          className={`pt-10 max-w-4xl mx-auto grid grid-cols-3 gap-2.5 sm:gap-8 border-t border-slate-800/80 ${reveal(820)}`}
          style={revealStyle(820)}
        >
          <div className={`px-2 py-4 sm:p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-xl sm:text-4xl font-black font-mono text-white leading-tight">{dramaCount}+</div>
            <div className="text-[11px] sm:text-sm font-medium mt-1 text-slate-200">Short Drama Series</div>
          </div>

          <div className={`px-2 py-4 sm:p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-lg sm:text-4xl font-black text-amber-500 font-mono leading-tight whitespace-nowrap">{shotsCount.toLocaleString()}+</div>
            <div className="text-[11px] sm:text-sm font-medium mt-1 text-slate-200">AI Video Shots Produced</div>
          </div>

          <div className={`px-2 py-4 sm:p-4 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 ${
            theme === 'light' ? 'bg-slate-950/65 border-white/20 shadow-lg shadow-black/20' : 'glass-panel border-slate-800 bg-slate-950/85'
          }`}>
            <div className="text-xl sm:text-4xl font-black text-cyan-500 font-mono leading-tight">{langCount}+</div>
            <div className="text-[11px] sm:text-sm font-medium mt-1 text-slate-200">Global Voice Languages</div>
          </div>
        </div>

      </div>

    </section>
  );
}