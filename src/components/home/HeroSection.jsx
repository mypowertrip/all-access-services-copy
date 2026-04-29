import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

const HERO_IMG =
'https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/bc664c981_ChatGPTImageApr22202601_04_14AM.png';

const STATS = [
{ value: '4', label: 'Locations · SoCal' },
{ value: '24/7', label: 'Service Coverage' },
{ value: 'JLG', label: 'Authorized Dealer' },
{ value: 'OSHA', label: 'Certified Training' }];


export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Subtle parallax: image translates a bit slower than scroll
  const imgY = useTransform(scrollY, [0, 600], [0, 80]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);

  useEffect(() => {
    // Honour reduced-motion users (don't auto-play parallax)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {


















      // No-op — useTransform values are still applied but range is small enough
      // that a single pass is fine.
    }}, []);return <section ref={ref} className="relative min-h-[88vh] md:min-h-screen flex items-end overflow-hidden">
      
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <img src={HERO_IMG} alt="" aria-hidden className="w-full h-full object-cover" style={{ objectPosition: '70% center' }} />
        
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0 scanlines pointer-events-none" />
      </motion.div>

      {/* Side accent rails */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
      <div className="absolute right-0 top-1/3 bottom-1/3 w-px bg-gradient-to-b from-transparent via-teal-500/40 to-transparent" />

      {/* Hex motif */}
      <svg className="absolute right-12 top-32 w-72 opacity-[0.08] text-teal-300 pointer-events-none hidden lg:block" viewBox="0 0 200 200" fill="none" aria-hidden>
        
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="100,30 148,57.5 148,112.5 100,140 52,112.5 52,57.5" stroke="currentColor" strokeWidth="0.75" />
        <polygon points="100,55 130,72.5 130,107.5 100,125 70,107.5 70,72.5" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Live status chip — top of content area */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="absolute top-8 left-6 md:left-16 lg:top-10 z-10 flex items-center gap-2.5 px-3 py-1.5 bg-black/80 border border-orange-500/40 backdrop-blur-sm hidden">

        
        <div className="w-1.5 h-1.5 bg-orange-500 live-dot" />
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-orange-400">
          Fleet Online
        </span>
        <span className="text-zinc-600 text-[10px]">·</span>
        <span className="text-[10px] font-numeric text-zinc-400">SoCal Wide Service</span>
      </motion.div>

      {/* Content */}
      <motion.div
      style={{ y: contentY }}
      className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-16">
        
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-3 mb-6">
            
            <div className="w-10 h-px bg-orange-500" />
            <span className="text-orange-400 mt-20 font-bold uppercase tracking-[0.35em] sm:text-xs">AERIAL LIFT SPECIALISTS

          </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-barlow font-black tracking-tight leading-[0.85] mb-8">
            <div className="overflow-hidden">
              <motion.span className="text-white pt-2 pb-1 text-xl block"

            style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
                
                REACH
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span className="pt-3 pb-3 text-xl block"

            style={{
              fontSize: 'clamp(3rem, 12vw, 11rem)',
              WebkitTextStroke: '2px #f97316',
              color: 'rgba(249,115,22,0.04)'
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}>
                
                HIGHER.
              </motion.span>
            </div>
          </h1>

          {/* Subhead */}
          <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }} className="text-zinc-300 mb-10 text-lg uppercase leading-relaxed md:text-xl max-w-xl hidden">
          
            
            Southern California's premier source for{' '}
            <span className="text-white font-semibold">scissor lifts, boom lifts, telehandlers</span>{' '}
            &amp; service. JLG-authorized — any height, any job, any time.
          </motion.p>

          {/* CTAs */}
          <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-14">
            
            <Link
            to="/rentals"
            className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs sm:text-sm uppercase tracking-[0.25em] px-7 py-4 transition-all glow-orange">
              
              Browse Equipment
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
            to="/reserve"
            className="group inline-flex items-center justify-center gap-3 border border-zinc-700 hover:border-orange-500 text-white hover:text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] px-7 py-4 transition-all bg-black/30 hover:bg-black/50 backdrop-blur-sm">
              
              Get a Quote
            </Link>
            <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="hidden sm:inline-flex items-center gap-2 text-zinc-400 hover:text-orange-400 text-sm font-semibold transition-colors ml-2">
              
              <Phone className="w-4 h-4" />
              <span className="font-numeric">{SITE_CONFIG.phone}</span>
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 max-w-3xl">
            
            {STATS.map((stat, i) =>
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.5 }}
            className={`px-4 py-3 ${i !== 0 ? 'border-l border-zinc-800/80' : ''}`}>
              
                <div className="font-numeric text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
          )}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.6 }}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-600">
        
        <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
        <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>;

}