import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesShortDrama from './components/ServicesShortDrama';
import ServicesAIFilms from './components/ServicesAIFilms';
import AIFilmGallery from './components/AIFilmGallery';
import AboutUs from './components/AboutUs';
import PipelineWorkflow from './components/PipelineWorkflow';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize Scroll Reveal Animations
  useScrollReveal();

  useEffect(() => {
    document.documentElement.classList.remove('light');
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'dark' : 'dark'));
  };

  return (
    <div className="min-h-screen font-sans bg-[#050508] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Studio.Design Header Bar */}
      <Navbar
        theme="dark"
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="bg-[#050508]">
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesShortDrama
          theme="dark"
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesAIFilms
          theme="dark"
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AIFilmGallery
          theme="dark"
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AboutUs
          theme="dark"
          onOpenContact={() => setIsContactOpen(true)}
        />

        <PipelineWorkflow theme="dark" />
      </main>

      {/* Footer */}
      <Footer
        theme="dark"
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Global Contact Inquiry Modal */}
      <ContactModal
        theme="dark"
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
