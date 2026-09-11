import { motion } from 'motion/react';
import { PhoneMissed, Clock, Users } from 'lucide-react';

export default function PainPoints() {
  const points = [
    {
      icon: <PhoneMissed className="w-6 h-6 text-slate-700" />,
      title: "Missed Opportunities",
      description: "Letting new leads go to voicemail while you're with clients, driving, or at a showing."
    },
    {
      icon: <Clock className="w-6 h-6 text-slate-700" />,
      title: "Off-Hours Inquiries",
      description: "Missing calls after hours or on weekends when buyers are most actively searching."
    },
    {
      icon: <Users className="w-6 h-6 text-slate-700" />,
      title: "Lost Clients",
      description: "Losing motivated buyers and sellers to the next agent who actually answers the phone."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">The Cost of a Missed Call</h2>
          <p className="text-lg text-slate-600">In luxury real estate, a missed call often means a missed commission.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                {point.icon}
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
