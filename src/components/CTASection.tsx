import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function CTASection({ onOpenEmail }: { onOpenEmail: () => void }) {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Let's get this running for your business.</h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Reply to my previous message or send me an email to schedule a free 9-minute call. I'll personally help you install and customize this exact workflow for <strong>Homes by Katie Stephens</strong> at absolutely no cost.
        </p>
        <button 
          onClick={onOpenEmail}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
        >
          <Mail className="w-5 h-5" />
          Email Ankit
        </button>
      </motion.div>
    </section>
  );
}
