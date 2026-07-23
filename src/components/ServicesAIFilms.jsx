import React from 'react';
import { Cpu, Film, Sparkles, Wand2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesAIFilms({ onOpenContact }) {
  const aiFilmServices = [
    {
      icon: <Film className="w-6 h-6 text-cyan-400" />,
      title: 'Full AI Generative Movies',
      description: 'Script-to-screen cinematic featurette production utilizing Runway Gen-3, Midjourney v6, and custom LoRA neural models for high consistency.',
      features: ['100% AI Generated Shots', 'Actor Facial Continuity', '4K Cinema Resolution', 'Orchestral Score Sync']
    },
    {
      icon: <Wand2 className="w-6 h-6 text-purple-400" />,
      title: 'AI War & Action Sequences',
      description: 'High-octane war battles at sea, explosions, stormy ocean visual effects, and intense action sequences created with generative AI.',
      features: ['Naval Warfare Battle Scenes', 'Stormy Ocean Simulations', 'Fiery Explosions & Smoke', 'Dynamic Camera FX']
    },
    {
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      title: 'Custom Actor LoRA Training',
      description: 'Training custom AI neural character weights to guarantee 100% identical facial features, clothing, and expressions across all movie scenes.',
      features: ['Custom Face Embeddings', 'Wardrobe Lock Technology', 'Expression Matching', 'Environment Anchoring']
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: 'Generative AI VFX & Compositing',
      description: 'Replacing green screen backgrounds with hyper-realistic AI environments, matte paintings, and 3D digital effects compositing.',
      features: ['AI Matte Painting', 'Background Replacement', '3D Scene Integration', 'Studio Color Grading']
    }
  ];

  return (
    <section id="ai-films" className="py-24 relative border-t border-[#181a28] bg-[#050508]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121422] border border-[#22263d] text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen AI Cinema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            AI Film & <span className="font-cursive text-cyan-400 text-4xl sm:text-5xl lg:text-6xl font-normal">VFX Production</span> Studio
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Harness the power of AI generative video tools to produce Hollywood-quality movies, war sequences, and VFX clips at unprecedented speed.
          </p>
        </div>

        {/* Services Grid (Studio.Design Theme) */}
        <div className="grid md:grid-cols-2 gap-6">
          {aiFilmServices.map((service, index) => (
            <div
              key={index}
              className="studio-card p-8 flex flex-col justify-between reveal-scale-up group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#141624] border border-[#22263d] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6 text-slate-300">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-2.5 border-t border-[#1a1d2e] pt-5">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal-fade-up">
          <button
            onClick={onOpenContact}
            className="px-8 py-4 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all text-sm inline-flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>Commission an AI Film Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
