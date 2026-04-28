import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ShoppingCart, ArrowRight } from 'lucide-react';
import SiteNav from '../components/layout/SiteNav';
import SiteFooter from '../components/layout/SiteFooter';
import EquipmentCard from '../components/equipment/EquipmentCard';
import { equipment, categories, fuelBadge } from '../lib/equipmentData';

const fuelTypes = ['All', 'Electric', 'Diesel', 'Propane'];

export default function Equipment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [cat, setCat] = useState(searchParams.get('cat') || 'all');
  const [fuel, setFuel] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState('default');

  const filtered = useMemo(() => {
    let items = equipment;
    if (cat !== 'all') items = items.filter(e => e.cat === cat);
    if (fuel !== 'All') items = items.filter(e => e.fuel === fuel);
    if (search) items = items.filter(e =>
      e.model.toLowerCase().includes(search.toLowerCase()) ||
      e.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === 'price-asc') items = [...items].sort((a, b) => a.dailyRate - b.dailyRate);
    if (sort === 'price-desc') items = [...items].sort((a, b) => b.dailyRate - a.dailyRate);
    if (sort === 'height') items = [...items].sort((a, b) => parseInt(b.height) - parseInt(a.height));
    return items;
  }, [cat, fuel, search, sort]);

  const addToCart = (item) => {
    setCart(prev => prev.find(c => c.id === item.id) ? prev : [...prev, item]);
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id));

  const allCats = [{ id: 'all', label: 'All Equipment' }, ...categories];

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      <SiteNav cartCount={cart.length} />

      {/* Page header */}
      <div className="bg-slate-950 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange mb-2">Full Catalog</p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Browse Equipment</h1>
            <p className="mt-2 text-slate-400 text-sm">
              {equipment.filter(e => e.available).length} units available for immediate rental
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── SIDEBAR FILTERS ── */}
          <aside className="lg:w-60 shrink-0 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search models..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange/30 transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Category</div>
              <div className="space-y-1">
                {allCats.map(c => (
                  <button key={c.id} onClick={() => setCat(c.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      cat === c.id
                        ? 'bg-orange/10 text-orange border border-orange/20'
                        : 'text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent'
                    }`}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fuel */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Fuel Type</div>
              <div className="space-y-1">
                {fuelTypes.map(f => (
                  <button key={f} onClick={() => setFuel(f)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      fuel === f
                        ? 'bg-orange/10 text-orange border border-orange/20'
                        : 'text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent'
                    }`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Sort By</div>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="w-full px-3 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange/30 text-slate-700"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="height">Max Height</option>
              </select>
            </div>
          </aside>

          {/* ── MAIN GRID ── */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5">
              <div className="text-sm text-slate-500">
                Showing <span className="font-bold text-slate-900">{filtered.length}</span> items
              </div>
              {cart.length > 0 && (
                <button
                  onClick={() => navigate('/reserve', { state: { cart } })}
                  className="flex items-center gap-2 px-4 py-2 bg-orange hover:bg-orange/90 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-orange/20">
                  <ShoppingCart className="w-4 h-4" />
                  View Quote ({cart.length}) <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Active filters */}
            {(cat !== 'all' || fuel !== 'All' || search) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {cat !== 'all' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
                    {categories.find(c => c.id === cat)?.label}
                    <button onClick={() => setCat('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {fuel !== 'All' && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
                    {fuel}
                    <button onClick={() => setFuel('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {search && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700">
                    "{search}"
                    <button onClick={() => setSearch('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>
            )}

            <AnimatePresence mode="wait">
              {filtered.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-24 text-center"
                >
                  <div className="text-4xl mb-4">🔍</div>
                  <div className="text-sm font-semibold text-slate-600">No equipment matches your filters.</div>
                  <button onClick={() => { setCat('all'); setFuel('All'); setSearch(''); }}
                    className="mt-4 text-sm text-orange font-semibold hover:underline">
                    Clear all filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={`${cat}-${fuel}-${search}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                  {filtered.map(item => (
                    <EquipmentCard
                      key={item.id}
                      item={item}
                      onAddToCart={addToCart}
                      inCart={cart.some(c => c.id === item.id)}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Floating cart bar */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="flex items-center gap-4 px-5 py-3.5 bg-slate-950 rounded-2xl shadow-2xl border border-slate-800">
              <div className="text-sm text-white font-semibold">
                <span className="text-orange font-black">{cart.length}</span> item{cart.length > 1 ? 's' : ''} in quote
              </div>
              <div className="flex gap-1.5">
                {cart.slice(0, 3).map(c => (
                  <div key={c.id} className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center overflow-hidden border border-slate-700">
                    <img src={c.img} alt={c.model} className="w-6 h-6 object-contain" onError={() => {}} />
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/reserve', { state: { cart } })}
                className="flex items-center gap-2 px-4 py-2 bg-orange hover:bg-orange/90 text-white text-sm font-bold rounded-xl transition-all">
                Build Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}