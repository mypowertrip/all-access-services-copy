import React, { useState } from 'react';

const units = [
  { id: '07', pct: { x: 42, y: 38 }, color: '#28C840', status: 'active', label: 'U-07' },
  { id: '09', pct: { x: 58, y: 52 }, color: '#28C840', status: 'active', label: 'U-09' },
  { id: '12', pct: { x: 48, y: 62 }, color: '#00BBC9', status: 'charging', label: 'U-12' },
  { id: '04', pct: { x: 65, y: 40 }, color: '#EF6410', status: 'idle', label: 'U-04' },
  { id: '08', pct: { x: 36, y: 55 }, color: '#EF4444', status: 'maintenance', label: 'U-08' },
];

// Google Maps embed — satellite view, SpaceX Hawthorne / LAX industrial district area
const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1500!2d-118.3281!3d33.9207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus';

export default function SiteMap({ className = '' }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ minHeight: 220 }}>
      {/* Google Maps satellite embed */}
      <iframe
        src={MAP_URL}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Site Alpha Live Map"
      />

      {/* Dark overlay to blend with dashboard theme */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Unit pins overlay */}
      {units.map(u => (
        <div
          key={u.id}
          className="absolute flex flex-col items-center cursor-pointer"
          style={{ left: `${u.pct.x}%`, top: `${u.pct.y}%`, transform: 'translate(-50%, -50%)' }}
          onMouseEnter={() => setHovered(u.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Pulse ring */}
          <span
            className="absolute rounded-full animate-ping"
            style={{ width: 20, height: 20, background: u.color, opacity: 0.25 }}
          />
          {/* Pin dot */}
          <span
            className="relative z-10 rounded-full border-2 border-black shadow-lg"
            style={{ width: 14, height: 14, background: u.color }}
          />
          {/* Label */}
          <span
            className="relative z-10 mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded"
            style={{ background: 'rgba(0,0,0,0.75)', color: u.color, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}
          >
            {u.label}
          </span>

          {/* Tooltip on hover */}
          {hovered === u.id && (
            <div className="absolute bottom-full mb-2 z-20 bg-black/90 border border-white/10 rounded px-2 py-1.5 text-[10px] text-white whitespace-nowrap shadow-xl">
              <div className="font-bold" style={{ color: u.color }}>Unit {u.id}</div>
              <div className="capitalize text-white/60">{u.status}</div>
            </div>
          )}
        </div>
      ))}

      {/* Site label badge */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-black/70 border border-teal-500/40 text-teal-400 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse inline-block" />
        Site Alpha — Live
      </div>

      {/* Legend */}
      <div className="absolute bottom-2 left-2 z-10 flex items-center gap-3 bg-black/70 border border-white/10 px-2.5 py-1.5 rounded text-[9px]">
        {[['#28C840','Active'],['#EF6410','Idle'],['#00BBC9','Charging'],['#EF4444','Alert']].map(([c,l]) => (
          <span key={l} className="flex items-center gap-1">
            <span className="rounded-full w-2 h-2 inline-block" style={{ background: c }} />
            <span className="text-white/50 font-semibold">{l}</span>
          </span>
        ))}
      </div>
    </div>
  );
}