import React from 'react';
import { Smartphone, Globe, DollarSign, Languages, Shield, Layout, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesShortDrama({ theme, onOpenContact }) {
  const dramaServices = [
    {
      icon: <Smartphone className="w-6 h-6 text-amber-500" />,
      title: 'Short Drama Mobile Apps',
      description: 'Custom native and cross-platform apps (iOS & Android) designed for high-engagement vertical video scrolling, instant loading, and seamless user navigation.',
      features: ['Vertical Reel Feed', 'Instant HLS Streaming', 'Push Notifications', 'Offline Caching']
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-500" />,
      title: 'Short Drama Web Streaming Portals',
      description: 'Comprehensive web platforms allowing viewers to watch, pay, and subscribe directly from desktop and mobile browsers with zero app install required.',
      features: ['Responsive Web App', 'PWA Support', 'SEO Optimized Pages', 'Deep Linking']
    },
    {
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
      title: 'Micro-Payment & Coin Monetization',
      description: 'Built-in coin store, per-episode unlock fees, auto-renewing subscriptions, rewarded ad video integration, and global payment gateways (Stripe, Apple Pay, Google Pay).',
      features: ['Coin Purchase Bundles', 'VIP Subscription Tiers', 'Ad-Unlock Rewards', 'Multi-Currency']
    },
    {
      icon: <Languages className="w-6 h-6 text-purple-500" />,
      title: 'AI Multilingual Dubbing & Subtitles',
      description: 'Expand your short dramas globally with automated AI subtitle translation and emotional AI voice actor dubbing in 25+ languages.',
      features: ['Lip-Sync Matching', '25+ Voice Languages', 'Auto SRT Generation', 'Cultural Adaptation']
    },
    {
      icon: <Layout className="w-6 h-6 text-rose-500" />,
      title: 'CMS & Analytics Dashboard',
      description: 'Centralized admin panel to upload drama episodes, set pricing rules, track viewer retention, conversion rates, and revenue metrics in real-time.',
      features: ['Episode Batch Upload', 'Episode Drop-off Rate', 'A/B Testing Tools', 'Revenue Analytics']
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'DRM & Anti-Piracy Protection',
      description: 'Bank-grade encryption, AES DRM video protection, dynamic user watermarking, and screen recording protection to safeguard original drama IP.',
      features: ['AES-128 DRM', 'Dynamic Watermarks', 'Screen Capture Block', 'Geo-Blocking']
    }
  ];

  return (
    <section id="short-drama" className={`py-24 relative border-t ${theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/60 border-slate-800/60'}`}>
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Fade Up) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> Turnkey Platform Solution
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            Short Drama <span className="text-gradient-gold">Apps & Web Services</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            Complete technological ecosystem to launch, scale, and monetize short-form drama platforms worldwide — engineered for maximum viewer retention and recurring revenue.
          </p>
        </div>

        {/* Services Grid (Alternate Left / Right / Up animations) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dramaServices.map((service, index) => {
            const animClass = index % 3 === 0 ? 'reveal-slide-left' : index % 3 === 1 ? 'reveal-fade-up' : 'reveal-slide-right';
            return (
              <div
                key={index}
                className={`glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between ${animClass}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    theme === 'light' ? 'bg-slate-100 border border-slate-200' : 'bg-slate-900 border border-slate-800'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className={`space-y-2 border-t pt-4 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/80'}`}>
                    {service.features.map((feat, i) => (
                      <div key={i} className={`flex items-center gap-2 text-xs font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reference Highlight Banner (Scale Up) */}
        <div className="mt-16 rounded-2xl glass-panel p-8 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 reveal-scale-up">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Global Industry Standard</span>
            <h3 className={`text-xl sm:text-2xl font-extrabold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              Ready to Launch Your Own ReelShort or DramaBox Alternative?
            </h3>
            <p className={`text-sm max-w-2xl ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
              Gupta Studio Entertainment builds enterprise-grade apps and platforms tailored for production houses, content creators, and media investors.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 flex items-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <span>Request App Demo & Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
