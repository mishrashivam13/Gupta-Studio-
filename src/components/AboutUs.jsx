import React from 'react';
import { Award, ShieldCheck, Zap, Users, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutUs({ onOpenContact }) {
  const stats = [
    { label: 'Short Drama Series Supplied', val: '500+' },
    { label: 'AI Video Shots Rendered', val: '10,000+' },
    { label: 'Global Dubbing Languages', val: '25+' },
    { label: 'Video Stream Uptime Standard', val: '99.9%' },
  ];

  const pillars = [
    {
      title: 'High-Volume Content Production',
      desc: 'Episodic vertical short drama series, screenplay writing, and ready-to-stream video packages.'
    },
    {
      title: 'Studio AI Film Pipelines',
      desc: 'Custom neural LoRA model training, actor facial consistency, and high-octane 4K AI visual effects rendering.'
    },
    {
      title: 'End-to-End Content Supply',
      desc: 'Full screenplay creation, episodic script breaking, automated AI voice dubbing, and ready-to-stream video content.'
    },
    {
      title: 'Enterprise Security & DRM',
      desc: 'AES-128 DRM stream encryption, screen recording protection, and dynamic user watermarking to protect original IP.'
    }
  ];

  return (
    <section id="about-us" className="py-24 relative border-t border-[#181a28] bg-[#050508]">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121422] border border-[#22263d] text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4" /> About Gupta Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Pioneering <span className="font-cursive text-amber-400 text-4xl sm:text-5xl lg:text-6xl font-normal">Next-Gen Media Tech</span> & AI Film
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Gupta Studio is a global technology and media production studio supplying short drama series, film scripts, and AI video clips worldwide.
          </p>
        </div>

        {/* Story & Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Studio Narrative */}
          <div className="lg:col-span-6 space-y-6 reveal-slide-left">
            <div className="studio-card p-8 shadow-2xl">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                <Globe2 className="w-4 h-4 text-cyan-400" /> Global Footprint • India, Hong Kong, USA
              </span>
              <h3 className="text-2xl font-extrabold mb-4 text-white">
                Empowering Global Short Drama & AI Content Creation
              </h3>
              <p className="text-sm leading-relaxed mb-4 text-slate-300">
                With the explosive global demand for vertical short drama series, Gupta Studio provides the complete production pipeline and AI generative video workflows required to create high-retention video content.
              </p>
              <p className="text-sm leading-relaxed text-slate-300">
                Our hybrid studio combines experienced screenwriters and video directors with cutting-edge AI generative video tools, enabling 10x faster turnaround at a fraction of traditional Hollywood budgets.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="studio-card p-5">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">{s.val}</div>
                  <div className="text-xs font-bold mt-1 text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Pillars */}
          <div className="lg:col-span-6 space-y-4 reveal-slide-right">
            {pillars.map((p, idx) => (
              <div key={idx} className="studio-card p-6 flex items-start gap-4 hover:border-cyan-500/50">
                <div className="p-2.5 rounded-xl bg-[#141624] border border-[#22263d] text-amber-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-white">
                    {p.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
