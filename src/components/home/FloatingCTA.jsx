import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, MessageCircle } from 'lucide-react';

const options = [
  { icon: Phone,         label: 'Call',  href: 'tel:8887775990' },
  { icon: Mail,          label: 'Email', href: 'mailto:info@allaccessservices.com' },
  { icon: MessageSquare, label: 'Text',  href: 'sms:8887775990' },
  { icon: MessageCircle, label: 'Chat',  href: '#chat' },
];

// SVG flat-top hexagon points for a given width/height
function hexPoints(w, h) {
  const cx = w / 2, cy = h / 2;
  const rx = w / 2 - 2, ry = h / 2 - 2;
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + rx * Math.cos(angle)},${cy + ry * Math.sin(angle)}`);
  }
  return pts.join(' ');
}

// Reusable hex container using SVG border + content overlay
function HexContainer({ width, height, bg, stroke, strokeWidth = 2, glow, children, className = '', style = {} }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width, height, ...style }}>
      <svg className="absolute inset-0" width={width} height={height} style={{ overflow: 'visible' }}>
        {glow && (
          <polygon
            points={hexPoints(width, height)}
            fill="rgba(45,212,191,0.12)"
            stroke="rgba(45,212,191,0.2)"
            strokeWidth={8}
            style={{ filter: 'blur(6px)' }}
          />
        )}
        <polygon
          points={hexPoints(width, height)}
          fill={bg}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center" style={{ gap: 3 }}>
        {children}
      </div>
    </div>
  );
}

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">

      {/* Option bubbles */}
      <AnimatePresence>
        {open && options.map((opt, i) => (
          <motion.a
            key={opt.label}
            href={opt.href}
            initial={{ opacity: 0, y: 16, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.8 }}
            transition={{ duration: 0.18, delay: (options.length - 1 - i) * 0.06 }}
            className="flex flex-col items-center gap-1 group"
          >
            <HexContainer
              width={58}
              height={66}
              bg="rgba(5,15,12,0.93)"
              stroke="rgba(45,212,191,0.65)"
              strokeWidth={1.5}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <opt.icon className="w-5 h-5 text-teal-400" />
            </HexContainer>
            <span className="text-[9px] font-black uppercase tracking-widest text-teal-400">{opt.label}</span>
          </motion.a>
        ))}
      </AnimatePresence>

      {/* Main hex trigger */}
      <button
        onClick={() => setOpen(o => !o)}
        className="relative focus:outline-none"
        aria-label="Toggle contact options"
      >
        <motion.div animate={{ scale: open ? 0.95 : 1 }} transition={{ duration: 0.2 }}>
          <HexContainer
            width={80}
            height={90}
            bg={open ? 'rgba(45,212,191,0.18)' : 'rgba(5,15,12,0.96)'}
            stroke="#2dd4bf"
            strokeWidth={2.5}
            glow
          >
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
              <MessageCircle className="w-7 h-7 text-teal-400" />
            </motion.div>
            <span className="text-[8px] font-black uppercase tracking-widest text-teal-400 leading-none">
              {open ? 'Close' : 'Contact'}
            </span>
          </HexContainer>
        </motion.div>
      </button>
    </div>
  );
}