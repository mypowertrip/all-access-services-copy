import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

export default function NavPhoneButton() {
  const [isRattling, setIsRattling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRattling(true);
      setTimeout(() => setIsRattling(false), 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={`tel:${SITE_CONFIG.phoneTel}`}
      className="hidden lg:flex items-center gap-2 text-zinc-300 hover:text-orange-400 text-sm font-medium transition-colors"
    >
      <motion.span
        animate={isRattling ? { rotate: [-15, 15, -15, 15, 0], x: [-2, 2, -2, 2, 0] } : { rotate: 0, x: 0 }}
        transition={isRattling ? { duration: 0.6, ease: 'easeInOut' } : {}}
        className="flex items-center"
      >
        <Phone className="w-4 h-4 text-orange-500" />
      </motion.span>
      <span className="font-numeric">{SITE_CONFIG.phone}</span>
    </a>
  );
}