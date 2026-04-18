import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MessageSquare, MessageCircle } from 'lucide-react';

const options = [
  { icon: Phone,         label: 'Call',  href: 'tel:8887775990' },
  { icon: Mail,          label: 'Email', href: 'mailto:info@allaccessservices.com' },
  { icon: MessageSquare, label: 'Text',  href: 'sms:8887775990' },
  { icon: MessageCircle, label: 'Chat',  href: '#chat' },
];

const hexClip = 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">

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
            className="flex flex-col items-center gap-1"
          >
            <div
              style={{
                clipPath: hexClip,
                background: 'rgba(5,15,12,0.92)',
                border: '1.5px solid rgba(45,212,191,0.6)',
                width: 52,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className="hover:bg-teal-500/20 transition-colors duration-150"
            >
              <opt.icon className="w-5 h-5 text-teal-400" />
            </div>
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
        {/* Pulse ring */}
        {!open && (
          <span
            style={{ clipPath: hexClip }}
            className="absolute inset-0 animate-ping bg-teal-400/25 pointer-events-none"
          />
        )}

        {/* Hex body */}
        <motion.div
          animate={{ scale: open ? 0.95 : 1 }}
          transition={{ duration: 0.2 }}
          style={{
            clipPath: hexClip,
            background: open ? 'rgba(45,212,191,0.15)' : 'rgba(5,15,12,0.95)',
            border: '2px solid #2dd4bf',
            width: 64,
            height: 72,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            boxShadow: '0 0 24px rgba(45,212,191,0.35)',
          }}
        >
          <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}>
            <MessageCircle className="w-6 h-6 text-teal-400" />
          </motion.div>
          <span className="text-[8px] font-black uppercase tracking-widest text-teal-400 leading-none">
            {open ? 'Close' : 'Contact'}
          </span>
        </motion.div>
      </button>
    </div>
  );
}