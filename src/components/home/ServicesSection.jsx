import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Truck, ShoppingBag, ShieldCheck } from 'lucide-react';

const services = [
  {
    n: '01',
    title: 'Equipment Rentals',
    blurb:
      "Daily, weekly, monthly. JLG-authorized fleet — scissor lifts, boom lifts, telehandlers, forklifts. Delivered, fueled, and inspected.",
    cta: 'Browse Rentals',
    href: '/rentals/category/scissor-lifts',
    image: 'https://media.base44.com/images/public/69f03230e61a9516ac171fbd/aaeb30642_Screenshot2026-04-27at110540PM.png',
    icon: Truck,
    size: 'lg',
  },
  {
    n: '02',
    title: 'Equipment Sales',
    blurb: 'New & certified pre-owned JLG. Financing available.',
    cta: 'Showroom',
    href: '/sales',
    image: 'https://media.base44.com/images/public/69f03230e61a9516ac171fbd/b29279f8e_Screenshot2026-04-27at105944PM.png',
    icon: ShoppingBag,
    size: 'sm',
  },
  {
    n: '03',
    title: 'Service & Repair',
    blurb: 'Factory-trained technicians. On-site or in-shop.',
    cta: 'Schedule',
    href: '/service',
    image: 'https://media.base44.com/images/public/69f03230e61a9516ac171fbd/176695ecd_Screenshot2026-04-27at111017PM.png',
    icon: Wrench,
    size: 'sm',
  },
  {
    n: '04',
    title: 'OSHA-Approved Safety Training',
    blurb:
      'Operator certification courses on aerial work platforms — pre-use inspections, jobsite awareness, ground conditions. Real-world, beyond compliance.',
    cta: 'Learn More',
    href: '/safety',
    icon: ShieldCheck,
    size: 'wide',
  },
];

const Card = ({ s, className = '' }) => {
  const Icon = s.icon;
  return (
    <Link
      to={s.href}
      className={`group relative overflow-hidden bg-zinc-900/40 border border-zinc-800 hover:border-orange-500/60 transition-all duration-500 block ${className}`}
    >
      {/* Image (if present) */}
      {s.image && (
        <div className="absolute inset-0">
          <img
            src={s.image}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
      )}
      {!s.image && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-[0.08]" />
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-orange-500/[0.04] rounded-full blur-3xl" />
        </div>
      )}

      {/* Hex number badge — top-right */}
      <div className="absolute top-5 right-5 z-10">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-orange-500/60 group-hover:text-orange-500 transition-colors">
            <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="font-numeric text-xs font-bold text-orange-400">{s.n}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <Icon className="w-7 h-7 text-orange-400 mb-4 transition-transform group-hover:-translate-y-1" />
        <h3 className={`font-barlow font-bold text-white tracking-tight uppercase mb-2 ${
          s.size === 'lg' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
        }`}>
          {s.title}
        </h3>
        <p className={`text-zinc-400 leading-relaxed mb-5 ${
          s.size === 'lg' ? 'text-sm md:text-base max-w-md' : 'text-xs md:text-sm'
        }`}>
          {s.blurb}
        </p>
        <span className="inline-flex items-center gap-2 text-orange-400 group-hover:text-orange-300 text-xs font-bold uppercase tracking-[0.25em] transition-colors">
          {s.cta}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex items-end justify-between gap-8 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-orange-400">
                What We Offer
              </span>
            </div>
            <h2 className="font-barlow text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Full-Service<br />
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'rgba(249,115,22,0.04)' }}>Aerial Operations.</span>
            </h2>
          </div>
          <div className="hidden md:block font-numeric text-zinc-700 text-sm">
            <span className="text-orange-500">/</span> 04 Capabilities
          </div>
        </motion.div>

        {/* Bento grid:
              lg+:  [   01 lg (col-span-2 row-span-2)   ][ 02 sm ]
                                                       [ 03 sm ]
                    [             04 wide (col-span-3)         ] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[16rem] md:auto-rows-[14rem]">
          {services.map((s, i) => {
            const span =
              s.size === 'lg'
                ? 'md:col-span-2 md:row-span-2'
                : s.size === 'wide'
                ? 'md:col-span-3'
                : '';
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={span}
              >
                <Card s={s} className="w-full h-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}