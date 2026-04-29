import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Ruler, Weight, Layers } from 'lucide-react';

const BOOM_IMG = 'https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/d691b3fe6_boom-lift.png';
const SCISSOR_IMG = 'https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/45bbda75b_scissor-lift.png';
const TELEHANDLER_IMG = 'https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/8f9a3cf95_telehandler.png';
const LOWLEVEL_IMG = 'https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/ae9c0d38b_low-level-access.png';
const FORKLIFT_IMG = 'https://media.base44.com/images/public/69f03230e61a9516ac171fbd/d755986ac_Untitled-2.png';

const equipment = [
  {
    n: '01',
    name: 'Straight Boom Lifts',
    subtitle: 'Extended Reach',
    slug: 'straight-boom-lifts',
    img: BOOM_IMG,
    specs: { height: '40 – 185 ft', capacity: '500 – 1,000 lb', count: '15+' },
  },
  {
    n: '02',
    name: 'Scissor Lifts',
    subtitle: 'Vertical Access',
    slug: 'scissor-lifts',
    img: SCISSOR_IMG,
    specs: { height: '20 – 60 ft', capacity: '500 – 1,500 lb', count: '10+' },
  },
  {
    n: '03',
    name: 'Telehandlers',
    subtitle: 'Material Handling',
    slug: 'telehandlers',
    img: TELEHANDLER_IMG,
    specs: { height: '20 – 55 ft', capacity: '5K – 12K lb', count: '8+' },
  },
  {
    n: '04',
    name: 'Articulating Booms',
    subtitle: 'Maximum Maneuverability',
    slug: 'articulating-boom-lifts',
    img: LOWLEVEL_IMG,
    specs: { height: '30 – 100 ft', capacity: '500 – 660 lb', count: '15+' },
  },
  {
    n: '05',
    name: 'Forklifts',
    subtitle: 'Load & Carry',
    slug: 'forklifts',
    img: FORKLIFT_IMG,
    specs: { height: 'Up to 20 ft', capacity: '3K – 15K lb', count: '10+' },
  },
];

export default function EquipmentTypesSection() {
  return (
    <section id="equipment" className="relative bg-zinc-950 py-20 md:py-32 overflow-hidden">
      {/* atmosphere */}
      <div className="absolute inset-0 grid-bg opacity-[0.05]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[36rem] h-[36rem] bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-orange-400">
                Browse the Fleet
              </span>
            </div>
            <h2 className="font-barlow text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Find Your<br />
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'rgba(249,115,22,0.04)' }}>
                Perfect Machine.
              </span>
            </h2>
          </div>
          <Link
            to="/rentals"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-orange-400 uppercase tracking-[0.2em] transition-colors group"
          >
            View Full Catalog
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/rentals/category/${eq.slug}`}
                className="group relative flex flex-col h-full bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/60 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-zinc-800/40 to-zinc-900">
                  <img
                    src={eq.img}
                    alt={eq.name}
                    className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hex number */}
                  <div className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-orange-500/50 group-hover:text-orange-500 transition-colors">
                      <polygon points="50,4 92,28 92,72 50,96 8,72 8,28" stroke="currentColor" strokeWidth="3" fill="rgba(0,0,0,0.6)" />
                    </svg>
                    <span className="relative font-numeric text-[10px] font-bold text-orange-400">{eq.n}</span>
                  </div>
                  {/* Count chip */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-black/70 border border-zinc-700 text-[9px] font-numeric text-zinc-400 uppercase tracking-wider">
                    {eq.specs.count} models
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-[0.25em] mb-1">
                    {eq.subtitle}
                  </div>
                  <h3 className="font-barlow text-xl font-bold text-white uppercase tracking-tight mb-4">
                    {eq.name}
                  </h3>

                  {/* Specs in mono */}
                  <div className="space-y-2 mb-5 text-xs">
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Ruler className="w-3 h-3 text-orange-500" />
                        Height
                      </span>
                      <span className="font-numeric text-zinc-200">{eq.specs.height}</span>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <Weight className="w-3 h-3 text-orange-500" />
                        Capacity
                      </span>
                      <span className="font-numeric text-zinc-200">{eq.specs.capacity}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-3 border-t border-zinc-800 flex items-center justify-between">
                    <span className="text-orange-400 group-hover:text-orange-300 text-[10px] font-bold uppercase tracking-[0.25em] transition-colors">
                      View All
                    </span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 transition-all group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile catalog link */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/rentals"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-orange-400 uppercase tracking-[0.2em] transition-colors"
          >
            View Full Catalog
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
