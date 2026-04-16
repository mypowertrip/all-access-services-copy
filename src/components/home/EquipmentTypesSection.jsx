import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Ruler, Weight } from 'lucide-react';

const BOOM_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/85ca86919_generated_image.png";
const SCISSOR_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/305282a55_generated_image.png";
const TELEHANDLER_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/98a96e5cb_generated_image.png";
const LOWLEVEL_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/004ceff0b_generated_image.png";
const FORKLIFT_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/75f563281_generated_image.png";

const equipment = [
  {
    name: 'Boom Lifts',
    subtitle: 'Extended Reach',
    img: BOOM_IMG,
    specs: { height: '40-185 ft', capacity: '500-1000 lbs', types: '15+ models' },
  },
  {
    name: 'Scissor Lifts',
    subtitle: 'Vertical Access',
    img: SCISSOR_IMG,
    specs: { height: '20-60 ft', capacity: '500-1500 lbs', types: '10+ models' },
  },
  {
    name: 'Telehandlers',
    subtitle: 'Material Handling',
    img: TELEHANDLER_IMG,
    specs: { height: '20-55 ft', capacity: '5000-12000 lbs', types: '8+ models' },
  },
  {
    name: 'Low Level Access',
    subtitle: 'Ground Level',
    img: LOWLEVEL_IMG,
    specs: { height: '6-20 ft', capacity: '250-800 lbs', types: '6+ models' },
  },
  {
    name: 'Forklifts',
    subtitle: 'Load & Carry',
    img: FORKLIFT_IMG,
    specs: { height: 'Up to 20 ft', capacity: '3000-15000 lbs', types: '10+ models' },
  },
];

export default function EquipmentTypesSection() {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-950 to-black py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <div className="w-12 h-0.5 bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Shop by Type</span>
            <div className="w-12 h-0.5 bg-orange-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-barlow text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            FIND YOUR PERFECT <span className="text-orange-500">MACHINE</span>
          </motion.h2>
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {equipment.map((eq, i) => (
            <motion.div
              key={eq.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
                <img src={eq.img} alt={eq.name} className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 border border-orange-500/50 flex items-center justify-center font-barlow text-orange-500 font-bold">
                  0{i + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">{eq.subtitle}</div>
                <h3 className="font-barlow text-xl font-bold text-white mb-4">{eq.name}</h3>

                {/* Specs */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Ruler className="w-3.5 h-3.5 text-orange-500" />
                    <span>Height: {eq.specs.height}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Weight className="w-3.5 h-3.5 text-orange-500" />
                    <span>Capacity: {eq.specs.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Gauge className="w-3.5 h-3.5 text-orange-500" />
                    <span>{eq.specs.types}</span>
                  </div>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider hover:text-orange-300 transition-colors group/link">
                  View All
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#" className="inline-flex items-center gap-3 border border-zinc-700 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold text-sm uppercase tracking-wider px-8 py-4 transition-all">
            View All Equipment Types
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}