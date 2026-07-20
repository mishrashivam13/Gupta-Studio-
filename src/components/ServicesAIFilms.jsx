import React from 'react';
import { Video, Film, Sparkles, Cpu, Wand2, CheckCircle } from 'lucide-react';

export default function ServicesAIFilms({ theme, onOpenContact }) {
  const aiFilmServices = [
    {
      icon: <Video className="w-6 h-6 text-cyan-500" />,
      title: 'AI Film & TV Production',
      description: 'AI-native production pipeline delivering high-volume, broadcast-grade film and series content. Produced over 10,000+ AI-generated shots across genres.',
      highlights: ['Script-to-Screen AI', '4K Cinematic Output', 'Broadcast Compliance', 'Rapid Episode Delivery']
    },
    {
      icon: <Film className="w-6 h-6 text-amber-500" />,
      title: 'AI Movie Studio Operations',
      description: 'Studio-grade environment managing schedules, editorial oversight, character consistency, and full delivery specifications for streaming networks and studios.',
      highlights: ['Character Continuity', 'Editorial Supervision', 'Multi-Camera AI Framing', 'Color & Sound Master']
    },
    {
      icon: <Wand2 className="w-6 h-6 text-purple-500" />,
      title: 'Generative AI VFX & Post-Production',
      description: 'Integrating advanced AI visual effects into traditional VFX pipelines. Shots maintain lighting, camera tracking, and cut seamlessly with live action.',
      highlights: ['AI Matte Painting', 'Digital Environment FX', 'Generative De-aging', 'Complex CGI Replacement']
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-500" />,
      title: 'Bespoke AI Pipeline Design',
      description: 'We design and construct tailored AI pipelines for studios, production teams, and agencies to accelerate their creative post-production workflow.',
      highlights: ['Custom Workflow Build', 'Rights & IP Management', 'Model Fine-Tuning', 'Studio Team Training']
    }
  ];

  return (
    <section id="ai-films" className={`py-24 relative border-t ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-init">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Cinema
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            Studio-Grade <span className="text-gradient-cyan">AI Film Production</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            Combining classical cinematic craftsmanship with cutting-edge generative AI models to produce broadcast-ready movies, trailers, and series at cinematic scale.
          </p>
        </div>

        {/* 2x2 Big Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {aiFilmServices.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 border border-slate-800/90 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1.5 group reveal-init"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                  theme === 'light' ? 'bg-slate-100 border border-slate-200' : 'bg-slate-900 border border-slate-800'
                }`}>
                  {service.icon}
                </div>
                <span className="text-xs font-mono text-cyan-500 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30">
                  PIPELINE 4.0
                </span>
              </div>

              <h3 className={`text-2xl font-bold mb-3 group-hover:text-cyan-500 transition-colors ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                {service.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                {service.description}
              </p>

              <div className={`grid grid-cols-2 gap-2 border-t pt-5 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800/80'}`}>
                {service.highlights.map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-2 text-xs font-medium ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Tech Stack Marquee */}
        <div className="mt-16 text-center space-y-4 reveal-init">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Powered By Studio-Grade Generative AI Tech Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
            {['Runway Gen-3 Alpha', 'Midjourney v6', 'Kling AI Studio', 'ElevenLabs Voice Engine', 'OpenAI Sora Integration', 'ComfyUI Bespoke Workflows', 'Unreal Engine 5.4'].map((tech, i) => (
              <span key={i} className={`px-4 py-2 rounded-xl border transition-colors ${
                theme === 'light' ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-slate-900/90 border-slate-800 text-slate-300'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
