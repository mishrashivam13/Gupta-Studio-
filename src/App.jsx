import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesShortDrama from './components/ServicesShortDrama';
import ServicesAIFilms from './components/ServicesAIFilms';
import AIFilmGallery from './components/AIFilmGallery';
import AboutUs from './components/AboutUs';
import PipelineWorkflow from './components/PipelineWorkflow';
import CostEstimator from './components/CostEstimator';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedServicesForEstimate, setSelectedServicesForEstimate] = useState([]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Initialize Scroll Reveal Animations
  useScrollReveal();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContactWithServices = (services, price) => {
    setSelectedServicesForEstimate(services);
    setEstimatedPrice(price);
    setIsContactOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-400 ${
      theme === 'light' 
        ? 'bg-[#fffdf8] text-slate-900 selection:bg-amber-500 selection:text-slate-950' 
        : 'bg-[#070605] text-slate-100 selection:bg-amber-400 selection:text-slate-950'
    }`}>
      
      {/* Top Navigation Bar with Theme Switcher */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero
          theme={theme}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesShortDrama
          theme={theme}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ServicesAIFilms
          theme={theme}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AIFilmGallery
          theme={theme}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <AboutUs
          theme={theme}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <PipelineWorkflow theme={theme} />

        <CostEstimator
          theme={theme}
          onOpenContactWithServices={handleOpenContactWithServices}
        />
      </main>

      {/* Footer */}
      <Footer
        theme={theme}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Global Contact Inquiry Modal */}
      <ContactModal
        theme={theme}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialServices={selectedServicesForEstimate}
        initialEstimate={estimatedPrice}
      />

    </div>
  );
}
