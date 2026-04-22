import { motion } from 'framer-motion';
import { Download, Plus, Zap, Gauge, BarChart3 } from 'lucide-react';

export default function ModelCard({ model, onAddToQuote, inQuote, onCompare, inComparison, onRequestQuote }) {
  const isPowerElectric = model.power === 'Electric';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-300 group"
    >
      {/* Image Container */}
      <div 
        className="relative w-full aspect-[4/3] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500"
        style={!model.imageUrl ? {
          background: (() => {
            const gradients = {
              'scissor-lifts': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              'boom-lifts': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              'articulating-booms': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              'knuckle-booms': 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
              'telehandlers': 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
              'forklifts': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            };
            return gradients[model.category] || 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
          })()
        } : { backgroundColor: '#27272a' }}
      >
        {model.imageUrl && (
          <img
            src={model.imageUrl}
            alt={model.name}
            className="w-full h-full object-contain p-4"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <p className="text-center text-white font-bold text-xl px-4">{model.name}</p>
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