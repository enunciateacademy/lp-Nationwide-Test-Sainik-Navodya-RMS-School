import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Building,
  Edit3,
  Award,
  FileCheck,
  Smartphone,
  Layers,
  ArrowRight
} from 'lucide-react';

interface CoBrandingSectionProps {
  onOpenPartnerModal: () => void;
}

export const CoBrandingSection: React.FC<CoBrandingSectionProps> = ({ onOpenPartnerModal }) => {
  const [centreNameInput, setCentreNameInput] = useState('Apex Tuition Centre');
  const [activePreviewTab, setActivePreviewTab] = useState<'portal' | 'test' | 'certificate'>('portal');

  const benefitsList = [
    { text: 'Keep your local brand', highlight: 'No renaming required' },
    { text: 'Keep your student relationships', highlight: 'Direct trust & parent bond' },
    { text: 'Continue your classroom teaching', highlight: 'We handle the digital workload' },
    { text: 'Add digital examinations', highlight: 'Daily AISSEE test series' },
    { text: 'Add national-level competition', highlight: 'All-India rankings & percentiles' },
    { text: 'Add structured study material', highlight: 'Handwritten concept compendiums' },
    { text: 'Add recorded learning', highlight: '24x7 video revision portal' },
  ];

  return (
    <section id="co-branding" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-xs border border-blue-400/30 uppercase tracking-wider mb-4">
            Non-Franchise Identity Model
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Keep Your Identity.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Upgrade Your Capabilities.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We don’t want to replace your tuition centre. We want to strengthen it. Your centre continues under your own name and local identity.
          </p>
        </div>

        {/* The Equation Visual: YOUR CENTRE NAME + ENUNCIATE ACADEMY TECHNOLOGY */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center">
            
            {/* Box 1 */}
            <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-700">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Your Local Legacy</div>
              <div className="font-display font-black text-lg sm:text-xl text-white flex items-center justify-center gap-2">
                <Building className="w-5 h-5 text-amber-400" />
                <span>YOUR CENTRE NAME</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">Classroom Teaching & Direct Mentorship</p>
            </div>

            {/* Plus Symbol */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300 font-black text-xl">
                +
              </div>
              <span className="text-[11px] font-semibold text-blue-300 mt-1 uppercase tracking-wider">
                Seamless Integration
              </span>
            </div>

            {/* Box 2 */}
            <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-700">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Central Powerhouse</div>
              <div className="font-display font-black text-lg sm:text-xl text-white flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span>ENUNCIATE ACADEMY</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">Examinations, Notes & Digital Infra</p>
            </div>

          </div>

          <div className="mt-6 pt-6 border-t border-slate-700/70 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-semibold text-slate-200">
              <span>Resulting Output:</span>
              <span className="bg-slate-900 px-4 py-1.5 rounded-lg border border-blue-500/40 text-white font-bold text-base shadow-inner">
                &ldquo;{centreNameInput || 'Your Tuition Centre'}&rdquo; <span className="text-blue-400 font-medium text-xs sm:text-sm">• Powered by Enunciate Academy</span>
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Co-Brand Simulator & Previewer */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input and Benefits List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                <Edit3 className="w-4 h-4 text-blue-400" />
                Interactive Co-Brand Simulator
              </div>
              <label htmlFor="centre-name-input" className="block text-sm font-semibold text-white mb-2">
                Type Your Tuition / Coaching Centre Name:
              </label>
              <input
                id="centre-name-input"
                type="text"
                value={centreNameInput}
                onChange={(e) => setCentreNameInput(e.target.value)}
                placeholder="e.g. Apex Scholars Academy"
                className="w-full bg-slate-900 border border-slate-600 focus:border-blue-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none shadow-inner"
              />
              <p className="mt-2 text-xs text-slate-400">
                Notice how your centre name stays at the front of every test sheet, portal screen, and national rank badge.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/70 space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                Key Partnership Differentiators
              </div>
              {benefitsList.map((ben, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-medium">{ben.text}</span>
                    <span className="text-slate-400 text-xs block">{ben.highlight}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenPartnerModal}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>CLAIM YOUR CO-BRANDED SETUP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Live Co-Branded Artifact Mockups */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl p-4 sm:p-6 space-y-4">
            
            {/* Mockup Tabs */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Live Co-Branded Mockup
              </span>
              <div className="flex bg-slate-800 rounded-lg p-0.5 text-xs font-medium border border-slate-700">
                <button
                  onClick={() => setActivePreviewTab('portal')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activePreviewTab === 'portal'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Student Portal
                </button>
                <button
                  onClick={() => setActivePreviewTab('test')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activePreviewTab === 'test'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  OMR Test Paper
                </button>
                <button
                  onClick={() => setActivePreviewTab('certificate')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activePreviewTab === 'certificate'
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  AIR Merit Card
                </button>
              </div>
            </div>

            {/* Artifact 1: Student App Portal */}
            {activePreviewTab === 'portal' && (
              <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-xs">
                      {centreNameInput.charAt(0) || 'C'}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {centreNameInput || 'Your Tuition Centre'}
                      </div>
                      <div className="text-[10px] text-blue-400 font-medium">
                        Powered by Enunciate Academy
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Student Login Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-[10px] text-slate-400">Daily Sainik Test</div>
                    <div className="text-xs font-bold text-white mt-0.5">Mock Test 14 (Live)</div>
                    <div className="text-[10px] text-emerald-400 font-semibold mt-1">Start Now ➔</div>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                    <div className="text-[10px] text-slate-400">Handwritten Notes</div>
                    <div className="text-xs font-bold text-white mt-0.5">Math Mensuration #4</div>
                    <div className="text-[10px] text-blue-400 font-semibold mt-1">Download PDF ➔</div>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs flex items-center justify-between">
                  <span className="text-slate-300">Your All India Rank this week:</span>
                  <span className="text-amber-400 font-extrabold">AIR #48 (98.4 %ile)</span>
                </div>
              </div>
            )}

            {/* Artifact 2: Test Paper Header */}
            {activePreviewTab === 'test' && (
              <div className="bg-white text-slate-900 rounded-xl p-5 border border-slate-300 shadow-md space-y-3 font-sans">
                <div className="text-center border-b-2 border-slate-900 pb-3">
                  <div className="text-xs font-black uppercase tracking-wider text-slate-700">
                    OFFICIAL AISSEE ENTRANCE EXAMINATION 2027 SERIES
                  </div>
                  <div className="text-base font-extrabold text-blue-900 mt-1">
                    {centreNameInput || 'YOUR TUITION CENTRE'}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    Academic Delivery & Examination Technology by Enunciate Academy
                  </div>
                </div>
                
                <div className="flex justify-between text-xs font-medium text-slate-600 pt-1">
                  <span>Student: <strong>Aarav Sharma</strong></span>
                  <span>Roll No: <strong>EA-2027-884</strong></span>
                  <span>Time: <strong>150 Mins</strong></span>
                  <span>Max Marks: <strong>300</strong></span>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">Q.14 (Intelligence): Find the missing number in series: 4, 9, 25, 49, 121, ?</p>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                    <div>(A) 144</div>
                    <div className="font-bold text-blue-700">(B) 169 [Prime Squares]</div>
                    <div>(C) 196</div>
                    <div>(D) 225</div>
                  </div>
                </div>
              </div>
            )}

            {/* Artifact 3: Merit Card */}
            {activePreviewTab === 'certificate' && (
              <div className="bg-gradient-to-br from-amber-50 to-blue-50 text-slate-900 rounded-xl p-6 border-2 border-amber-300/80 shadow-md space-y-3 text-center">
                <div className="inline-flex items-center gap-1 bg-amber-200/80 text-amber-900 text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  ⭐ All India Performance Citation
                </div>
                <div className="text-lg font-black text-slate-900">
                  {centreNameInput || 'YOUR TUITION CENTRE'}
                </div>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Certifies that student <strong className="text-slate-900">Priya Rathore</strong> ranked <strong className="text-blue-900">AIR 2 (99.82 Percentile)</strong> in the All-India Sainik School Mock Examination 2027.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-300">
                  <span>Centre Director Signature</span>
                  <span className="font-bold text-blue-900">Enunciate Academy Academic Council</span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
