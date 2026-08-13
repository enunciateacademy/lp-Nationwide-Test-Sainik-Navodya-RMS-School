import React from 'react';
import {
  Building2,
  UserCheck,
  Laptop,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

interface HowItWorksSectionProps {
  onOpenPartnerModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenPartnerModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-white" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-white" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-white" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200 uppercase tracking-wider mb-4">
            Simple 4-Step Partnership Journey
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            How Your Tuition Centre Partners With{' '}
            <span className="text-blue-700">Enunciate Academy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Go live with full Sainik School digital test series, handwritten study material, and All-India rankings in less than 48 hours.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-300 z-0" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    {getIcon(step.iconName)}
                  </div>
                  <span className="font-display font-black text-3xl text-slate-300 group-hover:text-blue-600 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                  Step {idx + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Highlight Badge */}
              <div className="pt-3 border-t border-slate-200/70">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-900 bg-blue-100/70 px-2.5 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenPartnerModal}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>REGISTER YOUR TUITION CENTRE NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
