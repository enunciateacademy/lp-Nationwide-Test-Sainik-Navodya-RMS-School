import React, { useState } from 'react';
import {
  Shield,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  Play,
  FileSpreadsheet,
  Globe2,
  ChevronRight,
  BarChart3,
  Clock,
  BookMarked,
  Tablet,
  GraduationCap
} from 'lucide-react';

import sainikSchoolCadetsImg from '../assets/images/sainik_school_cadets_1786644067651.jpg';
import navodayaStudentsImg from '../assets/images/navodaya_students_study_1786644114144.jpg';
import studentsExamTabletsImg from '../assets/images/students_exam_tablets_1786644083863.jpg';
import studentsReadingNotesImg from '../assets/images/students_reading_notes_1786644099517.jpg';

interface HeroSectionProps {
  onOpenPartnerModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPartnerModal,
  onScrollToSection,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'subjects' | 'leaderboard'>('overview');

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background Graphic Elements & Subtle Network Grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-20 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle India Network Nodes Graphic Background */}
      <div className="absolute top-12 right-12 hidden xl:block opacity-15 pointer-events-none">
        <svg width="340" height="340" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="50" r="4" fill="#60A5FA" />
          <circle cx="60" cy="90" r="4" fill="#60A5FA" />
          <circle cx="140" cy="85" r="4" fill="#60A5FA" />
          <circle cx="95" cy="115" r="5" fill="#F59E0B" />
          <circle cx="75" cy="150" r="4" fill="#60A5FA" />
          <circle cx="120" cy="160" r="4" fill="#60A5FA" />
          <line x1="100" y1="50" x2="60" y2="90" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="100" y1="50" x2="140" y2="85" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="60" y1="90" x2="95" y2="115" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="140" y1="85" x2="95" y2="115" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="95" y1="115" x2="75" y2="150" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="95" y1="115" x2="120" y2="160" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Badge */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/95 border border-slate-700 shadow-inner mb-6 backdrop-blur-sm">
            <span className="text-base">🇮🇳</span>
            <span className="text-xs sm:text-sm font-bold tracking-wide text-blue-200">
              Building a connected network of Tuition & Coaching Centres across India
            </span>
          </div>

          {/* Large Headline requested by User */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
            Your Tuition / Coaching Students Can Now write a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Pan-India Test & Learning Experience,
            </span>{' '}
            <span className="text-white">National level Ranking</span>
          </h1>

          {/* Subheadline with high legibility */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-3xl">
            Partner with <strong className="text-white font-bold underline decoration-blue-400 underline-offset-4">Enunciate Academy</strong> to give your students daily Sainik School & Navodaya mock examinations on tabs, handwritten expert notes, and All-India performance rankings —{' '}
            <span className="text-amber-300 font-semibold">under your own tuition centre brand name.</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              id="hero-primary-cta"
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 border border-blue-400/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>BECOME A PARTNER CENTRE</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-secondary-cta"
              onClick={() => onScrollToSection('student-visual-experience')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-6 py-4 rounded-xl border border-slate-600 transition-all cursor-pointer"
            >
              <span>SEE STUDENT LEARNING IMAGES</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>

          {/* Micro-Features Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-200 font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Keep 100% Local Brand Identity
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Earn Margin on Every Enrollment
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              Sainik (AISSEE) & Navodaya (JNVST) 2027
            </span>
          </div>

          {/* 4 Quick Visual Preview Chips with Real Photos */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-4xl">
            <div
              onClick={() => onScrollToSection('student-visual-experience')}
              className="group bg-slate-800/90 hover:bg-slate-800 p-2 rounded-2xl border border-slate-700 hover:border-blue-400 transition-all cursor-pointer flex flex-col items-center text-center shadow-md"
            >
              <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                <img
                  src={sainikSchoolCadetsImg}
                  alt="Sainik School Cadets"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1 left-1 bg-blue-900/90 text-[10px] font-bold text-blue-200 px-1.5 py-0.5 rounded">
                  AISSEE 2027
                </span>
              </div>
              <span className="text-xs font-bold text-white group-hover:text-blue-300 line-clamp-1">
                Sainik School Cadets
              </span>
              <span className="text-[10px] text-slate-300">Daily Mock Tests</span>
            </div>

            <div
              onClick={() => onScrollToSection('student-visual-experience')}
              className="group bg-slate-800/90 hover:bg-slate-800 p-2 rounded-2xl border border-slate-700 hover:border-emerald-400 transition-all cursor-pointer flex flex-col items-center text-center shadow-md"
            >
              <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                <img
                  src={navodayaStudentsImg}
                  alt="Navodaya Students"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1 left-1 bg-emerald-900/90 text-[10px] font-bold text-emerald-200 px-1.5 py-0.5 rounded">
                  JNVST
                </span>
              </div>
              <span className="text-xs font-bold text-white group-hover:text-emerald-300 line-clamp-1">
                Navodaya Aspirants
              </span>
              <span className="text-[10px] text-slate-300">Mental Ability Drills</span>
            </div>

            <div
              onClick={() => onScrollToSection('student-visual-experience')}
              className="group bg-slate-800/90 hover:bg-slate-800 p-2 rounded-2xl border border-slate-700 hover:border-purple-400 transition-all cursor-pointer flex flex-col items-center text-center shadow-md"
            >
              <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                <img
                  src={studentsExamTabletsImg}
                  alt="Students Writing Exam on Tabs"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1 left-1 bg-purple-900/90 text-[10px] font-bold text-purple-200 px-1.5 py-0.5 rounded">
                  Tab CBT
                </span>
              </div>
              <span className="text-xs font-bold text-white group-hover:text-purple-300 line-clamp-1">
                Tests on Tabs & Mobile
              </span>
              <span className="text-[10px] text-slate-300">Live Timer & OMR</span>
            </div>

            <div
              onClick={() => onScrollToSection('student-visual-experience')}
              className="group bg-slate-800/90 hover:bg-slate-800 p-2 rounded-2xl border border-slate-700 hover:border-amber-400 transition-all cursor-pointer flex flex-col items-center text-center shadow-md"
            >
              <div className="w-full h-20 rounded-xl overflow-hidden mb-2 relative">
                <img
                  src={studentsReadingNotesImg}
                  alt="Students Reading Handwritten Notes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute bottom-1 left-1 bg-amber-900/90 text-[10px] font-bold text-amber-200 px-1.5 py-0.5 rounded">
                  Handwritten
                </span>
              </div>
              <span className="text-xs font-bold text-white group-hover:text-amber-300 line-clamp-1">
                Handwritten Notes
              </span>
              <span className="text-[10px] text-slate-300">Formula Sheets</span>
            </div>
          </div>

        </div>

        {/* Hero Visual: Modern B2B Centre Dashboard Mockup */}
        <div className="mt-10 lg:mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-slate-700/80 via-slate-800/50 to-slate-900/90 shadow-2xl shadow-blue-950/60 border border-slate-700/70 backdrop-blur-xl">
            {/* Top Mockup Header Bar */}
            <div className="bg-slate-950/90 px-4 py-3 rounded-t-xl border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="h-4 w-px bg-slate-800 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                    Partner Tuition Portal
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    Apex Scholars Point <span className="text-slate-500 font-normal">• Powered by Enunciate Academy</span>
                  </span>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center gap-3 text-xs">
                <span className="hidden sm:inline-flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Daily Test Window: 04:00 PM – 09:00 PM
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Sync Active
                </span>
              </div>
            </div>

            {/* Dashboard Body Content */}
            <div className="p-4 sm:p-6 bg-slate-900/90 rounded-b-xl space-y-6">
              
              {/* Row 1: Key Performance & Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                
                {/* Metric 1 */}
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/70 hover:border-blue-500/40 transition-colors">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Today's Test</div>
                  <div className="mt-1 text-xs font-bold text-white line-clamp-1">AISSEE Mock #14</div>
                  <div className="mt-1 text-[10px] text-blue-400 font-semibold">Math & Intelligence</div>
                </div>

                {/* Metric 2 */}
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/70 hover:border-blue-500/40 transition-colors">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Students Appeared</div>
                  <div className="mt-1 text-base font-bold text-white flex items-baseline gap-1">
                    42 <span className="text-xs text-slate-400 font-normal">/ 45 enrolled</span>
                  </div>
                  <div className="mt-1 text-[10px] text-emerald-400 font-semibold">93.3% Attendance</div>
                </div>

                {/* Metric 3 */}
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/70 hover:border-blue-500/40 transition-colors">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Centre Average</div>
                  <div className="mt-1 text-base font-bold text-emerald-400">84.6%</div>
                  <div className="mt-1 text-[10px] text-slate-400">+4.2% from last week</div>
                </div>

                {/* Metric 4 */}
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/70 hover:border-blue-500/40 transition-colors">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Centre Rank</div>
                  <div className="mt-1 text-base font-bold text-amber-400">#1 <span className="text-xs text-slate-400 font-normal">in District</span></div>
                  <div className="mt-1 text-[10px] text-amber-300 font-semibold">Top in Region ⭐</div>
                </div>

                {/* Metric 5 */}
                <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/70 hover:border-blue-500/40 transition-colors">
                  <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">State Rank</div>
                  <div className="mt-1 text-base font-bold text-sky-300">#12 <span className="text-xs text-slate-400 font-normal">in State</span></div>
                  <div className="mt-1 text-[10px] text-slate-400">Top 3% percentile</div>
                </div>

                {/* Metric 6 */}
                <div className="bg-gradient-to-br from-blue-950/80 to-indigo-950/80 p-3.5 rounded-xl border border-blue-500/40 hover:border-blue-400 transition-colors">
                  <div className="text-[11px] font-medium text-blue-300 uppercase tracking-wider">All India Rank</div>
                  <div className="mt-1 text-base font-bold text-white">#46 <span className="text-xs text-blue-300 font-normal">AIR</span></div>
                  <div className="mt-1 text-[10px] text-emerald-300 font-semibold">Among 1,200+ Centres</div>
                </div>

              </div>

              {/* Interactive Tabs inside Mockup */}
              <div className="border border-slate-700/80 rounded-xl bg-slate-950/60 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4 text-blue-400" />
                      Live Academic Performance Matrix
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center bg-slate-800/90 rounded-lg p-0.5 text-xs font-medium border border-slate-700">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'overview'
                          ? 'bg-blue-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Classroom Overview
                    </button>
                    <button
                      onClick={() => setActiveTab('subjects')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'subjects'
                          ? 'bg-blue-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Subject Strength
                    </button>
                    <button
                      onClick={() => setActiveTab('leaderboard')}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === 'leaderboard'
                          ? 'bg-blue-600 text-white font-semibold shadow'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Top Batch Rankers
                    </button>
                  </div>
                </div>

                {/* Tab 1: Overview */}
                {activeTab === 'overview' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Mathematics Mastery</span>
                        <span className="font-semibold text-emerald-400">88.4%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[88%]"></div>
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">Arithmetic & Mensuration test scores high.</p>
                    </div>

                    <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Intelligence / Reasoning</span>
                        <span className="font-semibold text-blue-400">86.2%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full w-[86%]"></div>
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">Analogy & Pattern completion strong.</p>
                    </div>

                    <div className="bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span>Language & General Knowledge</span>
                        <span className="font-semibold text-amber-400">79.1%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-amber-500 rounded-full w-[79%]"></div>
                      </div>
                      <p className="mt-2 text-[11px] text-slate-400">Recommended: Assign GK Handwritten Sheet #8.</p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Subjects */}
                {activeTab === 'subjects' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="font-medium text-slate-200">Sainik Math (50 Questions / 150 Marks)</span>
                      <span className="text-emerald-400 font-bold">132 / 150 Avg. (High Speed)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="font-medium text-slate-200">Intelligence Ability (25 Questions / 50 Marks)</span>
                      <span className="text-blue-400 font-bold">44 / 50 Avg. (Accuracy 92%)</span>
                    </div>
                    <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      <span className="font-medium text-slate-200">English / Regional Language (25 Questions / 50 Marks)</span>
                      <span className="text-amber-400 font-bold">41 / 50 Avg. (Grammar High)</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Leaderboard */}
                {activeTab === 'leaderboard' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800 pb-2">
                          <th className="py-1 px-2 font-medium">Batch Rank</th>
                          <th className="py-1 px-2 font-medium">Student Name</th>
                          <th className="py-1 px-2 font-medium">Test Score</th>
                          <th className="py-1 px-2 font-medium">AIR Projection</th>
                          <th className="py-1 px-2 font-medium">Parent Report</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60 text-slate-300">
                        <tr>
                          <td className="py-2 px-2 font-bold text-amber-400">#1 (Centre)</td>
                          <td className="py-2 px-2 font-medium text-white">Aarav S.</td>
                          <td className="py-2 px-2 font-semibold text-emerald-400">288 / 300 (96%)</td>
                          <td className="py-2 px-2 text-blue-400 font-bold">Top 50 AIR</td>
                          <td className="py-2 px-2"><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Sent via WhatsApp</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold text-slate-300">#2 (Centre)</td>
                          <td className="py-2 px-2 font-medium text-white">Rohit K.</td>
                          <td className="py-2 px-2 font-semibold text-emerald-400">276 / 300 (92%)</td>
                          <td className="py-2 px-2 text-blue-400 font-bold">Top 200 AIR</td>
                          <td className="py-2 px-2"><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Sent via WhatsApp</span></td>
                        </tr>
                        <tr>
                          <td className="py-2 px-2 font-bold text-amber-600">#3 (Centre)</td>
                          <td className="py-2 px-2 font-medium text-white">Tanvi P.</td>
                          <td className="py-2 px-2 font-semibold text-emerald-400">270 / 300 (90%)</td>
                          <td className="py-2 px-2 text-blue-400 font-bold">Top 350 AIR</td>
                          <td className="py-2 px-2"><span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">Sent via WhatsApp</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

              </div>

              {/* Bottom Quick Feature Highlights inside Mockup */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
                <div className="flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-blue-400" />
                  <span>Includes 150+ Daily Test Papers & 80+ Handwritten PDF Notes</span>
                </div>
                <div className="text-blue-300 font-medium">
                  Instant OMR & CBT Online Mode Available
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
