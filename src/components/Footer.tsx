import React, { useState } from 'react';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe2,
  X
} from 'lucide-react';

interface FooterProps {
  onOpenPartnerModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPartnerModal, onScrollToSection }) => {
  const [activeModalContent, setActiveModalContent] = useState<string | null>(null);

  // Close legal modal on Escape key press
  React.useEffect(() => {
    if (!activeModalContent) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalContent(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalContent]);

  const openLegalModal = (type: string) => {
    setActiveModalContent(type);
  };

  return (
    <>
      <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
            
            {/* Column 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-black text-xl text-white tracking-tight">
                    ENUNCIATE ACADEMY
                  </div>
                  <div className="text-xs font-semibold text-blue-400">
                    Pan-India Digital Examination & Learning Network
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Empowering independent tuition centres, coaching points, and educational academies across India with world-class AISSEE Sainik School test series, handwritten concept notes, and All-India ranking infrastructure.
              </p>

              <div className="pt-2 flex flex-col gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>enunciateacademy@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">Direct & WhatsApp: +91 9492444498</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-400" />
                  <span>Serving Partner Centres Across All 28 States & 8 UTs 🇮🇳</span>
                </div>
              </div>
            </div>

            {/* Column 3: Flagship Programs */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="font-display font-bold text-white uppercase tracking-wider text-xs">
                Academic Programs
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onScrollToSection('sainik-test-series')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Sainik School Test Series 2027 (AISSEE)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('sainik-test-series')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Handwritten Model Notes Library
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('sainik-test-series')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Recorded Concept Video Masterclasses
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('rankings')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    All-India Benchmark Leaderboards
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Quick Navigation */}
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="font-display font-bold text-white uppercase tracking-wider text-xs">
                Partner Navigation
              </div>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => onScrollToSection('how-it-works')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('co-branding')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Your Brand Co-Branding
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('business-model')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Business Model & Margins
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onScrollToSection('faqs')}
                    className="hover:text-white transition-colors cursor-pointer text-left text-slate-300"
                  >
                    Tuition Owner FAQs
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 5: Contact CTA */}
            <div className="space-y-3">
              <div className="font-display font-bold text-white uppercase tracking-wider text-xs">
                Partner With Us
              </div>
              <p className="text-xs text-slate-300">
                Ready to power your tuition centre with Pan-India testing?
              </p>
              
              <button
                onClick={onOpenPartnerModal}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Partner With Enunciate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20am%20a%20tuition%20centre%20owner%20interested%20in%20partnering."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-emerald-300 border border-emerald-500/40 font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: 9492444498</span>
              </a>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © {new Date().getFullYear()} Enunciate Academy. All rights reserved. Building India’s Connected Tuition Network.
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => openLegalModal('Privacy Policy')}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => openLegalModal('Terms & Conditions')}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button
                onClick={() => openLegalModal('Partner Code of Academic Integrity')}
                className="hover:text-slate-300 transition-colors cursor-pointer"
              >
                Academic Integrity
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Simple Legal Modal */}
      {activeModalContent && (
        <div
          onClick={() => setActiveModalContent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative cursor-default animate-in fade-in zoom-in-95"
          >
            <button
              onClick={() => setActiveModalContent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="font-display font-bold text-xl text-slate-900 mb-4">
              {activeModalContent}
            </h4>

            <div className="text-xs text-slate-600 space-y-3 max-h-72 overflow-y-auto pr-2">
              <p>
                <strong>1. Institutional Independence:</strong> Partner tuition centres retain 100% ownership of their registered brand, student contacts, fee collections, and local classroom operations.
              </p>
              <p>
                <strong>2. Academic Infrastructure:</strong> Enunciate Academy delivers daily Sainik School test series, handwritten study material, and online test analytics for enrolled students.
              </p>
              <p>
                <strong>3. Privacy & Student Data Protection:</strong> All student examination scores, contact details, and parent records submitted via partner centres are treated with strict confidentiality.
              </p>
              <p>
                <strong>4. Fair Ranking Standards:</strong> All-India Test Series percentiles and rankings are computed transparently based on verified test submissions under uniform timer constraints.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalContent(null)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2 rounded-lg cursor-pointer"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
