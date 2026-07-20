import React, { useState } from 'react';
import { Film, Sparkles, Sliders, Maximize2, X, Wand2, ArrowRight } from 'lucide-react';

export default function AIFilmGallery({ theme, onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedShot, setSelectedShot] = useState(null);

  const vfxImage = "/assets/vfx.jpg?v=2";
  const heroImage = "/assets/hero.jpg?v=2";
  const drama1Image = "/assets/drama1.jpg?v=2";
  const drama2Image = "/assets/drama2.jpg?v=2";

  const shots = [
    {
      id: 1,
      title: "Neopolis 2099 Cyberpunk Metros",
      category: "Sci-Fi",
      image: vfxImage,
      rawImage: heroImage,
      tools: ["Runway Gen-3", "Midjourney v6", "Unreal 5.4"],
      fps: "60 FPS 4K",
      renderTime: "12 Mins / Shot",
      prompt: "Cinematic hyper-detailed cyberpunk city at night with flying vehicles, glowing neon signs, rainy atmosphere, camera pan left.",
      description: "Complex environment generation created using custom AI neural LoRA trained on futuristic architecture and camera motions."
    },
    {
      id: 2,
      title: "The Secret Heiress Mansion",
      category: "Drama",
      image: drama2Image,
      rawImage: drama1Image,
      tools: ["Kling AI 1.5", "Flux.1 Dev", "ElevenLabs"],
      fps: "24 FPS 4K",
      renderTime: "8 Mins / Shot",
      prompt: "Ultra-high quality luxury mansion interior at dusk, majestic lighting, female protagonist turning with subtle camera tilt.",
      description: "Character continuity maintained across 45 consecutive scenes using facial landmark embedding."
    },
    {
      id: 3,
      title: "The Billionaire Legacy Teaser",
      category: "Thriller",
      image: drama1Image,
      rawImage: vfxImage,
      tools: ["Runway Gen-3", "ComfyUI VFX", "Sora Beta"],
      fps: "60 FPS 4K",
      renderTime: "15 Mins / Shot",
      prompt: "Dramatic confrontation scene inside private jet, moody cinematic lighting, shallow depth of field, studio film look.",
      description: "High-octane short series teaser generated with synthetic lighting and multi-angle camera alignment."
    }
  ];

  const categories = ['All', 'Sci-Fi', 'Drama', 'Thriller'];

  const filteredShots = activeCategory === 'All' 
    ? shots 
    : shots.filter(s => s.category === activeCategory);

  return (
    <section id="vfx-gallery" className={`py-24 relative border-t transition-colors ${
      theme === 'light' ? 'bg-slate-50 border-slate-200' : 'bg-[#080b12] border-slate-800'
    }`}>
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" /> Interactive AI Gallery
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
            AI VFX & <span className="text-gradient-cyan">Cinematic Shot Showcase</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
            Compare raw pre-visualization against final studio-grade AI renders using our interactive before/after comparison tool.
          </p>
        </div>

        {/* Interactive Before/After VFX Comparison Card */}
        <div className="mb-20 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 reveal-scale-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sliders className="w-4 h-4" /> Drag Slider To Compare
              </span>
              <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                Before / After AI VFX Transformation
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className={`px-3 py-1.5 rounded-lg border ${theme === 'light' ? 'bg-white border-slate-300 text-slate-700 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'}`}>
                Left: Raw AI Storyboard
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold">
                Right: 4K Studio AI Render
              </span>
            </div>
          </div>

          {/* Slider Container */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-950 shadow-2xl border border-slate-800">
            
            {/* Base Image: Final 4K AI VFX Render (Right Side) */}
            <img
              src={vfxImage}
              onError={(e) => { e.target.src = '/assets/ai_vfx_showcase_1784543177173.jpg'; }}
              alt="Final 4K Studio AI Render"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-cyan-500 text-xs font-extrabold text-slate-950 shadow-lg z-10">
              Final 4K AI Shot
            </div>

            {/* Top Image: Raw Storyboard (Left Side clipped by sliderPosition %) */}
            <img
              src={heroImage}
              onError={(e) => { e.target.src = '/assets/hero_cinematic_1784543135324.jpg'; }}
              alt="Raw AI Storyboard"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 z-10"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
              }}
            />
            <div
              className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-950/85 border border-slate-800 text-xs font-bold text-slate-200 backdrop-blur-md z-20"
              style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
            >
              Raw Storyboard
            </div>

            {/* Vertical Split Line & Handle Button */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.9)] z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center shadow-2xl border-2 border-slate-950 text-xs transform hover:scale-110">
                ↔
              </div>
            </div>

            {/* Range Input Trigger */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 reveal-fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105'
                  : theme === 'light' 
                  ? 'bg-white text-slate-700 hover:text-slate-950 border border-slate-300 shadow-sm' 
                  : 'glass-panel text-slate-400 hover:text-white border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredShots.map((shot) => (
            <div
              key={shot.id}
              onClick={() => setSelectedShot(shot)}
              className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group reveal-fade-up ${
                theme === 'light' ? 'border-slate-200 hover:border-cyan-500 shadow-sm' : 'border-slate-800/80 hover:border-cyan-500/50'
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={shot.image}
                  onError={(e) => { e.target.src = '/assets/ai_vfx_showcase_1784543177173.jpg'; }}
                  alt={shot.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[11px] font-bold text-cyan-400">
                  {shot.category}
                </div>

                <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className={`text-lg font-bold group-hover:text-cyan-500 transition-colors ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                  {shot.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {shot.tools.map((t, i) => (
                    <span key={i} className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      theme === 'light' ? 'bg-slate-100 border-slate-300 text-slate-800 font-bold' : 'bg-slate-900 border-slate-800 text-slate-300'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedShot && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="glass-card rounded-3xl border border-slate-700 max-w-3xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
              <button
                onClick={() => setSelectedShot(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src={selectedShot.image}
                  onError={(e) => { e.target.src = '/assets/ai_vfx_showcase_1784543177173.jpg'; }}
                  alt={selectedShot.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-400 text-xs font-bold">
                    {selectedShot.category} • {selectedShot.fps}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Render Speed: {selectedShot.renderTime}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {selectedShot.title}
                </h3>

                <p className="text-slate-300 text-sm">
                  {selectedShot.description}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-amber-400 font-mono uppercase">AI Generation Prompt:</span>
                  <p className="text-xs text-slate-300 font-mono italic">
                    "{selectedShot.prompt}"
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedShot(null);
                      onOpenContact();
                    }}
                    className="px-6 py-2.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Order Custom AI Shot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
