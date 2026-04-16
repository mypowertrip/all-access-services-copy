import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SiteMap from './SiteMap';

const kpis = [
  { label: 'Status', value: 'OK', color: 'text-gc-green' },
  { label: 'Active', value: '14/16', color: 'text-gc-orange' },
  { label: 'Alerts', value: '2', color: 'text-gc-yellow' },
  { label: 'Handler', value: 'Online', color: 'text-gc-teal' },
];

export default function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      {/* Subtle hex grid bg */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'52\' viewBox=\'0 0 60 52\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0L60 17.3V34.6L30 52L0 34.6V17.3L30 0Z\' stroke=\'%23ffffff\' stroke-width=\'0.5\'/%3E%3C/svg%3E")', backgroundSize: '60px 52px' }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gc-orange/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gc-teal/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-16 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-gc-orange" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-gc-orange">
                Military · Aerospace · Space
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight text-foreground">
              Your fleet.{' '}
              <span className="text-gc-orange">Always</span>{' '}
              <span className="text-gc-green">Ready.</span>
            </h1>

            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-lg">
              The members-only equipment rental and service platform built for military, aerospace, and space operators.{' '}
              <strong className="text-foreground/80">Dedicated fleet. Real-time telematics via Ground Control. A named concierge on call around the clock.</strong>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact"
                className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold rounded-md transition-colors uppercase tracking-wide">
                Request Membership <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#equipment"
                className="flex items-center gap-2 px-6 py-3 border border-border hover:border-foreground/20 text-sm font-bold text-muted-foreground hover:text-foreground rounded-md transition-colors uppercase tracking-wide">
                View Equipment
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-border">
              {[['16+', 'Fleet Units'], ['3', 'Active Sites'], ['24/7', 'Concierge']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black text-gc-orange">{v}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide font-bold">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — App window */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Alert badge */}
          <div className="flex items-center gap-3 mb-3 px-3 py-2.5 rounded-lg bg-gc-red/10 border border-gc-red/20 w-fit text-xs">
            <div className="w-2 h-2 rounded-full bg-gc-red" />
            <div>
              <span className="font-bold text-gc-red">Unit 08 — Maintenance Due</span>
              <span className="text-muted-foreground ml-2">Site Alpha · 2h ago</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden shadow-2xl shadow-black/40">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-muted/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-gc-red/70" />
                <div className="w-3 h-3 rounded-full bg-gc-yellow/70" />
                <div className="w-3 h-3 rounded-full bg-gc-green/70" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5">
                  <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#111"/><path d="M8 24L16 8L24 24L20 24L16 16L12 24Z" fill="#EF6410"/></svg>
                </div>
                <span className="text-[10px] font-black tracking-widest uppercase text-muted-foreground">Ground Control</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-gc-green uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-gc-green live-dot" />
                Live
              </div>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-4 border-b border-border divide-x divide-border">
              {kpis.map(k => (
                <div key={k.label} className="px-3 py-3 text-center">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{k.label}</div>
                  <div className={`text-sm font-black mt-0.5 ${k.color}`}>{k.value}</div>
                </div>
              ))}
            </div>

            {/* Map */}
            <SiteMap className="h-48 w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}