import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do people actually trust talking to AI?",
      answer: "Yes. Modern voice AI is indistinguishable from a real person. It listens, pauses naturally, and responds with the correct intonation. Many callers never realize they aren't speaking to a human receptionist."
    },
    {
      question: "Will it sound robotic to my luxury clients?",
      answer: "Not at all. The workflow I built for you uses hyper-realistic voice models configured specifically for a warm, professional, and high-end real estate concierge tone."
    },
    {
      question: "What if the caller asks a question the AI doesn't know?",
      answer: "The AI is programmed to recognize its limits. If a complex question arises, it politely takes a detailed message and immediately forwards the summary to your phone or email, ensuring the lead is captured gracefully."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Questions you might have</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-medium text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-slate-600 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
