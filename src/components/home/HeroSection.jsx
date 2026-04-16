import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';

const HERO_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/8039c259f_generated_b19fabea.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Boom lift at construction site"
          className="w-full h-full object-cover"
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Orange accent line */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 md:pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">Southern California's #1 Equipment Provider</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-barlow font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6"
          >
            REACH
            <br />
            <span className="text-orange-500">HIGHER.</span>
            <br />
            <span className="text-white">WORK SMARTER.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Premium aerial work platform rentals, sales, and service across 4 Southern California locations. JLG-authorized dealer and ClearSky™ connected fleet.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#rentals"
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all glow-orange"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#inventory"
              className="group inline-flex items-center gap-3 border border-white/30 hover:border-orange-500 text-white hover:text-orange-400 font-semibold text-sm uppercase tracking-widest px-8 py-4 transition-all"
            >
              <Play className="w-4 h-4" />
              View Inventory
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { val: '4', label: 'SoCal Locations' },
              { val: '500+', label: 'Units in Fleet' },
              { val: '25+', label: 'Years Experience' },
              { val: '24/7', label: 'Support Available' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-barlow text-3xl font-black text-orange-500">{stat.val}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}