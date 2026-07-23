import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, Clock, ArrowRight } from 'lucide-react';

export default function CostEstimator({ theme, onOpenContactWithServices }) {
  const [selectedItems, setSelectedItems] = useState([0, 2, 3]);

  const serviceOptions = [
    {
      id: 0,
      name: "Complete Short Drama Video Series (30 Episodes)",
      category: "Content Production",
      price: 3500,
      days: 10,
      desc: "Full vertical short drama video series ready for streaming with color grading & audio master."
    },
    {
      id: 1,
      name: "Custom Screenplay & Episodic Scripting",
      category: "Pre-Production",
      price: 1500,
      days: 5,
      desc: "Original scriptwriting, episode cliffhanger breaking, and character bio development."
    },
    {
      id: 2,
      name: "AI Multilingual Voice Dubbing (10 Languages)",
      category: "AI Localization",
      price: 1200,
      days: 4,
      desc: "Automated neural voice cloning, SRT subtitle generation, and emotional voice acting."
    },
    {
      id: 3,
      name: "AI Film Teaser / Cinematic Trailer (60s 4K)",
      category: "AI Production",
      price: 1800,
      days: 4,
      desc: "High-octane 4K AI video trailer generated from your script or story concept."
    },
    {
      id: 4,
      name: "Full AI Feature Short Movie (10 Scenes)",
      category: "AI Production",
      price: 4500,
      days: 14,
      desc: "Complete script-to-screen AI short movie with character consistency & master audio score."
    },
    {
      id: 5,
      name: "Generative AI VFX & Post-Production Package",
      category: "Post-Production",
      price: 2500,
      days: 7,
      desc: "Studio-grade AI matte painting, background environment replacement, and 3D compositing."
    },
    {
      id: 6,
      name: "Content DRM & Copyright Security Package",
      category: "IP Security",
      price: 1000,
      days: 3,
      desc: "AES DRM video encryption, dynamic user watermarking, and copyright protection."
    }
  ];

  const toggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalPrice = selectedItems.reduce((acc, currId) => {
    const item = serviceOptions.find(s => s.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const maxDays = selectedItems.reduce((acc, currId) => {
    const item = serviceOptions.find(s => s.id === currId);
    return item ? Math.max(acc, item.days) : acc;
  }, 0);

  const selectedNames = selectedItems.map(id => serviceOptions.find(s => s.id === id)?.name).filter(Boolean);

  return (
    <section id="estimator" className={`py-24 relative border-t transition-colors ${
      theme === 'light' ? 'bg-[#e2e8f0]/60 border-slate-300/80' : 'bg-slate-950 border-slate-800'
    }`}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" /> Production Calculator
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
            Interactive <span className="font-cursive text-amber-500 text-4xl sm:text-5xl lg:text-6xl font-normal">Content & Production</span> Estimator
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
            Select the video content, scripting, or AI movie production services required for your project to get an instant cost and delivery estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Selectable Options */}
          <div className="lg:col-span-7 space-y-4">
            {serviceOptions.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? theme === 'light'
                        ? 'bg-amber-500/10 border-amber-500 shadow-md ring-2 ring-amber-500/30'
                        : 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : theme === 'light'
                      ? 'bg-white border-slate-300/90 shadow-md hover:border-slate-400'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="pt-0.5 text-amber-500">
                    {isSelected ? (
                      <CheckSquare className="w-5 h-5 fill-amber-500 text-slate-950" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-base font-bold ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                        {item.name}
                      </h4>
                      <span className="text-sm font-mono font-bold text-amber-600">
                        +${item.price.toLocaleString()}
                      </span>
                    </div>

                    <p className={`text-xs mt-1 ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-slate-500">
                      <span className={`px-2 py-0.5 rounded border ${theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-800 font-bold' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-cyan-600">
                        <Clock className="w-3 h-3 text-cyan-500" /> ~{item.days} Days
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className={`rounded-3xl p-7 border space-y-6 ${
              theme === 'light'
                ? 'bg-slate-900 text-white border-slate-800 shadow-2xl'
                : 'glass-card border-slate-800'
            }`}>
              
              <div className="border-b border-slate-800 pb-5">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Estimated Content Package</span>
                <h3 className="text-xl font-extrabold mt-1 text-white">
                  Gupta Studio Content Proposal
                </h3>
              </div>

              {/* Price Calculation Box */}
              <div className="p-5 rounded-2xl border bg-slate-950/80 border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Selected Production Modules</span>
                  <span>{selectedItems.length} Services</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-slate-200">Est. Total Investment:</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
                    ${totalPrice.toLocaleString()} <span className="text-xs text-slate-400 font-normal">USD</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs font-mono text-cyan-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Estimated Turnaround:
                  </span>
                  <span className="font-bold">
                    {maxDays > 0 ? `${maxDays} - ${maxDays + 5} Days` : '0 Days'}
                  </span>
                </div>
              </div>

              {/* List of selected items */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400">Included Content Services:</span>
                <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
                  {selectedNames.length > 0 ? (
                    selectedNames.map((name, i) => (
                      <div key={i} className="text-xs flex items-center gap-2 text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="truncate">{name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500 italic">No services selected yet. Click options on the left.</div>
                  )}
                </div>
              </div>

              {/* Call to action button */}
              <button
                onClick={() => onOpenContactWithServices(selectedNames, totalPrice)}
                disabled={selectedItems.length === 0}
                className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2 text-sm shadow-xl shadow-amber-500/20 cursor-pointer"
              >
                <span>Request Custom Content Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-400 font-mono">
                *Final pricing depends on total episode volume and custom video length.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
