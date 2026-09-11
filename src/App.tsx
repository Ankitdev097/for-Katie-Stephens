import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import CostComparison from './components/CostComparison';
import Deliverables from './components/Deliverables';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import EmailModal from './components/EmailModal';

export default function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-slate-200">
      <Hero />
      <PainPoints />
      <Solution />
      <CostComparison />
      <Deliverables />
      <FAQ />
      <CTASection onOpenEmail={() => setIsEmailModalOpen(true)} />
      <AnimatePresence>
        {isEmailModalOpen && (
          <EmailModal onClose={() => setIsEmailModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
