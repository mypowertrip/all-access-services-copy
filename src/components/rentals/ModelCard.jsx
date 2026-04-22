import { motion } from 'framer-motion';
import { Download, Plus, Zap, Gauge, Ruler, Weight } from 'lucide-react';

export default function ModelCard({ model, onAddToQuote, inQuote }) {
  const isPowerElectric = model.power === 'Electric';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/40 overflow-hidden transition-all duration-300 group"
    >
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
            <p className="text-sm font-bold text-white mt-0.5">{model.width} ft</p>
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
        <div className="flex justify-between items-start">
          <span className="text-xs text-gray-500 uppercase tracking-wider">Daily Rate</span>
          <span className="text-lg font-black text-orange-400">${model.dailyRate}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500">Weekly</span>
          <span className="text-gray-300">${model.weeklyRate}</span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500">Monthly</span>
          <span className="text-gray-300">${model.monthlyRate}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 space-y-2">
        <button
          onClick={() => onAddToQuote(model)}
          className={`w-full flex items-center justify-center gap-2 py-2.5 font-bold text-sm uppercase tracking-wider rounded-lg transition-all ${
            inQuote
              ? 'bg-green-600/20 text-green-400 border border-green-500/40 hover:bg-green-600/30'
              : 'bg-orange-500 text-black hover:bg-orange-400'
          }`}
        >
          <Plus className="w-4 h-4" />
          {inQuote ? 'In Quote' : 'Add to Quote'}
        </button>
        <a
          href={model.specSheet}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-700 text-gray-300 hover:text-white hover:border-orange-500/50 font-semibold text-sm uppercase tracking-wider rounded-lg transition-all"
        >
          <Download className="w-4 h-4" />
          Spec Sheet
        </a>
      </div>
    </motion.div>
  );
}