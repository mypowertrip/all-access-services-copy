import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ITEMS = [
  "Safety isn't a checkbox — it's our top priority.",
  "The only JLG Factory Service Centers in the USA.",
  "Find out why our lifts are the safest in the industry.",
];

export default function SafetyTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <a
      href="/safety"
      className="block w-full group"
      style={{ position: 'fixed', top: 96, left: 0, right: 0, zIndex: 40, background: '#f97316' }}
    >
      <div className="flex items-center px-6 py-4 max-w-7xl mx-auto gap-6">
        {/* Shield icon */}
        <ShieldCheck className="w-10 h-10 shrink-0" style={{ color: '#c2410c' }} />

        {/* Crossfading message */}
        <div className="flex-1 relative" style={{ minHeight: 28 }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="font-barlow font-black text-xl md:text-2xl text-black tracking-tight absolute inset-0 flex items-center"
            >
              {ITEMS[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Learn More */}
        <div className="shrink-0 flex items-center gap-1.5">
          <span className="font-barlow font-black text-base uppercase tracking-widest group-hover:underline" style={{ color: '#c2410c' }}>
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: '#c2410c' }} />
        </div>
      </div>
    </a>
  );
}