import React from 'react';
import { Layers, FileText, Cpu, Video, Mic, Film, ArrowRight } from 'lucide-react';

export default function PipelineWorkflow() {
  const steps = [
    {
      num: '01',
      title: 'Scripting & Storyboarding',
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      description: 'AI-assisted screenplay analysis, automated scene breakdown, shot list generation, and concept storyboards.'
    },
    {
      num: '02',
      title: 'Character & LoRA Model Training',
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      description: 'Building custom AI neural models to ensure 100% actor facial, wardrobe, and environment consistency across all scenes.'
    },
    {
      num: '03',
      title: 'AI Generative Video & VFX',
      icon: <Video className="w-6 h-6 text-blue-600" />,
      description: 'High-volume 4K shot generation using Runway Gen-3, Kling, and custom ComfyUI nodes with dynamic camera motion control.'
    },
    {
      num: '04',
      title: 'AI Dubbing & Audio Scoring',
      icon: <Mic className="w-6 h-6 text-blue-500" />,
      description: 'Neural voice dubbing in 25+ languages, automated lip-sync alignment, sound effect placement, and orchestral AI music scoring.'
    },
    {
      num: '05',
      title: 'Final Content Master & DRM',
      icon: <Film className="w-6 h-6 text-blue-600" />,
      description: 'Delivering complete 4K master files ready for streaming platforms along with AES DRM video encryption and copyright protection.'
    }
  ];

  return (
    <section id="pipeline" className="py-24 relative border-t border-slate-100 bg-[#f8fafc]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-5/80 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" /> End-to-End Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Script-To-Screen <span className="text-blue-600 font-extrabold">AI Production Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-650 font-normal">
            How Gupta Studio takes your idea from initial script concept to complete 4K Short Drama video series or AI Feature Film.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="minimal-card p-6 flex flex-col justify-between reveal-scale-up group bg-white border-slate-200"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                    STEP {step.num}
                  </span>
                  <div className="p-2 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-650">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex justify-end pt-4 text-blue-600">
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
