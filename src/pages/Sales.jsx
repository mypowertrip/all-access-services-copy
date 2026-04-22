import Navbar from '../components/home/Navbar';
import Footer from '../components/home/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock, Tag } from 'lucide-react';

const SCISSOR_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/09404de17_generated_418edddd.png";
const BOOM_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/b576b6a80_generated_91f959ee.png";
const TELEHANDLER_IMG = "https://media.base44.com/images/public/69e03c311db29c3c17ba7e75/01c29d10b_generated_459b7c93.png";

const inventory = [
  {
    id: 1,
    make: 'JLG',
    model: '1200SJP',
    year: 2024,
    price: 285000,
    condition: 'New',
    type: 'Boom Lift',
    img: BOOM_IMG,
    featured: true,
  },
  {
    id: 2,
    make: 'JLG',
    model: 'G12-55A',
    year: 2022,
    price: 89500,
    condition: 'Pre-Owned',
    type: 'Telehandler',
    img: TELEHANDLER_IMG,
    certified: true,
  },
  {
    id: 3,
    make: 'JLG',
    model: 'ES1930M',
    year: 2024,
    price: 14545,
    condition: 'New',
    type: 'Scissor Lift',
    img: SCISSOR_IMG,
  },
  {
    id: 4,
    make: 'JLG',
    model: '460SJ',
    year: 2021,
    price: 32500,
    originalPrice: 38000,
    condition: 'Pre-Owned',
    type: 'Boom Lift',
    img: BOOM_IMG,
    reduced: true,
  },
  {
    id: 5,
    make: 'SkyTrak',
    model: '10054',
    year: 2024,
    price: 165000,
    condition: 'New',
    type: 'Telehandler',
    img: TELEHANDLER_IMG,
  },
  {
    id: 6,
    make: 'JLG',
    model: 'ES1330M',
    year: 2024,
    price: 12995,
    condition: 'New',
    type: 'Scissor Lift',
    img: SCISSOR_IMG,
  },
];

export default function Sales() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">New & Pre-Owned</span>
            </div>
            <h1 className="font-barlow text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              Equipment <span className="text-orange-500">For Sale</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">New and certified pre-owned JLG equipment with competitive financing options available.</p>
          </motion.div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inventory.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={item.img} alt={item.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {item.featured && (
                      <span className="bg-teal-500 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Featured</span>
                    )}
                    {item.certified && (
                      <span className="bg-orange-500 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Certified
                      </span>
                    )}
                    {item.reduced && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Reduced</span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
                      item.condition === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                    }`}>
                      {item.condition}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{item.type}</span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-500 text-xs">{item.year}</span>
                  </div>

                  <h3 className="font-barlow text-xl font-bold text-white mb-3">{item.make} {item.model}</h3>

                  <div className="flex items-end justify-between">
                    <div>
                      {item.originalPrice && (
                        <span className="text-gray-500 line-through text-sm mr-2">${item.originalPrice.toLocaleString()}</span>
                      )}
                      <span className="text-2xl font-black text-orange-500">${item.price.toLocaleString()}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-orange-400 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-barlow text-4xl md:text-5xl font-black text-black mb-6"
          >
            Ready to Buy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black/80 text-lg max-w-2xl mx-auto mb-8"
          >
            Speak with our sales team about financing options and delivery.
          </motion.p>
          <a href="tel:8887775990" className="inline-flex items-center gap-3 bg-black hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest px-10 py-5 transition-all">
            Call Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}