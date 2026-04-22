import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const MESSAGES = [
  { line1: "Safety isn't a checkbox —", line2: "it's our top priority." },
  { line1: "The only JLG Factory Service", line2: "Centers in the USA." },
  { line1: "Factory-trained technicians,", line2: "ready around the clock." },
  { line1: "3,000+ machines. All ClearSky™", line2: "connected and monitored." },
];

export default function SafetyTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % MESSAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const msg = MESSAGES[index];

  return (
    <a
      href="/safety"
      className="block group"
      style={{
        position: 'fixed',
        top: 112,
        right: 0,
        zIndex: 40,
        width: '55%',
        background: 'linear-gradient(to right, transparent 0%, #f5a623 12%, #f5a623 100%)',
      }}
    >
      <div className="flex items-center gap-4 px-6 py-3" style={{ paddingLeft: '8%' }}>
        {/* Static shield + safety text */}
        <div className="flex items-center gap-2 shrink-0">
          <ShieldCheck className="w-6 h-6" style={{ color: '#c2410c' }} />
          <span className="font-bold text-xs text-black uppercase tracking-wider whitespace-nowrap">Safety First</span>
        </div>

        {/* Ticker messages */}
        <div className="flex-1 overflow-hidden" style={{ height: '2.4em' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-black font-bold text-xs leading-tight">{msg.line1}</p>
              <p className="text-black font-normal text-xs leading-tight">{msg.line2}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learn More */}
        <div className="shrink-0 flex items-center gap-1">
          <span className="font-semibold text-xs group-hover:underline whitespace-nowrap" style={{ color: '#c2410c' }}>
            Learn More
          </span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: '#c2410c' }} />
        </div>
      </div>
    </a>
  );
}