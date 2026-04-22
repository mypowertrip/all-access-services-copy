import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

export default function AppCTABadge() {
  const size = 120;
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 4;

  // Flat-top hexagon points
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');

  return (
    <a
      href="/dashboard"
      className="group fixed right-6 z-40 flex flex-col items-center justify-center"
      style={{ top: 140, width: size, height: size }}
      title="Ground Control App"
    >
      {/* Spinning outer ring */}
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <polygon
          points={points}
          fill="none"
          stroke="rgba(20,184,166,0.5)"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </motion.svg>

      {/* Static inner hex */}
      <svg viewBox={`0 0 ${size} ${size}`} className="absolute inset-0 w-full h-full">
        <polygon
          points={Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 180) * (60 * i - 30);
            const ri = r - 10;
            return `${cx + ri * Math.cos(angle)},${cy + ri * Math.sin(angle)}`;
          }).join(' ')}
          fill="rgba(17,17,17,0.95)"
          stroke="rgba(249,115,22,0.6)"
          strokeWidth="1.5"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-1">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Smartphone className="w-5 h-5 text-orange-400" />
        </motion.div>
        <p className="text-[8px] font-black uppercase tracking-widest text-teal-400 leading-none">New App</p>
        <p className="text-[9px] font-black text-white uppercase leading-none">Ground<br/>Control™</p>
      </div>
    </a>
  );
}