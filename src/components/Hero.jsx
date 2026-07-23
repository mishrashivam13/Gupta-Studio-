import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, Play, Globe2, Clapperboard } from 'lucide-react';
import herovideo from "../assets/Collage Animation_1080p.mp4";

function useCountUp(end, isVisible, duration = 1400) {
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

  const reveal = (delay) =>
    `transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`;
  const revealStyle = (delay) => ({ transitionDelay: `${delay}ms` });

  return (
    <section className="relative overflow-hidden bg-[#0B0B0E]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap');

        .gse-display {
          font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
          letter-spacing: 0.02em;
        }
        .gse-body {
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Film sprocket strip — the signature element */
        .sprocket-strip {
          display: flex;
          align-items: center;
          gap: 14px;
          overflow: hidden;
        }
        .sprocket-strip::before,
        .sprocket-strip::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,162,39,0.55), transparent);
        }
        .sprocket-hole {
          width: 5px;
          height: 8px;
          border-radius: 1.5px;
          background: rgba(201,162,39,0.9);
          flex-shrink: 0;
          animation: sprocketPulse 3.2s ease-in-out infinite;
        }
        .sprocket-hole:nth-child(odd) { animation-delay: 0.4s; }
        @keyframes sprocketPulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }

        /* Subtle film grain over the whole hero */
        .grain::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 5;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .letterbox-bar {
          background: #0B0B0E;
        }

        @media (prefers-reduced-motion: reduce) {
          .sprocket-hole { animation: none !important; opacity: 0.8; }
        }
      `}</style>

      {/* Letterbox bars — cinema aspect-ratio framing */}
      <div className="letterbox-bar h-3 sm:h-5 w-full relative z-20" />

      <div className="grain relative pt-14 pb-10 md:pt-20 md:pb-16 min-h-screen flex flex-col justify-center items-center">

        {/* Background video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
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
              mounted ? 'scale-105 opacity-45' : 'scale-110 opacity-0'
            }`}
          >
            <source src={herovideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0E]/90 via-[#0B0B0E]/70 to-[#0B0B0E]/95" />
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center gse-body">

          {/* Studio ident eyebrow */}
          <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/[0.06] text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#C9A227] uppercase mb-6 ${reveal(0)}`} style={revealStyle(0)}>
            <Clapperboard className="w-3.5 h-3.5" />
            Gupta Studio Entertainment
          </div>

          {/* Headline in display face */}
          <h1 className={`gse-display text-[2.6rem] sm:text-6xl lg:text-7xl leading-[0.95] text-[#F2EFE9] mb-5 ${reveal(100)}`} style={revealStyle(100)}>
            Short Drama Content.<br />
            <span className="text-[#1FD1C4]">AI-Produced Cinema.</span>
          </h1>

          <p className={`gse-body text-sm sm:text-lg leading-relaxed max-w-xl mx-auto text-[#B8B6BC] mb-8 ${reveal(180)}`} style={revealStyle(180)}>
            We write, shoot, and supply premium short-drama series — and build studio-grade
            AI film & VFX production clips for partners who need scale without a studio.
          </p>

          {/* Sprocket-strip signature divider */}
          <div className={`sprocket-strip max-w-xs mx-auto mb-8 ${reveal(220)}`} style={revealStyle(220)}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="sprocket-hole" />
            ))}
          </div>

          {/* Actions */}
          <div className={`flex flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto mb-12 ${reveal(280)}`} style={revealStyle(280)}>
            <button
              onClick={onOpenContact}
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 rounded-md font-semibold text-[#0B0B0E] bg-[#C9A227] hover:bg-[#DBB640] transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              Get Short Drama Content
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="#vfx-gallery"
              className="flex-1 sm:flex-none px-6 sm:px-8 py-3.5 rounded-md font-semibold border border-white/15 text-[#F2EFE9] hover:border-[#1FD1C4]/60 hover:bg-white/[0.03] transition-colors duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <Play className="w-3.5 h-3.5 text-[#1FD1C4]" />
              Watch AI Movie Reel
            </a>
          </div>

          {/* Stats — framed like production credits */}
          <div ref={statsRef} className={`pt-8 border-t border-white/10 ${reveal(340)}`} style={revealStyle(340)}>
            <div className="grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="gse-display text-2xl sm:text-4xl text-[#F2EFE9]">{seriesCount}+</div>
                <div className="text-[9px] sm:text-xs font-medium mt-1 text-[#7A7A82] uppercase tracking-wider">Drama Series</div>
              </div>
              <div className="text-center">
                <div className="gse-display text-2xl sm:text-4xl text-[#C9A227]">{clipsCount.toLocaleString()}+</div>
                <div className="text-[9px] sm:text-xs font-medium mt-1 text-[#7A7A82] uppercase tracking-wider">AI Clips Generated</div>
              </div>
              <div className="text-center">
                <div className="gse-display text-2xl sm:text-4xl text-[#1FD1C4]">{langCount}+</div>
                <div className="text-[9px] sm:text-xs font-medium mt-1 text-[#7A7A82] uppercase tracking-wider flex items-center justify-center gap-1">
                  <Globe2 className="w-3 h-3" /> Languages
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="letterbox-bar h-3 sm:h-5 w-full relative z-20" />
    </section>
  );
}