import React, { useState } from 'react';
import {
  ShieldCheck,
  Tablet,
  FileText,
  Trophy,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  Compass,
  GraduationCap,
  Layers,
  BookOpen
} from 'lucide-react';

import sainikSchoolCadetsImg from '../assets/images/sainik_school_cadets_1786644067651.jpg';
import navodayaStudentsImg from '../assets/images/navodaya_students_study_1786644114144.jpg';
import studentsExamTabletsImg from '../assets/images/students_exam_tablets_1786644083863.jpg';
import studentsReadingNotesImg from '../assets/images/students_reading_notes_1786644099517.jpg';

interface StudentVisualShowcaseProps {
  onOpenPartnerModal: () => void;
}

interface ShowcaseItem {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  description: string;
  keyHighlights: string[];
  imageSrc: string;
  imageAlt: string;
  statsLabel: string;
  statsValue: string;
}

export const StudentVisualShowcase: React.FC<StudentVisualShowcaseProps> = ({
  onOpenPartnerModal,
}) => {
  const [activeImageModal, setActiveImageModal] = useState<ShowcaseItem | null>(null);

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'sainik-cadets',
      category: 'AISSEE 2027 ENTRANCE',
      badge: 'Sainik School Cadets',
      badgeColor: 'bg-blue-600 text-white border-blue-400/40',
      title: 'Sainik School Cadet Aspirants',
      subtitle: 'Class 6 & Class 9 National Defense Training Entrance',
      description:
        'Transform your local students into confident AISSEE aspirants with rigorous daily practice in Mathematics, Intelligence, Language, and General Science.',
      keyHighlights: [
        'National NTA / AISSEE syllabus blueprint matching',
        'Daily 25-question timed mock drills with instant grading',
        'Ranked against students in all Sainik School regions across India'
      ],
      imageSrc: sainikSchoolCadetsImg,
      imageAlt: 'Indian Sainik School cadets in smart uniforms studying with pride',
      statsLabel: 'Sainik Schools Covered',
      statsValue: '33+ Nationwide'
    },
    {
      id: 'navodaya-aspirants',
      category: 'JNVST SELECTION TEST',
      badge: 'Navodaya Vidyalaya',
      badgeColor: 'bg-emerald-600 text-white border-emerald-400/40',
      title: 'Navodaya School Aspirants (JNVST)',
      subtitle: 'Mental Ability, Arithmetic & Language Mastery',
      description:
        'Help your tuition students crack Jawahar Navodaya Vidyalaya selection tests with visual reasoning puzzles, sectional speed drills, and bilingual question banks.',
      keyHighlights: [
        'Non-verbal pattern recognition & mental ability tricks',
        'Arithmetic shortcuts designed specifically for 10-13 year olds',
        'Bilingual tests available in both English and Hindi'
      ],
      imageSrc: navodayaStudentsImg,
      imageAlt: 'Indian school students happily studying together for Navodaya school entrance',
      statsLabel: 'JNV Seats Targeted',
      statsValue: '650+ Districts'
    },
    {
      id: 'exam-tablets',
      category: 'DIGITAL CBT & OMR',
      badge: 'Online Exams on Tabs & Mobile',
      badgeColor: 'bg-purple-600 text-white border-purple-400/40',
      title: 'Students Writing Tests on Tablets & Mobile',
      subtitle: 'Real-Time Exam Simulator with Live Timers & Rankings',
      description:
        'Your students can take tests on smart tabs, mobile phones, or desktop screens inside your coaching centre or at home, experiencing authentic exam pressure.',
      keyHighlights: [
        'Live countdown timer & auto-submission engine',
        'Instant OMR evaluation with detailed question-by-question solutions',
        'Subject-wise percentile, time spent per question, and accuracy rates'
      ],
      imageSrc: studentsExamTabletsImg,
      imageAlt: 'Indian students in coaching classroom writing online mock exam on digital tablets',
      statsLabel: 'Online Mock Tests',
      statsValue: '150+ Full Tests'
    },
    {
      id: 'handwritten-notes',
      category: 'PRINT & DIGITAL STUDY MATERIAL',
      badge: 'Handwritten Concept Notes',
      badgeColor: 'bg-amber-600 text-white border-amber-400/40',
      title: 'Students Reading Handwritten Notes & Mind Maps',
      subtitle: 'Visual Formula Sheets, Short Tricks & Revision Cards',
      description:
        'No student gets left behind. Provide beautifully handwritten, high-contrast concept summaries, memory maps, and step-by-step solved formulas under your centre brand.',
      keyHighlights: [
        'Color-coded formula sheets for rapid memory retention',
        'Solved past 10 years AISSEE & Navodaya question blueprints',
        'Co-branded with your tuition centre logo & watermark'
      ],
      imageSrc: studentsReadingNotesImg,
      imageAlt: 'Students reading neat colorful handwritten concept notes and formulas on desk',
      statsLabel: 'Concept Notes Pages',
      statsValue: '1,200+ Pages'
    }
  ];

  return (
    <section id="student-visual-experience" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-wider border border-blue-400/30 mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Visual Student Learning Ecosystem</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            See How Your Students Will{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300">
              Learn, Practice & Win
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Everything your tuition centre needs to deliver India's premier entrance preparation experience — from smart tablet examinations to handcrafted revision notes.
          </p>
        </div>

        {/* 4 Core Visual Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {showcaseItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-slate-800/90 rounded-3xl border border-slate-700/80 hover:border-blue-500/60 shadow-xl hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with Visual Badges */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlays for High Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-black/40" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md border ${item.badgeColor}`}>
                    <GraduationCap className="w-3.5 h-3.5" />
                    {item.badge}
                  </span>
                </div>

                {/* Zoom / Full Preview Action Button */}
                <button
                  type="button"
                  onClick={() => setActiveImageModal(item)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white flex items-center justify-center backdrop-blur-sm border border-slate-700 hover:border-blue-400 transition-colors shadow-lg cursor-pointer"
                  title="View Full Size Image & Highlights"
                  aria-label="Zoom image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Stats Overlay inside Image */}
                <div className="absolute bottom-3 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 flex items-center gap-2">
                  <span className="text-[11px] text-slate-300 font-medium">{item.statsLabel}:</span>
                  <span className="text-xs font-extrabold text-amber-400">{item.statsValue}</span>
                </div>
              </div>

              {/* Card Text & Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-bold text-blue-400 tracking-wider uppercase mb-1">
                    {item.category}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Bullet Highlights */}
                <div className="pt-3 border-t border-slate-700/60 space-y-2">
                  {item.keyHighlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action button inside card */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveImageModal(item)}
                    className="text-xs font-bold text-blue-300 hover:text-white inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Learning Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenPartnerModal}
                    className="bg-blue-600/30 hover:bg-blue-600 text-blue-200 hover:text-white text-xs font-bold px-3.5 py-1.5 rounded-lg border border-blue-500/40 transition-colors cursor-pointer"
                  >
                    Enable for Your Centre
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Summary Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wide">
              <Trophy className="w-4 h-4" />
              National Level Ranking & Real Competition
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white">
              Give Your Students the National Edge Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Equip your local classroom with online test tabs, handwritten topper notes, and All-India scorecards without paying any tech setup fee.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenPartnerModal}
            className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 border border-blue-400/40 flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>REGISTER YOUR TUITION CENTRE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Interactive Expanded Image Modal */}
      {activeImageModal && (
        <div
          onClick={() => setActiveImageModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md cursor-pointer animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl relative cursor-default"
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-black overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
              <img
                src={activeImageModal.imageSrc}
                alt={activeImageModal.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/50" />

              <button
                type="button"
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/90 text-white flex items-center justify-center hover:bg-red-600 transition-colors border border-slate-700 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border shadow-md ${activeImageModal.badgeColor}`}>
                  {activeImageModal.badge}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-5">
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {activeImageModal.category}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {activeImageModal.title}
                </h3>
                <p className="text-sm font-semibold text-slate-300 mt-1">
                  {activeImageModal.subtitle}
                </p>
                <p className="text-sm text-slate-200 mt-3 leading-relaxed">
                  {activeImageModal.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  How This Empowers Your Tuition Centre:
                </div>
                <div className="space-y-2.5">
                  {activeImageModal.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <a
                  href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20saw%20your%20Sainik%20and%20Navodaya%20student%20testing%20platform%20and%20want%20details%20for%20my%20tuition%20centre."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors shadow-md"
                >
                  <span>Chat on WhatsApp (9492444498)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setActiveImageModal(null);
                    onOpenPartnerModal();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  <span>Get Partner Kit for This Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
