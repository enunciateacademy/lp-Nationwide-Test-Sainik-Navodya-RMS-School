import React from 'react';
import {
  Layers,
  Cpu,
  Users,
  MessageSquareHeart,
  Medal,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { OWNER_BENEFITS } from '../data/mockData';

interface BenefitsSectionProps {
  onOpenPartnerModal: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenPartnerModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-600" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-6 h-6 text-rose-600" />;
      case 'Medal':
        return <Medal className="w-6 h-6 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-600" />;
      default:
        return <TrendingUp className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-xs border border-blue-200 uppercase tracking-wider mb-4">
            Direct Director Advantages
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Why Tuition Centres Partner With{' '}
            <span className="text-blue-700">Enunciate Academy</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Designed specifically for independent tuition owners and coaching directors who want to scale their academic reputation without increasing overhead.
          </p>
        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OWNER_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(benefit.icon)}
                </div>

                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                  Benefit 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-800 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">{benefit.subtitle}</p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant operational capability</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Upgrade Your Coaching Institute Today
            </h4>
            <p className="text-sm text-slate-300 mt-1 max-w-lg">
              Speak directly with our partnership team to explore academic schedule alignment and customized batch margins.
            </p>
          </div>
          <button
            onClick={onOpenPartnerModal}
            className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm cursor-pointer flex items-center gap-2"
          >
            <span>JOIN PARTNER NETWORK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
