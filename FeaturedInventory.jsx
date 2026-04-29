import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { salesInventory } from '../../lib/salesInventory';

export default function FeaturedInventory() {
  const [filter, setFilter] = useState('all');

  const featured = useMemo(
    () => salesInventory.filter((item) => item.featured === true),
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'all') return featured;
    return featured.filter((i) => i.condition.toLowerCase().includes(filter));
  }, [filter, featured]);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'pre-owned', label: 'Pre-Owned' },
  ];

  return (
    <section id="inventory" className="relative bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-orange-500" />
              <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-orange-400">
                Featured Inventory
              </span>
            </div>
            <h2 className="font-barlow text-4xl md:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
              Equipment{' '}
              <span style={{ WebkitTextStroke: '2px #f97316', color: 'rgba(249,115,22,0.04)' }}>
                For Sale.
              </span>
            </h2>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] transition-all ${
                  filter === f.value
                    ? 'bg-orange-500 text-black'
                    : 'text-zinc-400 hover:text-orange-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center border border-zinc-900 bg-zinc-950/40"
          >
            <Sparkles className="w-6 h-6 text-orange-500 mx-auto mb-3" />
            <p className="text-zinc-400 text-sm mb-1">
              No featured items match this filter.
            </p>
            <button
              onClick={() => setFilter('all')}
              className="text-orange-400 hover:text-orange-300 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Show All
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to="/sales"
                  className="group relative block bg-zinc-900/60 border border-zinc-800 hover:border-orange-500/60 hover:-translate-y-1 overflow-hidden transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <img
                      src={item.gallery?.[0]}
                      alt={`${item.make} ${item.model}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {item.badge && (
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] ${
                            item.badge.type === 'new-arrival'
                              ? 'bg-teal-500 text-black'
                              : item.badge.type === 'certified'
                              ? 'bg-orange-500 text-black'
                              : 'bg-red-500 text-white'
                          }`}
                        >
                          {item.badge.type === 'certified' && <Check className="w-2.5 h-2.5" />}
                          {item.badge.label}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span
                        className={`inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] border ${
                          item.condition === 'New'
                            ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
                            : 'bg-zinc-800/80 text-zinc-300 border-zinc-700'
                        }`}
                      >
                        {item.condition}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-[10px] uppercase tracking-[0.2em]">
                      <span className="text-teal-400 font-semibold">{item.type}</span>
                      <span className="text-zinc-700">·</span>
                      <span className="text-zinc-500 font-numeric">{item.year}</span>
                    </div>

                    <h3 className="font-barlow text-xl font-bold text-white tracking-tight mb-4 line-clamp-1">
                      {item.make} {item.model}
                    </h3>

                    <div className="flex items-end justify-between">
                      <div>
                        {item.originalPrice && (
                          <div className="font-numeric text-zinc-600 line-through text-xs">
                            ${item.originalPrice.toLocaleString()}
                          </div>
                        )}
                        <div className="font-numeric text-2xl font-bold text-orange-400">
                          ${item.price.toLocaleString()}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-700 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/sales"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all"
          >
            View Full Inventory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}