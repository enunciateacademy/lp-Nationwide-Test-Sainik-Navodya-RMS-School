import React, { useState, useEffect } from 'react';
import { ShieldCheck, PhoneCall, ArrowRight, Menu, X, CheckCircle2 } from 'lucide-react';

interface NavbarProps {
  onOpenPartnerModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPartnerModal, onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sainik Test Series 2027', href: '#sainik-test-series' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Your Brand Co-Branding', href: '#co-branding' },
    { label: 'All-India Rankings', href: '#rankings' },
    { label: 'Partner Benefits', href: '#benefits' },
    { label: 'FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(href.replace('#', ''));
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-md border-b border-slate-800 text-white'
            : 'bg-slate-900 border-b border-slate-800/80 text-white'
        }`}
      >
        {/* Top Mini Trust Bar */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-slate-800/60 py-1.5 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 font-medium px-2 py-0.5 rounded-full border border-blue-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                2027 Admissions Open
              </span>
              <span className="hidden sm:inline text-slate-400">
                Flagship: Sainik School (AISSEE) All India Test Series for Tuition Centres
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Retain Your Centre Name
              </span>
              <span className="hidden md:inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero App Development Cost
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md shadow-blue-500/20 border border-blue-400/30 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                    ENUNCIATE
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30">
                    Academy
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 tracking-wide font-medium">
                  Pan-India Examination & Learning Infrastructure
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-white transition-colors cursor-pointer py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20am%20a%20tuition%20centre%20director%20interested%20in%20partnering."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-300 hover:text-emerald-200 text-xs font-bold px-3.5 py-2 rounded-lg border border-emerald-500/40 transition-colors shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>9492444498</span>
              </a>

              <button
                id="nav-partner-cta-btn"
                onClick={onOpenPartnerModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg shadow-md shadow-blue-900/30 hover:shadow-blue-500/20 border border-blue-400/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>BECOME A PARTNER CENTRE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg text-sm shadow-md"
              >
                <span>BECOME A PARTNER CENTRE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
