import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { CoursesSection } from './components/CoursesSection';
import { WealthCalculator } from './components/WealthCalculator';
import { TelegramVIPSection } from './components/TelegramVIPSection';
import { ValuePropsSection } from './components/ValuePropsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { PRICING_TIERS } from './data/coursesData';

export function App() {
  const [masterclassOpen, setMasterclassOpen] = useState(false);
  const [syllabusCourse, setSyllabusCourse] = useState(null);
  const [enrollTier, setEnrollTier] = useState(null);

  const handleOpenEnroll = (tier = null) => {
    setEnrollTier(tier || PRICING_TIERS[1]); // Default to Pro Trader tier
  };

  return (
    <div className="min-h-screen bg-slate-50 font-body text-slate-900 selection:bg-[#00A3FF] selection:text-white">
      
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenEnroll={() => handleOpenEnroll()}
        onOpenMasterclass={() => setMasterclassOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          onOpenEnroll={() => handleOpenEnroll()}
          onOpenMasterclass={() => setMasterclassOpen(true)}
        />

        <StatsBar />

        <CoursesSection
          onOpenSyllabus={(course) => setSyllabusCourse(course)}
          onOpenEnroll={(course) => handleOpenEnroll(PRICING_TIERS[1])}
        />

        <WealthCalculator
          onOpenEnroll={() => handleOpenEnroll()}
        />

        <TelegramVIPSection />

        <ValuePropsSection />

        <ReviewsSection />

        <PricingSection
          onOpenEnroll={(tier) => handleOpenEnroll(tier)}
        />

        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <Modals
        masterclassOpen={masterclassOpen}
        onCloseMasterclass={() => setMasterclassOpen(false)}
        syllabusCourse={syllabusCourse}
        onCloseSyllabus={() => setSyllabusCourse(null)}
        enrollTier={enrollTier}
        onCloseEnroll={() => setEnrollTier(null)}
      />

    </div>
  );
}

export default App;
