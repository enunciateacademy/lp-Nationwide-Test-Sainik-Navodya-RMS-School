import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  ArrowRight,
  MessageSquare,
  Building2,
  Award
} from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

interface FinalCtaSectionProps {
  onOpenPartnerModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="partner-apply" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-xs border border-blue-400/30 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            2027 Academic Partnership Onboarding
          </div>
          
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Take Your Tuition Centre to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Next Level?
            </span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Become an Enunciate Academy Partner Centre and give your students access to a structured Pan-India test and learning experience.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Keep 100% Brand Name
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Zero App Development Costs
            </span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sainik School Entrance 2027
            </span>
          </div>
        </div>

        {/* Lead Capture Form Card and Direct Contact Hub */}
        <div className="max-w-4xl mx-auto">
          <LeadCaptureForm formIdSuffix="final-cta" />
        </div>

      </div>
    </section>
  );
};
