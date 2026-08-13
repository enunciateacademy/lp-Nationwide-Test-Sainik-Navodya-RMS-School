import React, { useState } from 'react';
import {
  Globe2,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Users,
  Building,
  Sparkles,
  ArrowRight,
  Radio
} from 'lucide-react';

interface PanIndiaNetworkSectionProps {
  onOpenPartnerModal: () => void;
}

interface HubPoint {
  id: string;
  name: string;
  state: string;
  x: number; // percentage on SVG
  y: number;
  featuredCentres: string;
  activeExams: string;
}

export const PanIndiaNetworkSection: React.FC<PanIndiaNetworkSectionProps> = ({
  onOpenPartnerModal,
}) => {
  const [selectedHub, setSelectedHub] = useState<HubPoint | null>({
    id: 'raj',
    name: 'Jaipur & Jhunjhunu Hub',
    state: 'Rajasthan',
    x: 32,
    y: 35,
    featuredCentres: 'Sainik Gurukuls & Tuition Points',
    activeExams: 'AISSEE Class 6 & 9',
  });

  const hubs: HubPoint[] = [
    {
      id: 'del',
      name: 'Delhi NCR Hub',
      state: 'Delhi NCR',
      x: 38,
      y: 28,
      featuredCentres: 'Educational Academies & Foundation Points',
      activeExams: 'AISSEE, RMS & Board Prep',
    },
    {
      id: 'raj',
      name: 'Jaipur & Jhunjhunu Hub',
      state: 'Rajasthan',
      x: 31,
      y: 34,
      featuredCentres: 'Sainik Gurukuls & Tuition Points',
      activeExams: 'AISSEE Class 6 & 9',
    },
    {
      id: 'up',
      name: 'Lucknow & Varanasi Hub',
      state: 'Uttar Pradesh',
      x: 52,
      y: 34,
      featuredCentres: 'Vidya Coaching Classes & Defence Centres',
      activeExams: 'AISSEE 2027 Series',
    },
    {
      id: 'bih',
      name: 'Patna & Gaya Hub',
      state: 'Bihar',
      x: 64,
      y: 38,
      featuredCentres: 'Tuition Points & Entrance Academies',
      activeExams: 'AISSEE & Navodaya Mock Series',
    },
    {
      id: 'har',
      name: 'Rohtak & Hisar Hub',
      state: 'Haryana',
      x: 35,
      y: 26,
      featuredCentres: 'Defence Aspirants Study Circles',
      activeExams: 'AISSEE Class 6 & 9',
    },
    {
      id: 'uk',
      name: 'Dehradun Valley Hub',
      state: 'Uttarakhand',
      x: 43,
      y: 22,
      featuredCentres: 'RIMC & Sainik Entrance Centres',
      activeExams: 'AISSEE & RIMC Series',
    },
    {
      id: 'mah',
      name: 'Pune & Nagpur Hub',
      state: 'Maharashtra',
      x: 36,
      y: 56,
      featuredCentres: 'National Scholars Tuition Points',
      activeExams: 'AISSEE Class 6 Bilingual',
    },
    {
      id: 'tel',
      name: 'Hyderabad & Warangal Hub',
      state: 'Telangana',
      x: 46,
      y: 62,
      featuredCentres: 'Kakatiya & Deccan Tuition Points',
      activeExams: 'AISSEE 2027 Series',
    },
    {
      id: 'wb',
      name: 'Kolkata & Siliguri Hub',
      state: 'West Bengal',
      x: 72,
      y: 44,
      featuredCentres: 'Pratibha Learning Academies',
      activeExams: 'AISSEE Class 6 & 9',
    },
    {
      id: 'odi',
      name: 'Bhubaneswar & Cuttack Hub',
      state: 'Odisha',
      x: 63,
      y: 54,
      featuredCentres: 'Utkal Career Tuition Points',
      activeExams: 'AISSEE Daily Mock Series',
    },
    {
      id: 'kar',
      name: 'Bengaluru & Belgaum Hub',
      state: 'Karnataka',
      x: 39,
      y: 72,
      featuredCentres: 'South Zone Defence Learning Points',
      activeExams: 'AISSEE Class 6 & 9',
    },
    {
      id: 'asm',
      name: 'Guwahati & Tezpur Hub',
      state: 'Assam',
      x: 84,
      y: 35,
      featuredCentres: 'North-East Sainik Coaching Points',
      activeExams: 'AISSEE 2027 Bilingual',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-xs border border-blue-400/30 uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            Pan-India Digital Learning Grid
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From Your Local Tuition Centre to a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Pan-India Learning Network.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Join a growing network of educational centres working together through a common digital examination and learning platform.
          </p>
        </div>

        {/* Interactive Map & Network Showcase */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Vector Map Visual Container */}
          <div className="lg:col-span-7 bg-slate-950/90 rounded-3xl p-6 border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
              <span className="flex items-center gap-1.5 text-blue-300 font-semibold">
                <Globe2 className="w-4 h-4 text-blue-400" />
                Live Node Synchronization Map
              </span>
              <span className="text-emerald-400 font-medium">● 100% Digital Uptime</span>
            </div>

            {/* Map Canvas */}
            <div className="relative w-full aspect-[4/3.8] bg-slate-900/60 rounded-2xl border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
              
              {/* Stylized India Silhouette Path SVG */}
              <svg
                viewBox="0 0 500 550"
                className="w-full h-full opacity-70 filter drop-shadow-[0_0_15px_rgba(37,99,235,0.15)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified geographic boundary curves for India */}
                <path
                  d="M180,60 L240,40 L280,70 L260,110 L300,120 L350,140 L440,160 L480,180 L440,220 L380,210 L340,240 L370,290 L340,360 L290,440 L240,510 L210,460 L180,380 L140,330 L110,260 L140,210 L120,180 L160,130 Z"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="2"
                />
                
                {/* Interconnecting Network Arcs */}
                <path d="M190,170 Q260,140 260,190" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M260,190 Q320,200 340,220" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M190,170 Q190,270 200,310" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M260,190 Q240,300 240,340" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M340,220 Q320,280 310,310" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M240,340 Q220,380 210,430" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              </svg>

              {/* Interactive Pulsing Hotspots */}
              {hubs.map((hub) => {
                const isSelected = selectedHub?.id === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20"
                    title={hub.name}
                  >
                    <div className="relative flex items-center justify-center">
                      {isSelected && (
                        <span className="absolute w-8 h-8 rounded-full bg-blue-500/30 animate-ping" />
                      )}
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                          isSelected
                            ? 'bg-amber-400 border-white scale-125 shadow-lg shadow-amber-400/50'
                            : 'bg-blue-500 border-slate-900 hover:scale-125'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}

              <div className="absolute bottom-3 left-3 bg-slate-950/80 px-3 py-1.5 rounded-lg text-[10px] text-slate-400 border border-slate-800">
                Click any regional node to inspect hub details
              </div>
            </div>
          </div>

          {/* Right: Selected Hub Details & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Active Hub Card */}
            {selectedHub && (
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-blue-500/40 shadow-xl space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedHub.state}
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded">
                    Network Node Active
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white">
                  {selectedHub.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Participating Types:</span>
                    <span className="font-semibold text-white">{selectedHub.featuredCentres}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Synchronized Curriculum:</span>
                    <span className="font-semibold text-blue-300">{selectedHub.activeExams}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Test Series Timing:</span>
                    <span className="font-semibold text-emerald-400">Uniform All-India Window</span>
                  </div>
                </div>
              </div>
            )}

            {/* Network Pillars */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/60 space-y-4">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Platform Network Standards
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Simultaneous weekend mock tests across participating tuition points.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Standardized AISSEE marking scheme with negative marking simulations.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Central question moderation committee ensuring zero syllabus leakage or errors.</span>
              </div>
            </div>

            <button
              onClick={onOpenPartnerModal}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span>CONNECT YOUR CENTRE TO THE GRID</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
