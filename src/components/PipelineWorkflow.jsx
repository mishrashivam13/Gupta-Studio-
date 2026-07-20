import React from 'react';
import { Layers, FileText, Cpu, Video, Mic, Smartphone, ArrowRight } from 'lucide-react';

export default function PipelineWorkflow({ theme }) {
  const steps = [
    {
      num: '01',
      title: 'Scripting & AI Storyboarding',
      icon: <FileText className="w-6 h-6 text-amber-500" />,
      description: 'AI-assisted screenplay analysis, automated scene breakdown, shot list generation, and instant 3D/AI concept storyboards.'
    },
    {
      num: '02',
      title: 'Character & LoRA Model Training',
      icon: <Cpu className="w-6 h-6 text-cyan-500" />,
      description: 'Building custom AI neural models to ensure 100% actor facial, wardrobe, and environment consistency across all episodes.'
    },
    {
      num: '03',
      title: 'AI Generative Video & VFX',
      icon: <Video className="w-6 h-6 text-purple-500" />,
      description: 'High-volume 4K shot generation using Runway Gen-3, Kling, and custom ComfyUI nodes with dynamic camera motion control.'
    },
    {
      num: '04',
      title: 'AI Dubbing & Audio Scoring',
      icon: <Mic className="w-6 h-6 text-emerald-500" />,
      description: 'Neural voice dubbing in 25+ languages, automated lip-sync alignment, sound effect placement, and orchestral AI music scoring.'
    },
    {
      num: '05',
      title: 'App Release & Monetization',
      icon: <Smartphone className="w-6 h-6 text-rose-500" />,
      description: 'Deploying completed series directly to custom iOS/Android Short Drama Apps and Web platforms with coin unlock & DRM encryption.'
    }
  ];

  return (
    <section id="pipeline" className={`py-24 relative border-t ${theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/80 border-slate-800'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Fade Up) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" /> End-to-End Architecture
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            Our Script-To-Screen <span className="text-gradient-gold">AI Production Pipeline</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            How Gupta Studio Entertainment takes your idea from initial concept to a fully launched, monetized Short Drama App or AI Feature Film.
          </p>
        </div>

        {/* Steps Grid (Sequential Scroll Animations) */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const animClass = idx % 2 === 0 ? 'reveal-slide-left' : 'reveal-slide-right';
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 group ${animClass} ${
                  theme === 'light' ? 'border-slate-200 hover:border-amber-500' : 'border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-amber-500 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                      STEP {step.num}
                    </span>
                    <div className={`p-2 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                      theme === 'light' ? 'bg-slate-100 border border-slate-200' : 'bg-slate-900 border border-slate-800'
                    }`}>
                      {step.icon}
                    </div>
                  </div>

                  <h3 className={`text-lg font-bold mb-2 group-hover:text-amber-500 transition-colors ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex justify-end pt-4 text-slate-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
