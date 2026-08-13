import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenPartnerModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenPartnerModal }) => {
  return (
    <div
      id="sticky-mobile-cta"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:p-3 shadow-2xl"
    >
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <a
          href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20am%20a%20tuition%20centre%20owner%20interested%20in%20partnering."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shrink-0"
          aria-label="WhatsApp Us (9492444498)"
        >
          <MessageSquare className="w-5 h-5" />
        </a>

        <button
          onClick={onOpenPartnerModal}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <span>BECOME A PARTNER CENTRE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
