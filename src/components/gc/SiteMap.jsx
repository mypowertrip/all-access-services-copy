import React from 'react';

const units = [
  { id: '07', x: 198, y: 64, color: '#28C840', status: 'active', label: 'U-07' },
  { id: '09', x: 226, y: 88, color: '#28C840', status: 'active', label: 'U-09' },
  { id: '12', x: 188, y: 95, color: '#00BBC9', status: 'charging', label: 'U-12' },
  { id: '04', x: 238, y: 68, color: '#EF6410', status: 'idle', label: 'U-04' },
  { id: '08', x: 160, y: 75, color: '#EF4444', status: 'maintenance', label: 'U-08' },
];

export default function SiteMap({ className = '' }) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`} style={{ background: '#0d1f16' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="map-vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#0a1a14" stopOpacity="0" />
            <stop offset="100%" stopColor="#020f08" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="400" height="200" fill="#0d1f16" />
        {/* Grid */}
        <g stroke="#1a3226" strokeWidth="0.8" fill="none">
          {[18,36,58,80,102,124,144,168,186].map(y => <line key={y} x1="0" y1={y} x2="400" y2={y} />)}
          {[28,60,96,136,180,228,278,330,374].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" />)}
        </g>
        <g stroke="#1f4030" strokeWidth="1.5" fill="none">
          <line x1="0" y1="58" x2="400" y2="58" />
          <line x1="0" y1="102" x2="400" y2="102" />
          <line x1="96" y1="0" x2="96" y2="200" />
          <line x1="228" y1="0" x2="228" y2="200" />
        </g>
        {/* Highway */}
        <g stroke="#173d2c" strokeWidth="3" fill="none" strokeLinecap="round">
          <line x1="0" y1="170" x2="400" y2="40" />
          <line x1="0" y1="178" x2="400" y2="48" />
        </g>
        {/* Blocks */}
        <g fill="#0f2219" opacity="0.8">
          <rect x="29" y="37" width="30" height="20" />
          <rect x="97" y="59" width="38" height="20" />
          <rect x="181" y="37" width="45" height="20" />
          <rect x="279" y="59" width="48" height="20" />
          <rect x="61" y="103" width="34" height="20" />
          <rect x="137" y="103" width="40" height="20" />
          <rect x="229" y="103" width="48" height="20" />
          <rect x="331" y="37" width="42" height="20" />
        </g>
        <rect width="400" height="200" fill="url(#map-vignette)" />
        {/* Site zone */}
        <circle cx="205" cy="80" r="55" fill="none" stroke="#00BBC9" strokeWidth="1" strokeDasharray="5 4" opacity="0.35" />
        <text x="210" y="30" fontFamily="monospace" fontSize="8" fill="#00BBC9" opacity="0.5" textAnchor="middle" letterSpacing="0.1em">SITE ALPHA — ACTIVE</text>
        {/* Unit pins */}
        <g filter="url(#glow)">
          {units.map(u => (
            <g key={u.id}>
              <circle cx={u.x} cy={u.y} r="4" fill={u.color} opacity="0.9" />
              <circle cx={u.x} cy={u.y} r="8" fill={u.color} opacity="0.12" />
            </g>
          ))}
        </g>
        {/* Labels */}
        {units.map(u => (
          <g key={u.id + '-label'}>
            <rect x={u.x + 6} y={u.y - 7} width="28" height="12" rx="2" fill="rgba(0,0,0,0.8)" />
            <text x={u.x + 20} y={u.y + 2} fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,0.85)" textAnchor="middle" letterSpacing="0.04em">{u.label}</text>
          </g>
        ))}
        {/* Legend */}
        <g transform="translate(10,178)">
          {[['#28C840','Active'],['#EF6410','Idle'],['#00BBC9','Charging'],['#EF4444','Alert']].map(([c,l],i) => (
            <g key={l} transform={`translate(${i*90},0)`}>
              <circle cx="5" cy="5" r="3" fill={c} />
              <text x="12" y="9" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,0.45)" letterSpacing="0.04em">{l}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}