import React from 'react';
import { Film, Award, Globe, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function AboutUs({ theme, onOpenContact }) {
  return (
    <section id="about-us" className={`py-24 relative border-t ${theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/90 border-slate-800'}`}>
      
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Studio Heritage
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            About <span className="text-gradient-gold">Gupta Studio Entertainment</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            We are a global entertainment technology & production agency bridging traditional cinematic storytelling with cutting-edge AI pipelines and short-form video streaming ecosystems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Studio Narrative */}
          <div className="lg:col-span-6 space-y-6 reveal-init">
            <div className="space-y-3">
              <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Pioneering Next-Gen Media</span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                Empowering Creators & Studios with AI & Short Drama Technology
              </h3>
              <p className={`text-sm leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                Founded with a vision to revolutionize digital entertainment, Gupta Studio Entertainment specializes in building turnkey vertical short drama platforms (similar to ReelShort and DramaBox) alongside studio-grade AI movie production workflows.
              </p>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'light' ? 'text-slate-500' : 'text-slate-400'}`}>
                From script development to AI character training, automated multilingual dubbing in 25+ languages, and mobile app release with integrated coin monetization, we manage the full creative and technical lifecycle.
              </p>
            </div>

            {/* Core Values / Pillar List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-xl border space-y-1.5 ${theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
                  <Zap className="w-4 h-4" /> Rapid Turnaround
                </div>
                <p className={`text-xs ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>Launch full short drama apps in under 3 weeks & AI trailers in days.</p>
              </div>

              <div className={`p-4 rounded-xl border space-y-1.5 ${theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" /> Bank-Grade Security
                </div>
                <p className={`text-xs ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>AES-128 DRM encryption and digital watermark protection for your original IP.</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 text-sm cursor-pointer"
              >
                Partner With Our Studio
              </button>
            </div>
          </div>

          {/* Right Column: Visual Card Grid */}
          <div className="lg:col-span-6 reveal-init">
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500 flex items-center justify-center">
                  <Film className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Short Drama Apps</h4>
                <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  Turnkey iOS, Android, and web streaming apps engineered for viral micro-drama series.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>AI Film Studio</h4>
                <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  Script-to-screen 4K generative AI production, character consistency, and broadcast VFX.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-500 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Global Reach</h4>
                <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  Neural AI voice dubbing and auto subtitles in 25+ international languages.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className={`text-lg font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>Proven Results</h4>
                <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  Supporting millions of app downloads and over 10,000+ AI shots produced worldwide.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
