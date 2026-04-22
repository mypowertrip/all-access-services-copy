import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, ArrowRight, Trash2 } from 'lucide-react';

export default function QuoteCart({ items, onRemove, onCheckout }) {
  if (items.length === 0) return null;

  const subtotal = items.reduce((sum, item) => sum + item.dailyRate, 0);
  const estimatedMonthly = items.reduce((sum, item) => sum + item.monthlyRate, 0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-black/80 border-t border-zinc-800 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between gap-6">
            {/* Cart Info */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/20 border border-orange-500/40">
                <ShoppingCart className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Active Quote</p>
                <p className="text-lg font-bold text-white">
                  {items.length} item{items.length !== 1 ? 's' : ''} selected
                </p>
              </div>
            </div>

            {/* Item thumbnails */}
            <div className="flex items-center gap-2">
              {items.slice(0, 3).map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center h-8 px-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-semibold text-gray-300"
                >
                  {item.name.split(' ').pop()}
                </div>
              ))}
              {items.length > 3 && (
                <div className="flex items-center justify-center h-8 px-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-semibold text-gray-400">
                  +{items.length - 3}
                </div>
              )}
            </div>

            {/* Pricing & Actions */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">Est. Daily Rate</p>
                <p className="text-2xl font-black text-orange-400">${subtotal}</p>
                <p className="text-xs text-gray-500 mt-1">Monthly: ${estimatedMonthly}</p>
              </div>
              <a
                href={`tel:8887775990`}
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold text-sm uppercase tracking-widest rounded-lg transition-all shadow-lg shadow-orange-500/20"
              >
                Call to Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Expandable items list */}
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <details className="group cursor-pointer">
              <summary className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors">
                <span className="font-semibold uppercase tracking-wider">View Items</span>
                <span className="text-gray-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {items.map((item) => (
                  <div key={item.id} className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3 group/item">
                    <p className="text-xs font-bold text-white truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-500 mt-1">{item.height} ft • {item.power}</p>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="mt-2 w-full flex items-center justify-center gap-1 py-1.5 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-all"
                    >
                      <Trash2 className="w-3 h-3" />
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}