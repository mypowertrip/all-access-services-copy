import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { powerSources, heightRanges, widthRanges } from '../../lib/rentalInventory';

export default function RentalFilters({ onFiltersChange }) {
  const [expandedSections, setExpandedSections] = useState({
    height: true,
    power: true,
    width: true,
  });
  const [filters, setFilters] = useState({
    heightRange: null,
    power: null,
    widthRange: null,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: filters[key] === value ? null : value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({ heightRange: null, power: null, widthRange: null });
    onFiltersChange({ heightRange: null, power: null, widthRange: null });
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== null);

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-barlow text-lg font-bold text-white">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-xs text-orange-400 hover:text-orange-300 font-semibold uppercase tracking-wider flex items-center gap-1"
          >
            <X className="w-3 h-3" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Reach Height */}
        <div className="border-b border-zinc-800 pb-4 last:border-b-0">
          <button
            onClick={() => toggleSection('height')}
            className="w-full flex items-center justify-between py-2 text-white hover:text-orange-400 transition-colors"
          >
            <span className="text-sm font-semibold">Reach Height</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.height ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.height && (
            <div className="space-y-2 mt-3">
              {heightRanges.map(range => (
                <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.heightRange === range.label}
                    onChange={() => handleFilterChange('heightRange', range.label)}
                    className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 accent-orange-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 hover:text-white">{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Power Source */}
        <div className="border-b border-zinc-800 pb-4 last:border-b-0">
          <button
            onClick={() => toggleSection('power')}
            className="w-full flex items-center justify-between py-2 text-white hover:text-orange-400 transition-colors"
          >
            <span className="text-sm font-semibold">Power Source</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.power ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.power && (
            <div className="space-y-2 mt-3">
              {powerSources.map(source => (
                <label key={source} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.power === source}
                    onChange={() => handleFilterChange('power', source)}
                    className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 accent-orange-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 hover:text-white">{source}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Width */}
        <div>
          <button
            onClick={() => toggleSection('width')}
            className="w-full flex items-center justify-between py-2 text-white hover:text-orange-400 transition-colors"
          >
            <span className="text-sm font-semibold">Width</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.width ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.width && (
            <div className="space-y-2 mt-3">
              {widthRanges.map(range => (
                <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.widthRange === range.label}
                    onChange={() => handleFilterChange('widthRange', range.label)}
                    className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 accent-orange-500 cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 hover:text-white">{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}