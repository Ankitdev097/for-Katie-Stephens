import { motion } from 'motion/react';
import { PhoneCall, CheckCircle2, Calendar } from 'lucide-react';

export default function Solution() {
  const features = [
    {
      icon: <PhoneCall className="w-5 h-5 text-green-600" />,
      title: "Answers every call instantly, 24/7, exactly like a real person."
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-green-600" />,
      title: "Qualifies buyers naturally, asking the right questions about timeline and budget."
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      title: "Books appointments straight into your calendar automatically."
    }
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            A seamless experience for your clients.
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            When someone calls about a property like Timberline at Skyline, they want answers immediately. Your custom receptionist ensures they always speak to a professional, instantly.
          </p>
          <ul className="space-y-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <span className="text-slate-700 text-lg leading-relaxed">{feature.title}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4">
              <div>
                <p className="text-sm text-slate-400 font-medium">Incoming Call</p>
                <p className="text-lg font-semibold">New Buyer Lead</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">Connected</div>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <p><span className="text-slate-400">Caller:</span> "Hi, I'm calling about the 5-acre lot at Timberline..."</p>
              <p><span className="text-blue-400">Receptionist:</span> "Hello! Yes, the Timberline at Skyline homesite. It's a beautiful property with sweeping mountain views. Are you looking to build right away, or are you just starting your search?"</p>
              <p><span className="text-slate-400">Caller:</span> "We're looking to build within the next year. We heard some pre-development work is already done?"</p>
              <p><span className="text-blue-400">Receptionist:</span> "Exactly! The pre-development is completed—surveys, septic feasibility, and water testing are all done. Would you like me to schedule a time with Katie to discuss the custom architectural plans?"</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
