import { motion } from 'framer-motion';
import { Download, Plus, Zap, Gauge, BarChart3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuoteCart } from './QuoteCartContext';

export default function ModelCard({ model, onAddToQuote, inQuote, onCompare, inComparison, onRequestQuote }) {
  const { isInCart, addToCart, removeFromCart } = useQuoteCart();
  const inCart = isInCart(model.id);
  const isPowerElectric = model.power === 'Electric';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-300 group"
    >
      {/* Clickable image + header area */}
      <Link to={`/rentals/model/${model.id}`} className="block">
      {/* Image Container */}
      <div className="relative w-full h-56 bg-white overflow-hidden">
        <img
          src={model.imageUrl}
          alt={model.name}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement.innerHTML += '<div class="w-full h-full flex items-center justify-center text-gray-300 text-xs font-bold uppercase tracking-wider">No Image</div>';
          }}
        />
        <div className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest text-orange-500 bg-black/80 px-2 py-1 rounded">
          {model.category.replace(/-/g, ' ')}
        </div>
      </div>

      {/* Header with specs badge */}
      <div className="bg-gradient-to-r from-zinc-800/50 to-transparent p-4 border-b border-zinc-800">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-barlow text-lg font-bold text-white">{model.name}</h3>
            <p className="text-xs text-gray-500 mt-1">Model ID: {model.id}</p>
          </div>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider ${
            isPowerElectric ? 'bg-teal-500/20 text-teal-400 border border-teal-500/40' : 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
          }`}>
            {isPowerElectric ? <Zap className="w-3 h-3" /> : <Gauge className="w-3 h-3" />}
            {model.power}
          </div>
        </div>
      </div>

      </Link>

      {/* Specs Grid */}
      <div className="p-4 space-y-3 border-b border-zinc-800">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Height</span>
            <p className="text-sm font-bold text-white mt-0.5">{model.height} ft</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Capacity</span>
            <p className="text-sm font-bold text-white mt-0.5">{model.capacity.toLocaleString()} lbs</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Width</span>
            <p className="text-sm font-bold text-white mt-0.5">{model.width} in</p>
          </div>
          <div>
            <span className="text-xs text-gray-500 uppercase tracking-wider">Weight</span>
            <p className="text-sm font-bold text-white mt-0.5">{(model.weight / 1000).toFixed(1)}k lbs</p>
          </div>
        </div>

        {model.reach > 0 && (
          <div className="pt-2 border-t border-zinc-800">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Horizontal Reach</span>
            <p className="text-sm font-bold text-white mt-0.5">{model.reach} ft</p>
          </div>
        )}
      </div>

      {/* Pricing */}
      <div className="p-4 space-y-2 border-b border-zinc-800">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Pricing</span>
          <a
            href="tel:8887775990"
            className="text-lg font-black text-orange-400 hover:text-orange-300 transition-colors"
          >
            Call for Quote
          </a>
        </div>
        <div className="text-xs text-gray-500">
          <a href="tel:8887775990" className="hover:text-orange-400 transition-colors">
            📞 888-777-5990
          </a>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 space-y-2">
        <button
          onClick={(e) => { e.stopPropagation(); inCart ? removeFromCart(model.id) : addToCart({ id: model.id, name: model.name, category: model.category }); }}
          className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold text-sm uppercase tracking-wider rounded-lg transition-all ${
            inCart
              ? 'bg-teal-500 text-black hover:bg-teal-400'
              : 'border border-orange-500/60 text-orange-400 bg-transparent hover:bg-orange-500/10'
          }`}
        >
          {inCart ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {inCart ? '✓ Added' : '+ Add to Quote'}
        </button>
        <button
          onClick={() => onRequestQuote(model)}
          className="w-full flex items-center justify-center gap-2 py-2.5 font-bold text-sm uppercase tracking-wider rounded-lg transition-all bg-orange-500 text-black hover:bg-orange-400"
        >
          <Plus className="w-4 h-4" />
          Request Quote
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onCompare(model)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border rounded-lg font-semibold text-sm uppercase tracking-wider transition-all ${
              inComparison
                ? 'bg-teal-500/20 text-teal-400 border-teal-500/40 hover:bg-teal-500/30'
                : 'border-zinc-700 text-gray-300 hover:text-white hover:border-teal-500/50'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Compare
          </button>
          <a
            href={model.specSheet}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-700 text-gray-300 hover:text-white hover:border-orange-500/50 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all"
          >
            <Download className="w-4 h-4" />
            Spec Sheet
          </a>
        </div>
      </div>
    </motion.div>
  );
}