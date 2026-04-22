import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ChevronDown } from 'lucide-react';

export default function ComparisonDrawer({ models, isOpen, onClose, onRemoveModel, onClear }) {
  if (!isOpen || models.length === 0) return null;

  const specs = [
    { label: 'Height', key: 'height', unit: ' ft' },
    { label: 'Capacity', key: 'capacity', unit: ' lbs' },
    { label: 'Width', key: 'width', unit: ' ft' },
    { label: 'Weight', key: 'weight', unit: ' lbs' },
    { label: 'Power', key: 'power', unit: '' },
    { label: 'Horizontal Reach', key: 'reach', unit: ' ft' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed right-0 top-0 h-full w-96 bg-gradient-to-b from-zinc-900 to-black border-l border-zinc-800 z-50 flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 shrink-0">
          <h2 className="font-barlow text-lg font-bold text-white">
            Comparison ({models.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {/* Specification Rows */}
          {specs.map((spec) => {
            // Skip reach if all models have 0
            if (spec.key === 'reach' && models.every(m => m.reach === 0)) return null;

            return (
              <div key={spec.key} className="border-b border-zinc-800 pb-4 last:border-b-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  {spec.label}
                </p>
                <div className="grid gap-2">
                  {models.map((model) => (
                    <div
                      key={model.id}
                      className="flex items-start justify-between gap-3 p-3 bg-zinc-800/50 rounded-lg"
                    >
                      <span className="text-xs font-semibold text-gray-300 truncate flex-1">
                        {model.name}
                      </span>
                      <span className="text-sm font-bold text-white whitespace-nowrap">
                        {model[spec.key]?.toLocaleString()}{spec.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-zinc-800 px-4 py-4 space-y-2 shrink-0">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => onRemoveModel(model.id)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-800/50 hover:bg-red-500/10 text-gray-300 hover:text-red-400 text-xs font-semibold transition-colors"
            >
              <span className="truncate">{model.name}</span>
              <X className="w-4 h-4" />
            </button>
          ))}
          <button
            onClick={onClear}
            className="w-full flex items-center justify-center gap-2 py-2.5 mt-3 text-xs font-bold text-gray-400 hover:text-red-400 uppercase tracking-wider transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </motion.div>

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />
    </AnimatePresence>
  );
}