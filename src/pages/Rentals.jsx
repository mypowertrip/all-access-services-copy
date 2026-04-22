import { useParams } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, Ruler, Weight } from 'lucide-react';

const BOOM_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/d691b3fe6_boom-lift.png";
const SCISSOR_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/45bbda75b_scissor-lift.png";
const TELEHANDLER_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/8f9a3cf95_telehandler.png";
const LOWLEVEL_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/ae9c0d38b_low-level-access.png";
const FORKLIFT_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/75f563281_generated_image.png";

const equipment = [
  {
    name: 'Boom Lifts',
    slug: 'boom-lifts',
    subtitle: 'Extended Reach',
    img: BOOM_IMG,
    specs: { height: '40-185 ft', capacity: '500-1000 lbs', models: '15+ models' },
    description: 'Our boom lifts deliver extended horizontal and vertical reach for high-access work.',
  },
  {
    name: 'Scissor Lifts',
    slug: 'scissor-lifts',
    subtitle: 'Vertical Access',
    img: SCISSOR_IMG,
    specs: { height: '20-60 ft', capacity: '500-1500 lbs', models: '10+ models' },
    description: 'Reliable vertical access platforms for indoor and outdoor applications.',
  },
  {
    name: 'Telehandlers',
    slug: 'telehandlers',
    subtitle: 'Material Handling',
    img: TELEHANDLER_IMG,
    specs: { height: '20-55 ft', capacity: '5000-12000 lbs', models: '8+ models' },
    description: 'Powerful material handlers for construction and warehouse operations.',
  },
  {
    name: 'Low Level Access',
    slug: 'low-level-access',
    subtitle: 'Ground Level',
    img: LOWLEVEL_IMG,
    specs: { height: '6-20 ft', capacity: '250-800 lbs', models: '6+ models' },
    description: 'Compact platforms for tight spaces and interior work.',
  },
  {
    name: 'Forklifts',
    slug: 'forklifts',
    subtitle: 'Load & Carry',
    img: FORKLIFT_IMG,
    specs: { height: 'Up to 20 ft', capacity: '3000-15000 lbs', models: '10+ models' },
    description: 'Heavy-duty forklifts for material transport and stacking.',
  },
];

export default function Rentals() {
  const { category } = useParams();
  const selectedEquipment = category ? equipment.find(e => e.slug === category) : null;

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Equipment Rentals</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Rent <span className="text-orange-500">Equipment Today</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">Daily, weekly, and monthly rental options on the industry's most reliable aerial work platforms.</p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Grid */}
      {!selectedEquipment && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {equipment.map((eq, i) => (
                <motion.a
                  key={eq.name}
                  href={`/rentals/${eq.slug}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 overflow-hidden transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-zinc-800">
                    <img src={eq.img} alt={eq.name} className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 border border-orange-500/50 flex items-center justify-center font-barlow text-orange-500 font-bold">
                      0{i + 1}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">{eq.subtitle}</div>
                    <h3 className="font-barlow text-xl font-bold text-white mb-4">{eq.name}</h3>

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
                        <span>{eq.specs.models}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-bold uppercase tracking-wider hover:text-orange-300 transition-colors">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Detail */}
      {selectedEquipment && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <button onClick={() => window.history.back()} className="text-orange-400 hover:text-orange-300 mb-8 text-sm font-bold uppercase">← Back</button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <img src={selectedEquipment.img} alt={selectedEquipment.name} className="w-full h-auto object-contain" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="font-barlow text-5xl font-black text-white mb-4">{selectedEquipment.name}</h1>
                <p className="text-gray-400 text-lg mb-8">{selectedEquipment.description}</p>

                <div className="space-y-4 mb-8 bg-zinc-900/50 p-6 border border-zinc-800">
                  <div>
                    <span className="text-gray-500 text-sm">Maximum Height</span>
                    <p className="text-2xl font-bold text-white">{selectedEquipment.specs.height}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Capacity</span>
                    <p className="text-2xl font-bold text-white">{selectedEquipment.specs.capacity}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Available Models</span>
                    <p className="text-2xl font-bold text-white">{selectedEquipment.specs.models}</p>
                  </div>
                </div>

                <a href="/reserve" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all">
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}