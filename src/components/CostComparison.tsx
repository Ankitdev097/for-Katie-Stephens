import { motion } from 'motion/react';
import { UserX, Bot } from 'lucide-react';

export default function CostComparison() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">The ROI is Immediate</h2>
          <p className="text-lg text-slate-600">Compare the traditional approach to what I've built for you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 opacity-75"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <UserX className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">Human Receptionist</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-slate-500">Cost</span>
                <span className="text-xl font-medium text-slate-900">$3,000+ / mo</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-slate-500">Availability</span>
                <span className="font-medium text-slate-900">40 hrs / week</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-100 pb-2">
                <span className="text-slate-500">Capacity</span>
                <span className="font-medium text-slate-900">One call at a time</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-slate-500">Training Time</span>
                <span className="font-medium text-slate-900">Weeks</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-800 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-medium">Your Custom Workflow</h3>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                <span className="text-slate-400">Installation Cost</span>
                <span className="text-2xl font-semibold text-white">$0 <span className="text-sm text-slate-400 font-normal">(My offer)</span></span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                <span className="text-slate-400">Availability</span>
                <span className="font-medium text-white">24/7/365</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-700 pb-2">
                <span className="text-slate-400">Capacity</span>
                <span className="font-medium text-white">Infinite concurrent calls</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-slate-400">Ready in</span>
                <span className="font-medium text-white">Minutes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
