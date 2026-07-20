import React, { useState, useRef } from 'react';
import { Smartphone, Play, Pause, Heart, Share2, MessageCircle, Coins, Lock, Sparkles, Volume2, VolumeX, ChevronRight, Check } from 'lucide-react';

export default function DramaAppSimulator({ theme }) {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [coins, setCoins] = useState(60);
  const [unlockedEpisodes, setUnlockedEpisodes] = useState([1, 2]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24800);
  const [showUnlockModal, setShowUnlockModal] = useState(false);
  const videoRef = useRef(null);

  // Short Drama Apps & Platforms (Real App Names)
  const dramaApps = [
    {
      id: 'drustee',
      appName: 'Drustee TV',
      category: 'Top Rated App',
      poster: '/src/assets/splash_logo.png',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
      downloads: '5M+ Downloads',
      rating: '4.9 ★',
      synopsis: 'Premier vertical short drama streaming platform with 100+ exclusive billionaire romance & revenge micro-series.',
      episodes: 60
    },
    {
      id: 'flipshort',
      appName: 'FlipShort (FlipShop)',
      category: 'Viral Platform',
      poster: '/assets/drama2.jpg',
      videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      downloads: '3M+ Downloads',
      rating: '4.8 ★',
      synopsis: 'Next-gen short video drama app with coin monetization, daily check-in rewards, and auto multilingual dubbing.',
      episodes: 45
    },
    {
      id: 'skdrama',
      appName: 'SK Drama Engine',
      category: 'Global Release',
      poster: '/assets/vfx.jpg',
      videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
      downloads: '2M+ Downloads',
      rating: '4.9 ★',
      synopsis: 'Cross-platform iOS, Android & Web drama engine built by Gupta Studio Entertainment with AES-128 DRM encryption.',
      episodes: 50
    },
    // {
    //   id: 'dramabox',
    //   appName: 'DramaBox Pro',
    //   category: 'Enterprise Edition',
    //   poster: '/assets/hero.jpg',
    //   videoUrl: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    //   downloads: '8M+ Downloads',
    //   rating: '5.0 ★',
    //   synopsis: 'High-volume short drama portal with built-in subscription tiers, rewarded ad unlocks, and real-time revenue analytics.',
    //   episodes: 80
    // }
  ];

  const currentApp = dramaApps[activeAppIndex];

  const handleEpisodeClick = (epNum) => {
    if (unlockedEpisodes.includes(epNum)) {
      setActiveEpisode(epNum);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      setActiveEpisode(epNum);
      setShowUnlockModal(true);
    }
  };

  const handleUnlock = () => {
    if (coins >= 10) {
      setCoins(coins - 10);
      setUnlockedEpisodes([...unlockedEpisodes, activeEpisode]);
      setShowUnlockModal(false);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <section id="app-simulator" className={`py-24 relative border-t transition-colors ${
      theme === 'light' 
        ? 'bg-slate-100 border-slate-200' 
        : 'bg-[#0b0f19] border-slate-800'
    }`}>
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - 100% Always Visible */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4" /> Live Mobile App Simulator
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
            Explore Our <span className="text-gradient-gold">Short Drama Platforms</span>
          </h2>
          <p className={`text-base sm:text-lg ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-200'}`}>
            Test live mobile drama apps built by Gupta Studio Entertainment: <span className="font-bold text-amber-500">Drustee TV</span>, <span className="font-bold text-cyan-400">FlipShort (FlipShop)</span>, <span className="font-bold text-amber-500">SK Drama</span> & <span className="font-bold text-cyan-400">DramaBox Pro</span>.
          </p>
        </div>

        {/* Main Grid - 100% Always Visible */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Smartphone Frame with Live Video Player */}
          <div className="lg:col-span-6 flex justify-center reveal-slide-left">
            
            {/* Phone Frame */}
            <div className="relative w-[340px] max-w-[calc(100vw-2rem)] sm:w-[380px] h-[680px] bg-slate-950 rounded-[48px] border-[10px] border-slate-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between select-none">
              
              {/* Speaker Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-5 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-950 rounded-full" />
              </div>

              {/* App Header Bar inside Phone */}
              <div className="pt-7 px-4 pb-2 z-20 flex items-center justify-between bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentApp.appName}</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold shadow-sm">
                  <Coins className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span>{coins} Coins</span>
                </div>
              </div>

              {/* Live HTML5 Video Player inside Phone Screen */}
              <div className="relative flex-1 bg-slate-950 overflow-hidden">
                
                {/* HTML5 Video Element */}
                <video
                  ref={videoRef}
                  key={currentApp.id + activeEpisode}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    !unlockedEpisodes.includes(activeEpisode) ? 'filter blur-md brightness-40' : ''
                  }`}
                >
                  <source src={currentApp.videoUrl} type="video/mp4" />
                </video>

                {/* Video Overlay Tap to Play/Pause */}
                {unlockedEpisodes.includes(activeEpisode) && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors z-10 cursor-pointer"
                  >
                    {!isPlaying && (
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center shadow-2xl transform scale-110">
                        <Play className="w-8 h-8 fill-slate-950 translate-x-0.5" />
                      </div>
                    )}
                  </button>
                )}

                {/* Sound Toggle Button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-3 right-3 p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs z-20 border border-slate-800 cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                </button>

                {/* Right Action Icons (Like, Comment, Share) */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 z-20 text-white">
                  <button onClick={handleLike} className="flex flex-col items-center gap-1 cursor-pointer">
                    <div className={`p-2.5 rounded-full backdrop-blur-md transition-all ${liked ? 'bg-rose-500 text-white scale-110' : 'bg-slate-950/80 text-white border border-slate-800'}`}>
                      <Heart className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold">{likeCount.toLocaleString()}</span>
                  </button>

                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-slate-800">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">582</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="p-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white border border-slate-800">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold">Share</span>
                  </div>
                </div>

                {/* Bottom Video Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent z-20 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                      Ep. {activeEpisode}
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      {currentApp.appName} • {currentApp.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {currentApp.appName} Exclusive Series
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {currentApp.synopsis}
                  </p>
                </div>

                {/* Locked Episode Modal Overlay */}
                {showUnlockModal && (
                  <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-6 text-center space-y-4 animate-fadeIn">
                    <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
                      <Lock className="w-7 h-7" />
                    </div>
                    <h4 className="text-base font-extrabold text-white">
                      Unlock Episode {activeEpisode}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xs">
                      Unlock this premium episode on <span className="text-amber-400 font-bold">{currentApp.appName}</span> for <span className="text-amber-400 font-bold">10 Coins</span>.
                    </p>

                    <div className="w-full space-y-2 pt-2">
                      <button
                        onClick={handleUnlock}
                        disabled={coins < 10}
                        className="w-full py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-50 flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                      >
                        <Coins className="w-4 h-4 fill-slate-950" />
                        <span>Unlock Now (10 Coins)</span>
                      </button>

                      <button
                        onClick={() => setShowUnlockModal(false)}
                        className="w-full py-2 text-xs text-slate-400 hover:text-white cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Episode Selector Strip inside Phone */}
              <div className="p-3 bg-slate-950 border-t border-slate-800/80 z-20 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Select Episode</span>
                  <span className="text-amber-400">{unlockedEpisodes.length}/{currentApp.episodes} Unlocked</span>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((ep) => {
                    const isUnlocked = unlockedEpisodes.includes(ep);
                    const isCurrent = activeEpisode === ep;
                    return (
                      <button
                        key={ep}
                        onClick={() => handleEpisodeClick(ep)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 flex items-center gap-1 transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-amber-400 text-slate-950 scale-105 shadow-md'
                            : isUnlocked
                            ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                            : 'bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        {!isUnlocked && <Lock className="w-3 h-3 text-amber-400/80" />}
                        <span>Ep {ep}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Short Drama App Platforms Selector Panel */}
          <div className="lg:col-span-6 space-y-6 reveal-slide-right">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                Interactive Platform Selector
              </span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                Select a Short Drama App to Demo
              </h3>
              <p className={`text-sm ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                Click any app platform client below to preview its live mobile UI and video playback inside the smartphone simulator.
              </p>
            </div>

            {/* Short Drama App Client Cards */}
            <div className="space-y-3">
              {dramaApps.map((app, idx) => (
                <div
                  key={app.id}
                  onClick={() => {
                    setActiveAppIndex(idx);
                    setActiveEpisode(1);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 ${
                    activeAppIndex === idx
                      ? theme === 'light'
                        ? 'bg-white border-amber-500 shadow-xl ring-2 ring-amber-500/40'
                        : 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/40'
                      : theme === 'light'
                      ? 'bg-white border-slate-300 hover:border-amber-400 shadow-sm'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <img
                    src={app.poster}
                    alt={app.appName}
                    className="w-16 h-20 object-cover rounded-xl shrink-0 shadow-md"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 font-extrabold text-[10px]">
                        {app.category}
                      </span>
                      <span className={`text-xs font-mono font-bold ${theme === 'light' ? 'text-slate-700' : 'text-cyan-400'}`}>
                        {app.downloads}
                      </span>
                    </div>
                    <h4 className={`text-lg font-extrabold truncate mt-1 ${theme === 'light' ? 'text-slate-950' : 'text-white'}`}>
                      {app.appName}
                    </h4>
                    <p className={`text-xs line-clamp-1 mt-0.5 ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-300'}`}>
                      {app.synopsis}
                    </p>
                  </div>
                  <ChevronRight className={`w-5 h-5 shrink-0 ${activeAppIndex === idx ? 'text-amber-500' : 'text-slate-400'}`} />
                </div>
              ))}
            </div>

            {/* Key Features Pill Bar */}
            <div className={`grid grid-cols-2 gap-4 pt-4 border-t ${theme === 'light' ? 'border-slate-300' : 'border-slate-800'}`}>
              <div className={`p-4 rounded-xl border space-y-1 ${theme === 'light' ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="text-xs font-bold text-cyan-600">Coin Store & Monetization</div>
                <p className={`text-[11px] ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>Integrated payment APIs with in-app coin shop & Apple/Google billing.</p>
              </div>
              <div className={`p-4 rounded-xl border space-y-1 ${theme === 'light' ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-900/80 border-slate-800'}`}>
                <div className="text-xs font-bold text-amber-600">25+ Language AI Dubbing</div>
                <p className={`text-[11px] ${theme === 'light' ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>Automated voice cloning and SRT subtitle translation for global growth.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
