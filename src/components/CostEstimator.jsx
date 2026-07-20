import React, { useState } from 'react';
import { Calculator, CheckSquare, Square, Clock, ArrowRight } from 'lucide-react';

const formatINR = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
}).format(amount);

export default function CostEstimator({ theme, onOpenContactWithServices }) {
  const [selectedItems, setSelectedItems] = useState([0, 2, 3]);

  const serviceOptions = [
    {
      id: 0,
      name: "Short Drama Mobile App (iOS & Android)",
      category: "App Development",
      price: 373500,
      days: 14,
      desc: "Turnkey native iOS & Android apps with vertical reel player, push notifications & user accounts."
    },
    {
      id: 1,
      name: "Short Drama Web Streaming Portal",
      category: "App Development",
      price: 207500,
      days: 7,
      desc: "Responsive web portal allowing instant browser playback, PWA support & web billing."
    },
    {
      id: 2,
      name: "Coin Store & Monetization Engine",
      category: "Monetization",
      price: 124500,
      days: 4,
      desc: "Per-episode coin unlocks, VIP subscription plans, Stripe / Apple / Google payment gateways."
    },
    {
      id: 3,
      name: "AI Multilingual Dubbing (10 Languages)",
      category: "AI Media",
      price: 99600,
      days: 5,
      desc: "Automated neural voice cloning, SRT subtitle generation, and emotional voice acting."
    },
    {
      id: 4,
      name: "AI Film Teaser / Trailer (60s 4K)",
      category: "AI Production",
      price: 166000,
      days: 5,
      desc: "High-octane 4K AI video trailer generated from your script or story concept."
    },
    {
      id: 5,
      name: "Full AI Short Series (10 Episodes)",
      category: "AI Production",
      price: 456500,
      days: 18,
      desc: "Complete script-to-screen AI short drama series with character continuity & audio master."
    },
    {
      id: 6,
      name: "Generative AI VFX & Post Package",
      category: "Post-Production",
      price: 249000,
      days: 10,
      desc: "Studio-grade AI matte painting, background environment replacement, and 3D compositing."
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
    <section id="estimator" className={`py-24 relative border-t ${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-950 border-slate-800'}`}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title (Fade Up) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" /> Project Calculator
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
            Interactive <span className="text-gradient-gold">Project Cost Estimator</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-600' : 'text-slate-300'}`}>
            Select the features and services required for your Short Drama App or AI Film project to get an instant estimated cost and delivery timeline.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Selectable Options (Slides In From Left) */}
          <div className="lg:col-span-7 space-y-4 reveal-slide-left">
            {serviceOptions.map((item) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? theme === 'light'
                        ? 'bg-amber-500/10 border-amber-500 shadow-md'
                        : 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : theme === 'light'
                      ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
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
                      <h4 className={`text-base font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        {item.name}
                      </h4>
                      <span className="text-sm font-mono font-bold text-amber-500">
                        +{formatINR(item.price)}
                      </span>
                    </div>

                    <p className={`text-xs mt-1 ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-3 mt-2 text-[11px] font-mono text-slate-500">
                      <span className={`px-2 py-0.5 rounded border ${theme === 'light' ? 'bg-slate-200 border-slate-300 text-slate-700' : 'bg-slate-800 border-slate-700 text-slate-300'}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-cyan-500" /> ~{item.days} Days
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Summary Card (Slides In From Right) */}
          <div className="lg:col-span-5 sticky top-28 reveal-slide-right">
            <div className="glass-card rounded-3xl p-7 border border-slate-800 space-y-6">
              
              <div className={`border-b pb-5 ${theme === 'light' ? 'border-slate-200' : 'border-slate-800'}`}>
                <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">Estimated Project Scope</span>
                <h3 className={`text-xl font-extrabold mt-1 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  Gupta Studio Entertainment Proposal Summary
                </h3>
              </div>

              {/* Price Calculation Box */}
              <div className={`p-5 rounded-2xl border space-y-3 ${
                theme === 'light' ? 'bg-slate-50 border-amber-500/40' : 'bg-slate-900/90 border-amber-500/30'
              }`}>
                <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Selected Modules</span>
                  <span>{selectedItems.length} Features</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className={`text-sm font-bold ${theme === 'light' ? 'text-slate-800' : 'text-slate-300'}`}>Est. Total Investment:</span>
                  <div className="text-2xl sm:text-3xl font-black text-amber-500 font-mono">
                    {formatINR(totalPrice)}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs font-mono text-cyan-500">
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
                <span className="text-xs font-bold text-slate-400">Included Services:</span>
                <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1 no-scrollbar">
                  {selectedNames.length > 0 ? (
                    selectedNames.map((name, i) => (
                      <div key={i} className={`text-xs flex items-center gap-2 ${theme === 'light' ? 'text-slate-700' : 'text-slate-300'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="truncate">{name}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500 italic">No modules selected yet. Click options on the left.</div>
                  )}
                </div>
              </div>

              {/* Call to action button */}
              <button
                onClick={() => onOpenContactWithServices(selectedNames, totalPrice)}
                disabled={selectedItems.length === 0}
                className="w-full py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2 text-sm shadow-xl shadow-amber-500/20 cursor-pointer"
              >
                <span>Request Custom Scope & Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-500 font-mono">
                *Final pricing may vary based on exact custom features and volume of short drama content.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
