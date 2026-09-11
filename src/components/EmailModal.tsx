import { motion } from 'motion/react';
import { X, Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';

export default function EmailModal({ onClose }: { onClose: () => void }) {
  const email = "ankit@agentbydesign.in";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenApp = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      ></motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden border border-slate-100"
      >
        <div className="p-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Contact Ankit</h3>
          <p className="text-slate-600 mb-8">Choose how you'd like to reach out.</p>
          
          <div className="space-y-3">
            <button 
              onClick={handleCopy}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-700">{email}</span>
              {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-slate-400" />}
            </button>
            
            <button 
              onClick={handleOpenApp}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <span className="font-medium">Open Email App</span>
              <ExternalLink className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
