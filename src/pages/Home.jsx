import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Shield, Clock, Truck, Phone,
  Star, ChevronRight, Zap, Award, Users, Radio
} from 'lucide-react';
import SiteNav from '../components/layout/SiteNav';
import SiteFooter from '../components/layout/SiteFooter';
import { categories } from '../lib/equipmentData';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const stats = [
  { value: '2,400+', label: 'Units Available' },
  { value: '47', label: 'States Served' },
  { value: '24/7', label: 'Support' },
  { value: '98%', label: 'Uptime Rate' },
];

const howSteps = [
  { num: '01', title: 'Browse & Configure', desc: 'Filter by category, height, capacity, and fuel type. Get instant availability and transparent pricing.' },
  { num: '02', title: 'Reserve Online', desc: 'Choose your rental dates, delivery location, and any add-ons. No phone calls required.' },
  { num: '03', title: 'We Deliver & Set Up', desc: 'Factory-certified equipment arrives on-site, inspected and ready. Our team handles setup.' },
  { num: '04', title: 'Operate with Confidence', desc: 'ClearSky™ telematics keeps you informed. On-call support if you ever need us.' },
];

const industries = [
  { name: 'Construction', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop', desc: 'High-reach access for any job site' },
  { name: 'Warehousing', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop', desc: 'Forklifts and reach trucks for any facility' },
  { name: 'Industrial', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', desc: 'Heavy-duty lifts for industrial operations' },
  { name: 'Aerospace & Defense', img: 'https://images.unsplash.com/photo-1517976547714-720226b864c1?w=600&h=400&fit=crop', desc: 'Ground Control™ fleet for mission-critical ops', special: true },
];

const testimonials = [
  { name: 'Marcus R.', role: 'Site Superintendent, Turner Construction', quote: 'We had a 185-ft boom on site within 18 hours of booking. The online reservation was seamless.', rating: 5 },
  { name: 'Lisa T.', role: 'Fleet Manager, Amazon Logistics', quote: 'Our go-to for reach trucks and forklifts. Transparent pricing, zero hidden fees.', rating: 5 },
  { name: 'Col. James H.', role: 'Operations, US Space Force', quote: 'Ground Control gives us real-time visibility across three sites. Mission-critical reliability.', rating: 5 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <SiteNav />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-xs font-bold uppercase tracking-widest mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-orange live-dot" />
                Equipment Available Now
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.03] text-white"
            >
              Rent the{' '}
              <span className="text-orange">right lift</span>{' '}
              for the job.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Boom lifts, scissor lifts, telehandlers, and forklifts — delivered to your site, ready to work.
              Reserve online in minutes, no contracts required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link to="/equipment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange hover:bg-orange/90 text-white font-bold text-base rounded-xl transition-all shadow-xl shadow-orange/25">
                Browse Equipment <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#how"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base rounded-xl border border-white/20 transition-all backdrop-blur-sm">
                How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              {['No long-term contracts', 'Delivered & set up', '24/7 support', 'Transparent pricing'].map(item => (
                <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">Our Fleet</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Four categories. One platform.
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-lg mx-auto">
              Every unit is factory-inspected, fully insured, and delivered to your site.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} {...fadeUp(i * 0.08)}>
                <Link to={`/equipment?cat=${cat.id}`}
                  className="group block p-7 rounded-2xl border-2 border-slate-100 hover:border-orange/30 bg-white hover:bg-orange/[0.03] transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-orange/10">
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{cat.label}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-sm font-bold text-orange group-hover:gap-2 transition-all">
                    Browse {cat.label} <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">Simple Process</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              From browse to on-site in hours
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howSteps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp(i * 0.1)}
                className="relative p-7 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="text-4xl font-black text-slate-100 mb-4 leading-none">{step.num}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                {i < howSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 z-10">
                    <ChevronRight className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} className="mt-10 text-center">
            <Link to="/equipment"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange hover:bg-orange/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange/20">
              Start Browsing <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">Industries</p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Built for every jobsite
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} {...fadeUp(i * 0.08)}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer ${ind.special ? 'ring-2 ring-orange/40' : ''}`}>
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                {ind.special && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-orange text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Ground Control™
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-base font-bold text-white">{ind.name}</h3>
                  <p className="text-sm text-slate-300 mt-1">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GROUND CONTROL UPSELL ═══ */}
      <section id="ground-control" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-[10px] font-bold uppercase tracking-widest mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-orange live-dot" />
                For Military · Aerospace · Space
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Mission-critical ops demand{' '}
                <span className="text-orange">Ground Control™</span>
              </h2>
              <p className="mt-5 text-base text-slate-400 leading-relaxed">
                Standard rental isn't enough for clearance-sensitive, zero-downtime operations. Ground Control is our enhanced service tier built exclusively for military, aerospace, and space operators.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { icon: Radio, title: 'ClearSky™ Real-Time Telematics', desc: 'Live GPS, fuel levels, runtime hours, and fault codes streamed to your dashboard.' },
                  { icon: Shield, title: 'Factory-Certified Maintenance', desc: 'Preventive and emergency maintenance dispatched within hours, not days.' },
                  { icon: Phone, title: 'Dedicated Named Concierge', desc: 'One specialist, one direct line. On call 24/7 for your fleet.' },
                  { icon: Award, title: 'SOC 2 Compliant Infrastructure', desc: 'Cleared facility support. NDA and compliance packages on request.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{title}</div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <Link to="/dashboard"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange hover:bg-orange/90 text-white font-bold text-sm rounded-xl transition-all">
                  Request Access <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:groundcontrol@allaccess.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all">
                  Contact Us
                </a>
              </div>
            </motion.div>

            {/* Ground Control preview card */}
            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl shadow-black/40">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5">
                      <svg viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="4" fill="#111"/><path d="M8 24L16 8L24 24L20 24L16 16L12 24Z" fill="#EF6410"/></svg>
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Ground Control™</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" /> Live
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-4 gap-3">
                    {[['Active', '14/16', 'text-orange'], ['Alerts', '2', 'text-yellow-400'], ['Hours', '94.2', 'text-white'], ['Status', 'OK', 'text-emerald-400']].map(([l, v, c]) => (
                      <div key={l} className="rounded-lg bg-slate-800/60 p-3 text-center">
                        <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-1">{l}</div>
                        <div className={`text-sm font-black ${c}`}>{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Mini map SVG */}
                  <div className="rounded-lg overflow-hidden" style={{ background: '#0d1f16' }}>
                    <svg width="100%" height="140" viewBox="0 0 400 140" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <radialGradient id="gc-vignette" cx="50%" cy="50%" r="70%">
                          <stop offset="0%" stopColor="#0a1a14" stopOpacity="0" />
                          <stop offset="100%" stopColor="#020f08" stopOpacity="0.8" />
                        </radialGradient>
                        <filter id="gc-glow"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      </defs>
                      <rect width="400" height="140" fill="#0d1f16"/>
                      <g stroke="#1a3226" strokeWidth="0.8" fill="none">
                        {[20,40,60,80,100,120].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y}/>)}
                        {[40,80,130,180,240,300,360].map(x=><line key={x} x1={x} y1="0" x2={x} y2="140"/>)}
                      </g>
                      <g stroke="#1f4030" strokeWidth="1.5" fill="none">
                        <line x1="0" y1="60" x2="400" y2="60"/>
                        <line x1="180" y1="0" x2="180" y2="140"/>
                      </g>
                      <line x1="0" y1="110" x2="400" y2="20" stroke="#173d2c" strokeWidth="3" strokeLinecap="round"/>
                      <rect width="400" height="140" fill="url(#gc-vignette)"/>
                      <circle cx="210" cy="65" r="40" fill="none" stroke="#00BBC9" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
                      <text x="210" y="22" fontFamily="monospace" fontSize="7" fill="#00BBC9" opacity="0.5" textAnchor="middle" letterSpacing="0.1em">SITE ALPHA</text>
                      <g filter="url(#gc-glow)">
                        <circle cx="200" cy="58" r="4" fill="#28C840" opacity="0.9"/>
                        <circle cx="225" cy="75" r="4" fill="#28C840" opacity="0.9"/>
                        <circle cx="190" cy="78" r="4" fill="#00BBC9" opacity="0.9"/>
                        <circle cx="235" cy="55" r="4" fill="#EF6410" opacity="0.9"/>
                      </g>
                    </svg>
                  </div>

                  <div className="space-y-2">
                    {[
                      { col: 'text-red-400 bg-red-400/10', text: 'Unit 08 — Annual Inspection Overdue · Site Alpha' },
                      { col: 'text-yellow-400 bg-yellow-400/10', text: 'Unit 03 — Inspection Due in 5 Days · Schedule' },
                    ].map((a, i) => (
                      <div key={i} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg ${a.col}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                        <span className="text-[11px] font-semibold">{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-orange mb-3">Trusted By</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">What our customers say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp(i * 0.1)}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-orange text-orange" />)}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 bg-orange">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp()}>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Ready to get your equipment on-site?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Browse our full catalog and reserve online — no contracts, no hassle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/equipment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange font-bold text-base rounded-xl transition-all hover:bg-slate-50 shadow-xl">
                Browse Equipment <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:8005550100"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-semibold text-base rounded-xl border border-white/30 transition-all">
                <Phone className="w-5 h-5" /> Call (800) 555-0100
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}