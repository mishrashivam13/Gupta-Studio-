import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, CheckCircle2, Film, Smartphone, Phone, Mail, User, Building } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialServices = [], initialEstimate = 0 }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: 'Short Drama App & Web Platform',
    budget: '₹4,00,000 - ₹12,00,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServices.length > 0) {
      setFormData(prev => ({
        ...prev,
        message: `Selected Modules: ${initialServices.join(', ')}. Estimated budget around ₹${initialEstimate.toLocaleString('en-IN')} INR.`
      }));
    }
  }, [initialServices, initialEstimate]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-modal fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-card rounded-3xl border border-slate-700 max-w-2xl w-full p-6 sm:p-8 relative max-h-[95vh] overflow-y-auto animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Project Inquiry Received!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you for reaching out to <span className="text-amber-400 font-bold">Gupta Studio Entertainment</span>. Our executive tech producer will review your requirements and respond within 12 hours.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-sm shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Book Executive Consultation
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Let's Build Your <span className="text-gradient-gold">Next Project</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Tell us about your Short Drama App, Web Streaming platform, or AI Film production requirements.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-amber-400" /> Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Gupta"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-amber-400" /> Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-cyan-400" /> Company / Studio
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Media Ventures"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Primary Service Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Primary Service Interested In</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="Short Drama App & Web Platform">Short Drama App & Web Platform (ReelShort style)</option>
                  <option value="AI Film & TV Production">AI Film & TV Production (Script to Screen)</option>
                  <option value="Generative AI VFX & Post Production">Generative AI VFX & Post Production</option>
                  <option value="AI Multilingual Voice Dubbing">AI Multilingual Voice Dubbing (25+ Languages)</option>
                  <option value="Full Custom Enterprise Package">Full Custom Enterprise Package</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Project Details & Requirements</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, target launch timeline, or specific drama app features..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:brightness-110 shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry & Request Proposal</span>
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
