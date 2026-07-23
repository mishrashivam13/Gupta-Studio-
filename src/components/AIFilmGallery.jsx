import React, { useState, useRef } from 'react';
import { Sparkles, Volume2, VolumeX, Heart, MessageCircle, Share2, Coins, Lock, Wand2, Clapperboard, ChevronRight } from 'lucide-react';

export default function AIFilmGallery({ onOpenContact }) {
  const [dramaEpisode, setDramaEpisode] = useState(1);
  const [dramaCoins, setDramaCoins] = useState(50);
  const [dramaUnlocked, setDramaUnlocked] = useState([1, 2]);
  const [dramaLiked, setDramaLiked] = useState(false);
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  const [dramaMuted, setDramaMuted] = useState(true);
  const [aiMovieMuted, setAiMovieMuted] = useState(true);

  const dramaVideoRef = useRef(null);
  const aiMovieVideoRef = useRef(null);

  const handleDramaEpisodeClick = (ep) => {
    if (dramaUnlocked.includes(ep)) {
      setDramaEpisode(ep);
    } else {
      setDramaEpisode(ep);
      setShowUnlockModal(true);
    }
  };

  const handleUnlockDrama = () => {
    if (dramaCoins >= 10) {
      setDramaCoins(dramaCoins - 10);
      setDramaUnlocked([...dramaUnlocked, dramaEpisode]);
      setShowUnlockModal(false);
    }
  };

  return (
    <section id="vfx-gallery" className="py-16 sm:py-24 relative border-t border-slate-100 bg-[#f8fafc]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-blue-500/5 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-5/80 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Wand2 className="w-3.5 h-3.5" /> Dual Video Showcase
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Experience <span className="text-blue-600">Short Drama</span> & <span className="text-slate-800">AI Movies</span> Side-By-Side
          </h2>
          <p className="text-sm sm:text-lg text-slate-650 font-normal">
            Interact with our live video player demonstrations below — one showing <span className="font-bold text-blue-600">Short Drama Video Content</span> and the second showing an <span className="font-bold text-blue-500">AI Generated Movie</span>.
          </p>
        </div>

        {/* Dual Phone Showcase Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center max-w-5xl mx-auto">
          
          {/* PHONE 1 (LEFT): SHORT DRAMA CONTENT STREAM */}
          <div className="flex flex-col items-center space-y-3 w-full reveal-slide-left">
            
            {/* Phone Title Header Badge */}
            <div className="w-full max-w-[320px] sm:max-w-[360px] p-2.5 sm:p-3 rounded-2xl border border-slate-200 bg-white text-center flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600">
                <Clapperboard className="w-3.5 h-3.5 text-blue-600" />
                <span>Stream 1: <span className="font-bold text-blue-600">Short Drama</span></span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-extrabold">
                Short Series Content
              </span>
            </div>

            {/* Smartphone Frame 1 */}
            <div className="relative w-full max-w-[320px] sm:w-[360px] h-[580px] sm:h-[650px] bg-slate-950 rounded-[38px] sm:rounded-[44px] border-[7px] sm:border-[9px] border-slate-900 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.15)] overflow-hidden flex flex-col justify-between select-none">
              
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-3.5 sm:h-4 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-8 sm:w-10 h-1 bg-slate-950 rounded-full" />
              </div>

              {/* Header Bar inside Stream 1 */}
              <div className="pt-5 sm:pt-6 px-3.5 sm:px-4 pb-2 z-20 flex items-center justify-between bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-blue-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Short Drama Series</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] sm:text-[11px] font-bold">
                  <Coins className="w-3 h-3 text-blue-400 fill-blue-400" />
                  <span>{dramaCoins} Coins</span>
                </div>
              </div>

              {/* Video Screen 1 */}
              <div className="relative flex-1 bg-slate-950 overflow-hidden">
                <video
                  ref={dramaVideoRef}
                  key={'drama-ep-' + dramaEpisode}
                  autoPlay
                  loop
                  muted={dramaMuted}
                  playsInline
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    !dramaUnlocked.includes(dramaEpisode) ? 'filter blur-md brightness-40' : ''
                  }`}
                >
                  <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                </video>

                {/* Mute Button */}
                <button
                  onClick={() => setDramaMuted(!dramaMuted)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white z-20 border border-slate-800 cursor-pointer"
                >
                  {dramaMuted ? <VolumeX className="w-3.5 h-3.5 text-blue-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                </button>

                {/* Right Action Bar */}
                <div className="absolute right-2.5 bottom-16 flex flex-col items-center gap-3.5 z-20 text-white">
                  <button onClick={() => setDramaLiked(!dramaLiked)} className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <div className={`p-1.5 sm:p-2 rounded-full backdrop-blur-md ${dramaLiked ? 'bg-rose-500 text-white' : 'bg-slate-950/80 border border-slate-800'}`}>
                      <Heart className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${dramaLiked ? 'fill-white' : ''}`} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold">18.4K</span>
                  </button>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="p-1.5 sm:p-2 rounded-full bg-slate-950/80 border border-slate-800">
                      <MessageCircle className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold">412</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="p-1.5 sm:p-2 rounded-full bg-slate-950/80 border border-slate-800">
                      <Share2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold">Share</span>
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent z-20 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1 py-0.5 rounded bg-blue-600 text-white text-[9px] sm:text-[10px] font-extrabold">
                      Ep {dramaEpisode}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-blue-400">
                      Revenge of the Heiress
                    </span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 line-clamp-2 leading-relaxed">
                    Framed and exiled five years ago, Victoria returns to reclaim her family empire.
                  </p>
                </div>

                {/* Locked Modal Overlay */}
                {showUnlockModal && (
                  <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-4 text-center space-y-2.5">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white">
                      Unlock Episode {dramaEpisode}
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Unlock this episode for <span className="text-blue-400 font-bold">10 Coins</span>.
                    </p>
                    <button
                      onClick={handleUnlockDrama}
                      disabled={dramaCoins < 10}
                      className="w-full py-2 rounded-xl font-bold text-xs text-slate-950 bg-blue-400 hover:bg-blue-305 flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Coins className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Unlock Episode</span>
                    </button>
                    <button onClick={() => setShowUnlockModal(false)} className="text-[10px] text-slate-400">
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Episode Selector Bar */}
              <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800 z-20 space-y-1">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-slate-400">
                  <span>Episodes</span>
                  <span className="text-blue-400">{dramaUnlocked.length}/45 Unlocked</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  {Array.from({ length: 7 }, (_, i) => i + 1).map((ep) => {
                    const isUnlocked = dramaUnlocked.includes(ep);
                    const isCurrent = dramaEpisode === ep;
                    return (
                      <button
                        key={ep}
                        onClick={() => handleDramaEpisodeClick(ep)}
                        className={`px-2 py-1 rounded text-[10px] sm:text-[11px] font-bold shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-blue-500 text-white scale-105'
                            : isUnlocked
                            ? 'bg-slate-800 text-slate-200'
                            : 'bg-slate-900 text-slate-500 border border-slate-800'
                        }`}
                      >
                        {!isUnlocked && <Lock className="w-2.5 h-2.5 text-blue-400" />}
                        <span>Ep {ep}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* PHONE 2 (RIGHT): AI GENERATED MOVIE DEMO */}
          <div className="flex flex-col items-center space-y-3 w-full reveal-slide-right">
            
            {/* Phone Title Header Badge */}
            <div className="w-full max-w-[320px] sm:max-w-[360px] p-2.5 sm:p-3 rounded-2xl border border-slate-200 bg-white text-center flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-600">
                <Wand2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Stream 2: <span className="font-bold text-blue-600">AI Movie</span></span>
              </div>
              <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-650 text-[9px] sm:text-[10px] font-extrabold">
                4K AI Film Shot
              </span>
            </div>

            {/* Smartphone Frame 2 */}
            <div className="relative w-full max-w-[320px] sm:w-[360px] h-[580px] sm:h-[650px] bg-slate-950 rounded-[38px] sm:rounded-[44px] border-[7px] sm:border-[9px] border-slate-900 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.15)] overflow-hidden flex flex-col justify-between select-none">
              
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-3.5 sm:h-4 bg-slate-900 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-8 sm:w-10 h-1 bg-slate-950 rounded-full" />
              </div>

              {/* Header Bar inside Stream 2 */}
              <div className="pt-5 sm:pt-6 px-3.5 sm:px-4 pb-2 z-20 flex items-center justify-between bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent">
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-blue-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Gupta Studio AI Film</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-[10px] sm:text-[11px] font-bold">
                  60 FPS 4K Render
                </div>
              </div>

              {/* Video Screen 2 */}
              <div className="relative flex-1 bg-slate-950 overflow-hidden">
                <video
                  ref={aiMovieVideoRef}
                  autoPlay
                  loop
                  muted={aiMovieMuted}
                  playsInline
                  poster="/assets/war_at_sea.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
                </video>

                {/* Mute Button */}
                <button
                  onClick={() => setAiMovieMuted(!aiMovieMuted)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-white z-20 border border-slate-800 cursor-pointer"
                >
                  {aiMovieMuted ? <VolumeX className="w-3.5 h-3.5 text-blue-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                </button>

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-950/85 border border-slate-800 text-[9px] sm:text-[10px] font-extrabold text-blue-400 z-20">
                  War at Sea: Naval Supremacy
                </div>

                {/* Bottom AI Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent z-20 space-y-1">
                  <div className="flex items-center gap-1">
                    <span className="px-1 py-0.5 rounded bg-blue-600 text-white text-[9px] sm:text-[10px] font-extrabold">
                      Generative AI Movie
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-slate-300">
                      Runway Gen-3
                    </span>
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white line-clamp-1">
                    War at Sea (Naval Battle Scene)
                  </h4>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 italic line-clamp-2 leading-relaxed">
                    "Epic cinematic naval battle at sea with stormy ocean waves, cannon fire & smoke."
                  </p>
                </div>
              </div>

              {/* AI Tool Stack Bar inside Stream 2 */}
              <div className="p-2.5 sm:p-3 bg-slate-950 border-t border-slate-800 z-20 space-y-1">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold text-slate-400">
                  <span>AI Production Pipeline</span>
                  <span className="text-blue-400">100% AI Generated</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-blue-400">Runway Gen-3</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-400">Midjourney v6</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-400">ElevenLabs</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Call To Action Banner */}
        <div className="mt-12 sm:mt-16 text-center reveal-fade-up">
          <button
            onClick={onOpenContact}
            className="px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/10 hover:shadow-xl transition-all text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer max-w-full transform hover:-translate-y-0.5"
          >
            <span>Get Custom Short Drama or AI Movie Content</span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
}
