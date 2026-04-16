import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { fuelBadge } from '../../lib/equipmentData';

const badgeColors = {
  'Popular': 'bg-orange/10 text-orange border-orange/20',
  'Best Value': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Indoor Safe': 'bg-blue-50 text-blue-700 border-blue-200',
  'High Reach': 'bg-violet-50 text-violet-700 border-violet-200',
  'Extreme Height': 'bg-rose-50 text-rose-700 border-rose-200',
  'Rough Terrain': 'bg-amber-50 text-amber-700 border-amber-200',
  'Heavy Lift': 'bg-slate-100 text-slate-700 border-slate-200',
  'Heavy Duty': 'bg-slate-100 text-slate-700 border-slate-200',
  'Narrow Aisle': 'bg-indigo-50 text-indigo-700 border-indigo-200',
};

export default function EquipmentCard({ item, onAddToCart, inCart }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white hover:border-orange/20 hover:shadow-xl hover:shadow-orange/5 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center overflow-hidden">
        {item.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full border ${badgeColors[item.badge] || 'bg-slate-100 text-slate-600'}`}>
            {item.badge}
          </span>
        )}
        {!item.available && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px] flex items-center justify-center z-10">
            <span className="text-xs font-bold text-slate-500 border border-slate-200 bg-white px-3 py-1.5 rounded-full">
              Currently Unavailable
            </span>
          </div>
        )}
        <img
          src={item.img}
          alt={item.model}
          className="h-36 object-contain group-hover:scale-105 transition-transform duration-500"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'; e.target.className = 'w-full h-full object-cover opacity-20'; }}
        />
        <span className={`absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded border ${fuelBadge[item.fuel]}`}>
          {item.fuel}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.model}</div>
        <div className="text-sm font-bold text-slate-900 mb-3">{item.name}</div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[['Height', item.height], ['Reach', item.reach], ['Cap.', item.capacity]].map(([l, v]) => (
            <div key={l} className="bg-slate-50 rounded-lg p-2 text-center">
              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{l}</div>
              <div className="text-xs font-semibold text-slate-700 mt-0.5 leading-tight">{v}</div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="flex items-end justify-between mb-4 mt-auto">
          <div>
            <div className="text-[10px] text-slate-400 font-medium">Starting from</div>
            <div className="text-xl font-black text-slate-900">${item.dailyRate}<span className="text-xs font-medium text-slate-400">/day</span></div>
          </div>
          <div className="text-right text-[11px] text-slate-400 space-y-0.5">
            <div>${item.weeklyRate}<span className="text-[10px]">/wk</span></div>
            <div>${item.monthlyRate.toLocaleString()}<span className="text-[10px]">/mo</span></div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => item.available && onAddToCart(item)}
          disabled={!item.available}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
            inCart
              ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-200 cursor-default'
              : item.available
                ? 'bg-orange hover:bg-orange/90 text-white shadow-md shadow-orange/20 active:scale-95'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          {inCart ? <><Check className="w-4 h-4" /> Added to Quote</> : <><ShoppingCart className="w-4 h-4" /> Add to Quote</>}
        </button>
      </div>
    </div>
  );
}