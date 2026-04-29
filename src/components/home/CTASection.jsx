import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/siteConfig';

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-36 overflow-hidden bg-black border-y border-orange-500/20">
      {/* Atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-[0.06]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-orange-500/[0.06] blur-3xl pointer-events-none" />

      {/* Geometric accents */}
      <svg
        className="absolute -right-12 -top-12 w-72 opacity-[0.06] text-orange-400 pointer-events-none hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="2" />
        <polygon points="100,30 148,57.5 148,112.5 100,140 52,112.5 52,57.5" stroke="currentColor" strokeWidth="1" />
      </svg>
      <svg
        className="absolute -left-16 -bottom-16 w-56 opacity-[0.05] text-orange-400 pointer-events-none hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <polygon points="100,10 165,47.5 165,122.5 100,160 35,122.5 35,47.5" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <div className="w-10 h-px bg-orange-500" />
          <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-orange-400">
            Ready When You Are
          </span>
          <div className="w-10 h-px bg-orange-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-barlow text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight uppercase leading-[0.9] mb-8"
        >
          Let's Get Your<br />
          <span style={{ WebkitTextStroke: '2px #f97316', color: 'rgba(249,115,22,0.04)' }}>
            Project Elevated.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Get a free quote in under 2 hours, or speak with an expert today.
          Same-day delivery available across all four SoCal locations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
        >
          <Link
            to="/reserve"
            className="group inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs sm:text-sm uppercase tracking-[0.25em] px-10 py-5 transition-all glow-orange"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="inline-flex items-center justify-center gap-3 border border-zinc-700 hover:border-orange-500 text-white hover:text-orange-400 font-semibold text-xs sm:text-sm uppercase tracking-[0.25em] px-10 py-5 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-numeric">{SITE_CONFIG.phone}</span>
          </a>
        </motion.div>

        {/* Secondary contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-14 pt-8 border-t border-zinc-900"
        >
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            Email Us
          </a>
          <span className="text-zinc-800">·</span>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            Visit a Branch
          </Link>
          <span className="text-zinc-800">·</span>
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-orange-400 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Request Callback
          </a>
        </motion.div>
      </div>
    </section>
  );
}