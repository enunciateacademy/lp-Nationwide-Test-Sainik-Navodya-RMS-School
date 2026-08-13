import React, { useState } from 'react';
import {
  ShieldCheck,
  Building,
  GraduationCap,
  ArrowDown,
  DollarSign,
  TrendingUp,
  Percent,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

interface BusinessModelSectionProps {
  onOpenPartnerModal: () => void;
}

export const BusinessModelSection: React.FC<BusinessModelSectionProps> = ({ onOpenPartnerModal }) => {
  const [estimatedBatchSize, setEstimatedBatchSize] = useState<number>(45);

  return (
    <section id="business-model" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200 uppercase tracking-wider mb-4">
            <Percent className="w-3.5 h-3.5 text-emerald-600" />
            Transparent B2B Economics
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Simple Partnership.{' '}
            <span className="text-emerald-700">Shared Growth.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            You bring the students and local academic support. We provide the centralized digital academic infrastructure. No upfront franchise fee. No complicated royalties.
          </p>
        </div>

        {/* Visual 3-Tier Flow Diagram */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            
            {/* Box 1: Enunciate Academy */}
            <div className="w-full bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-lg text-center relative">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-400/30 uppercase tracking-wider mb-2">
                Centralized Infrastructure
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                ENUNCIATE ACADEMY
              </h3>
              <p className="text-sm text-blue-200 font-medium mt-1">
                Content + Tests + Video Lessons + Handwritten Notes + All-India Technology
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center py-1">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold shadow-sm">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Delivered Seamlessly To
              </span>
            </div>

            {/* Box 2: Partner Tuition Centre */}
            <div className="w-full bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-2xl p-6 sm:p-7 border border-blue-600 shadow-xl text-center relative">
              <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Your Local Tuition Point
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                PARTNER TUITION CENTRES ACROSS INDIA
              </h3>
              <p className="text-sm text-blue-100 font-medium mt-1">
                Local Classroom Teaching + In-Person Mentorship + Direct Student Relationship
              </p>
              <div className="mt-3 inline-block bg-white/10 px-3.5 py-1 rounded-lg text-xs text-amber-300 font-semibold border border-white/20">
                ⭐ Partner centres earn a healthy margin on every enrolled student
              </div>
            </div>

            {/* Connecting Arrow */}
            <div className="flex flex-col items-center py-1">
              <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shadow-sm">
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </div>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Combined Benefit Reaches
              </span>
            </div>

            {/* Box 3: Students */}
            <div className="w-full bg-slate-50 text-slate-900 rounded-2xl p-6 sm:p-7 border-2 border-slate-300 shadow-md text-center">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                The Beneficiary
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900">
                STUDENTS & ASPIRANTS
              </h3>
              <p className="text-sm text-slate-600 font-medium mt-1">
                Daily Testing + Clear Conceptual Notes + High AISSEE 2027 Ranks + Parent Satisfaction
              </p>
            </div>

          </div>
        </div>

        {/* Commercial Terms & Pricing Callout Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                No Public Price Gouging
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                B2B Partner Pricing & Institutional Margins
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We customize partner pricing based on your tuition centre’s batch size, regional requirements, and chosen academic programs. Partner centres receive bulk institutional rates and retain healthy profit margins.
              </p>
              
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero software licensing or setup fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flexible batch enrollment (Start with as few as 10 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated institutional account manager for your centre</span>
                </li>
              </ul>
            </div>

            {/* Interactive Batch Size Margin Estimator */}
            <div className="lg:col-span-5 bg-slate-800/90 p-6 rounded-2xl border border-slate-700/80 space-y-4 text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Your Expected Batch Size:
              </div>
              <div className="text-3xl font-black text-amber-400">
                {estimatedBatchSize} Students
              </div>
              
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={estimatedBatchSize}
                onChange={(e) => setEstimatedBatchSize(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-slate-400">
                <span>10 (Starter)</span>
                <span>100 (Medium)</span>
                <span>250+ (Large)</span>
              </div>

              <div className="p-3 bg-slate-900 rounded-xl text-xs space-y-1 text-left">
                <div className="flex justify-between text-slate-300">
                  <span>Digital Exam System:</span>
                  <span className="text-emerald-400 font-bold">100% Covered</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Centre Commercial Margin:</span>
                  <span className="text-amber-400 font-bold">Institutional Tier</span>
                </div>
              </div>

              <button
                id="get-partner-pricing-btn"
                onClick={onOpenPartnerModal}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black py-3.5 px-4 rounded-xl shadow-lg transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>GET PARTNER PRICING</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
