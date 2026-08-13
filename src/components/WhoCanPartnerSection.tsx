import React from 'react';
import {
  GraduationCap,
  Building2,
  Shield,
  BookOpen,
  School,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface WhoCanPartnerSectionProps {
  onOpenPartnerModal: () => void;
}

export const WhoCanPartnerSection: React.FC<WhoCanPartnerSectionProps> = ({ onOpenPartnerModal }) => {
  const partnerCategories = [
    {
      title: 'Tuition Centres',
      desc: 'Independent neighbourhood tuition points teaching CBSE/State Board students who want to introduce defence entrance preparation.',
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      badge: 'High Expansion Potential',
    },
    {
      title: 'Coaching Centres',
      desc: 'Established coaching institutes looking to expand beyond conventional school syllabus with premium entrance test series.',
      icon: <Building2 className="w-6 h-6 text-indigo-600" />,
      badge: 'Multi-Batch Support',
    },
    {
      title: 'Sainik School Coaching Centres',
      desc: 'Specialized AISSEE coaching centres needing daily error-free mock tests, bilingual papers, and national leaderboard benchmarking.',
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      badge: 'Core Target Match',
    },
    {
      title: 'Educational Academies',
      desc: 'Regional academies aiming to provide structured handwritten notes and recorded video lectures to their student rosters.',
      icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
      badge: 'Full Digital Stack',
    },
    {
      title: 'After-School Learning Centres',
      desc: 'Evening learning points seeking structured daily academic schedules and automated WhatsApp parent report delivery.',
      icon: <School className="w-6 h-6 text-purple-600" />,
      badge: 'Automated Operations',
    },
    {
      title: 'Small & Medium Institutes',
      desc: 'Single-classroom or multi-room institutes wanting to compete shoulder-to-shoulder with large venture-funded edtech brands.',
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      badge: 'Zero CapEx',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-xs border border-blue-200 uppercase tracking-wider mb-4">
            Institutional Eligibility
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Already Teaching Students?{' '}
            <span className="text-blue-700">You Can Become a Partner.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you teach 15 students in a local centre or manage 300+ students across multiple classrooms, Enunciate Academy scales seamlessly with your institute.
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {partnerCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-800 transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Ready for 2027 AISSEE
                </span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenPartnerModal}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>APPLY FOR YOUR CENTRE ENROLLMENT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
