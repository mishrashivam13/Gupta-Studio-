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
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Initialize Scroll Reveal Animations
  useScrollReveal();

  useEffect(() => {
    // Keep it permanently locked to light mode classes
    document.documentElement.classList.add('light');
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation Menu */}
      <Navbar
        theme="light"
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page Content */}
      <main className="bg-white">
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesShortDrama
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesAIFilms
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AIFilmGallery
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AboutUs
          onOpenContact={() => setIsContactOpen(true)}
        />

        <PipelineWorkflow />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Inquiry Modal */}
      <ContactModal
        theme="light"
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
