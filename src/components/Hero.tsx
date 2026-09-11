import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-600 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Prepared exclusively for Katie Stephens
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6 max-w-4xl"
      >
        Stop Losing Motivated Buyers While You're at a Showing.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-12"
      >
        I noticed your recent campaigns for the <strong className="text-slate-900 font-medium">Timberline at Skyline</strong> estate homesites. I built a custom system for <strong className="text-slate-900 font-medium">Homes by Katie Stephens</strong> that answers every incoming call instantly, so you never miss a lead while you're out in the field or showing properties in Cle Elum.
      </motion.p>
    </section>
  );
}
