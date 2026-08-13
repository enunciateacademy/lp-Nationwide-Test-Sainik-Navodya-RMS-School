import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQS_LIST } from '../data/mockData';

interface FaqSectionProps {
  onOpenPartnerModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenPartnerModal }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 font-semibold text-xs border border-blue-200 uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            Partnership Clarity
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Questions by{' '}
            <span className="text-blue-700">Tuition Centre Owners</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Clear answers about branding, technical requirements, commercial margins, and academic delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_LIST.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left font-display font-bold text-base sm:text-lg text-slate-900 flex items-center justify-between gap-4 hover:text-blue-700 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-800">
            Have a specific academic or batch question regarding your tuition centre?
          </p>
          <button
            onClick={onOpenPartnerModal}
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 underline underline-offset-4 cursor-pointer"
          >
            <span>Request a direct phone consultation with our partnership team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
