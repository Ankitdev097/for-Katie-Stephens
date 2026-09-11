import { motion } from 'motion/react';
import { Download, FileCode, CheckSquare, GitMerge, Bot } from 'lucide-react';

export default function Deliverables() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">I've already built this for you.</h2>
        <p className="text-lg text-slate-600 mb-12">
          I didn't just map this out—I built the actual infrastructure. Your folder includes everything needed to deploy this system for Windermere Real Estate today.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-left">
          {[
            { icon: <Bot className="w-5 h-5" />, label: "Retell AI Build" },
            { icon: <GitMerge className="w-5 h-5" />, label: "n8n Workflows" },
            { icon: <CheckSquare className="w-5 h-5" />, label: "Setup Checklist" },
            { icon: <FileCode className="w-5 h-5" />, label: "Install Guide" }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center gap-3">
              <div className="text-slate-700">{item.icon}</div>
              <span className="text-sm font-medium text-slate-900">{item.label}</span>
            </div>
          ))}
        </div>

        <a 
          href="https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
        >
          <Download className="w-5 h-5" />
          Download Your Custom Workflow
        </a>
      </motion.div>
    </section>
  );
}
