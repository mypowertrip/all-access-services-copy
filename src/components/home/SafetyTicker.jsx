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
    <div className="relative w-full overflow-hidden" style={{ height: '80px' }}>
      {/* Caution tape background - scrolling */}
      <motion.div
        animate={{ x: [0, -80] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #f5a623 0px,
            #f5a623 20px,
            #000 20px,
            #000 40px
          )`,
        }}
      />

      {/* Content overlay */}
      <a
        href="/safety"
        className="relative h-full group flex items-center gap-4 px-8 bg-black/30 backdrop-blur-sm"
      >
        {/* Shield icon */}
        <ShieldCheck className="w-8 h-8 shrink-0 text-orange-400" />

        {/* Animated messages */}
        <div className="flex-1 overflow-hidden" style={{ height: '2.4em' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-white font-bold text-sm leading-tight">{msg.line1}</p>
              <p className="text-white font-normal text-sm leading-tight">{msg.line2}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learn More */}
        <div className="shrink-0 flex items-center gap-1">
          <span className="font-semibold text-sm group-hover:underline whitespace-nowrap text-orange-400">
            Learn More
          </span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-orange-400" />
        </div>
      </a>
    </div>
  );
}