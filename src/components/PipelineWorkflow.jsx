import React from 'react';
import { Layers, FileText, Cpu, Video, Mic, Film, ArrowRight } from 'lucide-react';

export default function PipelineWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'Scripting & Storyboarding',
      icon: <FileText className="w-6 h-6 text-amber-400" />,
      description: 'AI-assisted screenplay analysis, automated scene breakdown, shot list generation, and concept storyboards.'
    },
    {
      num: '02',
      title: 'Character & LoRA Model Training',
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      description: 'Building custom AI neural models to ensure 100% actor facial, wardrobe, and environment consistency across all scenes.'
    },
    {
      num: '03',
      title: 'AI Generative Video & VFX',
      icon: <Video className="w-6 h-6 text-purple-400" />,
      description: 'High-volume 4K shot generation using Runway Gen-3, Kling, and custom ComfyUI nodes with dynamic camera motion control.'
    },
    {
      num: '04',
      title: 'AI Dubbing & Audio Scoring',
      icon: <Mic className="w-6 h-6 text-emerald-400" />,
      description: 'Neural voice dubbing in 25+ languages, automated lip-sync alignment, sound effect placement, and orchestral AI music scoring.'
    },
    {
      num: '05',
      title: 'Final Content Master & DRM',
      icon: <Film className="w-6 h-6 text-rose-400" />,
      description: 'Delivering complete 4K master files ready for streaming platforms along with AES DRM video encryption and copyright protection.'
    }
  ];

  return (
    <section id="pipeline" className="py-24 relative border-t border-[#181a28] bg-[#050508]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121422] border border-[#22263d] text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" /> End-to-End Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Our Script-To-Screen <span className="font-cursive text-amber-400 text-4xl sm:text-5xl lg:text-6xl font-normal">AI Production Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            How Gupta Studio takes your idea from initial script concept to complete 4K Short Drama video series or AI Feature Film.
          </p>
        </div>

        {/* Steps Grid (Studio.Design Theme) */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="studio-card p-6 flex flex-col justify-between reveal-scale-up group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded border border-amber-500/30">
                    STEP {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-[#141624] border border-[#22263d] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex justify-end pt-4 text-amber-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
