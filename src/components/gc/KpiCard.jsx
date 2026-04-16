import React from 'react';

const accentMap = {
  green:  { val: 'text-gc-green',  border: 'border-gc-green/20',  bg: 'bg-gc-green/5' },
  red:    { val: 'text-gc-red',    border: 'border-gc-red/20',    bg: 'bg-gc-red/5' },
  orange: { val: 'text-gc-orange', border: 'border-gc-orange/20', bg: 'bg-gc-orange/5' },
  teal:   { val: 'text-gc-teal',   border: 'border-gc-teal/20',   bg: 'bg-gc-teal/5' },
  yellow: { val: 'text-gc-yellow', border: 'border-gc-yellow/20', bg: 'bg-gc-yellow/5' },
};

export default function KpiCard({ label, value, sub, trend, trendDir, color = 'green' }) {
  const c = accentMap[color];
  return (
    <div className={`rounded-lg border ${c.border} ${c.bg} p-5 flex flex-col gap-1.5`}>
      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className={`text-3xl font-black tracking-tight ${c.val}`}>{value}</div>
      {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
      {trend && (
        <div className={`text-[11px] font-semibold mt-1 ${trendDir === 'up' ? 'text-gc-green' : trendDir === 'down' ? 'text-gc-red' : 'text-muted-foreground'}`}>
          {trendDir === 'up' ? '▲' : trendDir === 'down' ? '▼' : '—'} {trend}
        </div>
      )}
    </div>
  );
}