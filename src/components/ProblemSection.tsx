import React from 'react';
import {
  Clock,
  FileText,
  ServerCrash,
  LineChart,
  ShieldAlert,
  SmartphoneNfc,
  Sparkles,
  ArrowDown,
  CheckCircle2,
  XCircle,
} from 'lucide-react';
import { PROBLEM_POINTS } from '../data/mockData';

interface ProblemSectionProps {
  onOpenPartnerModal: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenPartnerModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-5 h-5 text-red-500" />,
    FileText: <FileText className="w-5 h-5 text-red-500" />,
    ServerCrash: <ServerCrash className="w-5 h-5 text-red-500" />,
    LineChart: <LineChart className="w-5 h-5 text-red-500" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-red-500" />,
    SmartphoneNfc: <SmartphoneNfc className="w-5 h-5 text-red-500" />,
    Sparkles: <Sparkles className="w-5 h-5 text-red-500" />,
  };

  return (
    <section id="challenges" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 font-semibold text-xs border border-red-200 uppercase tracking-wider mb-4">
            The Tuition Centre Dilemma
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Running a Tuition Centre Is Hard.{' '}
            <span className="text-red-600">Building Everything Digitally Is Even Harder.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            As a tuition centre director or educator, your superpower is teaching and mentoring students. Yet modern competition forces you to waste hundreds of hours managing digital tasks.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_POINTS.map((problem, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-red-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {iconMap[problem.icon] || <XCircle className="w-5 h-5 text-red-500" />}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-red-700 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* The High Cost & Franchise Trap Highlight */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                ⚠️ The Franchise Trap
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Expensive Franchises Erase Your Local Identity
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Traditional franchises demand lakhs in upfront royalty and force you to rename your institute, destroying the goodwill you built over years in your city.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-blue-300 font-medium">
              <span>Enunciate Academy Solution ➔</span>
              <span className="text-white font-bold">100% Brand Retention</span>
            </div>
          </div>
        </div>

        {/* Transition Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 rounded-2xl p-8 sm:p-10 text-white shadow-xl text-center relative overflow-hidden">
            {/* Background shimmer */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center mx-auto text-blue-300">
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Enunciate Academy helps you solve these problems.
              </h3>
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
                We provide the central academic engine, daily Sainik School tests, handwritten notes, recorded courses, and national ranking. 
                <strong className="text-white"> You simply teach in your classroom.</strong>
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenPartnerModal}
                  className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer text-sm"
                >
                  <span>SEE PARTNERSHIP DETAILS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
