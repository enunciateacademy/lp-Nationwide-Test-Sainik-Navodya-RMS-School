import React, { useState } from 'react';
import {
  FileCheck2,
  BookOpen,
  Video,
  Trophy,
  BarChart3,
  Award,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Eye,
  X,
  Download,
  PlayCircle,
  FileText
} from 'lucide-react';
import { FEATURES_LIST } from '../data/mockData';
import { FeatureItem } from '../types';

interface SolutionSectionProps {
  onOpenPartnerModal: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenPartnerModal }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  // Close feature modal on Escape key press
  React.useEffect(() => {
    if (!selectedFeature) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFeature(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFeature]);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-amber-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="sainik-test-series" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-800 font-semibold text-xs border border-blue-200 uppercase tracking-wider mb-4">
            Digital Academic Suite
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Everything Your Tuition Centre Needs to Deliver a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
              Modern Learning Experience.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our comprehensive academic infrastructure plugs directly behind your tuition centre brand. You don’t need to hire question creators, video producers, or server engineers.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES_LIST.map((feat, idx) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getFeatureIcon(feat.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {feat.tag}
                  </span>
                </div>

                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                  Feature 0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mb-3">{feat.subtitle}</p>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>

                {/* Sub-points */}
                <ul className="mt-4 space-y-2 text-xs text-slate-500 pt-3 border-t border-slate-100">
                  {feat.previewDetails?.slice(0, 2).map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedFeature(feat)}
                  className="w-full flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-blue-900 bg-blue-50/70 group-hover:bg-blue-100 px-3.5 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    Preview {feat.title}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Preview Modal */}
        {selectedFeature && (
          <div
            onClick={() => setSelectedFeature(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative cursor-default animate-in fade-in zoom-in duration-150"
            >
              
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getFeatureIcon(selectedFeature.iconName)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-slate-900">
                    {selectedFeature.title}
                  </h4>
                  <p className="text-xs text-slate-500">{selectedFeature.subtitle}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  What Partner Centres & Students Receive:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {selectedFeature.previewDetails?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Mock Graphic Representation */}
              <div className="mt-4 p-3.5 rounded-xl bg-blue-950 text-white text-xs flex items-center justify-between">
                <div>
                  <div className="font-bold text-blue-200">Sainik School Entrance 2027 Pattern</div>
                  <div className="text-slate-400 text-[11px]">Fully configured for Class 6 & Class 9</div>
                </div>
                <span className="bg-blue-600 text-white font-semibold px-2.5 py-1 rounded text-[10px]">
                  Bilingual Support
                </span>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedFeature(null);
                    onOpenPartnerModal();
                  }}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  Get Partner Access
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
