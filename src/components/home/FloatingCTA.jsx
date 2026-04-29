import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

const hexPieces = [
  { label: 'CALL NOW', color: 'orange' },
  { label: '24/7', color: 'teal' },
  { label: 'SUPPORT', color: 'orange' },
  { label: 'ALWAYS', color: 'teal' },
  { label: 'READY', color: 'orange' },
  { label: 'TO HELP', color: 'teal' },
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
  const [isRattling, setIsRattling] = useState(false);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRattling(true);
      setTimeout(() => setIsRattling(false), 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setExploded(!exploded);
  };

  return (
    <div className="hidden md:flex fixed bottom-8 right-8 z-30 flex-col items-center gap-3">
      <a href={`tel:${SITE_CONFIG.phoneTel}`} className="block">
        <motion.button
          onClick={handleClick}
          className="relative focus:outline-none"
          aria-label="Call now"
        >
          {/* Exploding hexagon pieces */}
          <AnimatePresence>
            {exploded && hexPieces.map((piece, i) => {
              const angle = (i / hexPieces.length) * Math.PI * 2;
              const distance = 120;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, x: 0, y: 0 }}
                  animate={{ opacity: 0, x, y, rotate: 360 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute"
                  style={{ width: 60, height: 60, left: '50%', top: '50%', marginLeft: -30, marginTop: -30 }}
                >
                  <HexContainer
                    width={60}
                    height={60}
                    bg={piece.color === 'orange' ? 'rgba(249, 115, 22, 0.1)' : 'rgba(45, 212, 191, 0.1)'}
                    stroke={piece.color === 'orange' ? '#f97316' : '#2dd4bf'}
                    strokeWidth={1.5}
                  >
                    <span className={`text-[7px] font-black uppercase tracking-widest text-center leading-tight ${
                      piece.color === 'orange' ? 'text-orange-400' : 'text-teal-400'
                    }`}>
                      {piece.label}
                    </span>
                  </HexContainer>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Main phone button */}
          <motion.div
            animate={isRattling ? { x: [-3, 3, -3, 3, 0] } : { x: 0 }}
            transition={isRattling ? { duration: 0.6, ease: 'easeInOut' } : {}}
          >
            <HexContainer
              width={80}
              height={90}
              bg={exploded ? 'rgba(45,212,191,0.18)' : 'rgba(5,15,12,0.96)'}
              stroke={exploded ? '#2dd4bf' : '#f97316'}
              strokeWidth={2.5}
              glow
            >
              <motion.div
                animate={isRattling ? { rotate: [-5, 5, -5, 5, 0] } : { rotate: 0 }}
                transition={isRattling ? { duration: 0.6, ease: 'easeInOut' } : {}}
              >
                <Phone className="w-8 h-8 text-orange-400" />
              </motion.div>
              <span className="text-[8px] font-black uppercase tracking-widest text-orange-400 leading-none">
                {exploded ? 'Call' : 'Call'}
              </span>
            </HexContainer>
          </motion.div>
        </motion.button>
      </a>
    </div>
  );
}