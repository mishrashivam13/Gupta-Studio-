import React, { useRef, useEffect, useState } from 'react';
import {
  PenTool,
  Users,
  Video,
  Wand2,
  Languages,
  Coins,
  Share2,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Clapperboard,
  Play,
} from 'lucide-react';

// Fires once when the element scrolls into view, then stays visible (no re-hiding on scroll away)
function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

// Tracks pointer position over a card for a subtle 3D tilt + spotlight
function useTilt() {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const onMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    const rotateX = (0.5 - py) * 8;
    const rotateY = (px - 0.5) * 8;
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`,
      '--spot-x': `${px * 100}%`,
      '--spot-y': `${py * 100}%`,
      '--spot-opacity': 1,
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      '--spot-opacity': 0,
    });
  };

  return { ref, style, onMouseMove, onMouseLeave };
}

export default function ServicesShortDrama({ theme, onOpenContact }) {
  // The production pipeline, in the order episodes actually move through the studio.
  const dramaServices = [
    {
      icon: <PenTool className="w-6 h-6 text-rose-400" />,
      accent: 'rose',
      step: '01',
      title: 'Script & Episode Writing',
      description: 'High-retention vertical drama scripts built for the 60-90 second cliffhanger format — story bibles, episode breakdowns, and dialogue tuned for binge-watch pacing.',
      features: ['Story Bible & Arcs', 'Cliffhanger Episode Structure', 'Genre-Tuned Dialogue', 'Trend-Responsive Rewrites'],
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      accent: 'amber',
      step: '02',
      title: 'Casting & Talent Direction',
      description: 'End-to-end casting for leads and supporting roles, on-set talent direction, and a growing bench of vertical-drama-ready performers across languages and markets.',
      features: ['Lead & Supporting Casting', 'On-Set Talent Direction', 'Multi-Market Talent Pool', 'Chemistry Read Sessions'],
    },
    {
      icon: <Video className="w-6 h-6 text-cyan-400" />,
      accent: 'cyan',
      step: '03',
      title: 'Filming & Cinematography',
      description: 'Full production crews and vertical-first cinematography, shooting fast without sacrificing the cinematic look that keeps viewers watching past episode one.',
      features: ['Vertical-First Shooting', 'Multi-City Production Crews', 'Rapid Shoot Schedules', 'On-Location & Studio Sets'],
    },
    {
      icon: <Wand2 className="w-6 h-6 text-purple-400" />,
      accent: 'purple',
      step: '04',
      title: 'Post-Production & VFX',
      description: 'Color grading, sound design, and visual effects finished to a broadcast-grade standard, delivered as publish-ready vertical episodes on your release schedule.',
      features: ['Color Grade & Sound Design', 'Visual Effects & Compositing', 'Episode Batch Delivery', 'Broadcast-Grade Finishing'],
    },
    {
      icon: <Languages className="w-6 h-6 text-emerald-400" />,
      accent: 'emerald',
      step: '05',
      title: 'AI Multilingual Dubbing & Subtitles',
      description: 'Take a single production global with lip-synced AI dubbing and culturally adapted subtitles in 25+ languages, without re-shooting a single scene.',
      features: ['Lip-Sync Matched Dubbing', '25+ Voice Languages', 'Cultural Localization', 'Auto Subtitle Generation'],
    },
    {
      icon: <Coins className="w-6 h-6 text-yellow-400" />,
      accent: 'yellow',
      step: '06',
      title: 'Episode Monetization Strategy',
      description: 'Coin-unlock pricing, VIP tiering, and release-cadence planning designed around real viewer drop-off data to maximize revenue per series.',
      features: ['Coin-Unlock Pricing Models', 'VIP & Subscription Tiers', 'Release Cadence Planning', 'Revenue-Per-Series Forecasting'],
    },
    {
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      accent: 'blue',
      step: '07',
      title: 'Content Distribution & Publishing',
      description: 'Episode delivery and rollout across your platforms and third-party short-drama networks, with metadata, thumbnails, and hooks built for discovery.',
      features: ['Multi-Platform Rollout', 'Discovery-Optimized Metadata', 'Thumbnail & Hook Testing', 'Release Calendar Management'],
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      accent: 'red',
      step: '08',
      title: 'DRM & Anti-Piracy Protection',
      description: 'Bank-grade encryption, dynamic watermarking, and takedown support that keeps pirated re-uploads from cutting into your series revenue.',
      features: ['AES-128 DRM Encryption', 'Dynamic Viewer Watermarks', 'Piracy Monitoring', 'Takedown Support'],
    },
  ];

  const [headerRef, headerVisible] = useReveal(0.3);
  const [bannerRef, bannerVisible] = useReveal(0.2);
  const [reelOffset, setReelOffset] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReelOffset((o) => (o + 1) % 1000), 40);
    return () => clearInterval(id);
  }, []);

  const isLight = theme === 'light';

  return (
    <section
      id="short-drama"
      className={`py-24 relative border-t overflow-hidden ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800/60'}`}
    >
      <style>{`
        @keyframes floatGlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.06); }
        }
        @keyframes floatGlowSlow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.1); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes filmScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .service-card {
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(251,191,36,0.14), transparent 60%);
          opacity: var(--spot-opacity, 0);
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .step-badge {
          font-variant-numeric: tabular-nums;
          background: linear-gradient(135deg, rgba(251,191,36,0.16), rgba(251,191,36,0.02));
          -webkit-background-clip: text;
          background-clip: text;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #fbbf24 0%, #fde68a 25%, #fbbf24 50%, #fde68a 75%, #fbbf24 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shimmer 6s linear infinite;
        }
        .film-strip {
          display: flex;
          animation: filmScroll 22s linear infinite;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) {
          .service-card, .section-header, .banner-reveal {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .shimmer-text { animation: none; color: #fbbf24; }
          .film-strip { animation: none; }
        }
      `}</style>

      {/* Ambient background glows */}
      <div
        className="absolute top-10 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"
        style={{ animation: 'floatGlow 10s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-rose-500/10 rounded-full blur-[160px] pointer-events-none"
        style={{ animation: 'floatGlowSlow 13s ease-in-out infinite' }}
      />

      {/* Scrolling film-strip divider */}
      <div className={`relative w-full overflow-hidden py-3 mb-16 border-y ${isLight ? 'border-slate-200 bg-white/60' : 'border-slate-800/60 bg-black/30'}`}>
        <div className="film-strip">
          {[...Array(2)].map((_, dupe) => (
            <div key={dupe} className="flex items-center gap-10 pr-10 shrink-0">
              {['Script', 'Cast', 'Film', 'Edit', 'Dub', 'Monetize', 'Publish', 'Protect'].map((word) => (
                <span key={word + dupe} className={`text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 ${isLight ? 'text-slate-400' : 'text-slate-600'}`}>
                  <Play className="w-3 h-3 text-amber-500 fill-amber-500" /> {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          ref={headerRef}
          className={`section-header text-center max-w-3xl mx-auto space-y-4 mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400" style={{ animation: 'pulseDot 1.8s ease-in-out infinite' }} />
            </span>
            The Full Short Drama Pipeline
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>
            From Script to Screen: <span className="shimmer-text">Short Drama Production Services</span>
          </h2>
          <p className={`text-base sm:text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Gupta Studio Entertainment writes, casts, films, and finishes vertical short dramas — then dubs, monetizes, and distributes every episode globally.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dramaServices.map((service, index) => (
            <ServiceCard key={service.title} service={service} theme={theme} delay={(index % 4) * 100} index={index} />
          ))}
        </div>

        {/* Reference Highlight Banner */}
        <div
          ref={bannerRef}
          className={`banner-reveal mt-16 rounded-2xl relative overflow-hidden p-8 border flex flex-col lg:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-900/70 border-slate-800'
          } ${bannerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div
            className="absolute -top-16 -right-16 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"
            style={{ animation: 'floatGlow 8s ease-in-out infinite' }}
          />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest inline-flex items-center gap-2 justify-center lg:justify-start">
              <Clapperboard className="w-3.5 h-3.5" /> From Concept to Global Release
            </span>
            <h3 className={`text-xl sm:text-2xl font-extrabold ${isLight ? 'text-slate-900' : 'text-white'}`}>
              Ready to Produce Your Next Hit Vertical Drama?
            </h3>
            <p className={`text-sm max-w-2xl ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
              Gupta Studio Entertainment writes, shoots, and finishes original short drama series — built to travel across languages, platforms, and audiences.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="relative z-10 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shrink-0 flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer hover:-translate-y-0.5 hover:shadow-amber-500/40 active:translate-y-0 group"
          >
            <span>Pitch Your Drama Series</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, theme, delay, index }) {
  const [ref, visible] = useReveal(0.15);
  const tilt = useTilt();
  const isLight = theme === 'light';

  const direction = index % 4;
  const hiddenTransform =
    direction === 0 ? '-translate-x-8 opacity-0 rotate-[-2deg]' :
    direction === 3 ? 'translate-x-8 opacity-0 rotate-[2deg]' :
    'translate-y-10 opacity-0';

  const setRefs = (node) => {
    ref.current = node;
    tilt.ref.current = node;
  };

  return (
    <div
      ref={setRefs}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`service-card rounded-2xl p-6 transition-all duration-700 ease-out group flex flex-col justify-between border ${
        isLight ? 'bg-white border-slate-200 hover:border-amber-300' : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/40'
      } ${visible ? 'translate-x-0 translate-y-0 rotate-0 opacity-100' : hiddenTransform}`}
      style={{
        transitionDelay: visible ? `${delay}ms` : '0ms',
        ...tilt.style,
      }}
    >
      <div>
        <div className="flex items-start justify-between mb-5">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ${
            isLight ? 'bg-slate-100 border border-slate-200' : 'bg-slate-950 border border-slate-800'
          }`}>
            {service.icon}
          </div>
          <span className={`step-badge text-3xl font-black leading-none ${isLight ? 'opacity-70' : ''}`}>
            {service.step}
          </span>
        </div>
        <h3 className={`text-lg font-bold mb-2.5 group-hover:text-amber-400 transition-colors ${isLight ? 'text-slate-900' : 'text-white'}`}>
          {service.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          {service.description}
        </p>
      </div>

      <div>
        <div className={`space-y-2 border-t pt-4 ${isLight ? 'border-slate-200' : 'border-slate-800/80'}`}>
          {service.features.map((feat) => (
            <div key={feat} className={`flex items-center gap-2 text-xs font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}