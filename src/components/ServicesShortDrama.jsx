import React from 'react';
import { Clapperboard, FileText, Film, Languages, Shield, Scissors, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ServicesShortDrama({ onOpenContact }) {
  const dramaServices = [
    {
      icon: <Clapperboard className="w-6 h-6 text-blue-600" />,
      title: 'Episodic Short Drama Content',
      description: 'High-volume vertical short drama video content ready for streaming (Billionaire Romance, CEO Revenge, Suspense, and AI Sci-Fi series).',
      features: ['Vertical 9:16 Format', 'High Engagement Hooks', 'Ready-to-Stream Files', 'HD & 4K Master Cuts']
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Scriptwriting & Story Breaking',
      description: 'Custom screenplay writing, episode story breaking, cliffhanger structuring, and script adaptation tailored for micro-drama platforms.',
      features: ['Episodic Cliffhangers', 'Screenplay Adaptation', 'Character Bios', 'Multilingual Scripts']
    },
    {
      icon: <Film className="w-6 h-6 text-blue-600" />,
      title: 'Micro-Series Licensing & Supply',
      description: 'Exclusive and non-exclusive content licensing packages supplying 50+ complete drama series directly to OTT platforms and creators.',
      features: ['Exclusive IP Rights', 'Batch Series Supply', 'Global Distribution', 'Flexible Royalties']
    },
    {
      icon: <Languages className="w-6 h-6 text-blue-500" />,
      title: 'AI Voice Dubbing & Localized SRT',
      description: 'Globalize your short drama video content with automated AI voice actor dubbing and synchronized subtitles in 25+ languages.',
      features: ['25+ Voice Languages', 'AI Lip-Sync Matching', 'Automated SRT Files', 'Cultural Tone Tuning']
    },
    {
      icon: <Scissors className="w-6 h-6 text-blue-600" />,
      title: 'Post-Production & Video Editing',
      description: 'Professional color grading, audio mastering, sound effect design, fast-paced editing, and teaser trailer creation.',
      features: ['Fast-Paced Editing', 'Color Grading (LUTs)', 'Sound Design & Score', 'Promo Teaser Clips']
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Content DRM & Copyright Security',
      description: 'Bank-grade encryption, AES DRM video protection, dynamic user watermarking, and anti-piracy tracking for original video IP.',
      features: ['AES DRM Encryption', 'Dynamic Watermarks', 'Copyright Protection', 'Anti-Piracy Monitoring']
    }
  ];

  return (
    <section id="short-drama" className="py-24 relative border-t border-slate-100 bg-[#f8fafc]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Clapperboard className="w-3.5 h-3.5" /> Content Supply Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Short Drama <span className="text-blue-600">Content & Production</span> Services
          </h2>
          <p className="text-base sm:text-lg text-slate-650 font-normal">
            Complete short drama video content supply, screenplays, and post-production services engineered to engage viewers and drive high retention.
          </p>
        </div>

        {/* Minimalist Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dramaServices.map((service, index) => (
            <div
              key={index}
              className="minimal-card p-7 flex flex-col justify-between reveal-scale-up group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-slate-600">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Banner */}
        <div className="mt-16 rounded-3xl p-8 border border-slate-200 bg-white flex flex-col lg:flex-row items-center justify-between gap-6 reveal-fade-up shadow-sm">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Premium Content Licensing</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Need Original Short Drama Content for Your Platform?
            </h3>
            <p className="text-sm max-w-2xl text-slate-300">
              Gupta Studio supplies ready-to-stream short drama video series, scripts, and dubbing tracks tailored for global OTT platforms and content creators.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="px-6 py-3.5 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 shrink-0 flex items-center gap-2 shadow-md shadow-blue-500/10 cursor-pointer transition-transform hover:-translate-y-0.5"
          >
            <span>Get Content Catalog & Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}