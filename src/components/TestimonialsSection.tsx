import React from 'react';
import { Quote, Building, MapPin, CheckCircle, Info, Sparkles } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenPartnerModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenPartnerModal }) => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-300 uppercase tracking-wider mb-4">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            Partner Feedback & Simulations
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            How Tuition Centre Owners Experience the{' '}
            <span className="text-blue-700">Enunciate Partnership</span>
          </h2>
          
          {/* Honest Transparency Notice */}
          <div className="mt-4 inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Illustrative partner experiences representing common tuition point transformation journeys</span>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {DEMO_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              {/* Demo Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded bg-slate-200 text-slate-700 uppercase tracking-wider">
                  Partner Experience Model
                </span>
                <Quote className="w-6 h-6 text-blue-300 group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Quote Body */}
              <blockquote className="text-sm text-slate-700 italic leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author & Centre Details */}
              <div className="pt-4 border-t border-slate-200">
                <div className="font-display font-bold text-base text-slate-900">
                  {t.name}
                </div>
                <div className="text-xs font-medium text-blue-700 flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5" />
                  {t.centreName}
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {t.location}
                </div>
                <div className="mt-2 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block">
                  {t.studentsCount} • {t.partnerSince}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
