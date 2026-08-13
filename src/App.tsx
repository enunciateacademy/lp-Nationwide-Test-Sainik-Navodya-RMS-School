import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StudentVisualShowcase } from './components/StudentVisualShowcase';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { CoBrandingSection } from './components/CoBrandingSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { WhoCanPartnerSection } from './components/WhoCanPartnerSection';
import { PanIndiaNetworkSection } from './components/PanIndiaNetworkSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState<boolean>(false);

  const handleOpenPartnerModal = () => {
    setIsPartnerModalOpen(true);
  };

  const handleClosePartnerModal = () => {
    setIsPartnerModalOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Top Main Navigation Bar */}
      <Navbar
        onOpenPartnerModal={handleOpenPartnerModal}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenPartnerModal={handleOpenPartnerModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* Visual Student Ecosystem Showcase */}
        <StudentVisualShowcase onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 2. Problem Section */}
        <ProblemSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 3. Solution Section */}
        <SolutionSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 4. How It Works Section */}
        <HowItWorksSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 5. "Your Centre. Your Brand." Major Visual Section */}
        <CoBrandingSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 6. All-India Ranking Section */}
        <LeaderboardSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 7. Centre Owner Benefits */}
        <BenefitsSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 8. Business Model Section */}
        <BusinessModelSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 9. Who Can Become a Partner? */}
        <WhoCanPartnerSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 10. Pan-India Network Section */}
        <PanIndiaNetworkSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 11. Testimonials Section (Demonstration) */}
        <TestimonialsSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 12. FAQ Section */}
        <FaqSection onOpenPartnerModal={handleOpenPartnerModal} />

        {/* 13. & 14. Final CTA Section + Lead Capture Form */}
        <FinalCtaSection onOpenPartnerModal={handleOpenPartnerModal} />
      </main>

      {/* 15. Footer */}
      <Footer
        onOpenPartnerModal={handleOpenPartnerModal}
        onScrollToSection={handleScrollToSection}
      />

      {/* Global Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isPartnerModalOpen}
        onClose={handleClosePartnerModal}
      />

      {/* Sticky Bottom Bar for Mobile Viewports */}
      <StickyMobileBar onOpenPartnerModal={handleOpenPartnerModal} />
    </div>
  );
}
