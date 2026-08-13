import React, { useEffect, useState } from 'react';
import { X, ExternalLink, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose }) => {
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  const formUrl = 'https://api.anychat.one/form/c473002d-d406-3ad9-97ef-0373e7ec34b1';

  // Handle Escape key to close modal & lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset loading state when opened
  useEffect(() => {
    if (isOpen) {
      setIframeLoading(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="lead-capture-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto cursor-pointer"
      aria-modal="true"
      role="dialog"
    >
      <div
        id="lead-capture-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full my-auto shadow-2xl border border-slate-200 overflow-hidden flex flex-col cursor-default animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-4 sm:px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>Become an Enunciate Partner</span>
                <span className="text-[10px] font-semibold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-400/30 hidden sm:inline-block">
                  AISSEE 2027
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Institutional Centre Application Form
              </p>
            </div>
          </div>

          {/* Action controls */}
          <div className="flex items-center gap-2">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-700 transition-colors"
              title="Open form in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            {/* Close button */}
            <button
              id="close-lead-modal-btn"
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-red-600/90 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-slate-700 hover:border-red-500"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Form Container with Iframe */}
        <div className="relative w-full bg-slate-50 min-h-[540px] sm:min-h-[620px] max-h-[82vh] flex flex-col overflow-hidden">
          
          {/* Loading Spinner */}
          {iframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-600 space-y-3">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-xs font-semibold text-slate-600">Loading Application Form...</div>
              <div className="text-[11px] text-slate-400">Connecting to Enunciate Partner Portal</div>
            </div>
          )}

          {/* Anychat Embed Form */}
          <iframe
            src={formUrl}
            title="Enunciate Academy Partner Application"
            onLoad={() => setIframeLoading(false)}
            className="w-full flex-1 border-0 rounded-b-2xl sm:rounded-b-3xl"
            style={{ minHeight: '560px', width: '100%' }}
            allow="camera; microphone; geolocation"
          />
        </div>

        {/* Modal Bottom Helper Bar */}
        <div className="bg-slate-100 border-t border-slate-200 px-4 py-2.5 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <span className="text-[11px] text-slate-500">
            🔒 Secure institutional registration • Zero spam guarantee
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20am%20filling%20the%20partner%20form%20and%20have%20a%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-md border border-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp Helpline: 9492444498</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="text-[11px] font-bold text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

