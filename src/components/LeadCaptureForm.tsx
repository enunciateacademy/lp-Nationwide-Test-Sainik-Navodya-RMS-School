import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Building,
  User,
  MapPin,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { INDIAN_STATES, EXAM_CATEGORIES, STUDENT_BRACKETS } from '../data/mockData';
import { PartnerLeadForm } from '../types';

interface LeadCaptureFormProps {
  initialExam?: string;
  onSuccessClose?: () => void;
  formIdSuffix?: string;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({
  initialExam,
  onSuccessClose,
  formIdSuffix = 'main',
}) => {
  const formUrl = 'https://api.anychat.one/form/c473002d-d406-3ad9-97ef-0373e7ec34b1';
  const [iframeLoading, setIframeLoading] = useState<boolean>(true);
  const [useNativeForm, setUseNativeForm] = useState<boolean>(false);

  const [formData, setFormData] = useState<PartnerLeadForm>({
    centreName: '',
    ownerName: '',
    mobile: '',
    whatsapp: '',
    city: '',
    state: 'Rajasthan',
    studentCount: '26 - 50 Students',
    examsTaught: ['Sainik School Class 6 Entrance (AISSEE)'],
    hasSainikCoaching: 'Yes',
    message: '',
  });

  const [copyMobileToWhatsapp, setCopyMobileToWhatsapp] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionRef, setSubmissionRef] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'mobile' && copyMobileToWhatsapp) {
        updated.whatsapp = value;
      }
      return updated;
    });
  };

  const handleExamToggle = (exam: string) => {
    setFormData((prev) => {
      const exists = prev.examsTaught.includes(exam);
      if (exists) {
        return {
          ...prev,
          examsTaught: prev.examsTaught.filter((item) => item !== exam),
        };
      } else {
        return {
          ...prev,
          examsTaught: [...prev.examsTaught, exam],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.centreName.trim()) {
      setErrorMessage('Please enter your tuition centre or institute name.');
      return;
    }
    if (!formData.ownerName.trim()) {
      setErrorMessage('Please enter the owner or director name.');
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMessage('Please enter your city.');
      return;
    }
    if (formData.examsTaught.length === 0) {
      setErrorMessage('Please select at least one class or exam category taught.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = 'EA-PTR-' + Math.floor(100000 + Math.random() * 900000);
      setSubmissionRef(randomRef);
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        const stored = JSON.parse(localStorage.getItem('enunciate_leads') || '[]');
        stored.push({ ...formData, ref: randomRef, timestamp: new Date().toISOString() });
        localStorage.setItem('enunciate_leads', JSON.stringify(stored));
      } catch (err) {
        // silent
      }
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmissionRef('');
    setFormData({
      centreName: '',
      ownerName: '',
      mobile: '',
      whatsapp: '',
      city: '',
      state: 'Rajasthan',
      studentCount: '26 - 50 Students',
      examsTaught: ['Sainik School Class 6 Entrance (AISSEE)'],
      hasSainikCoaching: 'Yes',
      message: '',
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            Request Received • Reference ID: {submissionRef}
          </span>
          <h3 className="font-display text-2xl font-extrabold text-slate-900">
            Thank you, {formData.ownerName}!
          </h3>
          <p className="text-base text-slate-700 max-w-md mx-auto leading-relaxed">
            Our partnership team will contact you shortly regarding <strong className="text-blue-900">&ldquo;{formData.centreName}&rdquo;</strong>.
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-left text-xs space-y-2.5 max-w-md mx-auto text-slate-700">
          <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
            What Happens Next:
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
            <span>Dedicated institutional coordinator will WhatsApp/call your number: <strong>{formData.mobile}</strong></span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
            <span>You will receive the sample Sainik School Test Series syllabus schedule and co-branding sample deck.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
            <span>Portal access credentials issued within 24 hours for your student batch.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={`https://wa.me/919876543210?text=Hello%20Enunciate%20Academy%20Team,%20I%20have%20submitted%20a%20partner%20request%20for%20${encodeURIComponent(formData.centreName)}%20(Ref:%20${submissionRef})`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp Instantly</span>
          </a>

          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  // Primary: Render AnyChat embedded application form
  if (!useNativeForm) {
    return (
      <div
        id={`partner-lead-form-${formIdSuffix}`}
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col animate-in fade-in duration-200"
      >
        {/* Card Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Institutional Partnership Application
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                Register Your Tuition / Coaching Centre
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Iframe */}
        <div className="relative w-full bg-slate-50 min-h-[580px] sm:min-h-[640px] flex flex-col">
          {iframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50 text-slate-600 space-y-3">
              <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <div className="text-xs font-semibold text-slate-600">Loading Application Form...</div>
              <div className="text-[11px] text-slate-400">Connecting to Enunciate Partner Portal</div>
            </div>
          )}

          <iframe
            src={formUrl}
            title="Enunciate Academy Partner Centre Application"
            onLoad={() => setIframeLoading(false)}
            className="w-full flex-1 border-0"
            style={{ minHeight: '620px', width: '100%' }}
            allow="camera; microphone; geolocation"
          />
        </div>

        {/* Card Footer Support Info */}
        <div className="bg-slate-100 border-t border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-medium">Direct Institutional Enrollment Portal Active</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setUseNativeForm(true)}
              className="text-[11px] text-blue-700 hover:text-blue-900 underline font-medium cursor-pointer"
            >
              Trouble loading form? Use standard form
            </button>
            <span className="text-slate-300">|</span>
            <a
              href="https://wa.me/919492444498?text=Hello%20Enunciate%20Academy,%20I%20am%20a%20tuition%20centre%20director%20and%20need%20help%20with%20partner%20registration."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span>WhatsApp Helpline: 9492444498</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Fallback / Standard Form
  return (
    <form
      id={`partner-lead-form-${formIdSuffix}`}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-xl space-y-5"
    >
      <div className="border-b border-slate-100 pb-4 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            Standard Application Form
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Register Your Tuition / Coaching Centre
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fill out this simple form to receive your partner kit and customized batch pricing.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setUseNativeForm(false)}
          className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline cursor-pointer"
        >
          View Online Form
        </button>
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Centre Name & Owner Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`centreName-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Centre / Institute Name *
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id={`centreName-${formIdSuffix}`}
              name="centreName"
              type="text"
              required
              value={formData.centreName}
              onChange={handleInputChange}
              placeholder="e.g. Apex Scholars Tuition Point"
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`ownerName-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Owner / Director Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id={`ownerName-${formIdSuffix}`}
              name="ownerName"
              type="text"
              required
              value={formData.ownerName}
              onChange={handleInputChange}
              placeholder="e.g. Rajeshwar Chauhan"
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Mobile Number & WhatsApp Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`mobile-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Mobile Number (Calling) *
          </label>
          <div className="relative">
            <span className="text-xs font-bold text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2">+91</span>
            <input
              id={`mobile-${formIdSuffix}`}
              name="mobile"
              type="tel"
              maxLength={10}
              required
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="9876543210"
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-12 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all font-mono"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor={`whatsapp-${formIdSuffix}`} className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              WhatsApp Number *
            </label>
            <label className="flex items-center gap-1 text-[11px] text-slate-500 cursor-pointer">
              <input
                type="checkbox"
                checked={copyMobileToWhatsapp}
                onChange={(e) => {
                  setCopyMobileToWhatsapp(e.target.checked);
                  if (e.target.checked) {
                    setFormData((prev) => ({ ...prev, whatsapp: prev.mobile }));
                  }
                }}
                className="accent-blue-600"
              />
              Same as calling
            </label>
          </div>
          <div className="relative">
            <span className="text-xs font-bold text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2">+91</span>
            <input
              id={`whatsapp-${formIdSuffix}`}
              name="whatsapp"
              type="tel"
              maxLength={10}
              required
              value={formData.whatsapp}
              onChange={handleInputChange}
              placeholder="9876543210"
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-12 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all font-mono"
            />
          </div>
        </div>
      </div>

      {/* Row 3: City & State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`city-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            City / District *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id={`city-${formIdSuffix}`}
              name="city"
              type="text"
              required
              value={formData.city}
              onChange={handleInputChange}
              placeholder="e.g. Jhunjhunu / Varanasi"
              className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`state-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            State / UT *
          </label>
          <select
            id={`state-${formIdSuffix}`}
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none transition-all"
          >
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Number of Students & Current Sainik School Coaching? */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`studentCount-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Approx. Number of Students
          </label>
          <select
            id={`studentCount-${formIdSuffix}`}
            name="studentCount"
            value={formData.studentCount}
            onChange={handleInputChange}
            className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none transition-all"
          >
            {STUDENT_BRACKETS.map((bracket) => (
              <option key={bracket} value={bracket}>
                {bracket}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Currently Teaching Sainik School / Entrance?
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, hasSainikCoaching: 'Yes' }))}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                formData.hasSainikCoaching === 'Yes'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              Yes, Already Teaching
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, hasSainikCoaching: 'No' }))}
              className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                formData.hasSainikCoaching === 'No'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
              }`}
            >
              No, Want to Start
            </button>
          </div>
        </div>
      </div>

      {/* Row 5: Classes / Exams Taught (Checkboxes) */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Classes / Exams You Teach (Select all that apply)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {EXAM_CATEGORIES.map((exam) => {
            const isChecked = formData.examsTaught.includes(exam);
            return (
              <label
                key={exam}
                className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-blue-50 border-blue-400 text-blue-900 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleExamToggle(exam)}
                  className="accent-blue-600 w-3.5 h-3.5 rounded"
                />
                <span className="line-clamp-1">{exam}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Row 6: Message */}
      <div>
        <label htmlFor={`message-${formIdSuffix}`} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Message / Specific Questions (Optional)
        </label>
        <textarea
          id={`message-${formIdSuffix}`}
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your batches, language preferences (Hindi/English), or special academic requests..."
          className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          id={`submit-partner-request-btn-${formIdSuffix}`}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-base py-4 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-75 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Transmitting Request...
            </span>
          ) : (
            <>
              <span>SUBMIT PARTNER REQUEST</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-slate-400 mt-2.5">
          🔒 Zero spam guarantee • All your tuition centre student data stays strictly private & localized.
        </p>
      </div>
    </form>
  );
};

