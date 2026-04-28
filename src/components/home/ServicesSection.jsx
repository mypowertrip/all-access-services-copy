import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Real All Access Services photos (matching the three hero CTAs on allaccessservices.com)

// SVG icons for each service
const ScissorLiftIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="40" y="10" width="40" height="16" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="48" y="26" width="24" height="6" fill="currentColor" opacity="0.7"/>
    <line x1="36" y1="32" x2="60" y2="88" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <line x1="84" y1="32" x2="60" y2="88" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <line x1="36" y1="60" x2="84" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <rect x="20" y="88" width="80" height="12" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="10" y="100" width="100" height="8" rx="3" fill="currentColor"/>
    <circle cx="28" cy="112" r="6" fill="currentColor"/>
    <circle cx="92" cy="112" r="6" fill="currentColor"/>
  </svg>
);

const BoomLiftIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="28" y="8" width="28" height="12" rx="2" fill="currentColor" opacity="0.9"/>
    <line x1="56" y1="14" x2="92" y2="60" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
    <line x1="28" y1="14" x2="56" y2="60" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
    <rect x="15" y="82" width="90" height="14" rx="3" fill="currentColor" opacity="0.85"/>
    <rect x="10" y="96" width="100" height="10" rx="3" fill="currentColor"/>
    <circle cx="28" cy="110" r="7" fill="currentColor"/>
    <circle cx="92" cy="110" r="7" fill="currentColor"/>
    <rect x="44" y="55" width="24" height="30" rx="2" fill="currentColor" opacity="0.6"/>
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M80 15 C95 15 105 28 100 42 L55 87 L33 87 L33 65 L78 20 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="4"/>
    <path d="M100 42 L78 20 M90 30 L75 45" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <rect x="20" y="80" width="42" height="16" rx="4" transform="rotate(-45 20 80)" fill="currentColor"/>
    <circle cx="85" cy="28" r="12" stroke="currentColor" strokeWidth="4" fill="none"/>
    <path d="M40 95 L25 110" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

const services = [
  {
    title: 'Equipment Rentals',
    description: 'Daily, weekly, and monthly rental options on the industry\'s most reliable aerial work platforms.',
    cta: 'Browse Rentals',
    href: '/rentals',
    Icon: ScissorLiftIcon,
    accent: 'orange',
    bg: 'from-orange-950/80 to-zinc-950',
  },
  {
    title: 'Equipment Sales',
    description: 'New and certified pre-owned JLG equipment with competitive financing options available.',
    cta: 'View Inventory',
    href: '/sales',
    Icon: BoomLiftIcon,
    accent: 'teal',
    bg: 'from-teal-950/80 to-zinc-950',
  },
  {
    title: 'Service & Repair',
    description: 'JLG-authorized factory-trained technicians keeping your fleet running at peak performance.',
    cta: 'Schedule Service',
    href: '/service',
    Icon: WrenchIcon,
    accent: 'orange',
    bg: 'from-orange-950/80 to-zinc-950',
  },
];

export default function ServicesSection() {
  return (
    <section id="rentals" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-0.5 bg-orange-500" />
          <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">What We Offer</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <Link
              key={s.title}
              to={s.href}
              className="group relative overflow-hidden aspect-[4/5] cursor-pointer block"
            >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="absolute inset-0"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${s.bg} transition-all duration-500`} />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${s.accent === 'teal' ? 'bg-teal-400' : 'bg-orange-400'}`} />

              {/* Large decorative SVG icon */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'}`}>
                <s.Icon />
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)',backgroundSize:'32px 32px'}} />

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${s.accent === 'teal' ? 'bg-teal-400' : 'bg-orange-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className={`w-12 h-12 mb-4 ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'}`}>
                  <s.Icon />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'}`}>
                  0{i + 1}
                </div>
                <h3 className="font-barlow text-3xl font-semibold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {s.description}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${s.accent === 'teal' ? 'text-teal-400' : 'text-orange-400'} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}