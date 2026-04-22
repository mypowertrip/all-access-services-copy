import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import SafetyTicker from './SafetyTicker';

const HERO_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/8039c259f_generated_b19fabea.png";
const CYCLING_WORDS = ['SMARTER.', 'STRONGER.', 'SAFER.'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(i => (i + 1) % CYCLING_WORDS.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <SafetyTicker />
    <section className="relative min-h-screen flex items-center overflow-hidden pt-14">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Boom lift at construction site"
          className="w-full h-full object-cover" />
        
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Accent lines */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
      <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-teal-500/40 to-transparent" />

      {/* ClearSky hex decoration */}
      <svg className="absolute right-8 top-32 w-64 opacity-10 text-teal-400 pointer-events-none hidden lg:block" viewBox="0 0 200 200" fill="none">
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="100,30 148,57.5 148,112.5 100,140 52,112.5 52,57.5" stroke="currentColor" strokeWidth="0.75" fill="none" />
      </svg>
      <svg className="absolute right-48 top-16 w-40 opacity-5 text-teal-400 pointer-events-none hidden lg:block" viewBox="0 0 200 200" fill="none">
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-40 pb-20 md:pt-52">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-barlow font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-6">
            
            <span className="text-white">REACH</span>
            <br />
            <span style={{ WebkitTextStroke: '2.5px #f97316', color: 'transparent' }} className="drop-shadow-lg">HIGHER.</span>
            <br />
            <span className="text-white">WORK </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ WebkitTextStroke: '2.5px white', color: 'transparent' }}
                className="inline-block drop-shadow-lg"
              >
                {CYCLING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-xl md:text-2xl max-w-xl mb-10 leading-relaxed font-semibold drop-shadow-lg">
            
            Committed to Safety, Quality & Integrity
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4">
            
            <a
              href="#rentals"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all glow-orange">
              
              Rentals
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#inventory"
              className="group inline-flex items-center gap-3 border border-white/30 hover:border-orange-500 text-white hover:text-orange-400 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all">
              
              <Play className="w-4 h-4" />
              Equipment For Sale
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            
            {[
            { val: '4', label: 'SoCal Locations' },
            { val: '3000+', label: 'Units in Fleet' },
            { val: '25+', label: 'Years Experience' },
            { val: '24/7', label: 'Support Available' },
            { val: '150+', label: 'Team Members' }].
            map((stat) =>
            <div key={stat.label}>
                <div className="font-barlow text-3xl font-black text-orange-500">{stat.val}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            )}
            <div className="ml-auto hidden md:flex items-center gap-2 border border-teal-500/30 bg-teal-500/5 px-4 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">ClearSky™ Connected Fleet</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
    </>);

}