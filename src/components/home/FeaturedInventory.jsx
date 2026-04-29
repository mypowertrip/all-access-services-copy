import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { salesInventory } from '../../lib/salesInventory';

export default function FeaturedInventory() {
  const [filter, setFilter] = useState('all');

  // Get random 6 items from sales inventory, reshuffle on mount
  const featured = useMemo(() => {
    const shuffled = [...salesInventory].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6);
  }, []);

  const filtered = filter === 'all' ? featured : featured.filter((i) => i.condition.toLowerCase().includes(filter));

  return (
    <section id="inventory" className="bg-black py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Featured Inventory</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-barlow text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              EQUIPMENT <span style={{ WebkitTextStroke: '2px #f97316', color: 'transparent' }}>FOR SALE</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            {['all', 'new', 'pre-owned'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === f
                    ? 'bg-orange-500 text-black'
                    : 'border border-zinc-700 text-gray-400 hover:border-orange-500 hover:text-orange-400'
                }`}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-zinc-900/80 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img src={item.gallery[0]} alt={item.model} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
                      item.badge.type === 'new-arrival' ? 'bg-teal-500 text-black' :
                      item.badge.type === 'certified' ? 'bg-orange-500 text-black' :
                      'bg-red-500 text-white'
                    }`}>
                      {item.badge.type === 'certified' && <Check className="w-3 h-3 inline mr-1" />}
                      {item.badge.label}
                    </span>
                  )}
                </div>

                {/* Condition badge */}
                <div className="absolute top-3 right-3">
                  <span className={`text-[10px] font-bold px-2 py-1 uppercase tracking-wider ${
                    item.condition === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-gray-500/20 text-gray-300 border border-gray-500/40'
                  }`}>
                    {item.condition}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{item.type}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500 text-xs">{item.year}</span>
                </div>

                <h3 className="font-barlow text-xl font-semibold text-white mb-3">{item.make} {item.model}</h3>

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

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/sales" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 transition-all">
            View Full Inventory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}